/**
 * db manager for mongodb 
 * 
 * gtran@l3s.de
 * Nov 28 2014
 */
package de.l3s.eumssi.dao;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Properties;
import java.util.TreeMap;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.tuple.Pair;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.SolrQuery.ORDER;
import org.apache.solr.client.solrj.impl.HttpSolrServer;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocumentList;
import org.apache.struts2.ServletActionContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import de.l3s.eumssi.core.EventDistribution;
import de.l3s.eumssi.core.StoryDistribution;
import de.l3s.eumssi.model.Event;
import de.l3s.eumssi.model.Reference;
import de.l3s.lemma.lemma;


class Gram {
	String u, v;
	int frq;
	public Gram (String word1, String word2, int count) {
		u = word1;
		v = word2;
		frq = count;
	}
	
	public String getWord1() { return u;}
	public String getWord2(){ return v;}
}
public class SolrDBManager {
	HttpSolrServer solr;
	public Properties conf;
	public SolrDBManager() {
		//lemma.init();
		try {
			loadConfiguration();
		} catch (Exception e) {
			e.printStackTrace();
		}
		solr = new HttpSolrServer("http://eumssi.cloudapp.net/Solr_EUMSSI/content_items/");
	}
	
	
	public void loadConfiguration() throws FileNotFoundException, IOException{
		conf = new Properties();
		ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
		conf.load(classLoader.getResourceAsStream("DBHandler.properties"));		
	}
	
	
	 public JSONObject toJSONObject(Event event, Object contextPath) {
			JSONObject eventObject = null;
			try {
				eventObject = new JSONObject();
				eventObject.put("startDate", new SimpleDateFormat("yyyy,MM,dd").format(event.getDate()));
				eventObject.put("endDate", new SimpleDateFormat("yyyy,MM,dd").format(event.getDate()));
				eventObject.put("headline", event.getHeadline());
				String text = "";
				if (event.getStory()!=null){
					 if (ServletActionContext.getRequest().getServerName().equals("wikitimes.l3s.de")){        			
			    			text = "<a href=\"/storyTimeline.action?storyId=" +event.getStory().getId() + "\">" +
			    					  		"<font color=\"#0040FF\" >" + event.getStory().getName()+ "</font>" +
			    					  	"</a>";
			    		}else{        			
			    			text = "<a href=\""+contextPath+"/storyTimeline.action?storyId=" +event.getStory().getId()+"\">" +
			    							"<font color=\"#0040FF\" >" + event.getStory().getName()+ "</font>" +
			    						"</a>" ;
			    		}
//					text = event.getStory().getName();
					//storyTimeline.action?storyId=177
				}
				eventObject.put("text", text);
//				if(event.getReferences()!=null){
//					if(!event.getReferences().isEmpty()){
//						JSONObject asset = new JSONObject();
//						asset.put("media", event.getReferences().get(0).getUrl());
//						asset.put("caption", event.getReferences().get(0).getSource());
//						eventO.put("asset", asset);
//					}
//				}
			} catch (JSONException e) {
				e.printStackTrace();
			}
			return eventObject;
		}
	 
	public JSONObject getTimelineJSON(List<Event> events, Object contextPath){
    	
    	JSONObject timeline = null;
    	
    	List<JSONObject> eventsJSObjects = new ArrayList<JSONObject>();
    	for (Event event: events){
    		eventsJSObjects.add(toJSONObject(event, contextPath));
    	}
    	
		try {
			JSONObject content = new JSONObject();
			content.put("headline:", "The Main Timeline Headline");
			content.put("type", "default");
			content.put("text", "<p>Intro body text goes here, some HTML is ok</p>\\");
			content.put("date", new JSONArray(eventsJSObjects));
			timeline = new JSONObject();
			timeline.put("timeline", content);
		} catch (JSONException e1) {
			e1.printStackTrace();
		}
		
		return timeline;
    }
	
	public void test() throws SolrServerException {
		SolrQuery query = new SolrQuery();
		query.setQuery("source:\"Youtube-video-GeneralChannel\"");
		 
		QueryResponse response = solr.query(query);
	    SolrDocumentList results = response.getResults();
	    System.out.println(results.size());
	    for (int i = 0; i < 10; ++i) {
	      System.out.println(results.get(i).getFieldValue("meta.source.rtspHigh"));
	    }
	}
	
