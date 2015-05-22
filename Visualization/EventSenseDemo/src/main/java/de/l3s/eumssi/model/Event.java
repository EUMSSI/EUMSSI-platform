package de.l3s.eumssi.model;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;

import javax.xml.bind.annotation.*;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;

import org.apache.commons.lang3.builder.HashCodeBuilder;



// This class is used to store the fields of the table Event
@XmlRootElement(name="Event")
@XmlAccessorType(XmlAccessType.NONE)
public class Event implements Comparable<Event>, Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	//@XmlAttribute(name = "id")	
	private String eventId;
	
	@XmlElement
	@XmlJavaTypeAdapter(DateXMLAdapter.class)
	private Date date;
	
	@XmlElement
    private String headline;
	
	@XmlElement
    private String description;
    
	private String annotatedDescription;
    
    
	@XmlElement
	private Category category = null;
    
	@XmlElement
	private Location location = null;
	
	private Story story = null;
	
	@XmlElement(name="belongsToStory")
	private StoryCompact storyCompact = null;
    
	//@XmlElement(name="entity")
	private ArrayList<Entity> entities = new ArrayList<Entity> ();
    
	@XmlElement(name="source")
	private ArrayList<Reference> references = new ArrayList<Reference> ();
	
	private float storyRelationConfidence = 1;
    
    
    public Event(){
    	this.eventId = null;
    	this.description = null;
    	this.headline = null;
    	this.annotatedDescription = null;
    	this.date = null;
    	this.category = null;
    	this.location = null;
    	this.story = null;
    	this.storyCompact = null;
    	this.entities = new ArrayList<Entity> ();
    	this.references = new ArrayList<Reference> ();
    	this.storyRelationConfidence = 1;
    }
    
    public Event(Event e){
    	this.eventId = e.eventId;
    	this.description = e.description;
    	this.headline = e.headline;
    	this.annotatedDescription = e.annotatedDescription;
    	this.date = e.date;
    	this.category = e.category;
    	this.location = e.location;
    	this.story = e.story;
    	if (story == null)
			this.storyCompact = null;
		else
			this.storyCompact = new StoryCompact(story);
    	this.entities = e.entities;
    	this.references = e.references;
    	this.storyRelationConfidence = e.storyRelationConfidence;
    }
 
    
    public Story getStory() {
		return story;
	}

	public void setStory(Story story) {
		this.story = story;
		if (story == null)
			this.storyCompact = null;
		else
			this.storyCompact = new StoryCompact(story);
	}

	public ArrayList<Reference> getReferences() {
		return references;
	}

	public void setReferences(ArrayList<Reference> references) {
		this.references = references;
	}
	
//	public void addReference(Reference r) {
//		if (this.references==null) this.references = new ArrayList<Reference> ();
//		this.references.add(r);
//	}

    public Category getCategory(){
        return category;
    }
    
    
	public void setCategory(Category category) {
		this.category = category;
	}

	public ArrayList<Entity> getEntities() {
		return entities;
	}



	public void setEntities(ArrayList<Entity> entities) {
		this.entities = entities;
	}



	public void setId(String id) {
    	eventId = id;
    }

	

	public String getEventId() {
		return eventId;
	}



	public void setEventId(String eventId) {
		this.eventId = eventId;
	}

    
    public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	/**
     * This function returns the date
     * @return  Date
     */
	
    public Date getDate() {
      return date;
    }
    
    /**
     * This function sets the date
     * @param dates     Date
     */
    public void setDate(Date date) {
      this.date = date;
    }
    
    /**
     * This function returns the description
     * @return  Description
     */
    public String getDescription() {
      return description;
    }
    
    
    
    /**
     * This function sets the description
     * @param description   Description
     */
    public void setDescription(String description) {
      this.description = description;
    }
    
    
    public String getHeadline() {return headline;}
    public void setHeadline(String _headline) {this.headline = _headline;}
    
    public void addEntity(Entity e) {
    	if(!entities.contains(e))
    		entities.add(e);
    }
    
    public void addReference(Reference r) {
    	if(!references.contains(r))
    		references.add(r);
    }
    
    @Override
    public boolean equals(Object other){
        if (other == null) return false;
        if (other == this) return true;
        Event otherEvent = (Event) other;
        try{        	
        	return otherEvent.getEventId().equals(this.getEventId());
        }catch(Exception e){
        	e.printStackTrace();
        	return false;
        }
    }

    @Override
    public int hashCode(){
	 	return new HashCodeBuilder(43, 65). // two randomly chosen prime numbers
	 			append(eventId).
	            toHashCode();
 }
    
    
    
    @Override
    public int compareTo(Event e)
    {       	
       return this.date.compareTo(e.date);

    }

	public String getAnnotatedDescription() {
		return annotatedDescription;
	}

	public void setAnnotatedDescription(String annotatedDescription) {
		this.annotatedDescription = annotatedDescription;
	}

	public float getStoryRelationConfidence() {
		return storyRelationConfidence;
	}

	public void setStoryRelationConfidence(float storyRelationConfidence) {
		this.storyRelationConfidence = storyRelationConfidence;
	}
	
	public String toString(){
		String qoutationMark = "\"";
		String out = "{";
		out+= "Date: " + qoutationMark + getDate() + qoutationMark;
		out+= ", Description: " + qoutationMark + getDescription().replace('"', '\'') + qoutationMark;
		if (getAnnotatedDescription()!=null) 
			out+= ", AnnotatedDescription: " + qoutationMark + getAnnotatedDescription().replace('"', '\'') + qoutationMark;
		if (getStory()!=null){
			out+= ", Story: {";
			out+= "Name: " +  qoutationMark + getStory().getName() + qoutationMark;
			out+= ", URL: " + qoutationMark + getStory().getWikipediaUrl() + qoutationMark + "}";
		}
		if (getCategory()!=null){
			out+= ", Category: " + qoutationMark + getCategory().getName() + qoutationMark;
		}
		if (getLocation()!=null){
			out+= ", Location: " + qoutationMark + getLocation().getName() + qoutationMark;
		}
		if(getEntities()!=null){
			if(!getEntities().isEmpty()){
				out+= ", Entities: [";
				int entityCount = 0;
				for(Entity entity:getEntities()){
					entityCount++;
					if (entityCount > 1)
						out+=",";
					out+= "{ Name: " + qoutationMark + entity.getName() + qoutationMark;
					out+= ", URL: " + qoutationMark + entity.getWikiURL() + qoutationMark;
					out+= "}";
				}
				out+= "]";
			}
		}
		if(getReferences()!=null){
			if(!getReferences().isEmpty()){
				out+= ", Sources: [";
				int refCount = 0;
				for(Reference ref: getReferences()){
					refCount++;
					if(refCount>1)
						out+=",";
					out+= "{ Source: " + qoutationMark + ref.getSource() + qoutationMark;
					out+= ", Type: " + qoutationMark + ref.getType() + qoutationMark;
					out+= ", URL: " + qoutationMark + ref.getUrl() + qoutationMark;
					out+= "}";
				}
				out+= "]";
			}
		}
		out+= "}";
		return out;
	}

	public StoryCompact getStoryCompact() {
		return storyCompact;
	}

	public void setStoryCompact(StoryCompact storyCompact) {
		this.storyCompact = storyCompact;
	}
    
}
