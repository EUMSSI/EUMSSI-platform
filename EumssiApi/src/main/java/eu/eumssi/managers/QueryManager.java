package eu.eumssi.managers;

import java.io.IOException;
import java.io.InputStream;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;
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
	private DBCollection coll;



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
		String dbName, collectionName;
		try {
			loadProperties();
			this.mongoURI = this.properties.getProperty("mongoURI");
			dbName = this.properties.getProperty("mongoDB");
			collectionName = this.properties.getProperty("mongoCollection");
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
			this.coll = db.getCollection(collectionName);
			log.info("connected to Collection "+this.coll.getName());
			// create needed indexes
			this.coll.createIndex(new BasicDBObject("processing.available_data",1));
			this.coll.createIndex(new BasicDBObject("meta.source.inLanguage",1));
			this.coll.createIndex(new BasicDBObject("source",1));
			for (Object queueId : this.queues.keySet()) {
				this.coll.createIndex(new BasicDBObject(String.format("processing.queues.%s",(String)queueId),1));
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
		log.info("performing query "+query.toString()+" on collection "+this.coll.toString());
		DBCursor resCursor = this.coll.find(query, new BasicDBObject("_id", 1)).limit(maxItems);
		List<String> resList = new ArrayList<String>();
		for (DBObject res : resCursor) {
			resList.add(res.get("_id").toString());
			if (markItems) {
				coll.update(new BasicDBObject("_id", res.get("_id")), new BasicDBObject("$set", new BasicDBObject("processing_state."+queueId,"in_process")));
			}
		}
		return resList;
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
		log.info("performing query "+query.toString()+" on collection "+this.coll.toString());
		DBObject res = this.coll.findOne(query); // TODO should only retrieve required fields from DB
		if (res == null) {
			throw new EumssiException(StatusType.ERROR_INVALID_ITEM_ID);			
		}
		Map<String, Object> itemMeta = new HashMap<String,Object>();
		for (String f : fields) { //TODO: should allow for "meta.extracted" fields
			try {
				if (f.equals("CAS")) {
					itemMeta.put("CAS", (DBObject)((DBObject)res.get("cas")).get("json"));
				} else if (f.equals("*")) {
					itemMeta.put("*", (DBObject)((DBObject)res.get("meta")).get("source"));
				} else {
					itemMeta.put(f, ((DBObject)((DBObject)res.get("meta")).get("source")).get(f));
				}
			} catch (Exception e) { //TODO: better exception handling
				log.error(String.format("couldn't insert field %s in document %s", f, itemId), e);
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
			WriteResult r = coll.update(new BasicDBObject("_id", UUID.fromString(itemId)), new BasicDBObject("$set", new BasicDBObject("processing.results."+queueId,((DBObject) item).get("result"))));
			coll.update(new BasicDBObject("_id", UUID.fromString(itemId)), new BasicDBObject("$set", new BasicDBObject("processing.queues."+queueId,"processed")));
			updatedCount += r.getN();
			} catch (Exception e) { //TODO: better exception handling
				log.error(String.format("couldn't insert data in document %s", item), e);				
			}
		}
		return updatedCount;
	}

}
