package eu.eumssi.uima.convert;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.UnknownHostException;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Logger;

import org.apache.uima.UimaContext;
import org.apache.uima.cas.CAS;
import org.apache.uima.cas.CASException;
import org.apache.uima.collection.CollectionException;
import org.apache.uima.fit.component.CasCollectionReader_ImplBase;
import org.apache.uima.fit.descriptor.ConfigurationParameter;
import org.apache.uima.fit.factory.CollectionReaderFactory;
import org.apache.uima.jcas.JCas;
import org.apache.uima.resource.ResourceInitializationException;
import org.apache.uima.util.Progress;
import org.apache.uima.util.ProgressImpl;
import org.xml.sax.SAXException;

import com.mongodb.AggregationOptions;
import com.mongodb.AggregationOutput;
import com.mongodb.BasicDBObject;
import com.mongodb.CommandFailureException;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.util.JSON;

import eu.eumssi.uima.ts.Segment;
import eu.eumssi.uima.ts.SourceMeta;

public class BaseCasReader extends CasCollectionReader_ImplBase{


	private static final Logger logger = Logger.getLogger(BaseCasReader.class.toString());

	public static final String PARAM_MONGOURI = "MongoUri";
	@ConfigurationParameter(name=PARAM_MONGOURI, mandatory=false, defaultValue="mongodb://localhost",
			description="URI of MongoDB service")
	private String mongoUri;
	public static final String PARAM_MONGODB = "MongoDb";
	@ConfigurationParameter(name=PARAM_MONGODB, mandatory=true, defaultValue="",
			description="Name of Mongo DB")
	private String mongoDb;
	public static final String PARAM_MONGOCOLLECTION = "MongoCollection";
	@ConfigurationParameter(name=PARAM_MONGOCOLLECTION, mandatory=true, defaultValue="",
			description="Name of Mongo collection")
	private String mongoCollection;
	public static final String PARAM_QUERY = "Query";
	@ConfigurationParameter(name=PARAM_QUERY, mandatory=false, defaultValue="{}",
			description="the query to select documents")
	private String queryString;
	public static final String PARAM_FIELDS = "TextFields";
	@ConfigurationParameter(name=PARAM_FIELDS, mandatory=false, defaultValue="$text",
			description="comma separated list of text fields")
	private String fieldsString;
	private String[] fieldsList;
	public static final String PARAM_LANG = "Language";
	@ConfigurationParameter(name=PARAM_LANG, mandatory=false, defaultValue="$lang",
			description="document language (as MongoDB expression)")
	private String language;
	public static final String PARAM_MAXITEMS = "MaxItems";
	@ConfigurationParameter(name=PARAM_MAXITEMS, mandatory=false,
			description="maximum number of items to retrieve")
	private Integer maxItems;


	/**
	 * separator to convert dot-notation to flat name when projecting MongoDB fields
	 */
	private static final String SEPARATOR = "###";


	private MongoClient mongoClient;
	private DB db;
	private DBCollection coll;
	private Iterator<DBObject> resCursor;

	// current document
	private int completed;
	// total number of documents
	private long totalDocs;


