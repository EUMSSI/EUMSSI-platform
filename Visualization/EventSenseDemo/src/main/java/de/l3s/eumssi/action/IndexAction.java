package de.l3s.eumssi.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.Action;

import de.l3s.eumssi.dao.DatabaseManager;
import de.l3s.eumssi.dao.SolrDBManager;
import de.l3s.eumssi.model.Category;
import de.l3s.eumssi.model.Entity;
import de.l3s.eumssi.model.Event;
import de.l3s.eumssi.model.Story;
import de.l3s.eumssi.service.ContentHandling;

public class IndexAction implements Action{
	
	private SolrDBManager db = new SolrDBManager();
	private int eventsize = 0;
	private int categorysize = 0;
	private int storysize = 0;
	private int entitysize = 0;
	private String fromDate;
	private String endDate;
	private ArrayList<Event> finEvents;
	private Object contextPath;
	private boolean useContextPath;
	private int size=0;
	
	private String date;
	private ArrayList<Event> events=new ArrayList<Event>();
	private int searchsize;
	private ArrayList<Category> relatedCategories;
	private ArrayList<Story> relatedStories;
	private ArrayList<Entity> topEntities = null;	
	
	// for auto complete of entities
	private ArrayList<Entity> entities = null;	
	private Map<String, String> entityNames = null;
	private Map<String, String> storyNames = null;
	
	@Override
	public String execute() throws Exception {
		
		
		if (ServletActionContext.getRequest().getServerName().equals("eventsense.l3s.de")){
			contextPath = null;
			useContextPath = false;
		}else{
			contextPath = ServletActionContext.getServletContext().getContextPath();
			useContextPath = true;
		}
		
//		try{
//		
//		eventsize = db.getEventsCount() ;
////		categorysize = db.getCategoriesCount();
//		storysize = db.getStoriesCount();
//		entitysize = db.getEntitiesCount();
//		}catch (Exception ex){
//			ex.printStackTrace();
//		}finally{
//			db.closeConnection();
//		}
		
//		AutoComplete of Entity names:
//		entities = db.getEntities();
//		entitiesNames = new HashMap<String, String>(); 
//		for(Entity entity: entities)
//			entitiesNames.put(entity.getName(), entity.getId());
		
//		entityNames = WikiTimesUtils.getEntities();
		
		
		
		
		
//		 Calendar ca = Calendar.getInstance();
//	     String year = Integer.toString(ca.get(Calendar.YEAR));//????????
//	     String month= Integer.toString(ca.get(Calendar.MONTH)+1);//???????? 
//	     String day=Integer.toString(ca.get(Calendar.DATE));//??????
//	     
//	     if(Integer.parseInt(day)<10){
//	    	 day="0"+day;
//	     }
//	     
//	     if(Integer.parseInt(month)<10){
//	    	 month="0"+month;
//	     }
//	     
//	     endDate= year+"-"+month+"-"+day;
//	     
//	     Date date = new Date();
//	     int fyear=Integer.parseInt(new SimpleDateFormat("yyyy").format(date));
//	     int fmonth=Integer.parseInt(new SimpleDateFormat("MM").format(date));
//	     int fday=Integer.parseInt(new SimpleDateFormat("dd").format(date))-6;
//	     
//	     if(fday<1){
//	     fmonth-=1;
//	     if(fmonth==0){
//	    	fyear-=1;fmonth=12;
//	    }
//	    if(fmonth==4||fmonth==6||fmonth==9||fmonth==11){
//	    	fday=30+fday;
//	    }else if(fmonth==1||fmonth==3||fmonth==5||fmonth==7||fmonth==8||fmonth==10||fmonth==12){
//	    	fday=31+fday;
//	    }else if(fmonth==2){
//	    	if(fyear%400==0||(fyear %4==0&&fyear%100!=0))
//	    		fday=29+fday;
//	    	else fday=28+fday;
//	       }     
//	    }
//	    String y = fyear+"";
//	    String m ="";
//	    String d ="";
//	    if(fmonth<10) m = "0"+fmonth;
//	    else m=fmonth+"";
//	    if(fday<10) 
//	    	d = "0"+fday;
//	    else d = fday+"";
//	    fromDate=y+"-"+m+"-"+d;
////	    finEvents=helper.returnEventsByDate(fromDate,endDate);
//	    finEvents = db.getEvents(fromDate, endDate);
//	    size=finEvents.size();


//		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
//		Calendar start = new GregorianCalendar();
//		Calendar end = start;
//		start.add(Calendar.MONTH, -6);
//		
//	    int window = 30;
//	    while(events.size() == 0 && window >0){
//	    	start.add(Calendar.DATE, -1);
//	    	end.add(Calendar.DATE, -1);
//	    	fromDate = formatter.format(start.getTime());
//	    	endDate = formatter.format(end.getTime());
////		    events = db.getEventsByDate(endDate);
//		    events = db.getEvents(fromDate, endDate);
//		    window--;
//	    }
//		
//		setSearchsize(events.size());
//		
//		// prepare the output:
//		// 1. add the links for each entity mention
//		for (Event e: events){
//			e = helper.addEntityLinks(e, contextPath);	        			
//		}
//					
//		// 2. get related categories
//		relatedCategories = helper.getCategoryList(events);
//				
//		// 3. get related stories
//		relatedStories = helper.getStoryList(events);
//		
//		//4. get top entities
//		setTopEntities(helper.getEntities(events, 20));
	    
	    
	    
	    return "success";
	}



