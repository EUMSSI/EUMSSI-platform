package de.l3s.eumssi.Youtube;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

import com.google.gdata.client.youtube.YouTubeService;
import com.google.gdata.data.youtube.CommentEntry;
import com.google.gdata.data.youtube.CommentFeed;
import com.google.gdata.data.youtube.VideoEntry;
import com.google.gdata.util.ServiceException;

public class Comments {
	
	public static void main(String[] args) {
		
		String clientID = "clientID";
		String developer_key = "developer_key";
		YouTubeService service = new YouTubeService(clientID, developer_key);
		String videoEntryUrl = "http://gdata.youtube.com/feeds/api/videos/qlLolGuqo9o";
		try {
			VideoEntry videoEntry = service.getEntry(new URL(videoEntryUrl), VideoEntry.class);
			String commentUrl = videoEntry.getComments().getFeedLink().getHref();
		    
			//Obtengo los comments para este video
			CommentFeed commentFeed = service.getFeed(new URL(commentUrl), CommentFeed.class);
			int count = 1;
			for(CommentEntry comment : commentFeed.getEntries()) {
				System.out.println(count++ + " =====================================");
				System.out.println("Name:" + comment.getAuthors().get(0).getName());
				System.out.println("Comment: " + comment.getPlainTextContent());
				System.out.println("Rating: " + comment.getTotalRating());
				
			}
			
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ServiceException e) {
			e.printStackTrace();
		}
	}

}
