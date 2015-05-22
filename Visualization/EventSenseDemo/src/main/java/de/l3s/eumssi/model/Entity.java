package de.l3s.eumssi.model;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;

import javax.xml.bind.annotation.*;
//import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;

import org.apache.commons.lang3.builder.HashCodeBuilder;


@XmlRootElement
@XmlAccessorType(XmlAccessType.NONE)
public class Entity implements Comparable<Entity>, Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@XmlAttribute
	private String id;
	
	@XmlElement
	private String name;
	
	@XmlElement
	private String wikiURL;
	
	private int frequency = 1;
	
	@XmlElement
	private String type;
	
	private ArrayList<Event> events;
	
	private Date startDate;
	private Date endDate;
	
	
	public Entity(){
		id = null;
		name= null;		
		wikiURL = null;
		frequency = 0;
		type = null;
		this.startDate = Date.valueOf("1970-01-01");
		this.endDate = Date.valueOf("1970-01-01");
		events = new ArrayList<Event>();
	}
	
	public Entity(Entity e) {
		id = e.getId();
		name= e.getName();		
		wikiURL = e.getWikiURL();
		frequency = e.getFrequency();
		type = e.getType();
		this.startDate = e.startDate;
		this.endDate = e.endDate;
		events = new ArrayList<Event>(e.events);
	}
	
	public void increaseFrequency() {
		frequency+=1;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getFrequency() {
		return frequency;
	}

	public void setFrequency(int frequency) {
		this.frequency = frequency;
	}

	public String getWikiURL() {
		return wikiURL;
	}

	public void setWikiURL(String wikiURL) {
		this.wikiURL = wikiURL;
	}
	
	
	 public String getType() {
			return type;
		}

		public void setType(String type) {
			this.type = type;
		}
	
	 @Override
	    public boolean equals(Object other){
	        if (other == null) return false;
	        if (other == this) return true;
	        Entity otherEntity = (Entity) other;
	        try{        	
	        	return otherEntity.getId().equals(this.getId());
	        }catch(Exception e){
	        	e.printStackTrace();
	        	return false;
	        }
	    }
	 
	 @Override
	    public int hashCode(){
		 	return new HashCodeBuilder(11, 21). // two randomly chosen prime numbers
		 			append(id).
		            toHashCode();
	 }
	 
	 @Override
	    public int compareTo(Entity e){
		 if(this.frequency == e.frequency) return 0;
		 else if (this.frequency > e.frequency) return 1;
		 else return -1;
	    }

	public ArrayList<Event> getEvents() {
		return events;
	}

	public void setEvents(ArrayList<Event> events) {
		this.events = events;
	}

	
	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	
	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	
	
}
