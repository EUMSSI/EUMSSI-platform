package de.l3s.eumssi.news;

public class NewsArticle {
	private String hashid;
	private String  urlid;
	private String title;
	private String link;
	private String uri;
	private String author;
	private String description;
	private String publisheddate;
	private String updateddate;
	private String categories;
	private String page, content;
	private String sourceid;
	private String crawleddate;
	private String sourceLabel;
	
	public void setsourceLabel(String sl) {sourceLabel=sl;}
	public void sethashid(String h) {hashid = h;}
	public void setUrlid(String u) {urlid = u;}
	public void setTitle(String t) {title= t;}
	public void setLink(String l) {link = l;}
	public void seturi(String u) {uri = u;}
	public void setAuthor(String a) {author=a;}
	public void setDescription(String d) {description = d;}
	public void setPublishedDate(String p) {publisheddate = p;}
	public void setUpdatedDate(String up) {updateddate = up;}
	public void setCategories(String c) {categories = c;}
	public void setPageHTML(String html) {page = html;}
	public void setSourceID (String s) {sourceid = s;}
	public void setCrawledDate(String cd) {crawleddate = cd;}
	

	public String gethashid() {return hashid;}
	public String getUrlid() {return urlid;}
	public String getTitle() {return title;}
	public String getLink() {return link;}
	public String geturi() {return uri;}
	public String getAuthor() {return author;}
	public String getDescription() {return description;}
	public String getPublishedDate() {return publisheddate;}
	public String getUpdatedDate() {return updateddate;}
	public String getCategories() {return categories;}
	public String getPageHTML() {return page ;}
	public String getSourceID () {return sourceid;}
	public String getCrawledDate() {return crawleddate;}
	public String getsourceLabel() {return sourceLabel;}
	public void setContent(String c) {
		content =c;
	}
	public String getContent() {return content;}
}
