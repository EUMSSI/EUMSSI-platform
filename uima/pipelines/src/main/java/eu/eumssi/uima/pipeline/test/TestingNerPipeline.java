package eu.eumssi.uima.pipeline.test;


import static org.apache.uima.fit.factory.AnalysisEngineFactory.createEngineDescription;
import static org.apache.uima.fit.factory.CollectionReaderFactory.createReaderDescription;
import static org.apache.uima.fit.util.JCasUtil.select;

import java.util.logging.Logger;

import org.apache.uima.analysis_engine.AnalysisEngineDescription;
import org.apache.uima.collection.CollectionReaderDescription;
import org.apache.uima.fit.pipeline.JCasIterable;
import org.apache.uima.jcas.JCas;
import org.dbpedia.spotlight.uima.SpotlightAnnotator;
import org.dbpedia.spotlight.uima.types.DBpediaResource;

import com.iai.uima.analysis_component.KeyPhraseAnnotator;

import de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity;
import de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token;
import de.tudarmstadt.ukp.dkpro.core.io.text.TextReader;
import de.tudarmstadt.ukp.dkpro.core.io.xmi.XmiWriter;
import de.tudarmstadt.ukp.dkpro.core.languagetool.LanguageToolSegmenter;
import de.tudarmstadt.ukp.dkpro.core.stanfordnlp.StanfordNamedEntityRecognizer;


/**
 * In this pipeline, we use dbpedia-spotlight to annotate entities.
 * It is configured to use the public endpoint, but should preferably point to a local one.
 */
public class TestingNerPipeline
{
	public static void main(String[] args) throws Exception
	{

		Logger logger = Logger.getLogger(TestingNerPipeline.class.toString());

		String mongoDb = "eumssi_db";
		String mongoCollection = "content_items";
		String mongoUri = "mongodb://localhost"; // this is the default, so not needed
		
		CollectionReaderDescription reader = createReaderDescription(TextReader.class,
                TextReader.PARAM_SOURCE_LOCATION, "input/encoding.txt", 
                TextReader.PARAM_LANGUAGE, "en");
		
//		CollectionReaderDescription reader = createReaderDescription(BaseCasReader.class,
//				BaseCasReader.PARAM_MAXITEMS,10,
//				BaseCasReader.PARAM_MONGODB, mongoDb,
//				BaseCasReader.PARAM_MONGOCOLLECTION, mongoCollection,
//				BaseCasReader.PARAM_FIELDS, "meta.source.headline,meta.source.title,meta.source.description,meta.source.text",
//				//BaseCasReader.PARAM_QUERY,"{'meta.source.inLanguage':'en','processing.available_data': {'$ne': 'ner'}}",
//				BaseCasReader.PARAM_QUERY,"{'meta.source.inLanguage':'en'}",
//				BaseCasReader.PARAM_LANG,"{'$literal':'en'}"
//				);

		AnalysisEngineDescription segmenter = createEngineDescription(LanguageToolSegmenter.class);

		AnalysisEngineDescription dbpedia = createEngineDescription(SpotlightAnnotator.class,
				//SpotlightAnnotator.PARAM_ENDPOINT, "http://localhost:2222/rest",
				//SpotlightAnnotator.PARAM_ENDPOINT, "http://spotlight.dbpedia.org/rest",
				SpotlightAnnotator.PARAM_ENDPOINT, "http://spotlight.sztaki.hu:2222/rest",
				//SpotlightAnnotator.PARAM_ENDPOINT, "http://de.dbpedia.org/spotlight/rest",
				SpotlightAnnotator.PARAM_CONFIDENCE, 0.0f,
				SpotlightAnnotator.PARAM_ALL_CANDIDATES, true);

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
				ner,
				xmiWriter
				);

		// Run and show results in console
		for (JCas jcas : pipeline) {
			//SourceMeta meta = selectSingle(jcas, SourceMeta.class);
			//System.out.println("\n\n=========\n\n" + meta.getDocumentId() + ": " + jcas.getDocumentText() + "\n");

			for (Token token : select(jcas, Token.class)) {
				System.out.printf("  %-16s %n", 
						token.getCoveredText());
			}
			
			System.out.printf("%n  -- DBpedia --%n");
			for (DBpediaResource resource : select(jcas, DBpediaResource.class)) {
				System.out.printf("  %-16s\t%-10s\t%-10s%n", 
						resource.getCoveredText(),
						resource.getUri(),
						resource.getTypes());
			}

			for (NamedEntity entity : select(jcas, NamedEntity.class)) {
				System.out.printf("  %-16s %-10s %n", 
						entity.getCoveredText(),
						entity.getValue());
			}
		}
	}


}
