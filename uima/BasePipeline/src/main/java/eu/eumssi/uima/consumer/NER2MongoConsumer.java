/**
 * 
 */
package eu.eumssi.uima.consumer;

import static org.apache.uima.fit.util.JCasUtil.select;
import static org.apache.uima.fit.util.JCasUtil.selectSingle;

import java.io.IOException;
import java.net.UnknownHostException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.logging.Logger;

import org.apache.uima.UimaContext;
import org.apache.uima.analysis_engine.AnalysisEngineProcessException;
import org.apache.uima.cas.CAS;
import org.apache.uima.cas.CASException;
import org.apache.uima.fit.component.CasConsumer_ImplBase;
import org.apache.uima.fit.component.JCasConsumer_ImplBase;
import org.apache.uima.fit.descriptor.ConfigurationParameter;
import org.apache.uima.fit.factory.AnalysisEngineFactory;
import org.apache.uima.fit.factory.CollectionReaderFactory;
import org.apache.uima.jcas.JCas;
import org.apache.uima.resource.ResourceInitializationException;
import org.dbpedia.spotlight.uima.types.DBpediaResource;
import org.dbpedia.spotlight.uima.types.TopDBpediaResource;
import org.xml.sax.SAXException;

import com.mongodb.BasicDBList;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

import de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity;
import eu.eumssi.uima.pipeline.BasicNerPipeline;
import eu.eumssi.uima.reader.BaseCasReader;
import eu.eumssi.uima.ts.SourceMeta;

/**
 * @author jgrivolla
 *
 */
public class NER2MongoConsumer extends JCasConsumer_ImplBase {

	private DBCollection coll;
	private static Logger logger = Logger.getLogger(NER2MongoConsumer.class.toString());;
	
	public static final String PARAM_MONGOURI = "MongoUri";
	@ConfigurationParameter(name=PARAM_MONGOURI, mandatory=true, defaultValue="mongodb://localhost",
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
	private MongoClient mongoClient;
	private DB db;

	
	/**
	 * @return 
	 * @throws UnknownHostException 
	 * @throws ResourceInitializationException 
	 * 
	 */
	public void initialize(UimaContext context) throws ResourceInitializationException {
		super.initialize(context);
		try {
			logger.info("mongoUri: "+this.mongoUri);
			logger.info("monoDb"+this.mongoDb);
			MongoClientURI uri = new MongoClientURI(this.mongoUri);
			this.mongoClient = new MongoClient(uri);
		} catch (UnknownHostException e) {
			throw new ResourceInitializationException(e);
		}
		this.db = mongoClient.getDB(this.mongoDb);
		logger.info("connected to DB "+this.db.getName());
		this.coll = db.getCollection(this.mongoCollection);
		logger.info("connected to Collection "+this.coll.getName());
	}

	/* (non-Javadoc)
	 * @see org.apache.uima.analysis_component.CasAnnotator_ImplBase#process(org.apache.uima.cas.CAS)
	 */
	@Override
	public void process(JCas jCAS) throws AnalysisEngineProcessException {
		SourceMeta meta = selectSingle(jCAS, SourceMeta.class);
		logger.fine("\n\n=========\n\n" + meta.getDocumentId() + ": " + jCAS.getDocumentText() + "\n");
		
		/* get all dbpedia annotations (best candidate)*/
		BasicDBObject dbpediaResources = new BasicDBObject();
		for (DBpediaResource resource : select(jCAS, TopDBpediaResource.class)) {
			logger.fine(String.format("  %-16s\t%-10s\t%-10s%n", 
					resource.getCoveredText(),
					resource.getUri(),
					resource.getTypes()));
			for (String type : convertTypes(resource.getTypes())) {
				addWithType(dbpediaResources, type, resource.getUri());
			}
			addWithType(dbpediaResources, "all", resource.getUri());
		}

		/* get all Stanford NER annotations */
		BasicDBObject entities = new BasicDBObject();
		for (NamedEntity entity : select(jCAS, NamedEntity.class)) {
			logger.fine(String.format("  %-16s %-10s %n", 
					entity.getCoveredText(),
					entity.getValue()));
			addWithType(entities, entity.getValue(), entity.getCoveredText());
			addWithType(entities, "all", entity.getCoveredText());
		}

		/* write to MongoDB */
		BasicDBObject query = new BasicDBObject();
		query.append("_id", UUID.fromString(meta.getDocumentId()));
		BasicDBObject updates = new BasicDBObject();
		updates.append("meta.extracted.text.dbpedia", dbpediaResources);
		updates.append("meta.extracted.text.ner", entities);
		BasicDBObject update = new BasicDBObject();
		update.append("$set", updates);
		update.append("$addToSet", new BasicDBObject("processing.available_data", "ner"));
		try {
			coll.update(query, update);
		} catch (Exception e) {
			logger.severe(e.toString());
			logger.severe(coll.findOne(new BasicDBObject("_id", UUID.fromString(meta.getDocumentId()))).toString());
		}
	}


	/** convert DBpedia resource types to Stanford NER types
	 * @param types space separated list of DBpedia types
	 * @return set of matching NER types
	 */
	private static Set<String> convertTypes(String types) {
		Set<String> typeSet = new HashSet<String>();
		if (types.matches(".*Person.*")) typeSet.add("PERSON");
		if (types.matches(".*Place.*")) typeSet.add("LOCATION");
		if (types.matches(".*Organisation.*")) typeSet.add("ORGANIZATION");
		if (typeSet.isEmpty()) {
			typeSet.add("other");
		}
		return typeSet;
	}

	/** adds entities/resources to the entityMap structure according to the entity type
	 * @param entityMap MongoDB structure to be filled
	 * @param type type of the entity to add
	 * @param entity the entity name/URI
	 */
	@SuppressWarnings("unchecked")
	private static void addWithType(BasicDBObject entityMap, String type, String entity) {
		List<Object> entityList = null;
		// create field for each entity type
		if (entityMap.containsField(type)) {
			entityList = (List<Object>) entityMap.get(type);
		} else {
			entityList = new BasicDBList();
			entityMap.append(type, entityList);
		}
		entityList.add(entity);
	}

	/**
	 * return example descriptor (XML) when calling main method
	 * @param args
	 * @throws IOException 
	 * @throws SAXException 
	 * @throws ResourceInitializationException 
	 */
	public static void main(String[] args) throws ResourceInitializationException, SAXException, IOException {
		AnalysisEngineFactory.createEngineDescription(NER2MongoConsumer.class).toXML(System.out);
	}

}
