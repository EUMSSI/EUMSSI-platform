package de.l3s.eumssi.service;

import java.io.File;
import java.sql.Date;
import java.util.ArrayList;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TopDocs;
import org.apache.lucene.search.TopScoreDocCollector;
import org.apache.lucene.store.FSDirectory;
import org.apache.lucene.util.Version;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServer;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;

import de.l3s.eumssi.dao.DatabaseManager;
import de.l3s.eumssi.model.*;
import de.l3s.eumssi.service.SolrConnector;




public class SearchManager {

	private DatabaseManager db;
	
	public static void main(String[] args) throws Exception{
		
			SearchManager search = new SearchManager();
			
//			search.testGetRelatedStories("1053");
		
			String keyowrds = null;
			String fromDate = "2014-01-01";
			String toDate = "2014-01-16";
			
//			String fromDate = null;
//			String toDate = null;
			
			System.out.println("Query: " + keyowrds);
//			System.out.println("From: " + Date.valueOf(fromDate).toString());
//			System.out.println("To: " + Date.valueOf(toDate).toString());
			
			String query = "";
//			search.testStorySearchByName(query, fromDate, toDate);
//			search.testEntitySearchByName(query, fromDate, toDate);
			
			search.test(keyowrds, fromDate, toDate, false);			
			System.out.println("###################################");
//			search.test(keyowrds, fromDate, toDate, true);
			
//			ArrayList<Event> events = search.getEvents_LUCENE("2014-07-01", "2014-07-31");
//			ArrayList<Event> events = search.getDb().searchEventsByKeyword("Iraq", "2000-01-01", "2004-06-01");
//			ArrayList<EventObjects> events = search.queryEventsByEntity("Barack_Obama", "2000-01-01", "2014-06-01");
//			ArrayList<EventObjects> events = search.queryEventsByKeyword_fromNewsArticle_LUCENE("Obama", "2000-01-01", "2014-06-01");
			
	}
	
	
	public void testGetRelatedStories(String storyId){
		ArrayList<Story> stories = db.getRelatedStories(storyId);
		for (Story story: stories){
			System.out.println(story.getId() + ": " + story.getName() );
		}
	}
	
	public void testStorySearchByName(String query, String fromDate, String toDate){
		ArrayList<Story> stories = db.searchStoriesByName(query, fromDate, toDate);
		for (Story story: stories){
			System.out.println(story.getName() + " has " + story.getEvents().size() + 
					" events from " + story.getStartDate() + " to " + story.getEndDate());
		}
	}
	
	
	public void testEntitySearchByName(String query, String fromDate, String toDate){
		ArrayList<Entity> entities = db.searchEntitiesByName(query, fromDate, toDate);
		for (Entity entity: entities){
			System.out.println(entity.getName() + " has " + entity.getFrequency() + 
					" events from " + entity.getStartDate() + " to " + entity.getEndDate());
		}
	}
	
