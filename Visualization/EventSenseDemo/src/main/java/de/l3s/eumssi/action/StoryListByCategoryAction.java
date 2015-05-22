package de.l3s.eumssi.action;

import java.util.ArrayList;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.Action;

import de.l3s.eumssi.dao.DatabaseManager;
import de.l3s.eumssi.model.Story;
import de.l3s.eumssi.service.ContentHandling;

public class StoryListByCategoryAction implements Action {
	
	private ContentHandling helper = new ContentHandling();

	public ContentHandling getHelper() {
		return helper;
	}


	public void setHelper(ContentHandling helper) {
		this.helper = helper;
	}
	
	private String categoryId;
	private String fromDate;
	private String toDate;
	
	private ArrayList<Story> stories=null;
	
	private Object contextPath;
	private boolean useContextPath;


	public String execute() throws Exception{
		
		if (ServletActionContext.getRequest().getServerName().equals("wikitimes.l3s.de")){
			contextPath = null;
			useContextPath = false;
		}else{
			contextPath = ServletActionContext.getServletContext().getContextPath();
			useContextPath = true;
		}
		
		DatabaseManager db = null;
		try {
			db = new DatabaseManager();
			if(fromDate == null || toDate == null)
				stories = helper.getStoryList(db.getEventsByCategory(categoryId, null, null));
			else if (fromDate.isEmpty() || toDate.isEmpty())
				stories = helper.getStoryList(db.getEventsByCategory(categoryId, null, null));
			else
				stories = helper.getStoryList(db.getEventsByCategory(categoryId, fromDate, toDate));
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			if (db!=null) db.closeConnection();
		}
		
		
		return "StoryListView";
		
	}
	


	public ArrayList<Story> getStories() {
		return stories;
	}


	public void setStories(ArrayList<Story> stories) {
		this.stories = stories;
	}


	public String getToDate() {
		return toDate;
	}


	public void setToDate(String toDate) {
		this.toDate = toDate;
	}


	public String getFromDate() {
		return fromDate;
	}


	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
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


	public String getCatgeoryId() {
		return categoryId;
	}


	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}

	
	
	
}
