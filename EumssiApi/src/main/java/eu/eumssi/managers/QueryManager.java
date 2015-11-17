package eu.eumssi.managers;

import java.io.IOException;
import java.io.InputStream;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.UUID;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.bson.BSONObject;

import com.mongodb.BasicDBList;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.WriteResult;
import com.mongodb.util.JSON;

import eu.eumssi.api.json.JSONMeta.StatusType;


/**
 * This class represents the QueryManager component which interfaces with the backend MongoDB.
 * 
 * @author jens.grivolla
 *
 */
public class QueryManager {

	/**
	 * Logger for this class and subclasses.
	 */
	protected final Log log = LogFactory.getLog(getClass());

	/**
	 * Properties files
	 */
	private static final String PROPERTIES_FILE = "/eu/eumssi/properties/api.properties";
	private static final String QUEUE_DEFINITION_FILE = "/eu/eumssi/properties/queues.properties";

	/**
	 * Singleton instance of QueryManager.
	 */
	private static QueryManager instance;

	/**
	 * Configuration properties.
	 */
	private Properties properties;
	private Properties queues;

	private String mongoURI;

	private String apiKey;

	private MongoClient m;
	private DB db;
	private DBCollection collection;
	private DBCollection feedbackCollection;


	/**
	 * Return a unique instance of QueryManager (Singleton pattern).
	 * @return a unique instance of QueryManager
	 * @throws UnknownHostException 
	 * @throws EumssiException 
	 */
	public static QueryManager getInstance() throws UnknownHostException, EumssiException {
		if (instance == null) {
			instance = new QueryManager();
		}
		return instance;
	}

	/**
	 * Private constructor (Singleton pattern)
	 * @throws UnknownHostException 
	 * @throws EumssiException 
	 */
	private QueryManager() throws EumssiException{
		String dbName, collectionName, feedbackCollectionName;
		try {
			loadProperties();
			this.mongoURI = this.properties.getProperty("mongoURI");
			dbName = this.properties.getProperty("mongoDB");
			collectionName = this.properties.getProperty("mongoCollection");
			feedbackCollectionName = this.properties.getProperty("feedbackMongoCollection");
			this.apiKey = this.properties.getProperty("apiKey");
		} catch (Exception e) {
			log.error("Error loading properties file", e);
			throw new EumssiException(StatusType.ERROR);
		}
		try {
			MongoClientURI mongoUri = new MongoClientURI(this.mongoURI);
			this.m = new MongoClient(mongoUri);
			//m.getDatabaseNames();// to test connection
			this.db = m.getDB(dbName);
			log.info("connected to DB "+this.db.getName());
			this.collection = db.getCollection(collectionName);
			log.info("connected to Collection "+this.collection.getName());
			this.feedbackCollection = db.getCollection(feedbackCollectionName);
			log.info("connected to Collection "+this.feedbackCollection.getName());
			// create needed indexes
			this.collection.createIndex(new BasicDBObject("processing.available_data",1));
			this.collection.createIndex(new BasicDBObject("meta.source.inLanguage",1));
			this.collection.createIndex(new BasicDBObject("source",1));
			for (Object queueId : this.queues.keySet()) {
				this.collection.createIndex(new BasicDBObject(String.format("processing.queues.%s",(String)queueId),1));
			}
		} catch (UnknownHostException e) {
			log.error("Error setting up DB connection", e);
			throw new EumssiException(StatusType.ERROR_DB_CONNECT);
		}
	}

	/**
	 * Load the QueryManager properties file.
	 * 
	 * @return
	 * @throws IOException
	 */
	private boolean loadProperties() throws IOException
	{
		this.properties = new Properties();
		InputStream in = this.getClass().getResourceAsStream(PROPERTIES_FILE);
		this.properties.load(in);
		in.close();		
		this.queues = new Properties();
		in = this.getClass().getResourceAsStream(QUEUE_DEFINITION_FILE);
		this.queues.load(in);
		in.close();
		return true;		
	}

	/**
	 * Check the provided API key for validity
	 * @param key the API key provided by the client
	 * @return True if the provided key is valid
	 */
	public boolean isKeyValid(String key) {
		return (key.equals(this.apiKey));
	}

