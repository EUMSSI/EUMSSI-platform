/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package de.l3s.eumssi.service;
//import de.l3s.lemma.lemma;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TopScoreDocCollector;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;
import org.apache.lucene.util.Version;

import de.l3s.eumssi.dao.DatabaseManager;

/**
 * This class is used to search a given query against the index constructed
 * @author kanik
 */
public class SearchEngine {
    public IndexReader reader = null;
    public IndexReader articlesReader = null;
    
    public IndexSearcher searcher = null;
    public IndexSearcher articlesSearcher = null;
    public QueryParser parser = null;
    public QueryParser articleParser = null;
    Directory dir;
    @SuppressWarnings("deprecation")
	StandardAnalyzer analyzer = new StandardAnalyzer(Version.LUCENE_40);
    
    /**
     * Constructor
     * mode  = "event" or "story" for event/story search
     * @throws IOException 
     */
    @SuppressWarnings("deprecation")
	public SearchEngine(String mode) throws IOException {
    	DatabaseManager db = new DatabaseManager();
        if (mode.equals("event")){
        	this.reader = DirectoryReader.open(FSDirectory.open(new File(db.conf.getProperty("luceneEventIndex"))));
            this.articlesReader = DirectoryReader.open(FSDirectory.open(new File(db.conf.getProperty("luceneNewsArticlesIndex"))));
        }
             
        else 
        	this.reader = DirectoryReader.open(FSDirectory.open(new File(db.conf.getProperty("luceneStoryIndex"))));
        
        this.searcher = new IndexSearcher(reader);
        this.articlesSearcher = new IndexSearcher(articlesReader);
        this.parser = new QueryParser(Version.LUCENE_40, "description", analyzer);
        this.articleParser = new QueryParser(Version.LUCENE_40, "ArticleContent", analyzer);
    }
    
    /**
     * Constructor
     * @param dir   Directory object
     * @throws IOException 
     */
    @SuppressWarnings("deprecation")
	public SearchEngine(Directory dir) throws IOException {
        this.reader = IndexReader.open(dir);
        this.searcher = new IndexSearcher(reader);
        this.parser = new QueryParser(Version.LUCENE_40, "description", analyzer);
    }
    
    /**
     * This function performs the search
     * @param queryString   query keywords
     * @return      Top search results
     * @throws IOException
     * @throws ParseException 
     */
    public ScoreDoc[] performSearch(String queryString) throws IOException, ParseException {
        System.out.println("Yeas.... We are doing searcing");
        String queries = "";
        String [] keywords = queryString.split("\\s+");
        ArrayList<String> normalizedCategory = new ArrayList<String>();
        for (String kw: keywords) {
            if (!Stopwords.isStopword(kw)) normalizedCategory.add(kw);
        }
        int i=0;
        for(String key : normalizedCategory){
            if(i==0){
                queries = key + "*";
                i++;
            }
            else
            {
                queries = queries+" AND "+key + "*";
            }
        }
        System.out.println("QueryString : "+queries);
        Query query = parser.parse(queries);
        //Query query = parser.parse(queryString);
        
        int hitsPerPage = 1000;
        TopScoreDocCollector collector = TopScoreDocCollector.create(hitsPerPage, true);
        searcher.search(query, collector);
        
        ScoreDoc[] hits = collector.topDocs().scoreDocs;
        System.out.println("Searching has been completed");
        return hits;
    }
    //@ SUDHIR KUMAR == perform search over newsarticle index
    public ScoreDoc[] performSearchOnArticlesIndexes(String queryString) throws IOException, ParseException {
        System.out.println("Yeas.... We are doing searcing on NewsArticles");
        String queries = "";
        String [] keywords = queryString.split("\\s+");
        ArrayList<String> normalizedCategory = new ArrayList<String>();
        for (String kw: keywords) {
            if (!Stopwords.isStopword(kw)) normalizedCategory.add(kw);
        }
        int i=0;
        for(String key : normalizedCategory){
            if(i==0){
                queries = key + "*";
                i++;
            }
            else
            {
                queries = queries+" AND "+key + "*";
            }
        }
        System.out.println("QueryString : "+queries);
        Query query = articleParser.parse(queries);
        //Query query = parser.parse(queryString);
        
        int hitsPerPage = 1000;
        TopScoreDocCollector collector = TopScoreDocCollector.create(hitsPerPage, true);
        articlesSearcher.search(query, collector);
        
        ScoreDoc[] hits = collector.topDocs().scoreDocs;
        System.out.println("Searching has been completed");
        return hits;
    }
}