	public ArrayList<String> getField(String source, String field) {
		ArrayList<String> array_results = new ArrayList<String> ();
		SolrQuery query = new SolrQuery();
		query.setQuery("*:*");
		query.addFilterQuery("source:" + source);
		query.setFields(field);
		query.setRows(20);
		System.out.println(query.toString());
		QueryResponse response;
		try {
			response = solr.query(query);
			 SolrDocumentList results = response.getResults();
		    System.out.println(results.size());
		    for (int i = 0; i < results.size(); ++i) {
		      array_results.add(results.get(i).getFieldValue(field).toString());
		    }
		} catch (SolrServerException e) {
			e.printStackTrace();
		}
	    
	    return array_results;
	}
	
	public String formulateQueryMultipleFields(ArrayList<String> searchfields, String keyword) {
		ArrayList<String> qstr = new ArrayList<String> ();
		for (String s: searchfields) qstr.add(String.format("%s:\"*%s*\"\t", s, keyword));
		String[] tmp = (String[]) qstr.toArray(new String[qstr.size()]);
		String q = StringUtils.join(tmp, " OR ");
		return q;
	}
	
	public StoryDistribution getDistribution(String keyword, ArrayList<String> sources, ArrayList<String> searchfields, int maxNumOfEvents) {
		SolrQuery query = new SolrQuery();
		String source = formulateQuerySimple(sources);
		
		if (keyword==null || keyword.equals("")) {
			for (String searchField: searchfields) {
				query.setQuery(String.format("%s:*\t", searchField));
			}
			System.out.println("debug: null/empty query");
		}
		else {
			String queryString = formulateQueryMultipleFields(searchfields, keyword);
			query.setQuery(queryString);
		}
		query.addFilterQuery("source:" + source);
		query.addFilterQuery("meta.source.inLanguage:\"en\"");
		query.setFields( "meta.source.datePublished");
		for (String searchField: searchfields) {query.addField(searchField);}
		
		query.setRows(maxNumOfEvents);
		System.out.println(query.toString());
		QueryResponse response;
		StoryDistribution sd = new StoryDistribution();
		try {
			response = solr.query(query);
			 SolrDocumentList results = response.getResults();
		    System.out.println(results.size());
		    for (int i = 0; i < results.size(); ++i) {
		    	StringBuffer sb = new StringBuffer();
		    	for (String searchField: searchfields) {
		    		Object fieldVal = results.get(i).getFieldValue(searchField);
		    		if (fieldVal!=null) {
			    		sb.append(fieldVal.toString());
			    		sb.append("\n");
		    		}
		    	}
		    	String fieldText = sb.toString();
		    	
		    	int len = Math.min(fieldText.length(), 1000);
		    	fieldText = fieldText.substring(0, len-1);
		    	Date date = (Date) results.get(i).getFieldValue("meta.source.datePublished");
		    	if (fieldText!=null) {
		    		EventDistribution e = new EventDistribution(fieldText, date);
		    		sd.index(e);
		    	}
		    }
		} catch (SolrServerException e) {
			e.printStackTrace();
		}
	    return sd;
	}
	
