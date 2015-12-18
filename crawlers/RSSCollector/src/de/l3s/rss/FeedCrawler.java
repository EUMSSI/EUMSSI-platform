package de.l3s.rss;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URISyntaxException;
import java.net.URL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;
import java.util.Hashtable;
import java.util.List;
import java.util.Vector;

import org.apache.http.HttpResponse;
import org.apache.http.client.CookieStore;
import org.apache.http.client.config.CookieSpecs;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.protocol.ClientContext;
import org.apache.http.impl.client.BasicCookieStore;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.protocol.BasicHttpContext;
import org.apache.http.protocol.HttpContext;
import org.apache.log4j.Logger;

import com.sun.syndication.feed.synd.SyndContent;
import com.sun.syndication.feed.synd.SyndEntry;

import database.DB;
import de.l3s.util.date.FlexDate;
import de.l3s.util.encoding.MD5;
import de.l3s.web.WebUtils;

public class FeedCrawler implements Runnable {

	private RSSFeed feed;

	public FeedCrawler(RSSFeed feed) {
		this.feed = feed;
	}

	@Override
	public void run() {
		Connection con = null;
		try {
			int trials = 0;
			while (trials++ < 2) {
				try {

					Logger logger = Logger.getLogger(this.getClass());
					// logger.info("Hooray! Crawl "+feed.feedurl);
					con = DB.getThreadConnection();
					Statement st = con.createStatement();
					Vector<SyndEntry> entries = feed.crawl();
					MD5 md5 = new MD5();

					Hashtable<String, SyndEntry> idx = new Hashtable<String, SyndEntry>();
					Hashtable<String, String> keys = new Hashtable<String, String>();
					for (SyndEntry feedentry : entries) {
						String strkey = (feedentry.getUri() + "|"
								+ feedentry.getPublishedDate() + "|"
								+ feedentry.getUpdatedDate() + "|"
								+ feedentry.getLink() + "|" + feedentry
								.getSource());
						String id = md5.encode(strkey.getBytes());
						idx.put(id, feedentry);
						keys.put(id, strkey);
					}
					StringBuilder sb = new StringBuilder();
					for (String key : idx.keySet()) {
						if (sb.length() > 0)
							sb.append(",");
						sb.append("'" + key + "'");
					}
					if (sb.length() != 0) {
						ResultSet rs = st
								.executeQuery("SELECT hashid,urlid,sourceid FROM eumssi.news_rss_entries WHERE hashid IN("
										+ sb
										+ ") AND sourceid='"
										+ feed.feedid
										+ "'");
						WebUtils wu = new WebUtils();

						while (rs.next()) {
							String hashid = rs.getString("hashid");
							String urlid = rs.getString("urlid");
							String strkey = keys.get(hashid);
							if (strkey != null && strkey.equals(urlid)) {
								idx.remove(hashid);
								continue;
							}

						}

						String badstring = "";

						Hashtable<String, String> pages = new Hashtable<String, String>();

						if (feed.feedid == 1301) {
							int z = 0;
							z++;
						}

						for (String hashid : idx.keySet()) {
							SyndEntry feedentry = idx.get(hashid);
							String page = "ERROR";
							try {
								page = readPage(new URL(feedentry.getUri()));
							} catch (Exception e) {

								try {
									page = readPage(new URL(feedentry.getLink()));
								} catch (Exception ex) {

									ex.printStackTrace();
									page = e.getMessage();

								}

							}
							pages.put(hashid, page);
						}
						if (con == null || con.isClosed()) {
							con = DB.getThreadConnection();
						}
						PreparedStatement pst = con
								.prepareStatement("INSERT INTO eumssi.news_rss_entries "
										+ " ("
										+ "`hashid`, `urlid`, `title`, `link`, `uri`, `author`, `description`, "
										+ "`publisheddate`, `updateddate`, `links`, `authors`, `categories`, "
										+ "`contents`, `contributors`, `enclosures`, `page`,`sourceid`,`texthash`) "
										+ "VALUES "
										+ "(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

						for (String hashid : idx.keySet()) {
							SyndEntry feedentry = idx.get(hashid);
							String page = pages.get(hashid);

							String strkey = keys.get(hashid);

							pst.setString(1, hashid);
							pst.setString(2, strkey);
							pst.setString(3, feedentry.getTitle());
							pst.setString(4, feedentry.getLink());
							pst.setString(5, feedentry.getUri());

							pst.setString(6, feedentry.getAuthor());
							SyndContent description = feedentry
									.getDescription();
							pst.setString(7, description == null ? ""
									: description.getValue());
							Date publisheddate = feedentry.getPublishedDate();
							Date updatedate = feedentry.getUpdatedDate();
							// System.out.println("publisheddate="+publisheddate);
							// /
							// System.out.println("flexpublisheddate="+(publisheddate==null?null:new
							// FlexDate(publisheddate).formatDate("yyyy-MM-dd HH:mm:ss")));
							// System.out.println("updatedate="+updatedate);
							// System.out.println("flexupdatedate="+(updatedate==null?null:new
							// FlexDate(updatedate).formatDate("yyyy-MM-dd HH:mm:ss")));

							pst.setString(
									8,
									publisheddate == null ? null
											: new FlexDate(publisheddate)
													.formatDate("yyyy-MM-dd HH:mm:ss"));
							pst.setString(
									9,
									updatedate == null ? null : new FlexDate(
											updatedate)
											.formatDate("yyyy-MM-dd HH:mm:ss"));

							pst.setString(10, toArr(feedentry.getLinks()));
							pst.setString(11, toArr(feedentry.getAuthors()));
							pst.setString(12, toArr(feedentry.getCategories()));
							pst.setString(13,
									toArrContents(feedentry.getContents()));
							pst.setString(14,
									toArr(feedentry.getContributors()));
							pst.setString(15, toArr(feedentry.getEnclosures()));

							String npage = page.replaceAll(
									"[^\\u0000-\\uFFFF]", "\uFFFD");
							pst.setString(16, npage);
							pst.setInt(17, feed.feedid);
							pst.setString(
									18,
									description == null ? "" : md5
											.encode(description.getValue()
													.getBytes()));

							pst.addBatch();
						}
						try {
							pst.executeBatch();
							pst.close();
						} catch (Exception e) {

							e.printStackTrace();
						}

						rs.close();
					}
					PreparedStatement pstfeed = con
							.prepareStatement("UPDATE eumssi.news_rss_feeds SET nextcrawlschedule=DATE_ADD(NOW(), INTERVAL MOD(FLOOR(RAND()*1000),120) MINUTE) WHERE feedid=?");
					pstfeed.setInt(1, feed.feedid);
					pstfeed.executeUpdate();
					pstfeed.close();

					st.close();

					con.close();
					if (trials > 1)
						System.out.println("COuld do it after " + trials
								+ " trials");
					break;

					/*
					 * System.out.println(" feedentry.getLink()="+feedentry.getLink
					 * ()+ " feedentry.getAuthor()="+feedentry.getAuthor()+
					 * " feedentry.getAuthors()="+feedentry.getAuthors()+
					 * " feedentry.getCategories()="+feedentry.getCategories()+
					 * " feedentry.getContents()="+feedentry.getContents()+
					 * " feedentry.getTitle()="+feedentry.getTitle()+
					 * " feedentry.getUpdatedDate()="
					 * +feedentry.getUpdatedDate()+
					 * " feedentry.getContributors()="
					 * +feedentry.getContributors()+
					 * " feedentry.getDescription()="
					 * +feedentry.getDescription()+
					 * " feedentry.getEnclosures()="+feedentry.getEnclosures()+
					 * " feedentry.getLinks()="+feedentry.getLinks()+
					 * " feedentry.getPublishedDate()="
					 * +feedentry.getPublishedDate()+
					 * " feedentry.getUri()="+feedentry.getUri()
					 * 
					 * );
					 */

				} catch (SQLException ex) {
					System.out.println("Some error occured, retry " + trials);
					ex.printStackTrace();
				}
			}

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("ne sudba..");
		} finally {
			try {
				if (con != null && !con.isClosed()) {
					con.close();
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		//ensure connection closed
		try {
			con.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	private String toArrContents(List<SyndContent> contents) {
		StringBuilder sb = new StringBuilder();
		for (SyndContent o : contents) {
			if (sb.length() > 0)
				sb.append("|<||>|");
			sb.append(o.getValue());
		}
		return sb.toString();
	}

	public static String readPage(URL url) throws URISyntaxException {

		int trials = 0;
		while (trials++ < 3) {
			RequestConfig globalConfig = RequestConfig.custom()
					.setCookieSpec(CookieSpecs.BEST_MATCH).build();

			RequestConfig localConfig = RequestConfig.copy(globalConfig)
					.setCookieSpec(CookieSpecs.BROWSER_COMPATIBILITY).build();

			// Create a local instance of cookie store
			CookieStore cookieStore = new BasicCookieStore();

			HttpContext localContext = new BasicHttpContext();
			// Bind custom cookie store to the local context
			localContext.setAttribute(ClientContext.COOKIE_STORE, cookieStore);

			// Populate cookies if needed
			/*
			 * BasicClientCookie cookie = new BasicClientCookie("name",
			 * "value"); cookie.setVersion(0);
			 * cookie.setDomain(".mycompany.com"); cookie.setPath("/");
			 * cookieStore.addCookie(cookie);
			 */
			/*
			 * BasicClientCookie cookie = new BasicClientCookie("name",
			 * "value"); cookie.setVersion(0);
			 * cookie.setDomain(".mycompany.com"); cookie.setPath("/");
			 * cookieStore.addCookie(cookie);
			 */
			// Set the store
			CloseableHttpClient httpclient = HttpClients.custom()
					.setDefaultRequestConfig(localConfig)
					.setDefaultCookieStore(cookieStore).build();

			HttpGet httpget = new HttpGet(url.toURI());
			httpget.setHeader(
					"User-Agent",
					"Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2");
			httpget.setHeader("Accept", "text/html; charset=utf-8");

			try {
				// System.out.println("executing request " + httpget.getURI());
				HttpResponse response = httpclient.execute(httpget,
						localContext);
				String line = "";
				StringBuilder total = new StringBuilder();
				BufferedReader rd = new BufferedReader(new InputStreamReader(
						response.getEntity().getContent(), "UTF-8"));
				while ((line = rd.readLine()) != null) {
					total.append(line + "\n");
				}
				// System.out.println(total);
				httpclient.close();
				if (trials <= 3)
					return (total.toString());

			} catch (Exception e) {
				System.out.println("Can not download page: " + url);
				try {
					httpclient.close();
				} catch (IOException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				e.printStackTrace();
				if (trials > 3)
					return (e.getMessage());
			}
		}
		return "error";
	}

	private String toArr(List links) {
		StringBuilder sb = new StringBuilder();
		for (Object o : links) {
			if (sb.length() > 0)
				sb.append("|<||>|");
			sb.append(o.toString());
		}
		return sb.toString();
	}

}