	public void test(String keyword, String fromDate, String toDate, boolean useLucene) throws Exception{
		
		ContentHandling ch = new ContentHandling();
		
		ArrayList<Event> events;
		
		long startTime = System.currentTimeMillis();
		
		if(useLucene){
//			events = queryEventsByKeyword_LUCENE(keyword, fromDate, toDate);
			events = queryEventsByKeyword_Solr(keyword, fromDate, toDate);
		}else{
			if(keyword==null)
				events = getDb().getEvents(fromDate, toDate);
			else
				events = getDb().searchEventsByKeyword(keyword, fromDate, toDate);
		}
		
//		events = filterEvents(events, "filterByStory", "1045");
		
		long endTime = System.currentTimeMillis();
//		ArrayList<Event> events = search.getEvents_LUCENE("2014-07-01", "2014-07-31");
//		ArrayList<Event> events = search.getDb().searchEventsByKeyword("Iraq", "2000-01-01", "2004-06-01");
//		ArrayList<EventObjects> events = search.queryEventsByEntity("Barack_Obama", "2000-01-01", "2014-06-01");
//		ArrayList<EventObjects> events = search.queryEventsByKeyword_fromNewsArticle_LUCENE("Obama", "2000-01-01", "2014-06-01");
		
		if (events != null){
			for(Event event: events){
				System.out.println(event.toString());
//				event = ch.addEntityLinks(event, null);
//				System.out.println("===> " + event.getDescription());
			}
			System.out.println(" " + events.size() + " events were found!");
			
//			int maxNumOfEventsToDisplay = Integer.parseInt(db.conf.getProperty("visualization_MaxTimelineSize"));
//			if (events.size() > maxNumOfEventsToDisplay ){
//				events = (ArrayList<Event>) events.subList(0, maxNumOfEventsToDisplay-1);
//			}
			System.out.println(" " + events.size() + " events will be displayed!!");
		}
		System.out.println(" Search time = " + (endTime-startTime) + " msec.");
		
	}
	
	
	public ArrayList<Event> queryEventsByKeyword_LUCENE(String query, String from, String to) throws Exception{
		ArrayList<Event> events = null;
        
    	StandardAnalyzer analyzer = new StandardAnalyzer(Version.LUCENE_43);
    	DatabaseManager db = new DatabaseManager();
    	IndexReader reader = DirectoryReader.open(FSDirectory.open(new File(db.conf.getProperty("luceneEventIndex"))));
        
//    	System.out.println("-------------------------------");
//    	System.out.println(" num of indexed docs = " + reader.numDocs());
//    	System.out.println(printEvent(documentToEvent(reader.document(1))));
//    	for(IndexableField f: reader.document(1).getFields()){
//    		System.out.println(f.name() + " --> " +  f.stringValue());
//    	}
//    	System.out.println("-------------------------------");
    	
    	IndexSearcher searcher = new IndexSearcher(reader);
    	
    	Query q = new QueryParser(Version.LUCENE_43, "event.description", analyzer).parse(query);

    	int numOfHits = Integer.parseInt(db.conf.getProperty("numOfHits"));
        TopScoreDocCollector collector = TopScoreDocCollector.create(numOfHits, true);
        
//        System.out.println("numOfHits = " + numOfHits);
        searcher.search(q, collector);
        
        TopDocs results = collector.topDocs();
//        System.out.println(results.totalHits);
        ScoreDoc[] hits = results.scoreDocs;
        
        System.out.println("Found " + hits.length + " events matching the keywords.");
        if (hits.length > 0){
        	events = new ArrayList<Event>();        	
        	Document d = null;
        	int docId = 0;
	        for(int i=0;i<hits.length;++i) {
	        	docId = hits[i].doc;
	            d = searcher.doc(docId);
//		        System.out.println((i + 1) + ". " + d.get("path") + " score=" + hits[i].score);
	            if(d.get("event.date").compareTo(from)>=0 && d.get("event.date").compareTo(to)<=0){
	             	 events.add(documentToEvent(d));
//	         		System.out.println(" num of events processed: " + events.size()); 
	            }
	       }
	        System.out.println("Found " + events.size() + " events matching the time span.");
	        System.out.println("=======================================");
        }
        
        db.closeConnection();
    	return events;
    }
	
	
	public ArrayList<Event> queryEventsByKeyword_Solr(String query, String from, String to) throws Exception{
		ArrayList<Event> events = null;
        
		SolrServer server = SolrConnector.getSolrServer();
		
		SolrQuery solrQuery = new SolrQuery();
		
//		solrQuery.setFields("description");
//		solrQuery.setQuery( query );

	    solrQuery.setQuery( "description:"+query );
	    // make sure the dates are in the format: yyyy-MM-dd
	    solrQuery.addFilterQuery("date:[" + Date.valueOf(from).toString() + " TO " + Date.valueOf(to).toString() + "]");
	    solrQuery.setSort("date", SolrQuery.ORDER.asc);
	    solrQuery.setRows(100000);
	    
	    QueryResponse rsp = server.query( solrQuery );
	    
	    SolrDocumentList hits = rsp.getResults();
        
        System.out.println("Found " + hits.size() + " events matching the keywords.");
        if (hits.size() > 0){
        	events = new ArrayList<Event>();        	
        	Event event = null;
	        for(SolrDocument doc: hits){
	        	event = solrDocumentToEvent(doc);
//	        	if(event.getDate().compareTo(Date.valueOf(from))>=0 && event.getDate().compareTo(Date.valueOf(to))<=0){
	             	 events.add(event);
//	            }
//	        	else{
//	            	System.out.println(event.getDate() + " doesn't match the time span!");
//	            }
	        }
        	
	        System.out.println("Found " + events.size() + " events matching the time span from " + from + " to " + to);
	        System.out.println("=======================================");
        }
        
    	return events;
    }
	
	
	public ArrayList<Event> getEvents_LUCENE(String from, String to) throws Exception{
		ArrayList<Event> events = null;
        
    	DatabaseManager db = new DatabaseManager();
    	IndexReader reader = DirectoryReader.open(FSDirectory.open(new File(db.conf.getProperty("luceneEventIndex"))));
    	
    	System.out.println("Found " + reader.numDocs() + " events in the index.");
    	
    	events = new ArrayList<Event>();
    	Document doc = null;    	
    	for (int i=0; i<reader.numDocs(); i++) {
    	    doc = reader.document(i);
	        if(doc.get("event.date").compareTo(from)>=0 && doc.get("event.date").compareTo(to)<=0){
	          	 events.add(documentToEvent(doc));
	        }
	    }
    	System.out.println("Found " + events.size() + " events matching the time span.");
        System.out.println("=======================================");
        
    	return events;
    }
	
	
	
//	public ArrayList<Event> queryEventsByKeyword_fromNewsArticle_LUCENE(String query, String from, String to) throws Exception{
//    	ArrayList<Event> events = null;
//        
//    	Date fromDate = Date.valueOf(from);
//    	Date toDate = Date.valueOf(to);
//    	
//    	// the "title" arg specifies the default field to use
//        // when no field is explicitly specified in the query.
//    	StandardAnalyzer analyzer = new StandardAnalyzer(Version.LUCENE_43);
//    	DatabaseManager db = new DatabaseManager();
//    	IndexReader reader = DirectoryReader.open(FSDirectory.open(new File(db.conf.getProperty("luceneNewsArticlesIndex"))));
//        IndexSearcher searcher = new IndexSearcher(reader);
//        
//    	Query q = new QueryParser(Version.LUCENE_43, "ArticleContent", analyzer).parse(query);
//
//    	int numOfHits = Integer.parseInt(db.conf.getProperty("numOfHits"));
//        TopScoreDocCollector collector = TopScoreDocCollector.create(numOfHits, true);
//        searcher.search(q, collector);
//        ScoreDoc[] hits = collector.topDocs().scoreDocs;
//        
//        System.out.println("Found " + hits.length + " articles.");
//        if (hits.length > 0){
//        	events = new ArrayList<Event>();
//        	Document d = null;
//        	int docId = 0;
//        	ContentHandling ch = new ContentHandling();
//        	ArrayList<Event> eventsByArticles = null;
//	        for(int i=0;i<hits.length;++i) {
//	        	docId = hits[i].doc;
//	            d = searcher.doc(docId);
//	            eventsByArticles = ch.returnEventsFromSourceID(Integer.parseInt(d.get("sourceID")));
//	            for (Event e: eventsByArticles){
////	            	if(e.getDate().compareTo(from)>=0 && e.getDate().compareTo(to)<=0)
//	            	if(	e.getDate().equals(fromDate) || e.getDate().equals(toDate) || (e.getDate().after(fromDate)) && e.getDate().before(toDate))
//	            		events.add(e);
//	            }
//	       }
//        }
//        
//    	return events;
//    }
	