	private String formulateQuerySimple(ArrayList<String> sources) {
		ArrayList<String> qfilter = new ArrayList<String> ();
		for (String s: sources) {
			if (s.equals("NewsArticle")) {
				qfilter.add("Eumssi-News-Crawler");
				qfilter.add("DW-en_GB");
			}
			if (s.equals("Video")) {
				qfilter.add("DW-vid_EN");
			}
		}
		String[] tmp = (String[]) qfilter.toArray(new String[qfilter.size()]);
		String strqfilter = StringUtils.join(tmp, " OR ");
		System.out.println("Sources for filter: " + strqfilter);
		return "(" + strqfilter + ")";
	}
	/*
	 * get most recent n items 
	 */
	public List<Event> searchByKeyword(String keyword, ArrayList<String> sources, ArrayList<String> searchfields, int n_items) {
		HashSet<String> selectedTitles = new HashSet<String> ();
		ArrayList<Event> itemList = new ArrayList<Event> ();
		SolrQuery query = new SolrQuery();
		String source = formulateQuerySimple(sources);
		
		if (keyword==null || keyword.equals("")) {
			for (String searchField: searchfields) {
				query.setQuery(String.format("%s:*\t", searchField));
			}
			System.out.println("debug: null/empty query");
		}
		else {
			String queryString = formulateQueryMultipleFields(searchfields, keyword);
			query.setQuery(queryString);
		}
		query.addFilterQuery("source:" + source);
		query.addFilterQuery("meta.source.inLanguage:\"en\"");
		//--------------------------------------------------------------------
		query.setFields("meta.source.datePublished", "meta.source.headline", "meta.source.url", "meta.source.httpHigh", 
				"meta.source.publisher");
		for (String searchField: searchfields) {query.addField(searchField);}
		
		
		query.addFilterQuery("meta.source.inLanguage:\"en\"");
		query.setSort("meta.source.datePublished", ORDER.desc);
		query.setRows(n_items);
		System.out.println("SearchByKeyword " + query.toString());
		QueryResponse response;

		try {
			response = solr.query(query);
			 SolrDocumentList results = response.getResults();
		    for (int i = 0; i < results.size(); ++i) {
		    	StringBuffer sb = new StringBuffer();
		    	for (String searchField: searchfields) {
		    		Object fieldVal = results.get(i).getFieldValue(searchField);
		    		if (fieldVal!=null) {
			    		sb.append(fieldVal.toString());
			    		sb.append("\n");
		    		}
		    	}
		    	String fieldText = sb.toString();
		    	String headline = results.get(i).getFieldValue("meta.source.headline").toString();
		    	headline = clean(headline);
		    	String url = null;
		    	Object uObj = results.get(i).getFieldValue("meta.source.url");
		    	if (uObj==null) uObj = results.get(i).getFieldValue("meta.source.httpHigh");
		    	
		    	if (uObj!= null) {
		    		url  = uObj.toString(); 
		    	}
		    	String publisher = "";
		    	Object pObj = results.get(i).getFieldValue("meta.source.publisher");
		    	if (pObj!=null)
		    		publisher = pObj.toString();
		    	else {
		    		publisher = "Deutsche Welle";
		    	}
		    	
		    	Reference ref =  null;
		    	if (url != null) {
		    		ref = new Reference(url, url, publisher);
		    	}
		    	
		    	Date date = (Date) results.get(i).getFieldValue("meta.source.datePublished");
		    	java.sql.Date sqldate = new java.sql.Date(date.getYear(), date.getMonth(), date.getDate());
		    	
		    	
		    	Event e = new Event();
		    	e.setDescription(fieldText);
		    	e.setDate(sqldate);
		    	e.setHeadline(headline);
		    	if (ref!=null) e.addReference(ref);
		    	if (e.getDate().toString().compareTo("2050")<0) { //ensure there is not a date mistake when adding events to show
		    		if (!selectedTitles.contains(headline)) {
		    			itemList.add(e);
		    			selectedTitles.add(headline);
		    		}
		    	}
		    }
		} catch (SolrServerException ex) {
			ex.printStackTrace();
		}
	    return itemList;
	}
	
	
	
	public String clean(String headline) {
		int p = headline.indexOf("|");
		if (p>0) {
			return headline.substring(0, p);
		}
		return headline;
	}


	/**
	 * get all items on the given date from db
	 * @param storyDate in from of yyyy-mm-dd
	 * @return
	 */
	public ArrayList<Event> getItemsByDate(String storyDate, String source, String searchfield) {
		int n_items = 100; // max-output of a date
		ArrayList<Event> itemList = new ArrayList<Event> ();
		SolrQuery query = new SolrQuery();
		query.setQuery("*:*");
		query.addFilterQuery(String.format("meta.source.datePublished:[%sT0:00:00Z TO %sT23:59:59Z]", storyDate, storyDate));
		query.addFilterQuery("source:" + source);
		query.setFields(searchfield, "meta.source.datePublished", "meta.source.headline", "meta.source.url", 
				"meta.source.publisher");
		query.addFilterQuery("meta.source.inLanguage:\"en\"");
		query.setSort("meta.source.datePublished", ORDER.desc);
		query.setRows(n_items);
		System.out.println("SearchByKeyword " + query.toString());
		QueryResponse response;
		StoryDistribution sd = new StoryDistribution();
		try {
			response = solr.query(query);
			 SolrDocumentList results = response.getResults();
		    for (int i = 0; i < results.size(); ++i) {
		    	String fieldText = results.get(i).getFieldValue(searchfield).toString();
		    	String headline = results.get(i).getFieldValue("meta.source.headline").toString();
		    	headline = clean(headline);
		    	String url = results.get(i).getFieldValue("meta.source.url").toString();
		    	String publisher = results.get(i).getFieldValue("meta.source.publisher").toString();
		    	
		    	Reference ref = new Reference(url, url, publisher);
		    	
		    	Date date = (Date) results.get(i).getFieldValue("meta.source.datePublished");
		    	java.sql.Date sqldate = new java.sql.Date(date.getYear(), date.getMonth(), date.getDate());
		    	
		    	
		    	Event e = new Event();
		    	e.setDescription(fieldText);
		    	e.setDate(sqldate);
		    	e.setHeadline(headline);
		    	e.addReference(ref);
		    	
		    	itemList.add(e);
		    }
		} catch (SolrServerException ex) {
			ex.printStackTrace();
		}
	    return itemList;
	}

	public static void main(String[] args) {
		SolrDBManager sm = new SolrDBManager();
	}
}
