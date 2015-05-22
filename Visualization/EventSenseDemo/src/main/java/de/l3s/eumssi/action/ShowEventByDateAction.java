/**
 * action that returns all items given one date
 */
package de.l3s.eumssi.action;

import java.util.ArrayList;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.Action;

import de.l3s.eumssi.dao.SolrDBManager;
import de.l3s.eumssi.model.Event;

public class ShowEventByDateAction implements Action{
	
	private SolrDBManager db = new SolrDBManager();
	
	private String storyDate;
	private ArrayList<Event> events=new ArrayList<Event>();
	private Object contextPath;
	private boolean useContextPath;
	
	private String itemType;
	private String itemName;
	private int searchsize;
	private String fromDate;
	private String toDate;
	private boolean hasWikipediaUrl;
	private String wikipediaUrl;
	
	
	@Override
	public String execute() throws Exception {
			
		if (ServletActionContext.getRequest().getServerName().equals("eventsense.l3s.de")){
			contextPath = null;
			useContextPath = false;
		}else{
			contextPath = ServletActionContext.getServletContext().getContextPath();
			useContextPath = true;
		}
		
		try{
		
			itemType = "Events of the Day";
			itemName = storyDate;
			hasWikipediaUrl = false;
			wikipediaUrl = "";
			fromDate = storyDate;
			toDate = storyDate;
			
			events = db.getItemsByDate(storyDate, "*", "meta.source.headline");
			
			searchsize = events.size();
			
		}catch(Exception e){
			e.printStackTrace();
		}finally{
		}
					
		return "TimelineView";
	}

	
	
	
	
	public String getStoryDate() {
		return storyDate;
	}

	public void setStoryDate(String storyDate) {
		this.storyDate = storyDate;
	}

	public ArrayList<Event> getEvents() {
		return events;
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

	public int getSearchsize() {
		return searchsize;
	}

	public void setSearchsize(int searchsize) {
		this.searchsize = searchsize;
	}

	public String getFromDate() {
		return fromDate;
	}

	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}

	public String getToDate() {
		return toDate;
	}

	public void setToDate(String toDate) {
		this.toDate = toDate;
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
	
	
}
