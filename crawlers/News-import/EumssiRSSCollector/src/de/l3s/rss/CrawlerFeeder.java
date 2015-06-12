package de.l3s.rss;

import java.net.MalformedURLException;
import java.net.URL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.util.Queue;

import org.apache.log4j.Logger;

import de.l3s.util.datatypes.IndexedQueue;
import de.l3s.util.date.FlexDate;
import de.l3s.util.date.TimeUtils;

public class CrawlerFeeder extends Thread {

	private Queue<RSSFeed> queue;
	private String task = "eumssi";			//default task is eumssi --> energy topic
											//otherwise it is getting wordnews with feedid >=2000
	
	public CrawlerFeeder(Queue<RSSFeed>queue, String task) {
		this.queue = queue;
		this.task = task;
	}

	@Override
	public void run() {
		Logger logger = Logger.getLogger(CrawlerFeeder.class);
		while (true) {
			try {
				Connection con = RSSCollector.refreshConnection();
				logger.info("Select updatable RSS feeds");
				String sql = "SELECT feedid,feedurl,feedtitle,lang,pageurl,logourl,feeddescription,nextcrawlschedule	"
						+ "FROM eumssi.news_rss_feeds " +
						"WHERE DATE_ADD(NOW(),INTERVAL 2 HOUR)>nextcrawlschedule " +
						"AND feedid>=? " +
						"ORDER BY nextcrawlschedule ASC";
				System.out.println(sql);
				PreparedStatement pst = con.prepareStatement(sql);
				if (task.equals("eumssi")) pst.setInt(1, 1260);
				else pst.setInt(1, 2000);
				
				ResultSet rs = null;
				try {
					rs = pst.executeQuery();

					if (rs == null) {
						continue;
					}
					nextfeed: while (rs.next()) {
						int trials = 0;
						while (trials++ < 3) {
							try {
								int feedidi;

								RSSFeed rf = new RSSFeed(
										feedidi = rs.getInt("feedid"),
										new URL(rs.getString("feedurl")),
										rs.getString("feedtitle"),
										rs.getString("lang"),
										rs.getString("pageurl"),
										rs.getString("logourl"),
										rs.getString("feeddescription"),
										FlexDate.parseGregorianDate(rs
												.getString("nextcrawlschedule"))

								);
								
								// logger.info("addtostack '"+rs.getString("feedurl")+"' next crawl:"+rs.getString("nextcrawlschedule"));
								if (feedidi != 1301) {
									// continue nextfeed;
								}
								queue.add(rf);
								break;
							} catch (MalformedURLException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							} catch (Exception e1) {
								logger.info("problems with DB");
								e1.printStackTrace();
								try {
									Thread.sleep(10000);
									logger.info("problems with DB solved");
								} catch (Exception g) {
									g.printStackTrace();
								}
							}
						}

					}
				} catch (Exception e) {
					try {
						Thread.sleep(10000);
					} catch (InterruptedException e1) {
						// TODO Auto-generated catch block
						e1.printStackTrace();
					}

					continue;
				}
				rs.close();
				pst.close();
				con.close();

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
			try {
				long sleepfor = 20000;
				logger.info("CrawlerFeeder will sleep for "
						+ TimeUtils.millisToLongDHMS(sleepfor) + "");
				logger.info("CrawlerFeeder wakes up on "
						+ new Date(new Date().getTime() + sleepfor));
				Thread.sleep(sleepfor);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
