package de.l3s.eumssi.Youtube;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.io.StringWriter;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import com.google.gdata.client.youtube.YouTubeService;
import com.google.gdata.data.youtube.VideoEntry;
import com.google.gdata.util.ServiceException;

public class MetadataVideos {
	 int total_likes = 0;
	 int total_views = 0;
	 int total_n_videos = 0;
	 int total_dislikes = 0;
	 int total_Rating = 0, total_ratingCount = 0;
	 int total_Favorite = 0;
	 int total_comments = 0;
	 StringBuilder sb_title = new StringBuilder();
	 StringBuilder sb_description = new StringBuilder();
	 
	 ArrayList<String> dates = new ArrayList<String> ();
	
	@SuppressWarnings("unchecked")
	public void parse(String path) {
		JSONParser parser = new JSONParser();
		Object obj = null;
		JSONObject jsonObject = null;
		JSONObject data = null;
		JSONObject accessControl = null;
		JSONObject thumbnail = null;
		JSONObject link = null;
		JSONObject video = null;
		JSONArray items = null;
		JSONArray tag_list = null;
		Iterator<JSONObject> videos = null;
		String likeCount = "0";
		long ratingCount = 0;
		String uploader = null;
		String video_link = null;
		String syndicate = null;
		String commentVote = null;
		String rate = null;
		String autoPlay = null;
		String list = null;
		String comment = null;
		String embed = null;
		String videoRespond = null;
		String uploaded = null;
		long commentCount = 0;
		String videoId = null;
		VideoEntry videoEntry = null;
		String category = null;
		String title = null;
		String tags = null;
		long duration = 0;
		String thumbnailHqDefault = null;
		long favoriteCount = 0;
		String updated = null;
		String description = null;
		double rating = 0.0;
		long viewCount = 0;
		StringWriter out = null;
		int dislikes = 0;
		
		String clientID = "GMAIL";
		String developer_key = "developer_key";
		YouTubeService service = new YouTubeService(clientID, developer_key);
		String videoEntryUrl = null;
		
		try {
			//path = dir+"/"+filename;
			//path = "/Work/EUMSSI/data/youtube/general-jsonraw/biofuels/1.json";
			obj = parser.parse(new FileReader(path));
			jsonObject = (JSONObject) obj;
			data = (JSONObject)jsonObject.get("data");
			items = (JSONArray)data.get("items");
			videos = items.iterator();
			while (videos.hasNext()) {
				video = (JSONObject)videos.next();

				if(video.get("likeCount")!=null){
					likeCount = (String) video.get("likeCount");
				}else {likeCount = "no_data";}

				if(video.get("ratingCount")!=null){
					ratingCount = (Long) video.get("ratingCount");
				}else {ratingCount = 0;}

				if(video.get("uploader")!=null){
					uploader = (String) video.get("uploader");
				}else {uploader = "no_data";}

				if(video.get("uploaded")!=null){
					uploaded = (String) video.get("uploaded");
				}else {uploaded = "no_data";}

				if(video.get("commentCount")!=null){
					commentCount = (Long) video.get("commentCount");
				}else {commentCount = 0;}

				if(video.get("category")!=null){
					category = (String) video.get("category");
				}else {category = "no_data";}

				if(video.get("title")!=null){
					title = (String) video.get("title");
				}else {title = "no_data";}

				if(video.get("duration")!=null){
					duration = (Long) video.get("duration");
				}else {duration = 0;}

				if(video.get("id")!=null){
					videoId = (String) video.get("id");
				}else {videoId = "no_data";}

				if(video.get("favoriteCount")!=null){
					favoriteCount = (Long) video.get("favoriteCount");
				}else {favoriteCount = 0;}

				if(video.get("updated")!=null){
					updated = (String) video.get("updated");
				}else {updated = "no_data";}

				if(video.get("description")!=null){
					description = (String) video.get("description");
				}else {description = "no_data";}

				if(video.get("rating")!=null){
					rating = (Double) video.get("rating");
				}else {rating = 0.0;}

				if(video.get("viewCount")!=null){
					viewCount = (Long) video.get("viewCount");
				}else {viewCount = 0;}

				if(video.get("tags")!=null){
					tag_list = new JSONArray();
					tag_list = (JSONArray)video.get("tags");
					out = new StringWriter();
					tag_list.writeJSONString(out);
					tags = out.toString();
				}else {tags = "[no_data]";}
				
				if(video.get("accessControl")!=null){
					
					accessControl = (JSONObject)video.get("accessControl");
					
					if(accessControl.get("syndicate")!=null){
						syndicate = (String) accessControl.get("syndicate");
					}else {syndicate = "no_data";}
					
					if(accessControl.get("commentVote")!=null){
						commentVote = (String) accessControl.get("commentVote");
					}else {commentVote = "no_data";}
					
					if(accessControl.get("rate")!=null){
						rate = (String) accessControl.get("rate");
					}else {rate = "no_data";}		
					
					if(accessControl.get("autoPlay")!=null){
						autoPlay = (String) accessControl.get("autoPlay");
					}else {autoPlay = "no_data";}
					
					if(accessControl.get("list")!=null){
						list = (String) accessControl.get("list");
					}else {list = "no_data";}
					
					if(accessControl.get("comment")!=null){
						comment = (String) accessControl.get("comment");
					}else {comment = "no_data";}
					
					if(accessControl.get("embed")!=null){
						embed = (String) accessControl.get("embed");
					}else {embed = "no_data";}
					
					if(accessControl.get("videoRespond")!=null){
						videoRespond = (String) accessControl.get("videoRespond");
					}else {videoRespond = "no_data";}
					
				}else {syndicate = "no_data";
				       commentVote = "no_data";
				       rate = "no_data";
				       autoPlay = "no_data";
				       list = "no_data";
				       comment = "no_data";
				       embed = "no_data";
				       videoRespond = "no_data";}
				
				if(video.get("thumbnail")!=null){
					thumbnail = (JSONObject)video.get("thumbnail");
					if(thumbnail.get("hqDefault")!=null){
						thumbnailHqDefault = (String)thumbnail.get("hqDefault");
					}else {thumbnailHqDefault = "no_data";}
				}else{thumbnailHqDefault = "no_data";}
				
				if(video.get("player")!=null){
					link = (JSONObject)video.get("player");
					if(link.get("default")!=null){
						video_link = (String)link.get("default");
					}else {video_link = "no_data";}
				}else{video_link = "no_data";}
				
				videoEntryUrl = "http://gdata.youtube.com/feeds/api/videos/"+videoId;
				//videoEntry = service.getEntry(new URL(videoEntryUrl), VideoEntry.class);
				
				if(videoEntry!=null  && videoEntry.getYtRating()!=null){
					dislikes=  videoEntry.getYtRating().getNumDislikes(); 
				}
				
				if (!likeCount.equals("no_data")) 
					total_likes += Integer.valueOf(likeCount);
				total_dislikes += dislikes;
				total_Favorite += favoriteCount;
				total_comments += commentCount;
				total_n_videos += 1;
				total_Rating += rating;
				total_views += viewCount;
				total_ratingCount += ratingCount;
				dates.add(uploaded.substring(0, 7));
				sb_title.append(title + "\n");
				sb_description.append(description + "\n");
//				System.out.println(likeCount+","+uploader+","+ratingCount+","+uploaded+","+
//						commentCount+","+videoId+","+category+","+title+","+duration+","+
//						videoId+","+favoriteCount+","+updated+","+description+","+rating+","+
//						viewCount+","+tags+","+syndicate+","+commentVote+","+rate+","+autoPlay+
//						","+list+","+comment+","+embed+","+videoRespond+","+thumbnailHqDefault+","
//						+video_link+","+dislikes);
			}

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		//} catch (ServiceException e) {
	//		e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void parseFolder(String folder) {
		File dir = new File(folder);
		String filename = null;
		String[] children = dir.list();
		if (children == null) {
			// Either dir does not exist or is not a directory
			System.out.println(folder + " is not a dir");
		}else {
			for (int i=0; i<children.length; i++) {
				filename = children[i];
				if (!filename.startsWith(".")){
					System.out.println(filename);
					File f = new File(folder + "/" + filename);
					if (f.isDirectory()) {
						parseFolder(f.getAbsolutePath());
					}
					else if (filename.endsWith(".json")) {
						System.out.println(f.getAbsolutePath());
						parse(f.getAbsolutePath());
					}
				}
			}
		}
	}
	
	public static String nextMonth (String date) {
		String [] tmp = date.split("-");
		int year 	= Integer.valueOf (tmp[0]);
		int month  	= Integer.valueOf(tmp[1]);
		month  = (month +1) % 12;
		if (month ==1) year +=1;
		if (month ==0) month = 12;
		if (month >=10)
			return String.format("%d-%d", year, month);
		else return String.format("%d-0%d", year, month);
	}
	
	public static void main(String[] args) {
		MetadataVideos mtv = new MetadataVideos();
		String folder = "/Work/EUMSSI/data/youtube/theguardian-jsonraw/";
		String title_file = "/Work/EUMSSI/data/youtube/general-jsonraw.title.txt";
		String description_file = "/Work/EUMSSI/data/youtube/general-jsonraw.descrition.txt";
		mtv.parseFolder(folder);
		System.out.println("Number of videos\t" + mtv.total_n_videos);
		System.out.println("Number of views\t" + mtv.total_views);
		System.out.println("Number of comments\t" + mtv.total_comments);
		System.out.println("Number of likes\t" + mtv.total_likes);
		System.out.println("Number of dislikes\t" + mtv.total_dislikes);
		System.out.println("Number of rating\t" + mtv.total_Rating);
		System.out.println("Number of rating counts\t" + mtv.total_ratingCount);
		
		
		HashMap<String, Integer> video_freq = new HashMap<String, Integer> ();
		Collections.sort(mtv.dates);
		for (String d: mtv.dates) {
			int c = video_freq.containsKey(d)? video_freq.get(d):0;
			video_freq.put(d, c+1);
		}
		ArrayList<String> dd = new ArrayList<String> ();
		dd.addAll(video_freq.keySet());
		
		Collections.sort(dd);
		String d = dd.get(0);
		while (true) {
			int c = video_freq.containsKey(d)? video_freq.get(d):0;
			System.out.println(d + "\t" + c);
			d = nextMonth(d);
			if (d.compareTo("2014-11")>=0) break;
			
		}
		
		
		
		/*
		BufferedWriter pw;
		try {
			pw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(title_file),"UTF-8"));
			pw.write(mtv.sb_title.toString());
			pw.close();
			
			pw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(description_file),"UTF-8"));
			pw.write(mtv.sb_description.toString());
			pw.close();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		*/
		

	}
}

