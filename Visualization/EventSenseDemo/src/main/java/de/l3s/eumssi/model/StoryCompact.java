/**
 * light-weighted story object for event
 */
package de.l3s.eumssi.model;

import java.io.Serializable;

import javax.xml.bind.annotation.*;


@XmlRootElement(name="Story")
@XmlAccessorType(XmlAccessType.NONE)
public class StoryCompact implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@XmlAttribute
	private String id;
	
	@XmlElement
	private String name;
	
	@XmlElement
	private String wikipediaUrl;
	
	
	public StoryCompact(){
		this.id = null;
		this.name = null;
		this.wikipediaUrl = null;
	}
	
	public StoryCompact(Story story) {
		id = story.getId();
		name = story.getName();
		wikipediaUrl = story.getWikipediaUrl();
	}
	
	public String getWikipediaUrl() {
		return wikipediaUrl;
	}
	public void setWikipediaUrl(String url) {
		wikipediaUrl = url;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

}
