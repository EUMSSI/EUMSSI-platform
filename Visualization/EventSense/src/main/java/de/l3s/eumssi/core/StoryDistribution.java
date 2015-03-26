package de.l3s.eumssi.core;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Scanner;

import org.apache.commons.lang3.tuple.Pair;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import de.l3s.lemma.lemma;

/**
 * bag of word of a timeline content
 * @author giangbinhtran
 *
 */
public class StoryDistribution {
	HashMap<String, Short> tf;
	HashMap<String, Short> ne;
	
	public int total = 0; // total number of words 
	public int necount = 0;
	public double L1_term = 0, L1_entity = 0;
	
	public HashMap<String, Integer> dateDensity;
	
	private int size = 0;
	private HashSet<String> title_term = new HashSet<String> ();
	HashMap<String, HashMap<String, Integer>> bigrams;
	
	public StoryDistribution() {
		tf = new HashMap<String, Short> ();
		ne = new HashMap<String, Short> ();
		dateDensity = new HashMap<String, Integer> ();
		bigrams = new HashMap<String, HashMap<String, Integer>>();
	}
	
	
	public String[] getMinMaxDate() {
		String[] minmax = new String[2];
		ArrayList<String> d = new ArrayList<String> ();
		d.addAll(dateDensity.keySet());
		Collections.sort(d);
		minmax[0] = d.get(0);
		minmax[1] = d.get(d.size()-1);
		return minmax;
	}
	/**
	 * index the title of the story
	 * @param url_based_title
	 */
	public void setTitle (String url_based_title) {
		String title = url_based_title.replace("_", " ");
		
		String lemmatizedDescr = lemma.getLemmatization(title);
		String [] tokens = lemmatizedDescr.split(" ");
		for (String t: tokens) {
			if (Stopwords.isStopword(t)) continue;
			title_term.add(t);
		}
	}
	
	public double getTitleCoverage(HashSet<String> hashSet) {
		double cover = 0.0;
		for (String t: hashSet) 
			if (title_term.contains(t)) cover+=1;
		return cover / title_term.size();
	}
	public void setL1_term (double l1) {
		L1_term = l1;
	}
	
	public void setL1_entity(double l1) {
		L1_entity = l1;
	}
	
	
	public void index(EventDistribution event) {
		index(event.descriptionTerm);
		for (EntityDistribution entity: event.getEntities()) {
			indexNamedEntities(entity);
		}
		String date = getDate(event.getDate());
		int currentDateFrequency = dateDensity.containsKey(date)?dateDensity.get(date):0;
		dateDensity.put(date, currentDateFrequency +1);
		size +=1;
		
		//index bigrams
		
		HashMap<String, HashMap<String, Integer>> event_bigr = event.getBigrams();
		for (String w1: event_bigr.keySet()) {
				if (!bigrams.containsKey(w1)) {
					bigrams.put(w1,  new HashMap<String, Integer> ());
				}
				for (String w2: event_bigr.get(w1).keySet()) {
					if (!bigrams.get(w1).containsKey(w2)) {
						bigrams.get(w1).put(w2, 0);
					}
					//increase
					int curr = bigrams.get(w1).get(w2);
					bigrams.get(w1).put(w2, curr+ event_bigr.get(w1).get(w2));
				}
		}
	}
	
	
	
	public String getDate(java.util.Date date) {
		return date.getYear() + "/" + date.getMonth() + "/" + date.getDate();
	}
	
	//remove an event from timeline
	public void exclude(EventDistribution event) {
		exclude(event.descriptionTerm);
		for (EntityDistribution entity: event.getEntities()) {
			excludeNamedEntities(entity);
		}
		
		String date = getDate(event.getDate());
		int currentDateFrequency = dateDensity.containsKey(date)?dateDensity.get(date):0;
		dateDensity.put(date, currentDateFrequency - 1);
		size -=1;
	}
	
	//get the density probability
	public double getDensityProbability() {
		if (size>0)
			return 1.0 / size;
		else return 0;
	}
	/**
	 * index a sentence 
	 * @param sentence
	 */
	private void index(ArrayList<String> termlist) {
		for (String term: termlist) indexTerm(term);
	}
	
	public void exclude(ArrayList<String> termlist) {
		for (String term: termlist) excludeTerm(term);
	}
	
	/**
	 * index a term
	 * @param term
	 */
	public void indexTerm(String term) {
		short cur = tf.containsKey(term)?tf.get(term):0;
		tf.put(term, (short) (cur+1));
		total ++;
	}
	
	public void excludeTerm(String term) {
		short cur = tf.containsKey(term)?tf.get(term):0;
		tf.put(term, (short) (cur-1));
		total --;
	}
	
	/**
	 * index a named entity of the timeline 
	 */
	public void indexNamedEntities (EntityDistribution e) {
		ArrayList<String> namedTokens = e.tokens;
		
		for (String t: namedTokens) {
			if (Stopwords.isStopword(t)) continue;
			short cur = ne.containsKey(t)?ne.get(t):0;
			ne.put(t, (short) (cur+1));
			necount+=1;
		}
	}
	
	
	/**
	 * exclude a named entity of the timeline 
	 */
	public void excludeNamedEntities (EntityDistribution e) {
		ArrayList<String> namedTokens = e.tokens;
		for (String t: namedTokens) {
			if (Stopwords.isStopword(t)) continue;
			short cur = ne.containsKey(t)?ne.get(t):0;
			ne.put(t, (short) (cur-1));
			necount-=1;
		}
	}
	
