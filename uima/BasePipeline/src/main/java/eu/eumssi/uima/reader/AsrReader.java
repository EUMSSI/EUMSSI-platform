package eu.eumssi.uima.reader;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.logging.Logger;

import org.apache.uima.cas.CAS;
import org.apache.uima.cas.CASException;
import org.apache.uima.collection.CollectionException;
import org.apache.uima.fit.descriptor.ConfigurationParameter;
import org.apache.uima.fit.factory.CollectionReaderFactory;
import org.apache.uima.jcas.JCas;
import org.apache.uima.resource.ResourceInitializationException;
import org.xml.sax.SAXException;

import com.mongodb.DBObject;

import eu.eumssi.uima.ts.AsrFiller;
import eu.eumssi.uima.ts.AsrToken;
import eu.eumssi.uima.ts.AsrWord;
import eu.eumssi.uima.ts.Segment;
import eu.eumssi.uima.ts.SourceMeta;

public class AsrReader extends MongoReaderBase {


	private static final Logger logger = Logger.getLogger(AsrReader.class.toString());
	
	// additional parameters

	/**
	 * only mark word tokens (no fillers, etc.)
	 */
	public static final String PARAM_ONLYWORDS = "OnlyWords";
	@ConfigurationParameter(name=PARAM_ONLYWORDS, mandatory=false, defaultValue="false",
			description="only mark word tokens (no fillers, etc.)")
	private Boolean onlyWords = false;


	/* (non-Javadoc)
	 * @see org.apache.uima.collection.CollectionReader#getNext(org.apache.uima.cas.CAS)
	 */
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
		StringBuilder documentText = new StringBuilder();
		Integer segmentIndex = 0;
		Integer tokenIndex = 0;
		for (String f: this.fieldsList) { // just one field normally
			try {
				segmentIndex = documentText.length(); // TODO: check for off-by-one
				if (segmentIndex > 0) {
					// separate segments with newlines
					documentText.append("\n\n\n");
					segmentIndex += 3;
					tokenIndex += 3;
				}
				List<DBObject> tokenList = (List<DBObject>) ((DBObject) doc.get(f.replaceAll("\\.", SEPARATOR))).get("content");
				for (DBObject token : tokenList) {
					tokenIndex = documentText.length();
					String tokenText = token.get("item").toString(); // should be a String field anyway
					int beginTime = (int) Double.parseDouble(token.get("start").toString())*1000;
					int endTime = (int) Double.parseDouble(token.get("end").toString())*1000;
					double conf = Double.parseDouble(token.get("conf").toString());
					String type = token.get("type").toString();
					if (tokenIndex > 0) {
						documentText.append(" ");
						tokenIndex++;
					}
					documentText.append(tokenText);
					AsrToken tokenAnno;
					if (type.equals("word")) {
						tokenAnno = new AsrWord(jcas);
					} else if (onlyWords) { // don't mark fillers or others
						continue;
					} else if (type.equals("filler")) {
						tokenAnno = new AsrFiller(jcas);
					} else {
						tokenAnno = new AsrToken(jcas);
						logger.info(String.format("unknown token type %s in document %s", type, documentId));
					}
					tokenAnno.setBegin(tokenIndex);
					tokenAnno.setEnd(documentText.length());
					tokenAnno.setBeginTime(beginTime);
					tokenAnno.setEndTime(endTime);
					tokenAnno.setConf(conf);
					tokenAnno.setTokenType(type);
					tokenAnno.addToIndexes();
				}
				// create segment annotation
				Segment segAnno = new Segment(jcas);
				segAnno.setBegin(segmentIndex);
				segAnno.setEnd(documentText.length());
				segAnno.setSourceField(f);
				try {
					segAnno.setName(f.split("\\.")[-1]);
				} catch (Exception e) {
					segAnno.setName(f);
				}
				segAnno.addToIndexes();
			} catch (NullPointerException e) {
				// just leave text empty if document doesn't have one
			}
		}

		jcas.setDocumentText(documentText.toString());

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
		metadata.addToIndexes();

		this.completed++;

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
		CollectionReaderFactory.createReaderDescription(AsrReader.class).toXML(System.out);
	}

}
