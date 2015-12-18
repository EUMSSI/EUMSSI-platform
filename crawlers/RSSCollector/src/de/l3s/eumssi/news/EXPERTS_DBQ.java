//package de.l3s.eumssi.news;
//
//import java.io.BufferedWriter;
//import java.io.File;
//import java.io.FileNotFoundException;
//import java.io.FileOutputStream;
//import java.io.IOException;
//import java.io.InputStream;
//import java.io.OutputStreamWriter;
//import java.io.PrintWriter;
//import java.io.UnsupportedEncodingException;
//import java.sql.*;
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.HashSet;
//import java.util.Map.Entry;
//import java.util.Set;
//
//import org.apache.tika.exception.TikaException;
//import org.apache.tika.io.IOUtils;
//import org.apache.tika.metadata.Metadata;
//import org.apache.tika.parser.ParseContext;
//import org.apache.tika.parser.html.HtmlParser;
//import org.apache.tika.sax.BodyContentHandler;
//import org.apache.tika.sax.LinkContentHandler;
//import org.apache.tika.sax.TeeContentHandler;
//import org.apache.tika.sax.ToHTMLContentHandler;
//import org.xml.sax.ContentHandler;
//import org.xml.sax.SAXException;
//
//import de.l3s.wikitimes.core.Story;
//import de.l3s.wikitimes.core.EntityDistribution;
//import de.l3s.wikitimes.core.EventDistribution;
//
///**
// * This class is intended to handle the contents in database.
// * @author gtran
// */
//public class EXPERTS_DBQ {
//    //declaring class variables
//    private Connection con;
//    private PreparedStatement pstmt;
//    private ResultSet res;
//    private Statement stmt;
//    
//    LinkContentHandler linkHandler = new LinkContentHandler();
//    ContentHandler textHandler = new BodyContentHandler(1000000);
//    ToHTMLContentHandler toHTMLHandler = new ToHTMLContentHandler();
//    TeeContentHandler teeHandler = new TeeContentHandler(linkHandler, textHandler, toHTMLHandler);
//    Metadata metadata = new Metadata();
//    ParseContext parseContext = new ParseContext();
//    HtmlParser parser = new HtmlParser();
//    
//    /**
//     * Constructor
//     */
//    public EXPERTS_DBQ(){
//        con = Experts_DBHandler.getConnection();
//    }
//    
//    
//    /**
//     * Constructor 
//     * @param con   Connection object
//     */
//    public EXPERTS_DBQ(Connection con){
//    	this.con = con;
//    }
//    
//    public void connect() {
//    	if(Experts_DBHandler.isClosed(con)) {
//            con = Experts_DBHandler.getConnection();
//        }
//    }
//    
//    public ArrayList<NewsArticle> getNews() throws FileNotFoundException, UnsupportedEncodingException {
//    	connect();
//    	
//    	ArrayList<NewsArticle> articles = new  ArrayList<NewsArticle>();
//    	 try {
//             pstmt = con.prepareStatement("select f.sourcelable," +
//             		" e.hashid, e.urlid, e.title, e.link, e.uri, e.author, e.description, e.publisheddate, " +
//             		" e.updateddate, e.categories, e.contents, e.page, e.sourceid, e.crawleddate" +
//             		" from news_rss_feeds f " + 
//             		" join news_rss_entries e on e.sourceid = f.feedid");
//             ResultSet r = pstmt.executeQuery();
//             int c = 0;
//             while (r.next())  {
//            	 System.out.println(c++);
//            	 String sourceLabel = fix(r.getString("sourcelable"));
//            	 String title = fix(r.getString("title").replace("\t", ""));
//            	 String description = fix(r.getString("description"));
//            	 
//            	 String hashid = fix(r.getString("hashid").replace("\t", ""));
//        		 String urlid = fix(r.getString("urlid").replace("\t", ""));
//        		 
//        		 String link = fix(r.getString("link").replace("\t", ""));
//        		 String uri = fix(r.getString("uri").replace("\t", ""));
//        		 String author = fix(r.getString("author").replace("\t", ""));
//        		 
//        		 String publisheddate =  fix(r.getString ("publisheddate"));
//        		 String updateddate =  fix(r.getString ("updateddate"));
//        		 String categories = fix(r.getString("categories").replace("\t", ""));
//        		 String page = fix(r.getString("page").replace("\t", ""));
//        		 String content = fix(r.getString("contents").replace("\t", ""));
//        		 String sourceid =fix(r.getString("sourceid").replace("\t", ""));
//        		 String crawleddate = fix(r.getString("crawleddate").replace("\t", ""));
//            		
//            	 NewsArticle n = new NewsArticle();
//            	 n.setsourceLabel(sourceLabel);
//	    		n.sethashid(hashid);
//	    		n.setUrlid(urlid); 
//	    		n.setTitle(title) ;
//	    		n.setLink( link) ;
//	    		n.seturi( uri) ;
//	    		n.setAuthor( author); 
//	    		n.setDescription( description); 
//	    		n.setPublishedDate( publisheddate); 
//	    		n.setUpdatedDate( updateddate) ;
//	    		n.setCategories( categories) ;
//	    		n.setPageHTML(page) ;
//	    		n.setContent(content);
//	    		n.setSourceID (sourceid) ;
//	    		n.setCrawledDate( crawleddate); 
//            		
//	    		articles.add(n);
//            	 
//             }
//	     }catch(SQLException sqle) {
//	         sqle.printStackTrace();
//	     }finally {
//	         Experts_DBHandler.closePStatement(pstmt);
//	         Experts_DBHandler.closeResultSet(res);
//	     }
//    	 return articles;
//	}
//    
//    public String fix(String s) {
//    	if (s==null) return "";
//    	return s.replace("\t", "").replace("\n", "");
//    }
//
//    /**
//     * word news from eumssi server
//     * @return
//     * @throws FileNotFoundException
//     * @throws UnsupportedEncodingException
//     */
//    public ArrayList<NewsArticle> getHyperTextNews() throws FileNotFoundException, UnsupportedEncodingException {
//    	connect();
//    	ArrayList<NewsArticle> articles = new  ArrayList<NewsArticle>();
//    	 try {
//             pstmt = con.prepareStatement("select " +
//             		" e.hashid, e.title, e.description, " +
//             		" e.contents " +
//             		" from news_rss_feeds f " + 
//             		" join news_rss_entries e on e.sourceid = f.feedid" + 
//             		" where e.sourceid >=2000"
//            		 );
//             ResultSet r = pstmt.executeQuery();
//             int c = 0;
//             while (r.next())  {
//            	 System.out.println(c++);
//            	 String title = fix(r.getString("title").replace("\t", ""));
//            	 String description = fix(r.getString("description"));
//            	 
//            	 String hashid = fix(r.getString("hashid").replace("\t", ""));
//        		 
//        		 String content = fix(r.getString("contents").replace("\t", ""));
//            		
//            	 NewsArticle n = new NewsArticle();
//	    		n.sethashid(hashid);
//	    		n.setTitle(title) ;
//	    		n.setDescription( description); 
//	    		n.setContent(content);
//            		
//	    		articles.add(n);
//            	 
//             }
//	     }catch(SQLException sqle) {
//	         sqle.printStackTrace();
//	     }finally {
//	    	 Experts_DBHandler.closePStatement(pstmt);
//	         Experts_DBHandler.closeResultSet(res);
//	     }
//    	 return articles;
//	}
//    
//    /**
//     * get commments of reddit from experts database
//     * @return
//     * @throws FileNotFoundException
//     * @throws UnsupportedEncodingException
//     * @tableCode='DAY' or 'MONTH"
//     */
//    public void getRedditComment(String tableCode, String outputDir) throws FileNotFoundException, UnsupportedEncodingException {
//    	int n = 100;		//how many records will be writen into ONE file
//    	connect();
//    	 try {
//             pstmt = con.prepareStatement(	"	select id, COMMENT_BODY " +
//             								"	from REDDIT_M2_" + tableCode + "_COMMENTS" 
//            		 );
//             ResultSet r = pstmt.executeQuery();
//             int c = 0;
//             StringBuffer sb = new StringBuffer();
//             while (r.next())  {
//            	 System.out.println(c++);
//            	 String description = r.getString("COMMENT_BODY");
//            	 String id= r.getString("id");
//            	 sb.append("<G_ID=" + id + ">");
//            	 sb.append(description);
//            	 sb.append("<BREAK>\n");
//            	 int hashid = c;
//            	 if (c % n==1) { // enough to write
//	            	 BufferedWriter file = new BufferedWriter(new OutputStreamWriter(
//	 						new FileOutputStream(outputDir + hashid + ".txt" ), "utf-8"));
//	 				try {
//						file.write(sb.toString());
//						file.flush();
//		 				file.close();
//		 				sb.setLength(0); 	/// clean
//					} catch (IOException e) {
//						e.printStackTrace();
//					}
//            	 }
//             }
//             
//             //write the rest
//        	 BufferedWriter file = new BufferedWriter(new OutputStreamWriter(
//						new FileOutputStream(outputDir + (c++) + ".txt" ), "utf-8"));
//				try {
//					file.write(sb.toString());
//					file.flush();
//	 				file.close();
//	 				sb.setLength(0); 	/// clean
//				} catch (IOException e) {
//					e.printStackTrace();
//				}
//	     }catch(SQLException sqle) {
//	         sqle.printStackTrace();
//	     }finally {
//	         Experts_DBHandler.closePStatement(pstmt);
//	         Experts_DBHandler.closeResultSet(res);
//	     }
//	}
//    
//    /**
//     * @param field: can be title_ner or description_ner --> updated table can be entity_title/description_relation or 
//     * @param updatedColumn
//     * @throws FileNotFoundException
//     * @throws UnsupportedEncodingException
//     */
//    public ArrayList<NewsArticle> extractNERPosition(String field, String updatedTable) throws FileNotFoundException, UnsupportedEncodingException {
//    	connect();
//    	ArrayList<NewsArticle> articles = new  ArrayList<NewsArticle>();
//    	 try {
//             pstmt = con.prepareStatement("select " +
//             		" hashid, " + field +
//             		" from news_rss_entries  " + 
//             		" where sourceid >=2000" +
//             		" and LENGTH(" + field +")>0"
//            		 );
//             ResultSet r = pstmt.executeQuery();
//             int c = 0;
//             while (r.next())  {
//            	 System.out.println("\tInfor: item " + c++);
//            	 String hashid = fix(r.getString("hashid"));
//        		 String content = fix(r.getString(field));
//        		 ArrayList<NEREntity> entities = Extractor.extractEntities(content);
//        		 for (NEREntity n: entities) {//insert
//        			 PreparedStatement pp = con.prepareStatement("insert ignore into " + updatedTable +
//        					 				" (hashid, position, entity, type) values (?, ?,?,?)"
//        					 	);
//        			 pp.setString(1, hashid);
//        			 pp.setInt(2, n.position);
//        			 pp.setString(3, n.text);
//        			 pp.setString(4, n.type);
//        			 pp.executeUpdate();
//        		 }
//             }
//	     }catch(SQLException sqle) {
//	         sqle.printStackTrace();
//	     }finally {
//	         Experts_DBHandler.closePStatement(pstmt);
//	         Experts_DBHandler.closeResultSet(res);
//	     }
//    	 return articles;
//	}
//    
//    
//    /**
//     * insert NER to EXPERT database
//     * @param field: can be DAY or MONTH 
//     */
//    public void RedditExtractNERPositionToExpertDB(String field) {
//    	connect();
//    	String updatedTable = "entity_reddit_" + field.toLowerCase() + "_comments_relation";
//    	 try {
//             pstmt = con.prepareStatement("select " +
//             		" annotation_ner_text, id " +
//             		" from ner_REDDIT_M2_" + field + "_COMMENTS" + 
//             		" where LENGTH( annotation_ner_text )>0"
//            		 );
//             ResultSet r = pstmt.executeQuery();
//             int c = 0;
//             while (r.next())  {
//            	 //System.out.println("\tInfor: item " + c++);
//            	 int id = r.getInt("id");
//        		 String content = r.getString("annotation_ner_text");
//        		 ArrayList<NEREntity> entities = Extractor.extractEntities(content);
//        		 for (NEREntity n: entities) {//insert
//        			 PreparedStatement pp = con.prepareStatement("insert ignore into " + updatedTable +
//        					 				" (commentID, position, entity, type) values (?, ?,?,?)"
//        					 	);
//        			 pp.setInt(1, id);
//        			 pp.setInt(2, n.position);
//        			 pp.setString(3, n.text);
//        			 pp.setString(4, n.type);
//        			 pp.executeUpdate();
//        		 }
//             }
//	     }catch(SQLException sqle) {
//	         sqle.printStackTrace();
//	     }finally {
//	         Experts_DBHandler.closePStatement(pstmt);
//	         Experts_DBHandler.closeResultSet(res);
//	     }
//	}
//    
//    public static void mainx(String[] args) {
//    	EXPERTS_DBQ db = new EXPERTS_DBQ();
//    	try {
//			db.getNews();
//		} catch (FileNotFoundException e) {
//			e.printStackTrace();
//		} catch (UnsupportedEncodingException e) {
//			e.printStackTrace();
//		}
//    }
//
//    
//    /**
//     * eumssi news rss 
//     * @param field
//     * @param hashid
//     * @param text
//     */
//	public void insertToDB(String field, String hashid, String text) {
//		connect();
//		
//		 try {
//             pstmt = con.prepareStatement("update news_rss_entries set " + field + "=?" +
//             							" where hashid=?");
//             pstmt.setString(1, text);
//             pstmt.setString(2, hashid);
//             int r = pstmt.executeUpdate();
//             System.out.println(r + "\t" + hashid + "\t");
//	    }catch(SQLException sqle) {
//	        sqle.printStackTrace();
//	    }finally {
//	        Experts_DBHandler.closePStatement(pstmt);
//	        Experts_DBHandler.closeResultSet(res);
//	    }
//	}
//	/**
//	 * insert ner text of reddit comments to EXPERT DB
//	 * @param field: DAY or MONTH
//	 * @param id
//	 * @param nertext
//	 */
//	public void insertToExpertDB(String field, int id, String nertext) {
//		connect();
//		
//		 try {
//            pstmt = con.prepareStatement("insert ignore into ner_REDDIT_M2_" + field + "_COMMENTS(id, annotation_ner_text) " +
//            							" values (?, ?)");
//            							
//            pstmt.setString(2, nertext);
//            pstmt.setInt(1, id);
//            pstmt.execute();
//	    }catch(SQLException sqle) {
//	        sqle.printStackTrace();
//	    }finally {
//	        Experts_DBHandler.closePStatement(pstmt);
//	        Experts_DBHandler.closeResultSet(res);
//	    }
//	}
//	
//	
//	public HashSet<String> getEntityFromEntityAnalytics() {
//		HashSet<String> entities = new HashSet<String> ();
//		connect();
//		
//		 try {
//             pstmt = con.prepareStatement("select entity from entity_analytics");
//             ResultSet r = pstmt.executeQuery();
//             int c = 0;
//             while (r.next())  {
//            	 entities.add(r.getString("entity"));
//             }
//	    }catch(SQLException sqle) {
//	        sqle.printStackTrace();
//	    }finally {
//	        Experts_DBHandler.closePStatement(pstmt);
//	        Experts_DBHandler.closeResultSet(res);
//	    }
//		 return entities;
//	}
//}