	public SolrDBManager getDB() {
		return db;
	}



	public void setDB(SolrDBManager _db) {
		this.db = _db;
	}
	


	public String getFromDate() {
		return fromDate;
	}



	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}



	public String getEndDate() {
		return endDate;
	}



	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}



	public int getSize() {
		return size;
	}



	public void setSize(int size) {
		this.size = size;
	}



	public int getEventsize() {
		return eventsize;
	}



	public void setEventsize(int eventsize) {
		this.eventsize = eventsize;
	}



	public int getCategorysize() {
		return categorysize;
	}



	public void setCategorysize(int categorysize) {
		this.categorysize = categorysize;
	}



	public int getStorysize() {
		return storysize;
	}



	public void setStorysize(int storysize) {
		this.storysize = storysize;
	}



	public int getEntitysize() {
		return entitysize;
	}



	public void setEntitysize(int entitysize) {
		this.entitysize = entitysize;
	}



	public ArrayList<Event> getFinEvents() {
		return finEvents;
	}



	public void setFinEvents(ArrayList<Event> finEvents) {
		this.finEvents = finEvents;
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


	public void setEvents(ArrayList<Event> events) {
		this.events = events;
	}



	public ArrayList<Category> getRelatedCategories() {
		return relatedCategories;
	}



	public void setRelatedCategories(ArrayList<Category> relatedCategories) {
		this.relatedCategories = relatedCategories;
	}



	public ArrayList<Story> getRelatedStories() {
		return relatedStories;
	}



	public void setRelatedStories(ArrayList<Story> relatedStories) {
		this.relatedStories = relatedStories;
	}



	public ArrayList<Entity> getTopEntities() {
		return topEntities;
	}



	public void setTopEntities(ArrayList<Entity> topEntities) {
		this.topEntities = topEntities;
	}



	public int getSearchsize() {
		return searchsize;
	}



	public void setSearchsize(int searchsize) {
		this.searchsize = searchsize;
	}




	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}



	public ArrayList<Entity> getEntities() {
		return entities;
	}



	public void setEntities(ArrayList<Entity> entities) {
		this.entities = entities;
	}



	public HashMap<String, String> getEntityNames() {
		return (HashMap<String, String>) entityNames;
	}



	public void setEntityNames(HashMap<String, String> entitiesNames) {
		this.entityNames = entitiesNames;
	}



	public Map<String, String> getStoryNames() {
		return storyNames;
	}



	public void setStoryNames(Map<String, String> storyNames) {
		this.storyNames = storyNames;
	}
	
	public ArrayList<Event> getEvents() {
		return events;
	}
	
}