	/**
	 * Retrieve a list of pending content items to process
	 * 
	 * @param queueId ID of processing queue
	 * @param markItems 
	 * @return list of pending content items to process
	 * @throws EumssiException with a specific StatusType, if one of the following scenarios occurs:
	 *  <br>
	 *  <br><code>StatusType.ERROR_INVALID_QUEUE_ID</code> (Error 102) if the specified queue id does not correspond to a valid queue.
	 *  <br>
	 *	<br><code>StatusType.ERROR_DB_CONNECT</code> (Error 400) if an unhandled error occurred during acquisition of the database connection.
	 *  <br><code>StatusType.ERROR_DB_QUERY</code> (Error 401) if an unhandled error occurred during the query execution.
	 *  <br><code>StatusType.ERROR_UNKNOWN</code> (Error 999) if an unhandled exception is thrown.
	 */
	public List<String> getQueuePending(String queueId, Integer maxItems, Boolean markItems, String filters) throws EumssiException {
		DBObject query = null;
		if (this.queues.containsKey(queueId)) {
			query = (DBObject) JSON.parse(this.queues.getProperty(queueId));
			// check that item is not yet (being) processed
			String testPending = String.format("{\"processing.queues.%s\":{\"$nin\":[\"in_process\",\"processed\"]}}",queueId);
			query.putAll((BSONObject) JSON.parse(testPending));
			query.putAll((BSONObject) JSON.parse(filters)); // apply user-provided filters
		} else {
			throw new EumssiException(StatusType.ERROR_INVALID_QUEUE_ID);
		}
		log.info("performing query "+query.toString()+" on collection "+this.collection.toString());
		DBCursor resCursor = this.collection.find(query, new BasicDBObject("_id", 1)).limit(maxItems);
		List<String> resList = new ArrayList<String>();
		for (DBObject res : resCursor) {
			resList.add(res.get("_id").toString());
			if (markItems) {
				collection.update(new BasicDBObject("_id", res.get("_id")), new BasicDBObject("$set", new BasicDBObject("processing.queues."+queueId,"in_process")));
			}
		}
		return resList;
	}

	/**
	 * Reset list of pending content items to process
	 * 
	 * @param queueId ID of processing queue
	 * @param inProcessOnly only reset items marked as "in_process"
	 * @return number of reset items
	 * @throws EumssiException with a specific StatusType, if one of the following scenarios occurs:
	 *  <br>
	 *  <br><code>StatusType.ERROR_INVALID_QUEUE_ID</code> (Error 102) if the specified queue id does not correspond to a valid queue.
	 *  <br>
	 *	<br><code>StatusType.ERROR_DB_CONNECT</code> (Error 400) if an unhandled error occurred during acquisition of the database connection.
	 *  <br><code>StatusType.ERROR_DB_QUERY</code> (Error 401) if an unhandled error occurred during the query execution.
	 *  <br><code>StatusType.ERROR_UNKNOWN</code> (Error 999) if an unhandled exception is thrown.
	 */
	public Integer resetQueue(String queueId, Boolean inProcessOnly, String filters) throws EumssiException {
		DBObject query = null;
		if (this.queues.containsKey(queueId)) {
			query = (DBObject) JSON.parse(this.queues.getProperty(queueId));
			// check that item is marked as in_process
			String testReset = String.format("{\"processing.queues.%s\":\"in_process\"}", queueId);
			if (!inProcessOnly) { // reset all items, even if already processed
				testReset = String.format("{\"processing.queues.%s\":{\"$in\":[\"in_process\",\"processed\"]}}", queueId);
			}
			query.putAll((BSONObject) JSON.parse(testReset));
			query.putAll((BSONObject) JSON.parse(filters)); // apply user-provided filters
		} else {
			throw new EumssiException(StatusType.ERROR_INVALID_QUEUE_ID);
		}
		try {
			log.info("performing query "+query.toString()+" on collection "+this.collection.toString());
			WriteResult r = collection.update(query, new BasicDBObject("$set", new BasicDBObject("processing.results."+queueId,"pending")));
			Integer updatedCount = r.getN();
			return updatedCount;}
		catch (Exception e) {
			// TODO: better handle possible failures
			throw new EumssiException(StatusType.ERROR_UNKNOWN);
		}
	}


	/**
	 * TODO: document method 
	 * @param itemId
	 * @param fields
	 * @return
	 * @throws EumssiException
	 */
	public Map<String, Object> getItemMeta(String itemId, String[] fields) throws EumssiException {
		DBObject query = new BasicDBObject("_id", UUID.fromString(itemId));
		log.info("performing query "+query.toString()+" on collection "+this.collection.toString());
		DBObject res = this.collection.findOne(query); // TODO should only retrieve required fields from DB
		if (res == null) {
			throw new EumssiException(StatusType.ERROR_INVALID_ITEM_ID);			
		}
		Map<String, Object> itemMeta = new HashMap<String,Object>();
		for (String field : fields) {
			try {
				//DBObject fieldV = (DBObject)res.get("meta");
				Object value = res;
				for (String f : field.split("\\.")) {
					value = f.equals("*")? value : ((DBObject) value).get(f);
				}
				itemMeta.put(field, value);
			} catch (Exception e) { //TODO: better exception handling
				log.error(String.format("couldn't get field %s from document %s", field, itemId), e);
			}
		}
		log.info(itemMeta);
		return itemMeta;
	}

