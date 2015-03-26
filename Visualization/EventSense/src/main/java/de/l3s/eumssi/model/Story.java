/**
 * light-weighted story object for event
 */
package de.l3s.eumssi.model;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;

import javax.xml.bind.annotation.*;
//import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;

import org.apache.commons.lang3.builder.HashCodeBuilder;



@XmlRootElement(name="Story")
@XmlAccessorType(XmlAccessType.NONE)
public class Story implements Comparable<Story>, Serializable{
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
	
	@XmlElement
	@XmlJavaTypeAdapter(DateXMLAdapter.class)
	private Date startDate;
	
	@XmlElement
	@XmlJavaTypeAdapter(DateXMLAdapter.class)
	private Date endDate;
	
	@XmlElement(name="event")
	private ArrayList<Event> events;
	
	

	
	public Story(){
		this.id = null;
		this.name = null;
		this.wikipediaUrl = null;
		this.startDate = Date.valueOf("1970-01-01");
		this.endDate = Date.valueOf("1970-01-01");
		events = new ArrayList<Event>();
	}
	
	public Story(String sid, String sname, String url) {
		id = sid;
		name = sname;
		wikipediaUrl = url;
		this.startDate = Date.valueOf("1970-01-01");
		this.endDate = Date.valueOf("1970-01-01");
		events = new ArrayList<Event>();
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
	
	
	
	 @Override
	    public boolean equals(Object other){
	        if (other == null) return false;
	        if (other == this) return true;
	        Story otherStory = (Story) other;
	        try{        	
	        	return otherStory.getId().equals(this.getId());
	        }catch(Exception e){
	        	e.printStackTrace();
	        	return false;
	        }
	    }

	 
	 @Override
	    public int hashCode(){
		 	return new HashCodeBuilder(88, 82). // two randomly chosen prime numbers
		 			append(id).
		            toHashCode();
	 }
	 
    @Override
    public int compareTo(Story e)
    {       	
       //return this.name.compareTo(e.name);
    	return Integer.valueOf(this.events.size()).compareTo(Integer.valueOf(e.events.size())); 
    }

    
    public void addEvent(Event event){
    	if (!events.contains(event)){
			events.add(event);
			if(events.size()==1){
				startDate = event.getDate();
				endDate = event.getDate();
			}else{
				if (event.getDate().before(startDate))
					startDate = event.getDate();
				if (event.getDate().after(endDate))
					endDate = event.getDate();
			}
		}
	}
    
    
	public ArrayList<Event> getEvents() {
		return events;
	}

	public void setEvents(ArrayList<Event> events) {
		this.events = events;
	}

//	@XmlJavaTypeAdapter(DateXMLAdapter.class)
	public Date getStartDate() {
		return startDate;
	}

//	@XmlJavaTypeAdapter(DateXMLAdapter.class)
	public Date getEndDate() {
		return endDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	
	

}
