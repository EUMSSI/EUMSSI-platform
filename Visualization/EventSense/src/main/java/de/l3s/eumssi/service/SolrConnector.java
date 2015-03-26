package de.l3s.eumssi.service;
import java.net.MalformedURLException;

import org.apache.solr.client.solrj.SolrServer;
import org.apache.solr.client.solrj.impl.HttpSolrServer;


public class SolrConnector {

	
	public static SolrServer getSolrServer() throws MalformedURLException {
		SolrServer server;
		//http://pharos.l3s.uni-hannover.de:8983/solr/#/collection2
//		http://asev.l3s.uni-hannover.de:8523/solr/#/wikitimes
		 server = new HttpSolrServer("http://asev.l3s.uni-hannover.de:8523/solr/wikitimes");
		return server;
		
	}
}
