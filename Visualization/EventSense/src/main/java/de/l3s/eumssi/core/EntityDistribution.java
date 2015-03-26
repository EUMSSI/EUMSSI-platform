package de.l3s.eumssi.core;

import java.util.ArrayList;
/**
 * modeling the entity of Wikitimes
 * @author giangbinhtran
 *
 */
public class EntityDistribution {
	String name;  //url of the entity (mostly wikipedia url)
	String type = "";
	public ArrayList<String> tokens;
	public EntityDistribution(String url) {
		if (url==null) url = "";
		String entity = url;
		if (url.startsWith("http://en.wikipedia.org/w/index.php?title")) {
			entity = entity.replace("http://en.wikipedia.org/w/index.php?title", "");
			entity = entity.replace("&action=edit&redlink=1", "");
		}
		else {
			if (url.startsWith("http://en.wikipedia.org/wiki/")) {
				entity = entity.replace("http://en.wikipedia.org/wiki/", "");
			}
		}
		name = entity.replace("_", " ");

		tokens = new ArrayList<String> ();
		//tokens from entities
		String[] namedTokens = name.split(" ");
		for (String t: namedTokens) {
			if (Stopwords.isStopword(t)) continue;
			tokens.add(t);
		}
		
	}
	
	public String getName() {
		return name;
	}
	public String getWikipediaURL() {
		return "http://en.wikipedia.org/wiki/" + name.replace(" ", "_");
	}
	
	public String getDBpediaURI() {
		return "http://dbpedia.org/resource/" + name.replace(" ", "_");
	}
	public String getYagoURI() {
		return "http://yago-knowledge.org/resource/" + name.replace(" ", "_");
	}
	
	public void setType(String t) {
		type = t;
	}
	
	public String getType() {return type;}
	
	
}