	public HashSet<String> getTerms() {
		return new HashSet<String> (tf.keySet());
	}
	
	public int getFrequency(String term) {
		return (tf.containsKey(term)? tf.get(term):0);
	}
	
	public double getLocalProb(String term) {
		return 1.0 * getFrequency(term)/ total;
	}
	
	//Named entities information
	
	public HashSet<String> getNETerms() {
		return new HashSet<String> (ne.keySet());
	}
	
	public int getNEFrequency(String term) {
		return (ne.containsKey(term)? ne.get(term):0);
	}
	
	public double getLocalNEProb(String term) {
		return 1.0* getNEFrequency(term) / necount;
	}
	
	
	public void print_entity() {
		ArrayList<String> terms = new ArrayList<String> (ne.keySet());
		int k = 0;
		for (String t: terms) {
			System.out.println(t + "\t" + getNEFrequency(t));
			if (k++>=100) break;
		}
	}
	
	
	public double getL1_term() {return L1_term; }
	public double getL1_entity() {return L1_entity; }
	
	private ArrayList<String> sortTermByFreq (){
		ArrayList<String> sortedKeys = new ArrayList<String> ();
		sortedKeys.addAll(tf.keySet());
		if (tf.size()>0)
			sortingMap.qsort(sortedKeys, tf, 0, tf.size()-1);
		return sortedKeys;
	}
	
	/*
	 * get top K term frequencies
	 */
	public JSONArray getTermFrequencies(int k) {
		JSONArray jsa = new JSONArray();
		
		ArrayList<String >sortedKeys = sortTermByFreq(); 
		
		for (String key: sortedKeys){
			JSONObject o = new JSONObject();
			try {
				o.put("text", key);
				o.put("size", tf.get(key));
			} catch (JSONException e) {
				e.printStackTrace();
			}
			jsa.put(o);
			if (k-- ==0) break;
		}
		return jsa;
	}
	
	public JSONArray getCoOccurenceOfTopTerms (int k) {
		ArrayList<String >sortedKeys = sortTermByFreq();
		JSONArray jsa = new JSONArray();
		
		int n = Math.min(k, sortedKeys.size());
		int max = 0;
		for (int i = 0; i< n-1; i++){
			//get top m closest terms
			HashMap<String, Integer> freq_i = new HashMap<String, Integer> (); // index of term (j) -> co-cooccurence of term_ with that term (j)
			ArrayList<String> top_terms = new ArrayList<String> ();
			for (int j = i+1; j< n; j++) {
				int count = 0;
				String w1 = sortedKeys.get(i);
				String w2 = sortedKeys.get(j);
				if (w1.compareTo(w2) >0){ //swap
					String tmp = w1;
					w1 = w2;
					w2 = tmp;
				}
				if (bigrams.containsKey(w1) && bigrams.get(w1).containsKey(w2)) {
					count = bigrams.get(w1).get(w2);
				}
				
				freq_i.put(String.valueOf(j), count);
				top_terms.add(String.valueOf(j));
				if (count >max) max =count;
			}
			//average
			
			//sort to get top 10
			sortingMap.qsort(top_terms, freq_i, 0, top_terms.size()-1);
			for (int j = 0; j < top_terms.size(); j++) {
				JSONObject o = new JSONObject();
				int f = freq_i.get(top_terms.get(j));
				if (f<=2) continue;
				try {
					o.put("source", sortedKeys.get(i));
					o.put("target", sortedKeys.get(j));
					o.put("weight", Math.floor(1.0 * f/1));
				} catch (JSONException e) {
					e.printStackTrace();
				}
				if (jsa.length() <1000) //heuristically select top edges
					jsa.put(o);
			}
		}
		return jsa;
	}
	
	public void print() {
		ArrayList<String> terms = new ArrayList<String> (tf.keySet());
		int k = 0;
		System.out.println("****");
		System.out.println("Statistics ");
		System.out.println("Number of events " + this.size);
		System.out.println("----");
		for (String t: terms) {
			System.out.println(t + "\t" + getFrequency(t));
			if (k++>=100) break;
		}
		for (String t: this.getNETerms()) {
			System.out.println(t + "\t" + this.getNEFrequency(t));
			if (k++>=100) break;
		}
	}
	
	public HashSet<String> readStopWords(String lang) {
		HashSet<String> stopwords = new HashSet<String> ();
		String filepath= "/Work/EUMSSI/data/stopwords/" + lang + ".txt";
		Scanner sc;
		try {
			sc = new Scanner (new FileInputStream(filepath), "utf-8");
			while (sc.hasNext()) {
				String text = sc.nextLine().trim();
				stopwords.add(text);
			}
			sc.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		return stopwords;
	}
	
	public String getString(String language) {
		HashSet<String> stopwords = readStopWords(language);
		
		StringBuffer sb = new StringBuffer();
		ArrayList<String> terms = new ArrayList<String> (tf.keySet());
		int k = 0;
		int topf = 0;
		for (int i = 0; i<terms.size(); i++) {
			String t = terms.get(i);
			if (stopwords.contains(t)) continue;
			if (topf==0){ topf = getFrequency(t);}
			String s = String.format("%s\t%.5f\n",t , 1.0*getFrequency(t) / topf);
			System.out.println(s);
			sb.append(s);
			if (k++>=40) break;
		}
		return sb.toString();
	}
}
