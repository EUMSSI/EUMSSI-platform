package de.l3s.eumssi.model;

import java.io.Serializable;

import javax.xml.bind.annotation.*;

import org.apache.commons.lang3.builder.HashCodeBuilder;


@XmlRootElement
@XmlAccessorType(XmlAccessType.NONE)
public class Category implements Comparable<Category>, Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@XmlAttribute
	private String id;
	
	@XmlElement
	private String name;
	
	private int count;
	private int newscount;
	
	public Category(String cid, String cname) {
		id = cid;
		name = cname;
	}
	
	public Category(){
		id = null;
		name = null;
		count = 0;
		newscount = 0;
	}
	
	public Category(String cid, String cname,int ccount, int ncount) {
		id = cid;
		name = cname;
		count = ccount;
		newscount = ncount;
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

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public int getNewscount() {
		return newscount;
	}

	public void setNewscount(int newscount) {
		this.newscount = newscount;
	}
	
	 @Override
	    public boolean equals(Object other){
	        if (other == null) return false;
	        if (other == this) return true;
	        Category otherCategory = (Category) other;
	        try{        	
	        	return otherCategory.getId().equals(this.getId());
	        }catch(Exception e){
	        	e.printStackTrace();
	        	return false;
	        }
	    }
	 
	 @Override
	    public int hashCode(){
		 	return new HashCodeBuilder(17, 31). // two randomly chosen prime numbers
		 			append(id).
		            toHashCode();
	 }
	 

	@Override
	public int compareTo(Category c) {
		if(this.count == c.count) return 0;
		else if (this.count > c.count) return 1;
		else return -1;
	}
	
	
}
