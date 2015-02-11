/**
 * This class is intended to handle the contents in DB
 * @author gtran
 */

package de.l3s.eumssi.crawler;
import java.sql.*;
import java.util.HashMap;
public class DBManager {
    private Connection connector;
    private PreparedStatement pstmt;
    private ResultSet res;
    /**
     * Constructor
     */
    public DBManager(){
        connector = DBConnector.getConnection();
    }
    public DBManager(Connection con) {
    	this.connector = con;
    	
    }
    
    /*
     * get urls from DB
     */
    public HashMap<String, String> getUrlList() throws SQLException {
    	//check if the connector is closed 
    	if (DBConnector.isClosed(connector)) connector = DBConnector.getConnection();
    	HashMap<String, String> urls = new HashMap<String, String> ();
    	
        pstmt = connector.prepareStatement("select distinct hashid, link from news_rss_entries where sourceid>=1260");
        res = pstmt.executeQuery();
        
        while(res.next()){
        	String link = res.getString("link");
        	String link2filename = res.getString("hashid");
        	urls.put(link2filename, link);
        }
        res.close();
        connector.close();
        System.out.println(urls.size() + " urls obtained ");
    	return urls;
    }
}
    