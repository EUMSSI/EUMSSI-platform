package de.l3s.gui;

public class RSSSource {
	int id;
	String title;
	String pageurl;
	String logo;
	String description;

	public RSSSource(int id, String title, String pageurl, String logo,
			String description) {
		super();
		this.id = id;
		this.title = title;
		this.pageurl = pageurl;
		this.logo = logo;
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public String getPageurl() {
		return pageurl;
	}

	public String getLogo() {
		return logo;
	}

	public String getDescription() {
		return description;
	}

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return title;
	}
}
