package de.l3s.eumssi.action;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.Action;

import de.l3s.eumssi.dao.DatabaseManager;
import de.l3s.eumssi.model.Category;
import de.l3s.eumssi.service.ContentHandling;

public class ShowAllCategoryAction implements Action{

	private ContentHandling helper = new ContentHandling();
	private DatabaseManager db = new DatabaseManager(); 
	private ArrayList<Category> categories = new ArrayList<Category>();
	private ArrayList<String> catset = null;
	private Object contextPath;
	private boolean useContextPath;
	
	
	

	@Override
	public String execute() throws Exception {
		
		
		if (ServletActionContext.getRequest().getServerName().equals("wikitimes.l3s.de")){
			contextPath = null;
			useContextPath = false;
		}else{
			contextPath = ServletActionContext.getServletContext().getContextPath();
			useContextPath = true;
		}
		categories= db.getCategories();
		
		return "ShowCategory";
	}
	
	
	
	public ContentHandling getHelper() {
		return helper;
	}

	public void setHelper(ContentHandling helper) {
		this.helper = helper;
	}

	



	public ArrayList<Category> getCategories() {
		return categories;
	}



	public void setCategories(ArrayList<Category> categories) {
		this.categories = categories;
	}



	public ArrayList<String> getCatset() {
		return catset;
	}

	public void setCatset(ArrayList<String> catset) {
		this.catset = catset;
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
}
