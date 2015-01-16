package eu.eumssi.uima.pipeline;


import static org.apache.uima.fit.factory.AnalysisEngineFactory.createEngineDescription;
import static org.apache.uima.fit.factory.CollectionReaderFactory.createReaderDescription;
import static org.apache.uima.fit.util.JCasUtil.select;
import static org.apache.uima.fit.util.JCasUtil.selectSingle;
import static org.apache.uima.fit.util.JCasUtil.selectCovered;

import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;
import java.util.logging.Logger;

import org.apache.uima.analysis_engine.AnalysisEngineDescription;
import org.apache.uima.collection.CollectionReaderDescription;
import org.apache.uima.fit.pipeline.JCasIterable;
import org.apache.uima.jcas.JCas;
import org.apache.uima.resource.ResourceInitializationException;
import org.dbpedia.spotlight.uima.SpotlightAnnotator;
import org.dbpedia.spotlight.uima.types.JCasResource;

import com.iai.uima.analysis_component.KeyPhraseAnnotator;
import com.mongodb.BasicDBList;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.DBObject;

import de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity;
import de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Sentence;
import de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token;
import de.tudarmstadt.ukp.dkpro.core.io.xmi.XmiWriter;
import de.tudarmstadt.ukp.dkpro.core.languagetool.LanguageToolSegmenter;
import eu.eumssi.uima.convert.BaseCasReader;
import eu.eumssi.uima.ts.SourceMeta;
import de.tudarmstadt.ukp.dkpro.core.stanfordnlp.StanfordNamedEntityRecognizer;


/**
 * In this pipeline, we use dbpedia-spotlight to annotate entities.
 * It is configured to use the public endpoint, but should preferably point to a local one.
 */
public class BasicNerPipeline
{
	public static void main(String[] args) throws Exception
	{

		Logger logger = Logger.getLogger(BasicNerPipeline.class.toString());

		String mongoDb = "eumssi_db";
		String mongoCollection = "content_items";
		String mongoUri = "mongodb://localhost";

		MongoClientURI uri = new MongoClientURI(mongoUri);
		MongoClient mongoClient = new MongoClient(uri);
		DB db = mongoClient.getDB(mongoDb);
		logger.info("connected to DB "+db.getName());
		DBCollection coll = db.getCollection(mongoCollection);
		logger.info("connected to Collection "+coll.getName());


		CollectionReaderDescription reader = createReaderDescription(BaseCasReader.class,
				BaseCasReader.PARAM_MAXITEMS,1000,
				BaseCasReader.PARAM_MONGODB, mongoDb,
				BaseCasReader.PARAM_MONGOCOLLECTION, mongoCollection,
				BaseCasReader.PARAM_FIELDS, "meta.source.headline,meta.source.title,meta.source.description,meta.source.text",
				BaseCasReader.PARAM_QUERY,"{'meta.source.inLanguage':'en','processing.available_data': {'$ne': 'ner'}}",
				BaseCasReader.PARAM_LANG,"{'$literal':'en'}"
				);

		AnalysisEngineDescription segmenter = createEngineDescription(LanguageToolSegmenter.class);

		AnalysisEngineDescription dbpedia = createEngineDescription(SpotlightAnnotator.class,
				SpotlightAnnotator.PARAM_ENDPOINT, "http://localhost:2222/rest/annotate",
				//SpotlightAnnotator.PARAM_ENDPOINT, "http://spotlight.dbpedia.org/rest/annotate",
				//SpotlightAnnotator.PARAM_ENDPOINT, "http://spotlight.sztaki.hu:2222/rest/annotate",
				//SpotlightAnnotator.PARAM_ENDPOINT, "http://de.dbpedia.org/spotlight/rest/annotate/",
				SpotlightAnnotator.PARAM_CONFIDENCE, 0.5f);

		AnalysisEngineDescription key = createEngineDescription(KeyPhraseAnnotator.class,
				KeyPhraseAnnotator.PARAM_LANGUAGE, "en",
				KeyPhraseAnnotator.PARAM_KEYPHRASE_RATIO, 10);

		AnalysisEngineDescription ner = createEngineDescription(StanfordNamedEntityRecognizer.class);

		AnalysisEngineDescription xmiWriter = createEngineDescription(XmiWriter.class,
				XmiWriter.PARAM_TARGET_LOCATION, "output",
				XmiWriter.PARAM_TYPE_SYSTEM_FILE, "output/TypeSystem.xml");

		JCasIterable pipeline = new JCasIterable(
				reader,
				segmenter,
				dbpedia,
				//key,
				ner
				//xmiWriter
				);

		// Run and show results in console
		for (JCas jcas : pipeline) {
			SourceMeta meta = selectSingle(jcas, SourceMeta.class);
			System.out.println("\n\n=========\n\n" + meta.getDocumentId() + ": " + jcas.getDocumentText() + "\n");
			for (Token token : select(jcas, Token.class)) {
//				System.out.printf("  %-16s %n", 
//						token.getCoveredText());
			}
			System.out.printf("%n  -- DBpedia --%n");
			List<Object> dbpediaResources = new BasicDBList();
			for (JCasResource resource : select(jcas, JCasResource.class)) {
//				System.out.printf("  %-16s %-10s %-10s %n", 
//						resource.getCoveredText(),
//						resource.getURI(),
//						resource.getTypes());
				dbpediaResources.add(resource.getURI());
			}
			List<Object> entities = new BasicDBList();
			for (NamedEntity entity : select(jcas, NamedEntity.class)) {
//				System.out.printf("  %-16s %-10s %n", 
//						entity.getCoveredText(),
//						entity.getValue());
				entities.add(entity.getValue() + ":" + entity.getCoveredText());
			}
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
	}
}
