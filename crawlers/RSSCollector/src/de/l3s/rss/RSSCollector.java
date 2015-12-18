package de.l3s.rss;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayDeque;
import java.util.Queue;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;

import database.DB;
import de.l3s.util.datatypes.IndexedQueue;

public class RSSCollector {
	public static void main(String[] args) {
		String task = "eumssi";
		
		if (args.length<1) {
			System.out.println("Missing parameter");
			System.out.println("\t Use: de.l3s.rss.RSSCollector <task>");
			System.out.println("\t <task>:	eumssi or word-news");
			System.out.println("de.l3s.rss.RSSCollector used 'eumssi' as the default param!");
			System.out.println("");
		}
		
		else {
			 task = args[0];
		}
		
		Logger.getLogger("org.apache.commons.httpclient").setLevel(Level.ERROR);
		Logger.getLogger("HttpClient").setLevel(Level.ERROR);

		Logger.getLogger("org.apache.http.client").setLevel(Level.ERROR);
		Logger.getLogger("httpclient").setLevel(Level.ERROR);

		Logger.getLogger("org.apache.http.impl.conn").setLevel(Level.ERROR);
		Logger.getLogger("Wire").setLevel(Level.ERROR);

		Logger.getLogger("log4j.logger.httpclient.wire").setLevel(Level.ERROR);
		Logger.getLogger("wire").setLevel(Level.ERROR);

		Queue<RSSFeed> queue = new ArrayDeque<RSSFeed>();
		ExecutorService executor = Executors.newFixedThreadPool(10);
		CrawlerFeeder cf = new CrawlerFeeder(queue, task);
		cf.start();
		while (true) {
			if (queue.size()==0) { //wait for some time
				try {
					System.out.println("Wait 10 seconds for getting incoming feeds");
					Thread.sleep(10000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
			
			while (queue.size()>0) {
				try {
					//executor.execute(new FeedCrawler(queue.poll()));
					System.out.println("Feeds to retrieve " + queue.size());
					FeedCrawler c = new FeedCrawler(queue.poll());
					Future f = executor.submit(c);
					System.out.println("Fetching...");
					while (f.get()!=null) {//not finished
						Thread.sleep(1000);
					}
				} catch (InterruptedException e) {
					e.printStackTrace();
				} catch (ExecutionException e) {
					e.printStackTrace();
				}
			}
		}
		/**
		StackExecutor se = new StackExecutor(stack, executor);
		se.start();
		*/

	}

	static Connection con = null;

	public static Connection refreshConnection() {
		try {
			if (con == null || con.isClosed()) {
				if (con != null)
					try {
						Thread.sleep(10000);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				return con = DB.getThreadConnection();
			}

		} catch (SQLException e) {
			try {
				Thread.sleep(60000);
			} catch (InterruptedException ex) {
				ex.printStackTrace();
			}
			try {
				return con = DB.getThreadConnection();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		}
		return con;
	}
}
