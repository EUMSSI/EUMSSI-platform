package de.l3s.eumssi.webservices;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import de.l3s.eumssi.core.StoryDistribution;
import de.l3s.eumssi.dao.DatabaseManager;
import de.l3s.eumssi.dao.SolrDBManager;
import de.l3s.eumssi.model.*;
import de.l3s.eumssi.service.ContentHandling;

import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

import org.apache.struts2.ServletActionContext;
import org.json.JSONArray;


/** eg.
 * http://pharos.l3s.uni-hannover.de:8485/EventSense/webresources/WebService/getWordCloud/json/text/news/germany
 * @author giangbinhtran
 *
 */
@Path("/WebService")
public class RestfulService {
	
	@GET
	@Path("/getNews/json/{fields}/{sources}/{keyword}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Event> getNews(@PathParam("keyword") String keyword, 
			@PathParam("fields") String fields, @PathParam("sources") String sources) {
		SolrDBManager db = new SolrDBManager();
		List<Event> events = new ArrayList<Event> ();
		ArrayList<String> searchField = formSearchField(fields);						//search field
		//Debug
		ArrayList<String> S = new ArrayList<String> ();
		if (sources.contains("video")) S.add("Video");
		if (sources.contains("news")) S.add("NewsArticle");
		try{
			int maxNumOfEventsToDisplay = Integer.parseInt(db.conf.getProperty("visualization_MaxTimelineSize"));
			events = db.searchByKeyword(keyword, S, searchField, maxNumOfEventsToDisplay);
		}catch(Exception e){
			e.printStackTrace();	
		}
		return events;
			
	}
	
	
	@GET
	@Path("/getOccurence/json/{fields}/{sources}/{keyword}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getCooccurences(@PathParam("keyword") String keyword, 
			@PathParam("fields") String fields, @PathParam("sources") String sources) {
		SolrDBManager db = new SolrDBManager();
		JSONArray coocc = null;
		ArrayList<String> searchField = formSearchField(fields);	
		ArrayList<String> S = new ArrayList<String> ();
		if (sources.contains("video")) S.add("Video");
		if (sources.contains("news")) S.add("NewsArticle");
		
		try{
			
			int maxNumOfWordsToDisplay = Integer.parseInt(db.conf.getProperty("visualization_MaxWordCloudSize"));
			int maxNumOfEvents = Integer.parseInt(db.conf.getProperty("visualization_MaxDocForClouds"));
			
			StoryDistribution distr = db.getDistribution(keyword, S, searchField, maxNumOfEvents);
			coocc = distr.getCoOccurenceOfTopTerms(maxNumOfWordsToDisplay);
			
		}catch(Exception e){
			e.printStackTrace();	
		}finally{
			
		}
		return coocc.toString();
	}
	
	@GET
	@Path("/getWordCloud/json/{fields}/{sources}/{keyword}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getWordCloud(@PathParam("keyword") String keyword, 
			@PathParam("fields") String fields, @PathParam("sources") String sources) {
		SolrDBManager db = new SolrDBManager();
		JSONArray tfjson = null;
		ArrayList<String> searchField = formSearchField(fields);	
		ArrayList<String> S = new ArrayList<String> ();
		if (sources.contains("video")) S.add("Video");
		if (sources.contains("news")) S.add("NewsArticle");
		
		try{
			
			int maxNumOfWordsToDisplay = Integer.parseInt(db.conf.getProperty("visualization_MaxWordCloudSize"));
			int maxNumOfEvents = Integer.parseInt(db.conf.getProperty("visualization_MaxDocForClouds"));
			
			StoryDistribution distr = db.getDistribution(keyword, S, searchField, maxNumOfEvents);
			tfjson =  distr.getTermFrequencies(maxNumOfWordsToDisplay);
			
			System.out.println("Finish generating wordcloud");
			
		}catch(Exception e){
			e.printStackTrace();	
		}finally{
			
		}
		return tfjson.toString();
	}
	
	private ArrayList<String> formSearchField(String fields) {
		ArrayList<String> searchFields = new ArrayList<String> ();
		if (fields.contains("headline")) searchFields.add("meta.source.headline");
		if (fields.contains("text"))searchFields.add("meta.source.text");
		if (fields.contains("transcript")) searchFields.add("meta.extracted.audio_transcript");
		return searchFields;
	}
}