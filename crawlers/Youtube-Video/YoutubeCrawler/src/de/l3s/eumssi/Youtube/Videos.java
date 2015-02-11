/**
 * this class downlaod Videos' metadata from youtube
 */
package de.l3s.eumssi.Youtube;


import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;


public class Videos {
	static String _DATA_LOCATION="/Work/EUMSSI/data/youtube/jsonraw";
	//compiled list from the Guardian topics
	static String[] keywords = new String[] 
			{
			"fracking", "renewable-energy", "hydrogen-power",
			"wind-power", "nuclear-power", "solar-power",
			"nuclear-waste", "shale-oil", "shale-gas", "oil",
			"gas", "fossil-fuels", "hydraulic-fracturing",
			"energy-monitoring", "energy", "coal", "biomass-and-bioenergy", "biofuels"
			};
	static String [] agencies = new String[] 
			{
			"theguardian",
			"deutschewelleenglish"
			};
	public static void crawlJsonFromYoutube(String keyword) throws IOException {
		HttpResponse response = null;
		HttpClient httpclient = null;
		HttpGet httpget = null;
		HttpEntity entity = null;
		InputStream content = null;
		BufferedReader content_reader = null;
		File qfile = null;
		FileWriter fstream = null;
		BufferedWriter out = null;
		
		try {
			for(int index=1;index<301;index+=50){
				System.out.println("index " + index);
				//get from a specific channel (user)
				//String query = "http://gdata.youtube.com/feeds/api/videos?author=theguardian&q="+keyword+"&v=2&alt=jsonc&start-index="+index+"&max-results=50&lang=en";
				//get from general universal
				String query = "http://gdata.youtube.com/feeds/api/videos?q="+keyword+"&v=2&alt=jsonc&start-index="+index+"&max-results=50&lang=en";
				httpclient = new DefaultHttpClient();
				httpget = new HttpGet(query);
				response = httpclient.execute(httpget);
				entity = response.getEntity();
				if(entity != null){
					content = entity.getContent();
					content_reader = new BufferedReader(new InputStreamReader(content));

					System.out.println("start writting video data");

					qfile = new File (_DATA_LOCATION  + "/" + keyword);
					if (!qfile.exists() )
						qfile.mkdir();
					
					fstream = new FileWriter(_DATA_LOCATION + "/" + keyword + "/" + index + ".json");
					out = new BufferedWriter(fstream);
					out.write(content_reader.readLine());

					System.out.println("done writting video data");
					out.close();
				}

			}
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		finally{
			if(out!=null){
				out.close();
			}
		}
	}
	public static void main(String[] args) {
		for (String kw: keywords) {
			System.out.println("Keyword " + kw);
			try {
				crawlJsonFromYoutube(kw);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}

