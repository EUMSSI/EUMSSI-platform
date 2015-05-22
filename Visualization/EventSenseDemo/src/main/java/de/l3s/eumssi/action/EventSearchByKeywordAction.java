package de.l3s.eumssi.action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.ServletRequestAware;

import com.opensymphony.xwork2.ActionSupport;

import de.l3s.eumssi.dao.DatabaseManager;
import de.l3s.eumssi.model.*;
import de.l3s.eumssi.service.ContentHandling;
import de.l3s.eumssi.service.SearchManager;

public class EventSearchByKeywordAction  extends ActionSupport implements ServletRequestAware {
	
	private static final long serialVersionUID = 1L;
	private ContentHandling helper = new ContentHandling();
	private DatabaseManager db = new DatabaseManager();
	private SearchManager search = new SearchManager();
	private String query;
	private int searchway;
	
	private Object contextPath;
	private boolean useContextPath;
	private String Location;

	private String itemType;
	private String itemName;
	private int searchsize;
	private String fromDate;
	private String toDate;
	private boolean hasWikipediaUrl;
	private String wikipediaUrl;
	
	private ArrayList<Category> relatedCategories = null;
	private ArrayList<Story> relatedStories=null;
	private ArrayList<Story> stories=null;
	private ArrayList<Event> events;
	private ArrayList<Entity> entities = null;
	private ArrayList<Entity> topEntities = null;
	
	private javax.servlet.http.HttpServletRequest request;
	@Override
	
	 public void setServletRequest(HttpServletRequest request) {
        this.request = request;
    }
	
	
	
	public String eventSearch() throws Exception {
		if (ServletActionContext.getRequest().getServerName().equals("eventsense.l3s.de")){
			contextPath = null;
			useContextPath = false;
		}else{
			contextPath = ServletActionContext.getServletContext().getContextPath();
			useContextPath = true;
		}
		
		try{
		
			itemType = "Query";
			itemName = query;
			hasWikipediaUrl = false;
			wikipediaUrl = "";
			
			
			if(query == null || query.isEmpty()){
				query = "*";
			}
			
			events = search.queryEventsByKeyword_Solr(query, fromDate, toDate);
			
//			Collections.sort(events);
			
			searchsize = events.size();
			
			// 1. add the links for each entity mention
			for (Event e: events){
				e = helper.addEntityLinks(e, contextPath);	        			
			}
			
			// 2. get related categories
			relatedCategories = helper.getCategoryList(events);
			
			// 3. get related stories
			relatedStories = helper.getStoryList(events);
			
			//4. get top entities
			topEntities = helper.getEntities(events, 20);
			
		}catch(Exception e){
			e.printStackTrace();	
		}finally{
			db.closeConnection();
		}
			
		return "QueryTimelineView";
	}
	
	
	
	
	
	public String storySearch() throws Exception {
		if (ServletActionContext.getRequest().getServerName().equals("eventsense.l3s.de")){
			contextPath = null;
			useContextPath = false;
		}else{
			contextPath = ServletActionContext.getServletContext().getContextPath();
			useContextPath = true;
		}
		
		try{
			
			if(query == null || query.isEmpty()){
				query = "*";
			}
			
			events = search.queryEventsByKeyword_Solr(query, fromDate, toDate);
			
			stories = helper.getStoryList(events);	
			
			//TODO: search in story name
		
		}catch(Exception e){
			e.printStackTrace();	
		}finally{
			db.closeConnection();
		}
		
		return "StoryListView";
	}
	
	
	
	
	
	
	public String entitySearch() {
		if (ServletActionContext.getRequest().getServerName().equals("eventsense.l3s.de")){
			contextPath = null;
			useContextPath = false;
		}else{
			contextPath = ServletActionContext.getServletContext().getContextPath();
			useContextPath = true;
		}
		
		try{
			if(query == null || query.isEmpty()){
				query = "*";
			}
			
			events = search.queryEventsByKeyword_Solr(query, fromDate, toDate);
			
			setEntities(helper.getEntities(events, -1));	
		
		}catch(Exception e){
			e.printStackTrace();	
		}finally{
			db.closeConnection();
		}
		
		return "EntityListView";
	}
	

	
	
	
	
	
	
	public String getQuery() {
		return query;
	}


	public void setQuery(String query) {
		this.query = query;
	}


	public int getSearchway() {
		return searchway;
	}


	public void setSearchway(int searchway) {
		this.searchway = searchway;
	}

	public int getSearchsize() {
		return searchsize;
	}



	public void setSearchsize(int searchsize) {
		this.searchsize = searchsize;
	}



	public ArrayList<Category> getRelatedCategories() {
		return relatedCategories;
	}



	public void setRelatedCategories(ArrayList<Category> categories) {
		this.relatedCategories = categories;
	}

	public ArrayList<Story> getRelatedStories() {
		return relatedStories;
	}

	public void setRelatedStories(ArrayList<Story> mystories) {
		this.relatedStories = mystories;
	}

	public ArrayList<Story> getStories() {
		return stories;
	}

	public void setStories(ArrayList<Story> stories) {
		this.stories = stories;
	}

	public javax.servlet.http.HttpServletRequest getRequest() {
		return request;
	}

	public void setRequest(javax.servlet.http.HttpServletRequest request) {
		this.request = request;
	}

	public ArrayList<Event> getEvents() {
		return events;
	}



	public void setEvents(ArrayList<Event> events) {
		this.events = events;
	}



	public String getFromDate() {
		return fromDate;
	}



	public void setFromDate(String qfromDate) {
		this.fromDate = qfromDate;
	}



	public String getToDate() {
		return toDate;
	}



	public void setToDate(String qtoDate) {
		this.toDate = qtoDate;
	}

	public Object getContextPath() {
		return contextPath;
	}

	public void setContextPath(Object contextPath) {
		this.contextPath = contextPath;
	}

	public boolean isUseContextPath() {
		return useContextPath;
	}

	public void setUseContextPath(boolean useContextPath) {
		this.useContextPath = useContextPath;
	}

	public String getLocation() {
		return Location;
	}

	public void setLocation(String location) {
		Location = location;
	}

	public ArrayList<Entity> getTopEntities() {
		return topEntities;
	}

	public void setTopEntities(ArrayList<Entity> topentity) {
		this.topEntities = topentity;
	}

	public boolean isHasWikipediaUrl() {
		return hasWikipediaUrl;
	}

	public void setHasWikipediaUrl(boolean hasWikipediaUrl) {
		this.hasWikipediaUrl = hasWikipediaUrl;
	}

	public String getWikipediaUrl() {
		return wikipediaUrl;
	}

	public void setWikipediaUrl(String wikipediaUrl) {
		this.wikipediaUrl = wikipediaUrl;
	}

	public String getItemType() {
		return itemType;
	}

	public void setItemType(String itemType) {
		this.itemType = itemType;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}



	public ArrayList<Entity> getEntities() {
		return entities;
	}



	public void setEntities(ArrayList<Entity> entities) {
		this.entities = entities;
	}

	



}