	/**
	 * Initialize the component. Retrieve the parameters and process them, 
	 * parsing the field descriptions and preparing the structures needed to
	 * process the documents.
	 *
	 * @param context The UIMA context.
	 *
	 * @throws ResourceInitializationException
	 *             If an error occurs with some resource.
	 *
	 */
	public void initialize(UimaContext context) throws ResourceInitializationException {
		System.out.println("MongoCollectionReader: initialize()...");
		logger.info("initialize()...");
		this.completed = 0;
		try {
			MongoClientURI uri = new MongoClientURI(this.mongoUri);
			this.mongoClient = new MongoClient(uri);
		} catch (UnknownHostException e) {
			throw new ResourceInitializationException(e);
		}
		//m.getDatabaseNames();// to test connection
		this.db = mongoClient.getDB(this.mongoDb);
		logger.info("connected to DB "+this.db.getName());
		this.coll = db.getCollection(this.mongoCollection);
		logger.info("connected to Collection "+this.coll.getName());
		DBObject query = (DBObject) JSON.parse(this.queryString);
		this.totalDocs = this.coll.count(query);
		logger.info("performing query "+query.toString()+" on collection "+this.coll.toString());
		// create our pipeline operations, first with the $match
		DBObject match = new BasicDBObject("$match", query);
		DBObject limit = new BasicDBObject("$limit", this.maxItems);
		// build the $projection operation
		DBObject fields = new BasicDBObject();
		//TODO: properly make fields configurable
		fields.put("id", "$_id");
		fields.put("lang", (DBObject) JSON.parse(this.language));
		this.fieldsList = this.fieldsString.split("\\s*,\\s*");
		for (String f: this.fieldsList) {
			fields.put(f.replaceAll("\\.", SEPARATOR), "$"+f);
		}
		System.out.println(fields);
		//fields.put("text", "$meta.source.text");
		DBObject project = new BasicDBObject("$project", fields );
		// Finally the $sort operation
		DBObject sort = new BasicDBObject("$sort", new BasicDBObject("id", 1));

		// run aggregation
		List<DBObject> pipeline = Arrays.asList(match, limit, project, sort);
		try {
			AggregationOptions aggregationOptions = AggregationOptions.builder()
					.batchSize(100)
					.outputMode(AggregationOptions.OutputMode.CURSOR)
					.allowDiskUse(true)
					.build();
			this.resCursor = this.coll.aggregate(pipeline, aggregationOptions);
		} catch (CommandFailureException e) { // MongoDB version <2.6 doesn't support cursors
			logger.warning("Your MongoDB version doesn't seem to support cursors for aggregation pipelines. "
					+ "The result set is therefore limited to 16MB. "
					+ "Use a version >=2.6 to access larger amounts of data.\n"
					+ e.toString());
			AggregationOutput output = coll.aggregate(pipeline);
			this.resCursor = output.results().iterator();
		}
		logger.info("initialize() - Done.");
	}

	public void getNext(CAS aCAS) throws IOException, CollectionException {
		JCas jcas;
		try{
			jcas = aCAS.getJCas();
		}
		catch(CASException e){
			throw new CollectionException(e);
		}
		DBObject doc = this.resCursor.next();
		String documentId = doc.get("id").toString(); // hopefully correct conversion to string
		logger.fine(documentId);

		// create document text from all available text fields
		String documentText = "";
		Integer textIndex = 0;
		String segText = "";
		for (String f: this.fieldsList) {
			try {
				if (textIndex > 0) {
					// separate segments with newlines
					segText = "\n\n\n";
					textIndex += 3;
				} else {
					segText = "";
				}
				segText += doc.get(f.replaceAll("\\.", SEPARATOR)).toString(); // should be a String field anyway
				documentText += segText;
				// create segment annotation
				Segment segAnno = new Segment(jcas);
				segAnno.setBegin(textIndex);
				segAnno.setEnd(documentText.length());
				segAnno.setSourceField(f);
				try {
					segAnno.setName(f.split("\\.")[-1]);
				} catch (Exception e) {
					segAnno.setName(f);
				}
				segAnno.addToIndexes();
				textIndex = documentText.length(); // TODO: check for off-by-one
			} catch (NullPointerException e) {
				// just leave text empty if document doesn't have one
			}
		}


		jcas.setDocumentText(documentText);

		// create metadata annotation
		SourceMeta metadata = new SourceMeta(jcas);
		try {
			String lang = doc.get("lang").toString(); // should be a String field anyway
			jcas.setDocumentLanguage(lang);
			metadata.setLanguage(lang);
		} catch (NullPointerException e) {
			// just leave language empty if document doesn't have one
		}
		if (metadata.getView().getDocumentText() != null) {
			metadata.setBegin(0);
			metadata.setEnd(metadata.getView().getDocumentText().length());
		}
		metadata.setDocumentId(documentId);
		try {
			metadata.setDocumentTitle(doc.get("headline").toString()); // should be a String field anyway
		} catch (NullPointerException e) {
			// just leave text empty if document doesn't have one
		}
		metadata.addToIndexes();

		this.completed++;

	}

	public boolean hasNext() throws IOException, CollectionException {
		return this.resCursor.hasNext();
	}


	public void close() throws IOException {
		this.mongoClient.close();
	}

	public Progress[] getProgress(){
		return new Progress[] { new ProgressImpl(this.completed, (int) this.totalDocs, Progress.ENTITIES) };
	}


	/**
	 * return example descriptor (XML) when calling main method
	 * @param args not used
	 * @throws ResourceInitializationException
	 * @throws FileNotFoundException
	 * @throws SAXException
	 * @throws IOException
	 */
	public static void main(String[] args) throws ResourceInitializationException, FileNotFoundException, SAXException, IOException {
		CollectionReaderFactory.createReaderDescription(BaseCasReader.class).toXML(System.out);
	}

}
