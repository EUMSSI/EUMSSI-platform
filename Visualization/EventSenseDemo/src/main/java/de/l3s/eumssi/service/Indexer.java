/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package de.l3s.eumssi.service;
import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.StringField;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.index.IndexWriterConfig.OpenMode;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;
import org.apache.lucene.util.Version;

import de.l3s.eumssi.dao.DatabaseManager;
/**
 * This class is used to index the database.
 * @author kanik
 */
public class Indexer {
    public IndexWriter indexWriter = null;
    private DatabaseManager db;
    String eventIndexpath = null;
    String storyIndexpath = null;
    Directory eventdir, storydir;
    StandardAnalyzer analyzer = new StandardAnalyzer(Version.LUCENE_43);
    IndexWriterConfig config = new IndexWriterConfig(Version.LUCENE_43, analyzer);
    
    /**
     * Creates a new instance of Indexer
     */
    
    public Indexer() throws IOException {
    	db = new DatabaseManager();
    	eventIndexpath = db.conf.getProperty("luceneEventIndex");
        storyIndexpath = db.conf.getProperty("luceneStoryIndex");
        this.eventdir = FSDirectory.open(new File(eventIndexpath));
        this.storydir = FSDirectory.open(new File(storyIndexpath));
        //this.dir = new RAMDirectory();
    }
    
    /**
     * This function gets the index writer
     * @param create    Index writer has been created or not
     * @return      IndexWriter object
     * @throws IOException 
     */
    public IndexWriter getIndexWriter(boolean create, String mode) throws IOException {
    	
        if (create) {
            // Create a new index in the directory, removing any
            // previously indexed documents:
            config.setOpenMode(OpenMode.CREATE);
        } else {
            // Add new documents to an existing index:
            config.setOpenMode(OpenMode.CREATE_OR_APPEND);
        }
        if (indexWriter == null) {
        	if (mode.equals("event"))
        		indexWriter = new IndexWriter(eventdir, config);
        	else 
        		indexWriter = new IndexWriter(storydir, config);
        }
        return indexWriter;
   }    
   
    /**
     * This function closes the index writer.
     * @throws IOException 
     */
    public void closeIndexWriter() throws IOException {
        if (indexWriter != null) {
            indexWriter.close();
        }
   }
    
    /**
     * This function build indexes for the database.
     * @return      Directory object
     * @throws IOException 
     * @throws SQLException 
     */
    public void buildIndexes() throws IOException, SQLException {   
    	// Change to make is "Directory : void" and delete return dir;
        //
        // Erase existing index
        //
        getIndexWriter(true, "event");

        //declaring class variables
        Connection con;
        PreparedStatement pstmt = null;
        ResultSet res = null;
        System.out.println("Yes.... We are in index file");
        // This is a variable to establish the connection with the database.
        con = db.openConnection();        
            try {
            	if(!con.isClosed()) {
                    pstmt = con.prepareStatement("select EventID, Description, Date from Event where Date>\"0000-00-00\"");
                    res = pstmt.executeQuery();
                    while(res.next()){
                        Document doc = new Document();
                        String eventid = String.valueOf(res.getInt("EventID"));
                        String date = res.getString("Date");
                        String desc = res.getString("Description");
                        if (eventid!=null && date !=null && desc!=null) {
                        	doc.add(new StringField("eventid", eventid, Field.Store.YES));
                        	doc.add(new StringField("date", date, Field.Store.YES));
                        	doc.add(new TextField("description", desc, Field.Store.YES));  
                        	indexWriter.addDocument(doc);
                        }
                        else {
                        	if (eventid!=null)
                        		System.out.println(eventid);
                        	else {
                        		System.out.println("Debug: eventid is null");
                        	}
                        }
                    }
            	}
            
            }catch(SQLException sqle) {
                sqle.printStackTrace();
            }finally {
            	if (pstmt!=null) pstmt.close();
                if (res!=null) res.close();
                db.closeConnection();
                System.out.println("Indexing has been completed");
            }
        
        // Don't forget to close the index writer when done
        closeIndexWriter();
     }
    
    /**
     * This function build indexes for list of story in DB
     * @return      Directory object
     * @throws IOException 
     * @throws SQLException 
     */
    public void buildStoryIndexes() throws IOException, SQLException {  
        
        //
        // Erase existing index
        //
        getIndexWriter(true, "story");

        //declaring class variables
        Connection con;
        PreparedStatement pstmt = null;
        ResultSet res = null;
        System.out.println("debug: writing index for stories..");
        // This is a variable to establish the connection with the database.
        con = db.openConnection();        
        if(!con.isClosed()) {
            try {
                    pstmt = con.prepareStatement("select StoryID, Label from NewsStory");
                    res = pstmt.executeQuery();
                    while(res.next()){
                        Document doc = new Document();
                        String storyid = String.valueOf(res.getInt("StoryID"));
                        String desc = res.getString("Label");
                        if (storyid.length()>0) {
                        	doc.add(new StringField("storyid", storyid, Field.Store.YES));
                        	doc.add(new TextField("description", desc, Field.Store.YES));  
                        	System.out.println(desc);
                        	indexWriter.addDocument(doc);
                        }
                    }
            
            }catch(SQLException sqle) {
                sqle.printStackTrace();
            }finally {
            	if (pstmt!=null) pstmt.close();
                if (res!=null) res.close();
                db.closeConnection();
                System.out.println("Indexing has been completed");
            }
        } 
        
        
        // Don't forget to close the index writer when done
        closeIndexWriter();
     }
}