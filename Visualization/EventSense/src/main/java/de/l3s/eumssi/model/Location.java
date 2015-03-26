package de.l3s.eumssi.model;

import java.io.Serializable;

import javax.xml.bind.annotation.*;

import org.apache.commons.lang3.builder.HashCodeBuilder;


@XmlRootElement
@XmlAccessorType(XmlAccessType.NONE)
public class Location implements Comparable<Location>, Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@XmlAttribute
	private String id;
	
	@XmlElement
	private String name;
	
	private int count = 0;
	
	public Location(){
		id = null;
		name = null;
	}
	
	public Location(Location loc) {
		id = loc.id;
		name = loc.name;
	}
	
	public Location(String id, String name){
		this.id = id;
		this.name = name;
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

	
	 @Override
	    public boolean equals(Object other){
	        if (other == null) return false;
	        if (other == this) return true;
	        Location otherLocation = (Location) other;
	        try{        	
	        	return otherLocation.getId().equals(this.getId());
	        }catch(Exception e){
	        	e.printStackTrace();
	        	return false;
	        }
	    }

	 @Override
	    public int hashCode(){
		 	return new HashCodeBuilder(29, 73). // two randomly chosen prime numbers
		 			append(id).
		            toHashCode();
	 }
	 
	 
	@Override
	public int compareTo(Location loc) {
		if(this.count == loc.count) return 0;
		else if (this.count > loc.count) return 1;
		else return -1;
	}

	
	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}
	
	
}
