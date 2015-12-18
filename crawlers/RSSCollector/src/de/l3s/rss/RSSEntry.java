package de.l3s.rss;

import de.l3s.util.date.FlexDate;

public class RSSEntry {
	String hashid;
	String urlid;
	String title;
	String link;
	String uri;
	String author;
	String description;
	FlexDate publisheddate;
	FlexDate updateddate;
	String links;
	String authors;
	String categories;
	String contents;
	String contributors;
	String enclosures;
	String page;
	int sourceid;
	String texthash;

	public RSSEntry(String hashid, String urlid, String title, String link,
			String uri, String author, String description,
			FlexDate publisheddate, FlexDate updateddate, String links,
			String authors, String categories, String contents,
			String contributors, String enclosures, String page, int sourceid,
			String texthash) {
		super();
		this.hashid = hashid;
		this.urlid = urlid;
		this.title = title;
		this.link = link;
		this.uri = uri;
		this.author = author;
		this.description = description;
		this.publisheddate = publisheddate;
		this.updateddate = updateddate;
		this.links = links;
		this.authors = authors;
		this.categories = categories;
		this.contents = contents;
		this.contributors = contributors;
		this.enclosures = enclosures;
		this.page = page;
		this.sourceid = sourceid;
		this.texthash = texthash;
	}

	public String getHashid() {
		return hashid;
	}

	public String getUrlid() {
		return urlid;
	}

	public String getTitle() {
		return title;
	}

	public String getLink() {
		return link;
	}

	public String getUri() {
		return uri;
	}

	public String getAuthor() {
		return author;
	}

	public String getDescription() {
		return description;
	}

	public FlexDate getPublisheddate() {
		return publisheddate;
	}

	public FlexDate getUpdateddate() {
		return updateddate;
	}

	public String getLinks() {
		return links;
	}

	public String getAuthors() {
		return authors;
	}

	public String getCategories() {
		return categories;
	}

	public String getContents() {
		return contents;
	}

	public String getContributors() {
		return contributors;
	}

	public String getEnclosures() {
		return enclosures;
	}

	public String getPage() {
		return page;
	}

	public int getSourceid() {
		return sourceid;
	}

	public String getTexthash() {
		return texthash;
	}

}
