/*
 *Retrieve the content from Database
 */
package de.l3s.eumssi.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Hashtable;
import java.util.List;

import org.apache.struts2.ServletActionContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import de.l3s.eumssi.model.Category;
import de.l3s.eumssi.model.Entity;
import de.l3s.eumssi.model.Event;
import de.l3s.eumssi.model.Location;
import de.l3s.eumssi.model.Story;

public class ContentHandling {
    
    /**
     * Constructor
     */
    public ContentHandling() {
    }
    
    
    
    public ArrayList<Story> getStoryListUnordered(ArrayList<Event> events){    	 
    	Hashtable<String, Story> storyList = new Hashtable<String, Story>();
    	ArrayList<Story> stories= new ArrayList<Story>();
    	
    	Story newStory = null;
    	for (Event e: events){
	    	if (e.getStory() != null){
				if(!storyList.containsKey(e.getStory().getId())){
					newStory = new Story(e.getStory().getId(), e.getStory().getName(), e.getStory().getWikipediaUrl());
					newStory.addEvent(new Event(e));
					storyList.put(newStory.getId(), newStory);
		            }else{
		            	storyList.get(e.getStory().getId()).addEvent(e);
		            }
	    	}
    	}
    	
    	for (Story s: storyList.values())
			stories.add(s);
    	
	    return stories;    	
    }
    
    
    public ArrayList<Story> getStoryList(List<Event> events){    	 
    	Hashtable<String, Story> storyList = new Hashtable<String, Story>();
    	ArrayList<Story> stories= new ArrayList<Story>();
    	
    	Story newStory = null;
    	for (Event e: events){
	    	if (e.getStory() != null){
				if(!storyList.containsKey(e.getStory().getId())){
					newStory = new Story(e.getStory().getId(), e.getStory().getName(), e.getStory().getWikipediaUrl());
					newStory.addEvent(new Event(e));
					storyList.put(newStory.getId(), newStory);
		            }else{
		            	storyList.get(e.getStory().getId()).addEvent(e);
		            }
	    	}
    	}
    	
    	for (Story s: storyList.values()){
    		stories.add(s);
    	}
    	
    	if (stories.size() > 0)
    		Collections.sort(stories, Collections.reverseOrder());
    	
	    return stories;    	
    }
    
    
    public ArrayList<Category> getCategoryList(List<Event> events){
    	Hashtable<String, Category> categoriesList = new Hashtable<String, Category>();
    	ArrayList<Category> categories = new ArrayList<Category>();
    	
    	Category category = null; 
    	for (Event e: events){
			if (e.getCategory() != null){
					if(!categoriesList.containsKey(e.getCategory().getId())){
						category = new Category(e.getCategory().getId(), e.getCategory().getName(), 1, 0);
		                categoriesList.put(e.getCategory().getId(), category);
		            }else{
		            	categoriesList.get(e.getCategory().getId()).setCount(
		            			categoriesList.get(e.getCategory().getId()).getCount()+1);
		            }
				}
    	}
    	
    	for(Category c: categoriesList.values()){
    		categories.add(c);
    	}
    	
    	if(categories.size() > 0)
    		Collections.sort(categories, Collections.reverseOrder());

    	return categories;
    }
    
    
    public ArrayList<Location> getLocationList(List<Event> events){
    	Hashtable<String, Location> locationsList = new Hashtable<String, Location>();
    	ArrayList<Location> locations = new ArrayList<Location>();
    	
    	Location location = null; 
    	for (Event e: events){
			if (e.getLocation() != null){
					if(!locationsList.containsKey(e.getLocation().getId())){
						location = new Location(e.getLocation().getId(), e.getLocation().getName());
						location.setCount(1);
		                locationsList.put(e.getLocation().getId(), location);
		            }else{
		            	locationsList.get(e.getLocation().getId()).setCount(
		            			locationsList.get(e.getLocation().getId()).getCount()+1);
		            }
				}
    	}
    	
    	
    	for(Location c: locationsList.values()){
    		locations.add(c);
    	}
    	
    	if(locations.size() > 0)
    		Collections.sort(locations, Collections.reverseOrder());

    	return locations;
    }
    
    
    