	public ArrayList<Event> queryEventsByEntity(String query, String from, String to) throws Exception{
    	ArrayList<Event> events = null;
    	DatabaseManager db = new DatabaseManager();
    	events = db.getEventsByEntity(query, from, to);
    	db.closeConnection();
    	return events;
	}
    	
//	this method gets all event information from Lucene index
//	we will use this method when we start indexing all event information in Lucene
//	this will replace the DB call getEventByID()
	private Event documentToEvent(Document d) throws Exception{
		Event event = new Event();
		event.setEventId(d.get("event.id"));
		event.setDate(Date.valueOf(d.get("event.date")));
		event.setDescription(d.get("event.description"));
		if (d.get("event.category.id")!=null){
			Category category = new Category();
			category.setId(d.get("event.category.id"));
			category.setName(d.get("event.category.name"));
			event.setCategory(category);
		}
		if (d.get("event.story.id")!=null){
			Story story = new Story();
			story.setId(d.get("event.story.id"));
			story.setName(d.get("event.story.name"));
			story.setWikipediaUrl(d.get("event.story.wikiURL"));			
		}
		if (d.get("event.entities.number")!=null){
			int num_entites = Integer.parseInt(d.get("event.entities.number"));
			Entity entity;
			for (int i=1; i<= num_entites; i++){
				entity = new Entity();
				entity.setId(d.get("event.entity.id."+i));
				entity.setName(d.get("event.entity.name."+i));
				entity.setWikiURL(d.get("event.entity.wikiURL."+i));
				event.addEntity(entity);
			}
		}
		if (d.get("event.sources.number")!=null){
			int num_sources = Integer.parseInt(d.get("event.sources.number"));
			for (int i=1; i<= num_sources; i++){
				Reference reference = new Reference();
				reference.setId(d.get("event.source.id."+i));
				reference.setSource(d.get("event.source.name."+i));
				reference.setUrl(d.get("event.source.URL."+i));
				event.addReference(reference);
			}
		}
		
		return event;
	}