	/**
	 * TODO: document method 
	 * @param queueId
	 * @param data
	 * @return
	 */
	public Integer putResults(String queueId, String data) throws EumssiException {
		Integer updatedCount = 0;
		BasicDBList jsonData = (BasicDBList) JSON.parse(data);
		for (Object item : jsonData) {
			try {
				String itemId = (String) ((DBObject)item).get("content_id");
				WriteResult r = collection.update(new BasicDBObject("_id", UUID.fromString(itemId)), new BasicDBObject("$set", new BasicDBObject("processing.results."+queueId,((DBObject) item).get("result"))));
				collection.update(new BasicDBObject("_id", UUID.fromString(itemId)), new BasicDBObject("$set", new BasicDBObject("processing.queues."+queueId,"processed")));
				updatedCount += r.getN();
			} catch (Exception e) { //TODO: better exception handling
				log.error(String.format("couldn't insert data in document %s", item), e);				
			}
		}
		return updatedCount;
	}

	public void feedbackReport(String state, String comment, String type, String user) throws EumssiException {
		try {
			BasicDBObject report = new BasicDBObject();
			report.append("state", state);
			report.append("comment", comment);
			report.append("reportType", type);
			BasicDBObject feedback = new BasicDBObject();
			feedback.append("report", report);
			feedback.append("type", "report");
			if (user != null) {
				feedback.append("user", user);
			}
			feedbackCollection.insert(feedback);
		} catch (Exception e) {
			// TODO: better exception handling
			throw new EumssiException(StatusType.ERROR_UNKNOWN);
		}
	}

	public void feedbackAction(String user, String item, String type, String detail) throws EumssiException {
		try {
			BasicDBObject feedback = new BasicDBObject();
			feedback.append("user", user);
			feedback.append("item", item);
			feedback.append("type", type);
			feedback.append("detail", detail);
			feedbackCollection.insert(feedback);
		} catch (Exception e) {
			// TODO: better exception handling
			throw new EumssiException(StatusType.ERROR_UNKNOWN);
		}
	}

	/**
	 * Retrieve a list of already processed content items
	 * 
	 * @param queueId ID of processing queue
	 * @param markItems 
	 * @return list of already processed content items
	 * @throws EumssiException with a specific StatusType, if one of the following scenarios occurs:
	 *  <br>
	 *  <br><code>StatusType.ERROR_INVALID_QUEUE_ID</code> (Error 102) if the specified queue id does not correspond to a valid queue.
	 *  <br>
	 *	<br><code>StatusType.ERROR_DB_CONNECT</code> (Error 400) if an unhandled error occurred during acquisition of the database connection.
	 *  <br><code>StatusType.ERROR_DB_QUERY</code> (Error 401) if an unhandled error occurred during the query execution.
	 *  <br><code>StatusType.ERROR_UNKNOWN</code> (Error 999) if an unhandled exception is thrown.
	 */
	public List<String> getQueueProcessed(String queueId, Integer maxItems, Boolean markItems, String filters) throws EumssiException {
		DBObject query = null;
		if (this.queues.containsKey(queueId)) {
			query = (DBObject) JSON.parse(this.queues.getProperty(queueId));
			// check that item is not yet (being) processed
			String testPending = String.format("{\"processing.queues.%s\":\"processed\"}",queueId);
			query.putAll((BSONObject) JSON.parse(testPending));
			query.putAll((BSONObject) JSON.parse(filters)); // apply user-provided filters
		} else {
			throw new EumssiException(StatusType.ERROR_INVALID_QUEUE_ID);
		}
		log.info("performing query "+query.toString()+" on collection "+this.collection.toString());
		DBCursor resCursor = this.collection.find(query, new BasicDBObject("_id", 1)).limit(maxItems);
		List<String> resList = new ArrayList<String>();
		for (DBObject res : resCursor) {
			resList.add(res.get("_id").toString());
			if (markItems) {
				collection.update(new BasicDBObject("_id", res.get("_id")), new BasicDBObject("$set", new BasicDBObject("processing.queues."+queueId,"in_process")));
			}
		}
		return resList;
	}

}
