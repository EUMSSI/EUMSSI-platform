package de.l3s.eumssi.service;
//package de.l3s.eumssi.service;
//
//import java.util.HashMap;
//import java.util.Map;
//
//import de.l3s.eumssi.dao.DatabaseManager;
//import de.l3s.eumssi.model.Entity;
//import de.l3s.eumssi.model.Story;
//
//public class WikiTimesUtils {
//
//	private static Map<String, String> entityNames = null;
//	private static Map<String, String> storyNames = null;
//	
//	private static void init(){
//		DatabaseManager db = new DatabaseManager();
//		
//		if(entityNames==null){
//			entityNames = new HashMap<String, String>(); 
//			for(Entity entity: db.getEntities())
//				entityNames.put(entity.getId(), entity.getName());
//		}
//		
//		if(storyNames==null){
//			storyNames = new HashMap<String, String>();
//			for(Story story: db.getStories()){
//				storyNames.put(story.getId(), story.getName());
//			}
//		}
//		
//		db.closeConnection();
//	}
//	
//	
//	public static Map<String, String> getEntities(){
//		if (entityNames==null){
//			init();
//		}
//		return entityNames;
//	}
//	
//	
//	public static Map<String, String> getStories(){
//		if (storyNames==null){
//			init();
//		}
//		return storyNames;
//	}
//	
//
//}