	private Event solrDocumentToEvent(SolrDocument d) throws Exception{
		Event event = new Event();
		event.setEventId((String)d.getFieldValue("id"));
		event.setDate(Date.valueOf((String)d.getFieldValue("date")));
		event.setDescription((String)d.getFieldValue("description"));
		if ((String)d.getFieldValue("categoryId")!=null){
			Category category = new Category();
			category.setId((String)d.getFieldValue("categoryId"));
			category.setName((String)d.getFieldValue("categoryName"));
			event.setCategory(category);
		}
		if ((String)d.getFieldValue("storyId")!=null){
			Story story = new Story();
			story.setId((String)d.getFieldValue("storyId"));
			story.setName((String)d.getFieldValue("storyName"));
			story.setWikipediaUrl((String)d.getFieldValue("storyWikiURL"));	
			event.setStory(story);
		}
		
		if (d.getFieldValues("entities")!=null){
			if (d.getFieldValues("entities").size() > 0){
				ArrayList<String> entities = (ArrayList) d.getFieldValues("entities");
				
				Entity entity;
				String[] entityOb;
				for (String entityStr: entities){
					entityOb = entityStr.split("###");
					if(entityOb.length != 3) continue;
					entity = new Entity();
					entity.setId(entityOb[0]);
					entity.setName(entityOb[1]);
					entity.setWikiURL(entityOb[2]);
					event.addEntity(entity);
				}
			}
		}
		
		if (d.getFieldValues("articles")!=null){
			if (d.getFieldValues("articles").size() > 0){
				ArrayList<String> articles = (ArrayList) d.getFieldValues("articles");
				
				Reference reference;
				String[] refOb;
				for (String refStr: articles){
					refOb = refStr.split("###");
					if(refOb.length != 3) continue;
					reference = new Reference();
					reference.setId(refOb[0]);
					reference.setSource(refOb[1]);
					reference.setUrl(refOb[2]);
					event.addReference(reference);
				}
			}
		}
			
		return event;
	}

	
	
	public DatabaseManager getDb() {
		return db;
	}


	public void setDb(DatabaseManager db) {
		this.db = db;
	}

	
//	public static String printEvent(Event event){
//		String out = "";
//		out+= "Date: " + event.getDate() + "||";
//		out+= "\t Description: " + event.getDescription() + "||";
//		if (event.getStory()!=null){
//			out+= "\t Story: {";
//			out+= "Name: " + event.getStory().getName();
//			out+= "\t URL: " + event.getStory().getWikipediaUrl() + "}";
//		}
//		if (event.getCategory()!=null){
//			out+= "\t Category: " + event.getCategory().getName()+ "||";
//		}
//		if(event.getEntities()!=null){
//			if(!event.getEntities().isEmpty()){
//				out+= "\t Entities: {";
//				for(Entity entity:event.getEntities()){
//					out+= "\t Name: " + entity.getName();
//					out+= "\t URL: " + entity.getWikiURL()+ "||";
//				}
//				out+= "}";
//			}
//		}
//		if(event.getReferences()!=null){
//			if(!event.getReferences().isEmpty()){
//				out+= "\t Sources: {";
//				for(Reference ref: event.getReferences()){
//					out+= "\t Source: " + ref.getSource();
//					out+= "\t Type: " + ref.getType();
//					out+= "\t URL: " + ref.getUrl()+ "||";
//				}
//				out+= "}";
//			}
//		}
//		return out;
//	}
	
	
	private ArrayList<Event> filterEvents(ArrayList<Event> events, String filterType, String filterItemId) {
		System.out.println("filterType: " + filterType);
		System.out.println("filterItemId: " + filterItemId);
		
		ArrayList<Event> filteredList = new ArrayList<Event>();
		
		if (filterType.equals("filterByStory")){
			System.out.println(" filtering by storyID");
			System.out.println(" num of events = " + events.size());
			for(Event e: events){
				if (e.getStory()!=null){
					System.out.println(e.getStory().getId());
					if (e.getStory().getId().equals(filterItemId)){
						filteredList.add(new Event(e));
					}
				}
			}
		}
		
		if (filterType.equals("filterByCategory")){
			for(Event e: events){
				if (e.getCategory().getId().equals(filterItemId)){
					filteredList.add(new Event(e));
				}
			}
		}
		
		if (filterType.equals("filterByEntity")){
			for(Event e: events){
				for(Entity entity: e.getEntities()){
					if (entity.getId().equals(filterItemId)){
						filteredList.add(new Event(e));
						break;
					}
				}
			}
		}
		
		return filteredList;
	}
	
	
	
	public SearchManager (){
		setDb(new DatabaseManager());
	}
}