    public ArrayList<Entity> getEntities(List<Event> events, int k){
    	Hashtable<String, Entity> entityList = new Hashtable<String, Entity>();
    	ArrayList<Entity> entities= new ArrayList<Entity>();
    	
    	Entity entity = null;
    	for (Event e: events){
	    	if (!e.getEntities().isEmpty()){
	    		for(Entity ent: e.getEntities()){
	    			if(!entityList.containsKey(ent.getId())){
						entity = new Entity();
						entity.setId(ent.getId());
						entity.setName(ent.getName());
						entity.setWikiURL(ent.getWikiURL());
						entity.setFrequency(1);
						entityList.put(entity.getId(), entity);
			        }else{
			        	entityList.get(ent.getId()).increaseFrequency();
			        }	
	    		}
	    	}
    	}
    	
    	ArrayList<Entity> entitiesTemp = new ArrayList<Entity>();
    	for (Entity e: entityList.values()){
    		entitiesTemp.add(e);
    	}
    	
    	if(entitiesTemp.size() > 0)
    		Collections.sort(entitiesTemp);
    	
    	for(int i = entitiesTemp.size()-1; i >=0 ; i--){
    		entities.add(entitiesTemp.get(i));
    		if (k > 0 && entities.size() >= k) break;
    	}
    	
	    return entities;    
    }
    
    
    public Event addEntityLinks_v2(Event event, Object contextPath){
    	String change;
    	String newDescription = null;
    	String searchString, entityUrl;
    	String[] parts;
    	
    	for(Entity entity : event.getEntities()){
    		parts = entity.getWikiURL().split("/");
    		entityUrl = parts[parts.length-1];    		
    	    searchString = "<a href=\"" + entityUrl + "\"" ;
    	    
    	    if (ServletActionContext.getRequest().getServerName().equals("wikitimes.l3s.de")){        			
    			change = "<a style=\"color: #0040FF\" href=\"/entityTimeline.action?entityId=" +entity.getId() + "\"" ;
    					                        
    		}else{        			
    			change = "<a style=\"color: #0040FF\" href=\""+contextPath+"/entityTimeline.action?entityId=" +entity.getId()+"\"" ;
    		}
    	    newDescription = event.getAnnotatedDescription().replace(searchString, change);
    	    event.setAnnotatedDescription(newDescription);    	    
    	}
    	event.setDescription(event.getAnnotatedDescription());
    	return event;
    }
    
    
    
    public Event addEntityLinks(Event event, Object contextPath){
    	String searchString, changeString, entityUrl;
    	String[] parts;
    	
    	//check for the case where the name is different in case (upper/lower case)
    	String lowerCaseDescription = event.getAnnotatedDescription().toLowerCase();
    	String tmpDescription = event.getAnnotatedDescription();
//    	System.out.printf(" annotated description: %s \n lowerCase: %s \n", tmpDescription, lowerCaseDescription);

    	for(Entity entity : event.getEntities()){
    		parts = entity.getWikiURL().split("/");
    		entityUrl = parts[parts.length-1];    		
    	    searchString = "<a href=\"" + entityUrl.toLowerCase() + "\"" ;
    	    changeString = "<a href=\"" + entityUrl + "\"" ;
    	    
    	    int fromPosition = 0;
    	    int pos1=-1, pos2=-1; 
    	    String prefix="", postfix="";
    	    while(fromPosition < lowerCaseDescription.length()-searchString.length()){
    	    	try{
	    	    	pos1 = lowerCaseDescription.indexOf(searchString, fromPosition);
	    	    	if(pos1 < 0) break;
	    	    	pos2 = pos1 + searchString.length()-1;
	    	    	if (pos1 > 0)
	    	    		prefix  = tmpDescription.substring(0, pos1);
	    	    	else
	    	    		prefix = "";
	    	    	postfix = tmpDescription.substring(pos2+1, tmpDescription.length());
	    	    	tmpDescription = prefix + changeString + postfix;
	    	    	fromPosition = pos2+1;
    	    	}catch(Exception ex){
    	    		ex.printStackTrace();
    	    		System.err.printf(" length= %s \n fromPosition = %s \n pos1 = %s \n pos2 = %s \n prefix = %s \n postfix = %s \n", 
    	    				lowerCaseDescription.length(), fromPosition, pos1, pos2, prefix, postfix);
    	    		break;
    	    	}
    	    }
    	}
    	
//    	System.out.println("tmpDescString: " + tmpDescString);
//    	if(tmpDescription.length() != event.getAnnotatedDescription().length()){
//    		System.err.println("ERROR: length does not match!!!!");
//    		System.err.println("AnnotatedDescription: " + event.getAnnotatedDescription());
//    		System.err.println("tmpDescription      : " + tmpDescription);
//    		System.err.println("AnnotatedDescription length = " + event.getAnnotatedDescription().length());
//    		System.err.println("tmpDescription length       = " + tmpDescription.length());
//    	}
    	event.setAnnotatedDescription(tmpDescription);
    	
    	String newDescription = null;
    	String change;
    	for(Entity entity : event.getEntities()){
    		parts = entity.getWikiURL().split("/");
    		entityUrl = parts[parts.length-1];    		
    	    searchString = "<a href=\"" + entityUrl + "\"" ;
    	    
    	    
    	    if(contextPath!=null){
	    	    if (ServletActionContext.getRequest().getServerName().equals("wikitimes.l3s.de")){        			
	    			change = "<a style=\"color: #0040FF\" href=\"/entityTimeline.action?entityId=" +entity.getId() + "\"" ;
	    					                        
	    		}else{        			
	    			change = "<a style=\"color: #0040FF\" href=\""+contextPath+"/entityTimeline.action?entityId=" +entity.getId()+"\"" ;
	    		}
    	    }else{
    	    	change = "<a style=\"color: #0040FF\" href=\"/entityTimeline.action?entityId=" +entity.getId() + "\"" ;
    	    }
    	    newDescription = event.getAnnotatedDescription().replace(searchString, change);
    	    event.setAnnotatedDescription(newDescription);    	    
    	}
    	
    	event.setDescription(event.getAnnotatedDescription());
    	return event;
    }
    
    
    public Event addEntityLinksTest(Event event){
    	String change;
    	String newDescription = null;
    	String searchString, entityUrl;
    	String[] parts;
    	for(Entity entity : event.getEntities()){
    		parts = entity.getWikiURL().split("/");
    		entityUrl = parts[parts.length-1];    		
    	    searchString = "<a href=\"/wiki/" + entityUrl + "\"" ;
    	    change = "<a href=\"/entityTimeline.action?entityId=" +entity.getId() + "\"" ;
    	    newDescription = event.getAnnotatedDescription().replace(searchString, change);
    	    event.setAnnotatedDescription(newDescription);
    	}
    	return event;
    }
    
