package de.l3s.eumssi.Youtube;

public class CleanCommentText {
	
	public String cleaner(String dirtyText){
		
		String body = null;
		body = dirtyText.replace("&#39;", "'").replace("&lt;","<").
				replace("&quot;", "\"").replace("&gt;", ">").
				replace("&amp;", "&").replace(",", ";;");
		return body;
	}

}
