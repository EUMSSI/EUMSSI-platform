package de.l3s.rss;

import java.io.IOException;
import java.io.StringReader;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Iterator;
import java.util.Vector;

import org.apache.log4j.Logger;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.xml.sax.InputSource;

import com.sun.syndication.feed.synd.SyndEntry;
import com.sun.syndication.feed.synd.SyndFeed;
import com.sun.syndication.io.FeedException;
import com.sun.syndication.io.SyndFeedInput;
import com.sun.syndication.io.XmlReader;

import de.l3s.util.date.FlexDate;

public class RSSFeed {

	public int getFeedid() {
		return feedid;
	}

	public URL getFeedurl() {
		return feedurl;
	}

	public String getFeedtitle() {
		return feedtitle;
	}

	public String getLang() {
		return lang;
	}

	public String getPageurl() {
		return pageurl;
	}

	public String getLogourl() {
		return logourl;
	}

	public String getFeeddescription() {
		return feeddescription;
	}

	public FlexDate getNextcrawlschedule() {
		return nextcrawlschedule;
	}

	int feedid;
	URL feedurl;
	String feedtitle;
	String lang;
	String pageurl;
	String logourl;
	String feeddescription;
	FlexDate nextcrawlschedule;
	String domain;
	public RSSFeed(int feedid, URL feedurl, String feedtitle, String lang,
			String pageurl, String logourl, String feeddescription,
			FlexDate nextcrawlschedule) {
		super();
		this.feedid = feedid;
		this.feedurl = feedurl;
		this.feedtitle = feedtitle;
		this.lang = lang;
		this.pageurl = pageurl;
		this.logourl = logourl;
		this.feeddescription = feeddescription;
		this.nextcrawlschedule = nextcrawlschedule;
		this.domain = getDomain(feedurl);
	}

	public static String getDomain(URL feedurl) {
		if (feedurl.toString().contains("theguardian"))
			return "http://www.theguardian.com";
		if (feedurl.toString().contains("cnn"))
			return "http://www.cnn.com";
		if (feedurl.toString().contains("bbc"))
			return "http://www.bbc.co.uk";
		if (feedurl.toString().contains("skynews"))
			return "http://www.skynews.com";
		if (feedurl.toString().contains("washingtonpost"))
			return "http://www.washingtonpost.com";
		return "";
	}
	public Vector<SyndEntry> crawl() {
		if (feedid == 1301) {
			int z = 0;
			z++;
		}

		SyndFeedInput input = new SyndFeedInput();
		XmlReader reader = null;
		Vector<SyndEntry> ret = new Vector<SyndEntry>();
		Document doc;
		try {
			/*
			 * Document doc = Jsoup.parse(feedurl,10000);
			 * getLogger().info(doc.toString());
			 */

			SyndFeed feed = null;
			try {
				feed = input.build(reader = new XmlReader(feedurl));
			} catch (Exception fe) {
				try {
					System.err.println("from url: " + feedurl);
					fe.printStackTrace();

					doc = Jsoup.parse(feedurl, 10000);

					feed = input.build(new StringReader(doc.toString()));
					getLogger().info("Could fix it woith jsoup");
				} catch (ExceptionInInitializerError ed) {
					System.err.println("from url: " + feedurl);
					ed.printStackTrace();

					try {
						URL url = feedurl;
						String feedpage = FeedCrawler.readPage(url);
						feedpage = feedpage.replaceAll("\\&amp;ldquo;", "\"")
								.replaceAll("&ldquo;", "\"")
								.replaceAll("\\&amp;rdquo;", "\"")
								.replaceAll("&rdquo;", "\"");
						System.out.println(feedpage);
						// feedpage=feedpage.replaceAll("\\&amp;ldquo;", "\"");
						// reader=new XmlReader(new InputSource(new
						// StringReader(feedpage)).getCharacterStream());

						feed = input.build(

						new InputSource(new StringReader(feedpage)));
						getLogger().info("Could fix it with complicatedreader");

					} catch (URISyntaxException e) {
						// TODO Auto-generated catch block
						System.err.println("from url: " + feedurl);
						e.printStackTrace();
						System.out.println("URL does not work: " + feedurl);
					} catch (FeedException e) {
						// TODO Auto-generated catch block
						System.err.println("from url: " + feedurl);
						e.printStackTrace();
						System.out.println("URL does not work: " + feedurl);
					} catch (Exception ex) {
						System.err.println("from url: " + feedurl);
						ex.printStackTrace();
						System.out.println("URL does not work: " + feedurl);

					}
				}

			}

			for (Iterator<SyndEntry> i = feed.getEntries().iterator(); i
					.hasNext();) {
				SyndEntry entry = (SyndEntry) i.next();
				System.out.println("\t INFOR: Entry\t" + entry.getUri());
				if (!entry.getUri().startsWith("http")) {
					System.out.println("\t ERROR: \t" + entry.getLink());
					System.out.println("\t DEBUG: \t" + feedurl);
					System.out.println("\t FIX: \t");
					if (domain.length()>0) {
						entry.setLink(domain + entry.getLink());
						entry.setUri(domain + entry.getUri());
						ret.add(entry);
					}
				}
				else ret.add(entry);
				getLogger().info(entry.getTitle());
			}

		} catch (IllegalArgumentException e) {
			// TODO Auto-generated catch block

			getLogger().info("Feed error: " + feedurl);
			getLogger().info("try with jsoup");
			System.err.println("from url: " + feedurl);
			e.printStackTrace();
			try {
				doc = Jsoup.parse(feedurl, 10000);
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				System.err.println("from url: " + feedurl);
				e1.printStackTrace();
			}

		} catch (FeedException fe) {
			getLogger().info("Even jsoup did not work: " + feedurl);
			System.err.println("from url: " + feedurl);
			fe.printStackTrace();

		} catch (IOException e) {
			getLogger().info("Feed error: " + feedurl);
			getLogger().info("try with jsoup");
			// TODO Auto-generated catch block
			System.err.println("from url: " + feedurl);
			e.printStackTrace();
			try {
				doc = Jsoup.parse(feedurl, 10000);
			} catch (IOException e2) {
				// TODO Auto-generated catch block
				System.err.println("from url: " + feedurl);
				e2.printStackTrace();

				try {
					getLogger().info("try with jsoup");
					doc = Jsoup.parse(feedurl, 10000);
					getLogger().info(doc.toString());
				} catch (IOException e1) {
					// TODO Auto-generated catch block
					getLogger().info("once again, jsoup cant do it");
					System.err.println("from url: " + feedurl);
					e1.printStackTrace();
				}
			}

		} finally {
			if (reader != null)
				try {

					reader.close();
				} catch (IOException eg) {
					getLogger().info("Feed error: " + feedurl);
					// TODO Auto-generated catch block
					System.err.println("from url: " + feedurl);
					eg.printStackTrace();
				}
		}
		return ret;
	}

	private Logger getLogger() {
		// TODO Auto-generated method stub
		return Logger.getLogger(this.getClass());
	}

	@Override
	public boolean equals(Object obj) {
		RSSFeed curobj = (RSSFeed) obj;

		return curobj.feedid == feedid;
	}

	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return feedid;
	}
};