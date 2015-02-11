/*
 * crawler for content fetching (raw) from url
 * gtran@l3s.de
 */
package de.l3s.eumssi.crawler;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.MalformedURLException;
import java.net.URL;
import java.sql.SQLException;
import java.util.Scanner;
import java.util.HashMap;
public class crawler {
	private String LOCKEY="FetchingLocation";
	private String FetchingLocation = null;
	private DBManager dbman = new DBManager();
	
	public crawler() {
		//read output folder in config.properties
		HashMap<String, String> props = readProperties();
		if (props.containsKey(LOCKEY)) {
			FetchingLocation = props.get(LOCKEY);
		}
		else {
			System.out.println("No output folder for fetching defined in config.properties");
			System.exit(0);
		}
	}
	//simple code for reading properties
	private HashMap<String, String> readProperties () {
		HashMap<String, String> props = new HashMap<String, String> ();
		Scanner sc;
		try {
			sc = new Scanner (new File("config.properties"));
			while (sc.hasNext()) {
				String l = sc.nextLine();
				String[] p = l.split("=");
				props.put(p[0], p[1]);
			}
			sc.close();
		} catch (FileNotFoundException e) {
			System.out.println("config.properties is not found");
			System.exit(0);
		}
		return props;
	}
	
	public void crawl() {
		try {
			HashMap<String, String> urls = dbman.getUrlList();
			
			for (String hashid: urls.keySet()) {
				StringBuilder html = new StringBuilder();
				java.net.URL url = new URL(urls.get(hashid));
				System.out.println(url);
				BufferedReader input = null;
				try {
				    input = new BufferedReader(new InputStreamReader(url.openStream()));
				    String htmlLine;
				    while ((htmlLine=input.readLine())!=null) {
				        html.append(htmlLine);
				        html.append('\n');
				    }
				    input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
				
				if (html.length() >10) {
					//write to file
					PrintWriter pw = new PrintWriter(new File(this.FetchingLocation  +
							"/" + hashid + ".html"));
					pw.write(html.toString());
					pw.close();
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		crawler c = new crawler();
		c.crawl();
	}
}
