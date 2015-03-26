package de.l3s.eumssi.core;

import java.util.ArrayList;
import java.util.Date;
import java.util.Random;
import java.util.HashMap;
import de.l3s.lemma.lemma;

/**
 * modelling an event
 * @author giangbinhtran
 *
 */
public class EventDistribution {
	Date beginingDate ;
	Date endDate ;
	String description;
	public ArrayList<String> descriptionTerm;
	Date date;
	ArrayList<EntityDistribution> entities;
	String timeline;
	String category;
	ArrayList<Integer> source_ids;
	double pred_timeline_score;
	String id;
	
	HashMap<String, HashMap<String, Integer>> bigrams;
	
	
	int storyid = 0;
	public EventDistribution(String desc, Date d) {
		timeline = "";
		description = desc;
		date = d;
		entities = new ArrayList<EntityDistribution> ();
		pred_timeline_score = 1.0; 
		category = "";
		source_ids = new ArrayList<Integer> ();
		beginingDate = date;
		endDate = date;
		
		descriptionTerm = new ArrayList<String> ();
		//String lemmatized_descr = lemma.getLemmatization(desc);
		String lemmatized_descr = desc;
		for (String term: lemmatized_descr.split("\\s+")) {
			term = truncate(term);
			if (term.endsWith(":")) term = term.replace(":","");
			if (isBlackListed(term)) continue;
			if (!Stopwords.isStopword(term) && !term.equals("cite"))
				descriptionTerm.add(term);
		}
		
		//index co-occurence
		bigrams = new HashMap<String, HashMap<String, Integer>> ();
		for (int i = 0; i< descriptionTerm.size()-1; i++) {
			String w1 = descriptionTerm.get(i);
			String w2 = descriptionTerm.get(i+1);
			if (w1.compareTo(w2)>0) {
				//swap
				String tmp = w1;
				w1 = w2;
				w2 = tmp;
			}
			if (!bigrams.containsKey(w1)) {
				bigrams.put(w1,  new HashMap<String, Integer> ());
			}
			if (!bigrams.get(w1).containsKey(w2)) {
				bigrams.get(w1).put(w2, 0);
			}
			//increase
			int curr = bigrams.get(w1).get(w2);
			bigrams.get(w1).put(w2, curr+1);
		}
	}
	public String truncate(String term) {
		if (term.isEmpty()) return term;
		if ( !Character.isAlphabetic((int)term.charAt(term.length()-1))) {
			return term.substring(0, term.length()-1).toLowerCase();
		}
		return term.toLowerCase();
	}
	
	
	public HashMap<String, HashMap<String, Integer>> getBigrams() {
		return bigrams;
	}
 	
	public boolean isBlackListed(String term) {
		return 	term.isEmpty()||
				term.equals("Photograph") || term.contains("WhatsApp") ||
				! Character.isAlphabetic((int)term.charAt(0));
	}
	public void setStoryID (int sid)  {
		storyid = sid;
	}
	
	
	
	public Date getBeginingDate() {
		return beginingDate;
	}
	
	public Date getEndDate() {
		return endDate;
	}
	
//	public void addDescription(String newdesc) {
//		description += " " + newdesc;
//	}
	public String getRandomEntity () {
		Random r = new Random();
		int n_entity = entities.size();
		String random_entity = "";
		do {
			random_entity = entities.get(r.nextInt(n_entity)).getName();
		} while (random_entity.contains("http://"));
		return random_entity;
	}
	
	public int getRandomSource() {
		Random r = new Random();
		int n_sources =source_ids.size();
		if (n_sources==0) return -1;
		int random_source = source_ids.get(r.nextInt(n_sources));
		return random_source;
	}

	public void setSources(String sourceIdStr) {
		String[] tmp = sourceIdStr.split("\\$");
		for (String id: tmp) {
			if (id.trim().length()==0) continue;
			source_ids.add(Integer.valueOf(id.trim()));
		}
	}
	public void addSource(String sourceid) {
		source_ids.add(Integer.valueOf(sourceid));
	}
	public ArrayList<Integer> getSource_IDs() {
		return source_ids;
	}
	
	public int getStoryID() {return storyid;}
	public void setDate(Date d) {
		date =d;
	}
	
	public String getCategory() {
		return category;
	}
	
	public void setCategory(String cat) {
		category = cat;
	}
	public String getTimeline() {
		return timeline;
	}
	
	public void setTimeline(String s) {
		timeline = s;
	}
	
	public void setPredTimelineScore(double pred) {
		pred_timeline_score = pred;
	}
	
	public String getDescription() {
		return description;
	}
	
	public Date getDate() {
		return date;
	}
	
	public ArrayList<EntityDistribution> getEntities() {
		return entities;
	}
	
	public void addEntity(EntityDistribution e) {
		entities.add(e);
	}
	
	public int n_entities()
	{
		return entities.size()-1;
	}
	/**
	 * returns description, date and list of entities
	 */
	public String toString() {
		String r = String.valueOf(this.id) + "\t";
		r += description + "\t" + date;
		for (EntityDistribution en: entities) {
			r += "\t" + en.getName();
		}
		
		//add source
		for (int sid: source_ids) {
			r += "\ts:" + String.valueOf(sid);
		}
		
		//add id
		//r += "\tid:" + this.id;
		return r;
	}
	
	
	public void setID (String _id) {id = _id;}
	public String getID() {return id;}
	
	/**
	 * return all metadata of the events
	 * @return
	 */
	public String toFullPrint() {
		//adding timeline information
		StringBuffer sb = new StringBuffer();
		sb.append(String.format("%.5f\t%s\t%s\t%s", pred_timeline_score, timeline, date, description));
		for (EntityDistribution en: entities) {
			sb.append("\t" + en.getName());
		}
		return sb.toString();
	}
	
	public static void main(String[] args) {
		String s = "$ 1232";
		for (String t: s.split("\\$")) System.out.println(t);;
		
	}
}


