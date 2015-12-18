/**
 * retrievel data from mysql and store to json format
 */
package de.l3s.eumssi.news;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import de.l3s.eumssi.news.*;

public class Import {
	/**
	 * 
	 * @param outputFile
	 * @param fromdate: yyyy-mm-dd
	 * @param todate: yyyy-mm-dd
	 * @throws IOException
	 */
	public static void getData(String outputFile, String fromdate, String todate) throws IOException {
		EUMSSI_DBQ db = new EUMSSI_DBQ();
		HashMap<String, Boolean> mark = new HashMap<String, Boolean> ();
		try {
			ArrayList<NewsArticle> a = db.getNews(fromdate, todate);
			BufferedWriter file = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(outputFile), "utf-8"));
			file.write("[\n");
			int i = 0;
			for (i = 0; i< a.size(); i++) {
				
				NewsArticle n = a.get(i);
				JSONObject obj = new JSONObject();
		        obj.put("hashid", n.gethashid());
		        obj.put("urlid", n.getUrlid());
		        obj.put("title", n.getTitle());
		        obj.put("link", n.getLink());
		        obj.put("uri", n.geturi());
		        obj.put("author", n.getAuthor());
		        obj.put("description", n.getDescription());
		        obj.put("publisheddate", n.getPublishedDate());
		        obj.put("updateddate", n.getUpdatedDate());
		        obj.put("categories", n.getCategories());
		        obj.put("page", n.getPageHTML());
		        obj.put("content", n.getContent());
		        obj.put("sourceid", n.getSourceID());
		        obj.put("crawleddate", n.getCrawledDate());
		        obj.put("sourceLabel", n.getsourceLabel());
		        
		        
		        if (! mark.containsKey(n.getLink()) || (i == a.size()-1)) {
		            file.write(obj.toJSONString());
		            if (i <a.size() -1) file.write(",\n");
		            System.out.println(i  + "Successfully Copied JSON Object to File...");
		            //System.out.println("\nJSON Object: " + obj);
		        }
	            mark.put(n.getLink(), true);
			}
			file.flush();
			file.write("]");
			file.close();
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
	}
	
	public static void getWordNewsData(String outputFileFolder) throws IOException {
		EUMSSI_DBQ db = new EUMSSI_DBQ();
		HashMap<String, Boolean> mark = new HashMap<String, Boolean> ();
		try {
			ArrayList<NewsArticle> a = db.getHyperTextNews();
			int i = 0;
			for (i = 0; i< a.size(); i++) {
				NewsArticle n = a.get(i);
				String id = n.gethashid();
				String desc =  n.getDescription();
				String title = n.getTitle();
				String content = n.getContent();
				BufferedWriter file = new BufferedWriter(new OutputStreamWriter(
						new FileOutputStream(outputFileFolder+ "/title/" + id + ".txt" ), "utf-8"));
				file.write(title);
				file.flush();
				file.close();
				
				file = new BufferedWriter(new OutputStreamWriter(
						new FileOutputStream(outputFileFolder+ "/description/" + id + ".txt" ), "utf-8"));
				file.write(desc);
				file.flush();
				file.close();
				
				file = new BufferedWriter(new OutputStreamWriter(
						new FileOutputStream(outputFileFolder+ "/content/" + id + ".txt" ), "utf-8"));
				file.write(content);
				file.flush();
				file.close();
			}
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		
		System.out.println("@param: \toutputfile fromdate todate");
		System.out.println("\t\t-outputfile: name of json file");
		System.out.println("\t\t-fromdate: yyyy-MM-dd format, or 1W to indicate 1 week ago until today");
		System.out.println("\t\t-fromdate: yyyy-MM-dd format");
		if (args.length<3) System.exit(0);
		String outputfile = args[0];
		String fromdate = args[1];
		String todate = args[2];
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		
		Date today = new Date();
		
		
		if (fromdate.equals("1W")) {
			//1 week ago
			long one_week_ago = today.getTime() - (7 * 24 * 60 * 60 * 1000);
			Date one_week_date = new Date(one_week_ago);
			fromdate = formatter.format(one_week_date);
			todate = formatter.format(today);
		}
		System.out.println("from " + fromdate + "\tto " + todate);
		
		try {
			getData(outputfile + "." + fromdate + "." + todate + ".json", fromdate, todate);
		} catch (IOException e2) {
			e2.printStackTrace();
		}
		System.exit(0);
		//extract wordnews from Eumssi db to text file 
		try {
			getWordNewsData(outputfile);
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.exit(0);
		
		//get reddit commemtns to files to be used by NER tool (UIUC)
		EUMSSI_DBQ db = new EUMSSI_DBQ();
		try {
			db.getRedditComment("MONTH", outputfile);
		} catch (FileNotFoundException e1) {
			e1.printStackTrace();
		} catch (UnsupportedEncodingException e1) {
			e1.printStackTrace();
		}
		System.exit(0);
		
		
	}
}
