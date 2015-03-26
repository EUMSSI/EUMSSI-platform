package de.l3s.eumssi.service;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import de.l3s.eumssi.dao.DatabaseManager;
import de.l3s.eumssi.model.Event;

public class NewsArticlesEvents {
	
	private DatabaseManager db;
	 private Connection con;
	 private PreparedStatement pstmt;
	 private ResultSet res;
	 
	 /**
	   * Constructor
	 * @throws IOException 
	 */
	 public NewsArticlesEvents()
	    {
		 	db = new DatabaseManager();
	        con = null;
	    }
	 
	    /**
	     * Constructor 
	     * @param con   Connection object
	     */
	    
	    public NewsArticlesEvents(Connection con)
	    {
	    this.con = con;
	    }
	
	   
	    public ArrayList<Event> returnEventsFromSourceID(int srcid) throws SQLException{ 
	    	ArrayList<Event> eventlists = new ArrayList<Event>();
	    	Event evobj = new Event();
	    	String regexp = ".*"+srcid+".*";
	    	System.out.println("Regular Expression is : " +regexp);
	    	
	    	con = db.openConnection();
	        try {
	            		pstmt = con.prepareStatement("select * from Event where Sources  REGEXP ?");
	            		pstmt.setString(1, regexp);
	                    res = pstmt.executeQuery();
	                    while(res.next())
	                    {
	                    	evobj.setEventId(Integer.toString(res.getInt("EventID")));
	                    	evobj.setDescription(res.getString("Description"));
	                    	evobj.setDate(res.getDate("Date"));
	                    	
	                    	eventlists.add(evobj);
	                    	
	                    	System.out.println(" this is inside while loop");
	                    }
	                       
	              
	            }catch(SQLException sqle) {
	                sqle.printStackTrace();
	            }finally {
	                if (pstmt != null) pstmt.close();
	                if (res != null) res.close();
	                db.closeConnection();
	            }
	        return eventlists;
	    }

	public static void main(String[] args) throws SQLException {
		
		System.out.println("Hi..this is main method");
		NewsArticlesEvents nae = new NewsArticlesEvents();
		ArrayList<Event> list = new ArrayList<Event>();
		int id= 17057;
		list = nae.returnEventsFromSourceID(id);
		System.out.println("Total number of results are : "+ list.size());
		
		for(int i=0;i<list.size();i++)
		{
			System.out.println("\n"+list.get(i));
		}
		list.clear();

	}

}
