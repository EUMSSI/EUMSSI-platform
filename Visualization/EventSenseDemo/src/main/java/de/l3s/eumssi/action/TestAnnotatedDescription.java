package de.l3s.eumssi.action;

import java.util.ArrayList;

import de.l3s.eumssi.dao.DatabaseManager;
import de.l3s.eumssi.model.Entity;
import de.l3s.eumssi.model.Event;
import de.l3s.eumssi.service.ContentHandling;

public class TestAnnotatedDescription {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		DatabaseManager db = new DatabaseManager();
		ContentHandling ch = new ContentHandling();
		
		ArrayList<Event> events = db.getEvents("2014-10-15", "2014-10-15");
		
		for (Event event: events){
			System.out.println(event.toString());
			for(Entity entity : event.getEntities()){
				System.out.println("entity: " +  entity.getWikiURL());
			}
			System.out.println("description:\t " + event.getDescription());
			System.out.println("annotatedDescription:\t" + event.getAnnotatedDescription());
//			System.out.println("===> " + getAnnotations(event.getAnnotatedDescription(), event));
			System.out.println("===> " + ch.addEntityLinks(event, null));
			System.out.println();
			
			
			
			
			
//			String change;
//	    	String newDescription = null;
//	    	String searchString, entityUrl;
//	    	String[] parts;
//			
//			for(Entity entity : event.getEntities()){
//				System.out.println("entity: " +  entity.getWikiURL());
//				parts = entity.getWikiURL().split("/");
//	    		entityUrl = parts[parts.length-1];
//	    		change = "<a href=\"/entityTimeline.action?entityId=" +entity.getId() + "\"" ;
//	    	    searchString = "<a href=\"/wiki/" + entityUrl + "\"" ;
//	    	    newDescription = event.getAnnotatedDescription().replace(searchString, change);
//	    	    event.setAnnotatedDescription(newDescription);
//			}
//			System.out.println("===>: " + event.getAnnotatedDescription());
//			System.out.println();
			
//			System.out.print(" ===> ");
//			System.out.println(ch.addEntityLinksTest(event).getAnnotatedDescription());
//			System.out.println("--------------------------------------------------");
			
			
			
			
		}

	}
	
	public static String getAnnotations(String html, Event event){
		String annotations = "";
		String labeledText = null;
		int entityPos, pos1, pos2;
		for (Entity entity: event.getEntities()){
			entityPos = html.indexOf(getEntityURL(entity.getWikiURL()));
			pos1 = html.indexOf(">", entityPos) + entityPos;
			pos2 = html.indexOf("</a>", pos1) + pos1;
			labeledText = html.substring(pos1, pos2);
			pos1 = event.getDescription().indexOf(labeledText);
			pos2 = pos1+labeledText.length();
			annotations+=getEntityURL(entity.getWikiURL())+"___"+pos1+"___"+pos2+"###";			
		}
		return annotations;
	}

	
	public static String getEntityURL(String url){
		String[] url_parts = url.split("/");
		return url_parts[url_parts.length-1];
	}
}