    public Event addEntityLinks_Old(Event e, Object contextPath){
    	String change;
    	String newDescription = null;
    	
    	for(Entity entity : e.getEntities()){
    	    if (ServletActionContext.getRequest().getServerName().equals("wikitimes.l3s.de")){        			
    			change = "<s:div id=\"" +entity.getId()+ "\" \">" +
    					  	"<a href=\"/entityTimeline.action?entityId=" +entity.getId() + "\">" +
    					  		"<font color=\"#0040FF\" >" + entity.getName()+ "</font>" +
    					  	"</a>" +
    					 "</s:div>";                      
    		}else{        			
    			change = "<s:div id=\"" +entity.getId()+ "\" \">" +
    						"<a href=\""+contextPath+"/entityTimeline.action?entityId=" +entity.getId()+"\">" +
    							"<font color=\"#0040FF\" >" + entity.getName()+ "</font>" +
    						"</a>" +
    					 "</s:div>";                      
    		}
    	    newDescription = e.getDescription().replace(entity.getName(), change);
    	    e.setDescription(newDescription);    	    
    	}
    	return e;
    }

    
    public String decode(String url) {
		try {
			url = java.net.URLDecoder.decode(url, "UTF-8");
		} catch (Exception e) {
			System.err.println("url (" + url + ") is not able to be converted into UTF8 format");
		}
		return url;
	}
    
    public String encode(String url) {
		try {
			url = java.net.URLEncoder.encode(url, "UTF-8");
		} catch (Exception e) {
			System.err.println("url (" + url + ") is not able to be converted into UTF8 format");
		}
		return url;
	}
    
    
    public ArrayList<Event> filterEvents(List<Event> events, String filterType, String filterItemId) {
		System.out.println("filterType: " + filterType);
		System.out.println("filterItemId: " + filterItemId);
		
		ArrayList<Event> filteredList = new ArrayList<Event>();
		
		if (filterType.equals("filterByStory")){
			for(Event e: events){
				if(e.getStory()!=null){
					if (e.getStory().getId().equals(filterItemId)){
						filteredList.add(new Event(e));
					}
				}
			}
		}
		
		if (filterType.equals("filterByCategory")){
			for(Event e: events){
				if(e.getCategory() != null){
					if (e.getCategory().getId().equals(filterItemId)){
						filteredList.add(new Event(e));
					}
				}
			}
		}
		
		if (filterType.equals("filterByLocation")){
			for(Event e: events){
				if(e.getLocation() != null){
					if (e.getLocation().getId().equals(filterItemId)){
						filteredList.add(new Event(e));
					}
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
    
    
    
    
//    public ArrayList<Event> addInferedInformation(ArrayList<Event> in_events){
//    	ArrayList<Event> out_events = new ArrayList<Event>();
//    	for (Event e: in_events){
//    		if (e.getStory()!= null){
//    			e.setStoryRelationConfidence(1);
//    			out_events.add(new Event(e));
//    		}else{
//    			out_events.add(new Event (db.getBelongsToRelation(e)));    			
//    		}
//    	}
//    	
//    	return out_events;
//    }
    
    
    public JSONObject toJSONObject(Event event, Object contextPath) {
		JSONObject eventObject = null;
		try {
			eventObject = new JSONObject();
			eventObject.put("startDate", new SimpleDateFormat("yyyy,MM,dd").format(event.getDate()));
			eventObject.put("endDate", new SimpleDateFormat("yyyy,MM,dd").format(event.getDate()));
			eventObject.put("headline", event.getDescription());
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
//				text = event.getStory().getName();
				//storyTimeline.action?storyId=177
			}
			eventObject.put("text", text);
//			if(event.getReferences()!=null){
//				if(!event.getReferences().isEmpty()){
//					JSONObject asset = new JSONObject();
//					asset.put("media", event.getReferences().get(0).getUrl());
//					asset.put("caption", event.getReferences().get(0).getSource());
//					eventO.put("asset", asset);
//				}
//			}
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
    

}
