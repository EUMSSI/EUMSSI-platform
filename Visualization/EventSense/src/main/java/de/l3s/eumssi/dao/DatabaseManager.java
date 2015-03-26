/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package de.l3s.eumssi.dao;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Properties;

import de.l3s.eumssi.model.*;


public class DatabaseManager{
	public Properties conf;
	private Connection connection;
	
	public String METHOD_WCEP_MANUAL_ANNOTATION = "WCEP_MANUAL_ANNOTATION";
	public String METHOD_ENRICHMENT_1 = "METHOD_ENRICHMENT_1";
	public String METHOD_STORY_IN_DESCRIPTION = "METHOD_STORY_IN_DESCRIPTION";
	
	public DatabaseManager(){
		connection = null;
		try {
			loadConfiguration();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
		
	public void loadConfiguration(String path) throws FileNotFoundException, IOException{
		conf = new Properties();
		conf.load(new FileInputStream(path));		
	}
	
	public void loadConfiguration() throws FileNotFoundException, IOException{
		conf = new Properties();
		ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
		conf.load(classLoader.getResourceAsStream("DBHandler.properties"));		
	}
	
	
	public Connection openConnection() throws SQLException{
		if (connection != null)
			if (!connection.isClosed())
				return connection;
		try {			
			String driverName = conf.getProperty("driverName");
			Class.forName(driverName);
			String serverName = conf.getProperty("serverName");
			String database = conf.getProperty("database");
			String url = "jdbc:mysql://" + serverName + "/" + database;
			url+= "?useUnicode=true&characterEncoding=utf-8";
			String username = conf.getProperty("dbusername");
			String password = conf.getProperty("dbpassword");
			System.out.print(" connecting to server: " + serverName + " , database: " + database + "... ");
			connection = DriverManager.getConnection(url, username, password);
			System.out.println(" connection is successfully established!");			
		} catch (ClassNotFoundException e) {			
			System.out.println(" faild to establish connection to DB!");
			e.printStackTrace();
		} catch (SQLException e) {
			System.out.println(" faild to establish connection to DB!");
			e.printStackTrace();
		}		
		return connection;
	}
	
	public void closeConnection() {
		try {
			if (connection != null) {
				if (!connection.isClosed()){
					connection.close();
					System.out.println(" connection to DB was successfuly closed!");
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
    
	 
	public ArrayList<Event> searchEventsByKeyword(String query, String from, String to) {
        if(from==null || to==null)
        	return searchEventsByKeyword(query);
		
		PreparedStatement pstmt = null;
        ResultSet result = null;
        
        ArrayList<Event> events = new ArrayList<Event>();
        try{
        	query = "% "+query+" %";
            pstmt = openConnection().prepareStatement("select EventID, Date from Event where Description like ? AND Date>=? and Date<=?");
            pstmt.setString(1,query);
            pstmt.setString(2,from);
            pstmt.setString(3,to);
            result = pstmt.executeQuery();
            while(result.next()){
            	events.add(getEventById(result.getString("EventID")));
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
        return events;
    }
    
	
	public ArrayList<Event> searchEventsByKeyword(String query) {
        PreparedStatement pstmt = null;
        ResultSet result = null;
        
        ArrayList<Event> events = new ArrayList<Event>();
        try{
        	query = "% "+query+" %";
            pstmt = openConnection().prepareStatement("select EventID, Date from Event where Description like ? ");
            pstmt.setString(1,query);
            result = pstmt.executeQuery();
            while(result.next()){
            	events.add(getEventById(result.getString("EventID")));
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
        return events;
    }
	
	
    /**
     * get the list of events from DB 
     * @param connection
     * @param from
     * @param to
     * @return
     * @throws Exception
     */
    public ArrayList<Event> getEvents(String from, String to)  {
    	if(from==null || to==null)
    		return getEvents();
    	
        PreparedStatement pstmt = null;
        ResultSet result = null;
        
        ArrayList<Event> events = new ArrayList<Event>();
        try{
            pstmt = openConnection().prepareStatement("select EventID, Date from Event where Date>=? and Date<=?");
            pstmt.setString(1,from);
            pstmt.setString(2,to);
            result = pstmt.executeQuery();
            while(result.next()){
            	events.add(getEventById(result.getString("EventID")));
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
        return events;
    }
    
    public ArrayList<Event> getEvents()  {
        PreparedStatement pstmt = null;
        ResultSet result = null;
        
        ArrayList<Event> events = new ArrayList<Event>();
        try{
            pstmt = openConnection().prepareStatement("select EventID, Date from Event ");
            result = pstmt.executeQuery();
            while(result.next()){
            	events.add(getEventById(result.getString("EventID")));
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
        return events;
    }
    
    /**
     * get the list of events that contains entity from DB 
     * @param connection
     * @param from
     * @param to
     * @param entityId
     * @return
     * @throws Exception
     */
    public ArrayList<Event> getEventsByEntity(String entityId, String from, String to)    {
        PreparedStatement pstmt = null;
        ResultSet result = null;
        
        ArrayList<Event> events = new ArrayList<Event>();
        try{
            pstmt = openConnection().prepareStatement("select e.EventID, e.Date from Event e " +
            		" join Event_Entity_Relation r on e.EventID=r.EventID " +
            		" where e.Date>=? and e.Date<=? and r.WikiRefID=?");
            pstmt.setString(1,from);
            pstmt.setString(2,to);
            pstmt.setString(3, entityId);
            result = pstmt.executeQuery();
            while(result.next()){
            	events.add(getEventById(result.getString("EventID")));
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
           
        return events;
    }
    
    
    
    public ArrayList<Event> getEventsByEntity(String entityId) {
        PreparedStatement pstmt = null;
        ResultSet result = null;
        
        ArrayList<Event> events = new ArrayList<Event>();
        try{
            pstmt = openConnection().prepareStatement("select e.EventID, e.Date from Event e " +
            		" join Event_Entity_Relation r on e.EventID=r.EventID " +
            		" where r.WikiRefID=?");
            pstmt.setString(1, entityId);
            result = pstmt.executeQuery();
            while(result.next()){
            	events.add(getEventById(result.getString("EventID")));
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
           
        return events;
    }
    
    
    
    
    public ArrayList<Event> getEventsByEntityName(String entityName, String from, String to)    {
        PreparedStatement pstmt = null;
        ResultSet result = null;
        
        ArrayList<Event> events = new ArrayList<Event>();
        try{
        	String query = "%"+entityName+"%";
            pstmt = openConnection().prepareStatement("select e.EventID, e.Date from Event e " +
            		" join Event_Entity_Relation r on e.EventID=r.EventID " +
            		" where e.Date>=? and e.Date<=? and r.Name like ?");
            pstmt.setString(1,from);
            pstmt.setString(2,to);
            pstmt.setString(3, query);
            result = pstmt.executeQuery();
            while(result.next()){
            	events.add(getEventById(result.getString("EventID")));
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
           
        return events;
    }
    
    
    
   
    
    public ArrayList<Event> getEventsByDate(String date){
    	ArrayList<Event> events = new ArrayList<Event>();
        PreparedStatement pstmt = null;
        ResultSet result = null;
        
        try{
            pstmt = openConnection().prepareStatement("select EventID, Date from Event  where Date=? ");
            pstmt.setString(1,date);
            result = pstmt.executeQuery();
            while(result.next()){
            	events.add(getEventById(result.getString("EventID")));
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
           
        return events;
    }
    
    
    
    
//    public ArrayList<Event> getEventsByCategory(String categoryId, String fromDate, String toDate){
//    	ArrayList<Event> events = new ArrayList<Event>();
//        PreparedStatement pstmt = null;
//        ResultSet result = null;
//        
//        try{
//        	if (fromDate == null || toDate == null){
//        		pstmt = openConnection().prepareStatement("select EventID from Event where CategoryID=? ");
//        		pstmt.setString(1, categoryId);
//        	}else{
//        		pstmt = openConnection().prepareStatement("select EventID from Event where Date>=? AND Date<=? AND CategoryID=? ");
//        		pstmt.setString(1, fromDate);
//        		pstmt.setString(2, toDate);
//        		pstmt.setString(3, categoryId);
//        	}
//            
//            result = pstmt.executeQuery();
//            while(result.next()){
//            	events.add(getEventById(result.getString("EventID")));
//            }
//        }catch (SQLException e) {			
//			e.printStackTrace();
//		}finally{
//			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
//			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
//		}
//           
//        return events;
//    }
    
    public int getStoryLength(String storyId) {
    	int count = 0;
    	PreparedStatement pstmt = null;
        ResultSet result = null;
        float minConfidence =  Float.valueOf(conf.getProperty("event_story_confidence_min"));
        try{
            pstmt = openConnection().prepareStatement("select COUNT(EventID) as count from Event_Story_Relation where StoryID=? AND confidence >=? ");
            pstmt.setString(1,storyId);
            pstmt.setFloat(2, minConfidence);
            result = pstmt.executeQuery();
            count = result.getInt("count");
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        return count;
    }
    
    
    public ArrayList<Event> getEventsByStory(String storyId) {
    	return getEventsByStory(storyId, null, null);
    }
    
    public ArrayList<Event> getEventsByStory(String storyId, String fromDate, String toDate) {
    	ArrayList<Event> events = new ArrayList<Event>();
        PreparedStatement pstmt = null;
        ResultSet result = null;
        float minConfidence =  Float.valueOf(conf.getProperty("event_story_confidence_min"));
        try{
            pstmt = openConnection().prepareStatement("select EventID from Event_Story_Relation where StoryID=? AND confidence >=? ");
            pstmt.setString(1,storyId);
            pstmt.setFloat(2, minConfidence);
            result = pstmt.executeQuery();
            Event event = null;
            while(result.next()){
            	event = getEventById(result.getString("EventID"));
            	if (fromDate == null || toDate == null){
            		events.add(event);
            	}else{
            		if (event.getDate().equals(Date.valueOf(fromDate)) ||
            			event.getDate().equals(Date.valueOf(toDate)) ||
            			(event.getDate().after(Date.valueOf(fromDate)) && event.getDate().before(Date.valueOf(toDate)))
            			){
            			events.add(event);
            		}
            	}
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
           
        return events;
    }
    
    
    public ArrayList<Event> getEventsByCategory(String categoryId) {
    	return getEventsByCategory(categoryId, null, null);
    }
    
    public ArrayList<Event> getEventsByCategory(String categoryId, String fromDate, String toDate) {
    	ArrayList<Event> events = new ArrayList<Event>();
        PreparedStatement pstmt = null;
        ResultSet result = null;
        float minConfidence =  Float.valueOf(conf.getProperty("event_category_confidence_min"));
        try{
            pstmt = openConnection().prepareStatement("select EventID from Event_Category_Relation where CategoryID=? AND confidence >=? ");
            pstmt.setString(1,categoryId);
            pstmt.setFloat(2, minConfidence);
            result = pstmt.executeQuery();
            Event event = null;
            while(result.next()){
            	event = getEventById(result.getString("EventID"));
            	if (fromDate == null || toDate == null){
            		events.add(event);
            	}else{
            		if (event.getDate().equals(Date.valueOf(fromDate)) ||
            			event.getDate().equals(Date.valueOf(toDate)) ||
            			(event.getDate().after(Date.valueOf(fromDate)) && event.getDate().before(Date.valueOf(toDate)))
            			){
            			events.add(event);
            		}
            	}
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
           
        return events;
    }
    
    
    
    public ArrayList<Event> getEventsByLocation(String locationId) {
    	return getEventsByLocation(locationId, null, null);
    }
    
    public ArrayList<Event> getEventsByLocation(String locationId, String fromDate, String toDate) {
    	ArrayList<Event> events = new ArrayList<Event>();
        PreparedStatement pstmt = null;
        ResultSet result = null;
        float minConfidence =  Float.valueOf(conf.getProperty("event_location_confidence_min"));
        try{
            pstmt = openConnection().prepareStatement("select EventID from Event_Location_Relation where locationName=? AND confidence >=? ");
            pstmt.setString(1,locationId);
            pstmt.setFloat(2, minConfidence);
            result = pstmt.executeQuery();
            Event event = null;
            while(result.next()){
            	event = getEventById(result.getString("EventID"));
            	if (fromDate == null || toDate == null){
            		events.add(event);
            	}else{
            		if (event.getDate().equals(Date.valueOf(fromDate)) ||
            			event.getDate().equals(Date.valueOf(toDate)) ||
            			(event.getDate().after(Date.valueOf(fromDate)) && event.getDate().before(Date.valueOf(toDate)))
            			){
            			events.add(event);
            		}
            	}
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
           
        return events;
    }
    
    
    
    public Story getStoryById(String storyId){
		Story story = null;
		PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			pstmt = openConnection().prepareStatement("SELECT Label, WikipediaURL FROM NewsStory where StoryID=?");
			pstmt.setString(1,storyId);
	        result = pstmt.executeQuery();
	        
	        if(result.next()){
	        	story = new Story();
	        	story.setId(storyId);
	        	story.setName(result.getString("Label"));
	        	story.setWikipediaUrl(result.getString("WikipediaURL"));
	        }
		} catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
		
		return story;
	}
    
    
    public Story getStoryByURL(String wikiURL) {
    	Story story = null;
		PreparedStatement pstmt = null;
		ResultSet result = null;
		
		try {
			pstmt = openConnection().prepareStatement("SELECT n.StoryID, n.Label, w.WikipediaURL FROM NewsStory n join WikiRef w on n.WikiRefID = w.WikiRefID where w.WikipediaURL=?");
			pstmt.setString(1, wikiURL);
	        result = pstmt.executeQuery();
	        
	        if(result.next()){
	        	story = new Story();
	        	story.setId(result.getString("StoryID"));
	        	story.setName(result.getString("Label"));
	        	story.setWikipediaUrl(result.getString("WikipediaURL"));
	        }
		} catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
		return story;
    }
    
    
    public Category getCategoryById(String categoryId){
    	Category category = null;
    	PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			// this was changed to get the name of OpenCalaisCategory instead of the original name
			pstmt = openConnection().prepareStatement("SELECT Name FROM Category where CategoryID=?");
			//pstmt = openConnection().prepareStatement("SELECT OpenCalaisCategory, OpenCalaisID FROM Category where CategoryID=?");
	        pstmt.setString(1,categoryId);
	        result = pstmt.executeQuery();
	        
	        if(result.next()){
	        	category = new Category();
	        	category.setId(categoryId);
//	        	category.setId(Integer.valueOf(result.getInt("OpenCalaisID")).toString());	        	
//	        	category.setName(result.getString("OpenCalaisCategory"));
	        	category.setName(result.getString("Name"));
	        }
		}catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
    	
        return category;
    }
    
    
    public ArrayList<Story> getRelatedStories(String storyId){
    	ArrayList<Story> stories = new ArrayList<Story>();
    	PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			pstmt = openConnection().prepareStatement("SELECT * FROM Story_Story_Relation where (relation=? OR relation=?) AND (from_StoryID=? OR to_StoryID=?) ");
			pstmt.setString(1, "isRelatedTo");
			pstmt.setString(2, "partOf");
			pstmt.setString(3, storyId);
			pstmt.setString(4, storyId);
			result = pstmt.executeQuery();
			Story story = null;
	        while(result.next()){
	        	if(!result.getString("from_StoryID").equals(storyId)){
	        		story = getStoryById(result.getString("from_StoryID"));
	        	}else{
	        		story = getStoryById(result.getString("to_StoryID"));
	        	}
	        	if(!stories.contains(story)){
	        		// add dummy events for setting the story length
	        		for (int i=0; i<getStoryLength(story.getId()); i++){
	        			story.addEvent(new Event());
	        		}
	        		stories.add(story);
	        	}
	        }
		}catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
        return stories;
    }
    
    
    
    
    public ArrayList<Entity> getEntitiesOfEvent(String eventId){
    	ArrayList<Entity> entities = new ArrayList<Entity>();
    	PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			pstmt = openConnection().prepareStatement("select w.WikiRefID, w.Name, w.WikipediaURL from Event_Entity_Relation r join WikiRef w on r.WikiRefID=w.WikiRefID where r.EventID=?");
			pstmt.setString(1,eventId);
			result = pstmt.executeQuery();
			Entity entity = null;
	        while(result.next()){
	        	entity = new Entity();
	        	entity.setId(result.getString("WikiRefID"));
	        	entity.setName(result.getString("Name"));
	        	entity.setWikiURL(result.getString("WikipediaURL"));
	        	entities.add(entity);
	        }
		}catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
        return entities;
    }
    
    
    
    
    
    public Category getCategoryOfEvent(int eventId, float confidence){
    	Category category = null;
    	PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			pstmt = openConnection().prepareStatement(
					"select CategoryID from Event_Category_Relation where EventID=?  AND confidence >=? ");
			pstmt.setInt(1, eventId);
			pstmt.setFloat(2, confidence);
			result = pstmt.executeQuery();
			
	        if(result.next()){
	        	category = getCategoryById((result.getString("CategoryID")));
	        }
		}catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
        return category;
    }
    
    
    public Location getLocationOfEvent(int eventId, float confidence){
    	Location location = null;
    	PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			pstmt = openConnection().prepareStatement(
					"select locationName from Event_Location_Relation where eventID=?  AND confidence >=? ");
			pstmt.setInt(1, eventId);
			pstmt.setFloat(2, confidence);
			result = pstmt.executeQuery();
			
	        if(result.next()){
	        	location = new Location();
	        	location.setId(result.getString("locationName"));
	        	location.setName(result.getString("locationName"));
	        }
		}catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
        return location;
    }
    
    public ArrayList<Entity> getEntities(){
    	ArrayList<Entity> entities = new ArrayList<Entity>();
    	PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			pstmt = openConnection().prepareStatement("select w.WikiRefID, w.Name, w.WikipediaURL from WikiRef w ");
			result = pstmt.executeQuery();
			Entity entity = null;
	        while(result.next()){
	        	entity = new Entity();
	        	entity.setId(result.getString("WikiRefID"));
	        	entity.setName(result.getString("Name"));
	        	entity.setWikiURL(result.getString("WikipediaURL"));
	        	entities.add(entity);
	        }
		}catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
        return entities;
    }
    
    
    
    public ArrayList<Entity> searchEntitiesByName(String keyword, String fromDate, String toDate){
    	ArrayList<Entity> entities = new ArrayList<Entity>();
    	PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			keyword = "%"+keyword+"%";
			String sqlQuery = "SELECT w.WikiRefID, w.Name, w.WikipediaURL, j.eventsCount, j.startDate, j.endDate " +
					"FROM (SELECT r.WikiRefID, count(e.EventID) as eventsCount, min(e.Date) as startDate, max(e.Date) as endDate " +
					"FROM Event_Entity_Relation r JOIN Event e on e.EventID = r.EventID ";
			
			if(fromDate!=null && toDate!=null)
				sqlQuery+= "WHERE e.Date >= ? AND e.Date <= ? ";
			
			sqlQuery+= "GROUP BY r.WikiRefID) j " +
					"JOIN WikiRef w on j.WikiRefID = w.WikiRefID WHERE w.Name LIKE ?  ";
			
			pstmt = openConnection().prepareStatement(sqlQuery);
			
			if (fromDate!=null && toDate!=null) {
				pstmt.setString(1, fromDate);
				pstmt.setString(2, toDate);
				pstmt.setString(3, keyword);
			}else{
				pstmt.setString(1, keyword);
			}
			
			result = pstmt.executeQuery();
			
			Entity entity = null;
	        while(result.next()){
	        	entity = new Entity();
	        	entity.setId(result.getString("WikiRefID"));
	        	entity.setName(result.getString("Name"));
	        	entity.setWikiURL(result.getString("WikipediaURL"));
	        	entity.setStartDate(result.getDate("startDate"));
		        entity.setEndDate(result.getDate("endDate"));
		        entity.setFrequency(result.getInt("eventsCount"));
		        
		        if(result.getInt("eventsCount") > 0){
		        	entities.add(entity);
		        }
	        }
		}catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
		Collections.sort(entities, Collections.reverseOrder());
        return entities;
    }
    
    
//    public ArrayList<Entity> searchEntitiesByName3(String query, String fromDate, String toDate){
//    	ArrayList<Entity> entities = new ArrayList<Entity>();
//    	PreparedStatement pstmt = null;
//		ResultSet result = null;
//		try {
//			query = "%"+query+"%";
//			pstmt = openConnection().prepareStatement("select WikiRefID, Name, WikipediaURL from WikiRef where Name like ? ");
//			pstmt.setString(1, query);
//			result = pstmt.executeQuery();
//			Entity entity = null;
//	        while(result.next()){
//	        	entity = new Entity();
//	        	entity.setId(result.getString("WikiRefID"));
//	        	entity.setName(result.getString("Name"));
//	        	entity.setWikiURL(result.getString("WikipediaURL"));
//	        	
//	        	entity = getEntityStatiscis(entity);
//	        	
//	        	if(entity.getEvents().size() > 0){
//	        		entity.setFrequency(entity.getEvents().size());
//	        		if(fromDate!=null && toDate!=null){
//	        			if(
//	        					entity.getStartDate().equals(Date.valueOf(fromDate)) 
//	        					|| entity.getStartDate().equals(Date.valueOf(toDate))
//	        					|| (entity.getStartDate().before(Date.valueOf(toDate)) && entity.getStartDate().after(Date.valueOf(fromDate)))
//	        					|| entity.getEndDate().equals(Date.valueOf(fromDate))
//	        					|| entity.getEndDate().equals(Date.valueOf(toDate))
//	        					|| (entity.getEndDate().before(Date.valueOf(toDate)) && entity.getEndDate().after(Date.valueOf(fromDate)))
//	        			  ){
//	        				entities.add(entity);
//	        			}
//	        		}else{
//	        			entities.add(entity);
//	        		}
//	        	}
//	        }
//		}catch (SQLException e) {			
//			e.printStackTrace();
//		}finally{
//			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
//			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
//		}
//        
//		Collections.sort(entities, Collections.reverseOrder());
//        return entities;
//    }
    
    
//    public ArrayList<Entity> searchEntitiesByName2(String query){
//    	ArrayList<Entity> entities = new ArrayList<Entity>();
//    	PreparedStatement pstmt = null;
//		ResultSet result = null;
//		try {
//			query = "%"+query+"%";
//			pstmt = openConnection().prepareStatement("SELECT e.WikiRefID, e.Name, e.WikipediaURL, COUNT(DISTINCT r.EventID) as eventsCount " +
//					"FROM WikiRef e JOIN Event_Entity_Relation r ON e.WikiRefID= r.WikiRefID WHERE e.Name LIKE ? " +
//					"GROUP BY r.WikiRefID  ");
//			pstmt.setString(1, query);
//			result = pstmt.executeQuery();
//			Entity entity = null;
//	        while(result.next()){
//	        	entity = new Entity();
//	        	entity.setId(result.getString("WikiRefID"));
//	        	entity.setName(result.getString("Name"));
//	        	entity.setWikiURL(result.getString("WikipediaURL"));
//	        	entity.setFrequency(result.getInt("eventsCount"));
//	        	if (entity.getFrequency() > 0)
//	        		entities.add(entity);
//	        }
//		}catch (SQLException e) {			
//			e.printStackTrace();
//		}finally{
//			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
//			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
//		}
//        
//		Collections.sort(entities, Collections.reverseOrder());
//        return entities;
//    }
    
//    public ArrayList<Entity> searchEntitiesByName1(String query){
//    	ArrayList<Entity> entities = new ArrayList<Entity>();
//    	PreparedStatement pstmt = null;
//		ResultSet result = null;
//		try {
//			query = "%"+query+"%";
//			pstmt = openConnection().prepareStatement("select WikiRefID, Name, WikipediaURL from WikiRef where Name like ? ");
//			pstmt.setString(1, query);
//			result = pstmt.executeQuery();
//			Entity entity = null;
//	        while(result.next()){
//	        	entity = new Entity();
//	        	entity.setId(result.getString("WikiRefID"));
//	        	entity.setName(result.getString("Name"));
//	        	entity.setWikiURL(result.getString("WikipediaURL"));
//	        	entity.setFrequency(getEventsCountByEntity(Integer.valueOf(entity.getId())));
//	        	if (entity.getFrequency() > 0)
//	        		entities.add(entity);
//	        }
//		}catch (SQLException e) {			
//			e.printStackTrace();
//		}finally{
//			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
//			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
//		}
//        
//		Collections.sort(entities, Collections.reverseOrder());
//        return entities;
//    }
    
//    private int getEventsCountByEntity(int entityId) {
//    	int count = 0;
//		PreparedStatement pstmt = null;
//        ResultSet result = null;
//        
//        try{
//            pstmt = openConnection().prepareStatement("select COUNT(*) as count from Event_Entity_Relation where WikiRefID = ? ");
//            pstmt.setInt(1, entityId);
//            result = pstmt.executeQuery();
//            if(result.next()){
//            	count = result.getInt("count");
//            }
//        }catch (SQLException e) {			
//			e.printStackTrace();
//		}finally{
//			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
//			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
//		}
//        
//        return count;
//	}

    
//    private int getEventsCountByStory(int storyId) {
//    	int count = 0;
//		PreparedStatement pstmt = null;
//        ResultSet result = null;
//        
//        try{
//            pstmt = openConnection().prepareStatement("select COUNT(*) as count from Event_Story_Relation where StoryID = ? ");
//            pstmt.setInt(1, storyId);
//            result = pstmt.executeQuery();
//            if(result.next()){
//            	count = result.getInt("count");
//            }
//        }catch (SQLException e) {			
//			e.printStackTrace();
//		}finally{
//			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
//			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
//		}
//        
//        return count;
//	}
    
    
	public Entity getEntityById(String entityId){
    	Entity entity = null;
    	PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			pstmt = openConnection().prepareStatement("select Name, WikipediaURL from WikiRef where WikiRefID=?");
	        pstmt.setString(1,entityId);
	        result = pstmt.executeQuery();
	        
	        if(result.next()){
	        	entity = new Entity();
	        	entity.setId(entityId);
	        	entity.setName(result.getString("Name"));
	        	entity.setWikiURL(result.getString("WikipediaURL"));
	        }
		}catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
    	
        return entity;
    }
    
    
    
    
    public Reference getReferenceById(String referenceId){
    	Reference reference = null;
    	PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			pstmt = openConnection().prepareStatement("SELECT URL, SourceName FROM Source where SourceID=?");
	        pstmt.setString(1,referenceId);
	        result = pstmt.executeQuery();
	        
	        if(result.next()){
	        	reference = new Reference();
	        	reference.setId(referenceId);
	        	reference.setUrl(result.getString("URL"));
	        	reference.setSource(result.getString("SourceName"));
	        }
		}catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
    	
        return reference;
    }
    
    
    
    
    public Event getEventById(String eventid) {
    	Event event = null;
        PreparedStatement pstmt = null;
        ResultSet result = null;
        
       try{
    	    pstmt = openConnection().prepareStatement("select EventID, Date, Description, AnnotatedDescription from Event where EventID=?");
            pstmt.setString(1,eventid);
            result = pstmt.executeQuery();
            if(result.next()){
                event = new Event();
                event.setId(eventid);
                event.setDate(result.getDate("Date"));
                event.setDescription(result.getString("Description"));
                event.setAnnotatedDescription(result.getString("AnnotatedDescription"));
//                String storyid = result.getString("NewsStoryID");
//                String catid = result.getString("CategoryID");                
//                String[] source_ids = result.getString("Sources").split("\\$");
                
                //get story information
                event.setStory(getStoryOfEvent(Integer.valueOf(eventid), Float.valueOf(conf.getProperty("event_story_confidence_min"))));
                
                //get category information
                event.setCategory(getCategoryOfEvent(Integer.valueOf(eventid), Float.valueOf(conf.getProperty("event_category_confidence_min"))));
                
                //get location information
                event.setLocation(getLocationOfEvent(Integer.valueOf(eventid), Float.valueOf(conf.getProperty("event_location_confidence_min"))));
                
                
                //get entities                
                ArrayList<Entity> entities = getEntitiesOfEvent(eventid);
                if (!entities.isEmpty()){
                	for (Entity entity: entities){
                		 event.addEntity(entity);
                	}
                }
                //get references
                for(Reference ref: getReferencesOfEvent(Integer.valueOf(eventid))){
                	if (ref!=null) 
                		event.addReference(ref);
                }
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
           
        return event;
    }
	
    
    public ArrayList<Reference> getReferencesOfEvent(int eventId){
    	ArrayList<Reference> references = new ArrayList<Reference>();
    	 PreparedStatement pstmt = null;
         ResultSet result = null;
         try{
             pstmt = openConnection().prepareStatement("select SourceID from Event_Source_Relation where EventID=? ");
             pstmt.setInt(1, eventId);
             result = pstmt.executeQuery();
             while(result.next()){
            	 references.add(getReferenceById((result.getString("SourceID"))));
             }
         }catch (SQLException e) {			
 			e.printStackTrace();
 		}finally{
 			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
 			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
 		}
         return references;
    }
    
    
   
    
    
    public ArrayList<Event> getEventsOfStoryAsExtractedFromWikipedia(String storyId) {
    	ArrayList<Event> events = new ArrayList<Event>();
        PreparedStatement pstmt = null;
        ResultSet result = null;
        try{
            pstmt = openConnection().prepareStatement("select EventID from Event where NewsStoryID=? ORDER BY Date ASC");
            pstmt.setString(1,storyId);
            result = pstmt.executeQuery();
            while(result.next()){
            	events.add(getEventById(result.getString("EventID")));
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
           
        return events;
    }
	
    
	
    
    
	// this method returns an updated Event object if a relation is found
    // the method then sets the story object AND the confidence score
//    public Event getBelongsToRelation(Event event) {
//		Story story = null;
//		PreparedStatement pstmt = null;
//		ResultSet result = null;
//		float minConfidence =  Float.valueOf(conf.getProperty("event_story_confidence_min"));
//		try {
//			pstmt = openConnection().prepareStatement("SELECT StoryID, confidence FROM Event_Story_Relation WHERE EventID=?");
//			pstmt.setString(1, event.getEventId());
//	        result = pstmt.executeQuery();
//		        
//	        if(result.next()){
//	        	if (result.getFloat("confidence") >= minConfidence){
//		        	story = getStoryById(Integer.valueOf(result.getInt("StoryID")).toString());
//		        	event.setStory(story);
//		        	event.setStoryRelationConfidence(result.getFloat("confidence"));
//	        	}
//	        }
//		} catch (SQLException e) {			
//			e.printStackTrace();
//		}finally{
//			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
//			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
//		}
//		
//		return event;
//	}
   
    
    
//    NOTE: this method can be used to get the confidence of the story relation
//    public Event getStoryOfEvent(Event event, float confidence) {
//		Story story = null;
//		PreparedStatement pstmt = null;
//		ResultSet result = null;
//		try {
//			pstmt = openConnection().prepareStatement("SELECT StoryID, confidence FROM Event_Story_Relation WHERE EventID=?  AND confidence>= ?");
//			pstmt.setInt(1, Integer.valueOf(event.getEventId()));
//			pstmt.setFloat(2, confidence);
//	        result = pstmt.executeQuery();
//		        
//	        if(result.next()){
//	        	story = getStoryById(Integer.valueOf(result.getInt("StoryID")).toString());
//	        	event.setStory(story);
//	        	event.setStoryRelationConfidence(result.getFloat("confidence"));
//	        }
//		} catch (SQLException e) {			
//			e.printStackTrace();
//		}finally{
//			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
//			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
//		}
//		
//		return event;
//	}

    
    public Story getStoryOfEvent(int eventId, float confidence) {
		Story story = null;
		PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			pstmt = openConnection().prepareStatement("SELECT StoryID FROM Event_Story_Relation WHERE EventID=?  AND confidence>= ?");
			pstmt.setInt(1, eventId);
			pstmt.setFloat(2, confidence);
	        result = pstmt.executeQuery();
		        
	        if(result.next()){
	        	story = getStoryById(Integer.valueOf(result.getInt("StoryID")).toString());
	        }
		} catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
		
		return story;
	}
    
    
    
//	public ArrayList<Story> getStoriesWithoutTimelines() {
//		ArrayList<Story> stories = new ArrayList<>();
//		PreparedStatement pstmt = null;
//		ResultSet result = null;
//		try {
//			pstmt = openConnection().prepareStatement("select StoryID, Label from NewsStory ");
//			result = pstmt.executeQuery();
//			Story story = null;
//	        while(result.next()){
//	        	story = new Story();
//	        	story.setId(result.getString("StoryID"));
//	        	story.setName(result.getString("Label"));
//	        	stories.add(story);
//	        }
//		}catch (SQLException e) {			
//			e.printStackTrace();
//		}finally{
//			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
//			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
//		}
//        
//		return stories;
//	}
    
    
	// the following function cannot be used for Restful service
    // the serialzation of the story objects will not work because the events are dummy objects 
	public ArrayList<Story> getStoriesWithoutTimelines() {
		ArrayList<Story> stories = new ArrayList<>();
		PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			pstmt = openConnection().prepareStatement(
					"SELECT s.StoryID, s.Label, s.WikipediaURL, j.eventsCount, j.startDate, j.endDate " +
					"FROM (SELECT r.StoryID, count(e.EventID) as eventsCount, min(e.Date) as startDate, max(e.Date) as endDate " +
							"FROM Event_Story_Relation r " +
							"JOIN Event e on e.EventID = r.EventID " +
							"GROUP BY r.StoryID " +
							") j " +
					"JOIN NewsStory s on j.StoryID = s.StoryID ORDER BY j.eventsCount DESC");
			result = pstmt.executeQuery();
			Story story = null;
	        while(result.next()){
	        	story = new Story();
	        	story.setId(result.getString("StoryID"));
	        	story.setName(result.getString("Label"));
	        	story.setWikipediaUrl(result.getString("WikipediaURL"));
	        	// add dummy events just to set the size of the timeline to the value of eventsCount
	        	ArrayList<Event> events = new ArrayList<Event>();
	        	for(int i=0; i<result.getInt("eventsCount"); i++){
	        		events.add(new Event());
	        	}
	        	story.setEvents(events);
	        	story.setStartDate(Date.valueOf("startDate"));
	        	story.setEndDate(Date.valueOf("endDate"));
	        	stories.add(story);
	        }
		}catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
		return stories;
	}
	
	
	public ArrayList<Story> getStories() {
		ArrayList<Story> stories = new ArrayList<>();
		PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			pstmt = openConnection().prepareStatement(
					"SELECT DISTINCT s.StoryID, s.Label, s.WikipediaURL FROM NewsStory s JOIN Event_Story_Relation r on s.StoryID = r.StoryID ");
			result = pstmt.executeQuery();
			Story story = null;
	        while(result.next()){
	        	story = new Story();
	        	story.setId(result.getString("StoryID"));
	        	story.setName(result.getString("Label"));
	        	story.setWikipediaUrl(result.getString("WikipediaURL"));
	        	for (Event event: getEventsByStory(story.getId())){
	        		story.addEvent(new Event(event));
	        	}
	        	stories.add(story);
	        }
		}catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
		return stories;
	}
	
	
	public ArrayList<StoryCompact> getStoriesCompact() {
		ArrayList<StoryCompact> stories = new ArrayList<>();
		PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			pstmt = openConnection().prepareStatement(
					"SELECT DISTINCT s.StoryID, s.Label, s.WikipediaURL FROM NewsStory s JOIN Event_Story_Relation r on s.StoryID = r.StoryID ORDER BY s.StoryID ASC");
			result = pstmt.executeQuery();
			StoryCompact story = null;
	        while(result.next()){
	        	story = new StoryCompact();
	        	story.setId(result.getString("StoryID"));
	        	story.setName(result.getString("Label"));
	        	story.setWikipediaUrl(result.getString("WikipediaURL"));
	        	stories.add(story);
	        }
		}catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
		return stories;
	}
	
	
	
	public ArrayList<Category> getCategories() {
		ArrayList<Category> categories = new ArrayList<>();
		PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			pstmt = openConnection().prepareStatement("select CategoryID, Name from Category ");
			result = pstmt.executeQuery();
			Category category = null;
	        while(result.next()){
	        	category = new Category();
	        	category.setId(result.getString("CategoryID"));
	        	category.setName(result.getString("Name"));
	        	categories.add(category);
	        }
		}catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
		return categories;
	}
	
	
	public int getEventsCount()  {
        int count = 0;
		PreparedStatement pstmt = null;
        ResultSet result = null;
        
        try{
            pstmt = openConnection().prepareStatement("select COUNT(*) as count from Event ");
            result = pstmt.executeQuery();
            if(result.next()){
            	count = result.getInt("count");
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
        return count;
    }
	
	
	public int getStoriesCount()  {
        int count = 0;
		PreparedStatement pstmt = null;
        ResultSet result = null;
        
        try{
            pstmt = openConnection().prepareStatement("select COUNT(*) as count from NewsStory ");
            result = pstmt.executeQuery();
            if(result.next()){
            	count = result.getInt("count");
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
        return count;
    }
	
	
	public int getEntitiesCount()  {
        int count = 0;
		PreparedStatement pstmt = null;
        ResultSet result = null;
        
        try{
            pstmt = openConnection().prepareStatement("select COUNT(*) as count from WikiRef ");
            result = pstmt.executeQuery();
            if(result.next()){
            	count = result.getInt("count");
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
        return count;
    }
	
	public int getCategoriesCount()  {
        int count = 0;
		PreparedStatement pstmt = null;
        ResultSet result = null;
        
        try{
            pstmt = openConnection().prepareStatement("select COUNT(*) as count from Category ");
            result = pstmt.executeQuery();
            if(result.next()){
            	count = result.getInt("count");
            }
        }catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
        return count;
    }
	
	
	public ArrayList<Story> searchStoriesByName(String keyword, String fromDate, String toDate) {
		ArrayList<Story> stories = new ArrayList<Story>();
		PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			keyword = "%"+keyword+"%";
			String sqlQuery = "SELECT s.StoryID, s.Label, s.WikipediaURL, j.eventsCount, j.startDate, j.endDate " +
					"FROM (SELECT r.StoryID, count(e.EventID) as eventsCount, min(e.Date) as startDate, max(e.Date) as endDate " +
							"FROM Event_Story_Relation r JOIN Event e on e.EventID = r.EventID ";
			if (fromDate!=null && toDate!=null) 
				sqlQuery+= "WHERE e.Date >= ? AND e.Date <= ? ";
			
			sqlQuery+= "GROUP BY r.StoryID) j " +
					"JOIN NewsStory s on j.StoryID = s.StoryID WHERE s.Label LIKE ?  ";
					
			pstmt = openConnection().prepareStatement(sqlQuery);
			
			if (fromDate!=null && toDate!=null) {
				pstmt.setString(1, fromDate);
				pstmt.setString(2, toDate);
				pstmt.setString(3, keyword);
			}else{
				pstmt.setString(1, keyword);
			}
			
			result = pstmt.executeQuery();
			
			Story story = null;
			ArrayList<Event> dummyEvents;
	        while(result.next()){
	        	story = new Story();
	        	story.setId(result.getString("StoryID"));
	        	story.setName(result.getString("Label"));
	        	story.setWikipediaUrl(result.getString("WikipediaURL"));
	        	
	        	dummyEvents = new ArrayList<>();
	        	for(int i=0; i< result.getInt("eventsCount"); i++){
	        		dummyEvents.add(new Event());
	        	}
	        	story.setEvents(dummyEvents);
	        	story.setStartDate(result.getDate("startDate"));
	        	story.setEndDate(result.getDate("endDate"));
	        	
	        	if(story.getEvents().size() > 0){
	        		stories.add(story);
	        	}
	        }
		}catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
        
		Collections.sort(stories, Collections.reverseOrder());
		
		return stories;
	}
	
	
	
	
	
//	public ArrayList<Story> searchStoriesByName1(String query, String fromDate, String toDate) {
//		ArrayList<Story> stories = new ArrayList<Story>();
//		PreparedStatement pstmt = null;
//		ResultSet result = null;
//		try {
//			query = "%"+query+"%";
//			pstmt = openConnection().prepareStatement("select StoryID, Label, WikipediaURL from NewsStory where Label like ? ");
//			pstmt.setString(1, query);	
//			
//			result = pstmt.executeQuery();
//			Story story = null;
//	        while(result.next()){
//	        	story = new Story();
//	        	story.setId(result.getString("StoryID"));
//	        	story.setName(result.getString("Label"));
//	        	story.setWikipediaUrl(result.getString("WikipediaURL"));
//	        	
//	        	story = getStoryStatiscis(story);
//	        	
//	        	if(story.getEvents().size() > 0){
//	        		if(fromDate!=null && toDate!=null){
//	        			if(
//	        					story.getStartDate().equals(Date.valueOf(fromDate)) 
//	        					|| story.getStartDate().equals(Date.valueOf(toDate))
//	        					|| (story.getStartDate().before(Date.valueOf(toDate)) && story.getStartDate().after(Date.valueOf(fromDate)))
//	        					|| story.getEndDate().equals(Date.valueOf(fromDate))
//	        					|| story.getEndDate().equals(Date.valueOf(toDate))
//	        					|| (story.getEndDate().before(Date.valueOf(toDate)) && story.getEndDate().after(Date.valueOf(fromDate)))
//	        			  ){
//	        				stories.add(story);
//	        			}
//	        		}else{
//	        			stories.add(story);
//	        		}
//	        	}
//	        }
//		}catch (SQLException e) {			
//			e.printStackTrace();
//		}finally{
//			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
//			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
//		}
//        
//		Collections.sort(stories, Collections.reverseOrder());
//		
//		return stories;
//	}

	
//	NOTE: this method returns start and end date + number of events, BUT it does not return the actual list of events!!
	private Story getStoryStatiscis(Story story) {
		PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			pstmt = openConnection().prepareStatement("SELECT count(e.EventID) as eventsCount, min(e.Date) as startDate, max(e.Date) as endDate " +
					"from Event_Story_Relation r join Event e on e.EventID = r.EventID WHERE r.StoryID= ? GROUP BY r.StoryID ");
			pstmt.setString(1, story.getId());	
			result = pstmt.executeQuery();
	        while(result.next()){
	        	ArrayList<Event> dummyEvents = new ArrayList<>();
	        	for(int i=0; i< result.getInt("eventsCount"); i++){
	        		dummyEvents.add(new Event());
	        	}
	        	story.setEvents(dummyEvents);
	        	story.setStartDate(result.getDate("startDate"));
	        	story.setEndDate(result.getDate("endDate"));
	        }
		}catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
		return story;
	}
	
	private Entity getEntityStatiscis(Entity entity) {
		PreparedStatement pstmt = null;
		ResultSet result = null;
		try {
			pstmt = openConnection().prepareStatement("SELECT count(e.EventID) as eventsCount, min(e.Date) as startDate, max(e.Date) as endDate " +
					"from Event_Entity_Relation r join Event e on e.EventID = r.EventID WHERE r.WikiRefID= ? GROUP BY r.WikiRefID ");
			pstmt.setString(1, entity.getId());	
			result = pstmt.executeQuery();
	        while(result.next()){
	        	ArrayList<Event> dummyEvents = new ArrayList<>();
	        	for(int i=0; i< result.getInt("eventsCount"); i++){
	        		dummyEvents.add(new Event());
	        	}
	        	entity.setEvents(dummyEvents);
	        	entity.setStartDate(result.getDate("startDate"));
	        	entity.setEndDate(result.getDate("endDate"));
	        }
		}catch (SQLException e) {			
			e.printStackTrace();
		}finally{
			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
		}
		return entity;
	}

//	public ArrayList<Story> searchStoriesByName(String query, String fromDate, String toDate) {
//		ArrayList<Story> stories = new ArrayList<Story>();
//		PreparedStatement pstmt = null;
//		ResultSet result = null;
//		try {
//			query = "%"+query+"%";
//			pstmt = openConnection().prepareStatement("select StoryID, Label, WikipediaURL from NewsStory where Label like ? ");
//			pstmt.setString(1, query);	
//			
//			result = pstmt.executeQuery();
//			Story story = null;
//	        while(result.next()){
//	        	story = new Story();
//	        	story.setId(result.getString("StoryID"));
//	        	story.setName(result.getString("Label"));
//	        	story.setWikipediaUrl(result.getString("WikipediaURL"));
//	        	for (Event event: getEventsByStory(story.getId())){
//	        		if(fromDate==null || toDate==null){
//	        			story.addEvent(new Event(event));
//	        		}else{
//	        			if(event.getDate().equals(Date.valueOf(fromDate))
//		        				|| event.getDate().equals(Date.valueOf(toDate))
//	        					|| (event.getDate().after(Date.valueOf(fromDate)) && event.getDate().before(Date.valueOf(toDate)))
//		        				)
//		        		story.addEvent(new Event(event));	
//	        		}
//	        	}
//	        	if(story.getEvents().size() > 0){
//	        		stories.add(story);
//	        	}
////	        		if(fromDate!=null && toDate!=null){
////	        			if(
////	        					story.getStartDate().equals(Date.valueOf(fromDate)) 
////	        					|| story.getStartDate().equals(Date.valueOf(toDate))
////	        					|| (story.getStartDate().before(Date.valueOf(toDate)) && story.getStartDate().after(Date.valueOf(fromDate)))
////	        					|| story.getEndDate().equals(Date.valueOf(fromDate))
////	        					|| story.getEndDate().equals(Date.valueOf(toDate))
////	        					|| (story.getEndDate().before(Date.valueOf(toDate)) && story.getEndDate().after(Date.valueOf(fromDate)))
////	        			  ){
////	        				stories.add(story);
////	        			}
////	        		}else{
////	        			stories.add(story);
////	        		}
////	        	}
//	        		
//	        }
//		}catch (SQLException e) {			
//			e.printStackTrace();
//		}finally{
//			if (result != null) try { result.close(); } catch (SQLException e) {e.printStackTrace();}
//			if (pstmt != null)  try { pstmt.close();  } catch (SQLException e) {e.printStackTrace();}
//		}
//        
//		Collections.sort(stories, Collections.reverseOrder());
//		
//		return stories;
//	}
	
	
}