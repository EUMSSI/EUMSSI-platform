/**
 * db manager for mongodb 
 * 
 * gtran@l3s.de
 * Nov 28 2014
 */
package de.l3s.eumssi.dao;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;

import de.l3s.eumssi.core.EventDistribution;
import de.l3s.eumssi.core.StoryDistribution;
import de.l3s.lemma.lemma;

import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Set;

import org.apache.commons.lang3.tuple.Pair;



public class MongoDBManager {
	MongoClient mongoClient = null;
	DB db = null;
	String host = "127.0.0.1";
//	String host = "pharos.l3s.uni-hannover.de";
	String dbname = "eumssi_db";
	String collection = "content_items";
	DBCollection coll = null;
	public MongoDBManager() {
		try {
			lemma.init();
			mongoClient = new MongoClient( host , 27017);
			db = mongoClient.getDB(dbname);
			System.out.println("Connection to mongodb at "  + host  + " is successful.");
			coll = getCollection();
		} catch (UnknownHostException e) {
			System.err.println("Connection errors");
			e.printStackTrace();
		}
	}
	
	public void showCollectionNames() {
		Set<String> colls = db.getCollectionNames();
		for (String s : colls) {
		    System.out.println(s);
		}
	}
	
	private DBCollection getCollection() {
		return db.getCollection(collection);
	}

	private void test () {
		DBObject myDoc = getCollection().findOne();
		System.out.println(myDoc);
	}
	
	
	/**
	 * field name can be headline, description or text
	 * @param language
	 * @param fieldName
	 * @return
	 */
	public ArrayList<Pair<String, Short>> getTermFrequencyFromNews(String language, String fieldName) {
		BasicDBObject query = new BasicDBObject("source", "Eumssi-News-Crawler")
								.append("meta.source.inLanguage", language);
		
		BasicDBObject fields = new BasicDBObject().append("meta.source." + fieldName, 1);
		DBCursor cursor = coll.find(query, fields);
		StoryDistribution distr = new StoryDistribution();
		int count = 0;
		try {
			   while(cursor.hasNext()) {
				   count+=1;
				   DBObject c = cursor.next();
				   BasicDBObject _meta = (BasicDBObject) c.get("meta");
				   BasicDBObject _source = (BasicDBObject) _meta.get("source");
				   String fieldVal = _source.getString(fieldName).toString();
				   EventDistribution e = new EventDistribution(fieldVal, null);
				   distr.index(e);
			   }
			} finally {
			   cursor.close();
			}
		System.out.println(count + " items found");
		return null;
	}
	
	
	public static void main(String[] args) {
		MongoDBManager mongodb = new MongoDBManager();
		ArrayList<Pair<String, Short>> tf = mongodb.getTermFrequencyFromNews("EN", "headline");
		for (Pair p : tf) {
			System.out.println(p.getKey() + " " + p.getValue());
		}
	}

}
