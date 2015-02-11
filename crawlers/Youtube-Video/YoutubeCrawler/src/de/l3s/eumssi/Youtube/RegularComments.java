package de.l3s.eumssi.Youtube;


import java.io.UnsupportedEncodingException;
import java.util.ArrayList;

import org.htmlparser.*;
import org.htmlparser.filters.HasAttributeFilter;
import org.htmlparser.nodes.TagNode;
import org.htmlparser.util.NodeList;
import org.htmlparser.util.ParserException;
import org.htmlparser.tags.Div;
import org.htmlparser.tags.ParagraphTag;
import org.htmlparser.tags.Span;

public class RegularComments {

	//tengo que recibir el video_id y el numero de comentarios
	public static void main(String[] args) throws UnsupportedEncodingException {

		String commentUrl = null;
		int num_comments = 1;
		int num_pages = 0;
		int num_page = 0;
		NodeList commentsList = null;
		Div comment_body = null;
		Div content_container = null;
		Div content = null;
		ArrayList<String> comment_text = null;
		NodeList commentText = null;
		NodeList commentAuthor = null;
		String author_id = null;
		String comment_id = null;
		String comment_score = null;
		String comment_likes = null;
		String likes = null;
		String dislikes = null;
		String full_comment = "";
		String comment_author = null;
		String comment_age = null;
		CleanCommentAge cleaner = new CleanCommentAge();
		CleanCommentText body_cleaner = new CleanCommentText();

		if(num_comments<500){
			num_pages=1;
		}else{
			if(num_comments>1500){
				num_pages = 3;
			}
			else{
				num_pages = 2;
			}
		}

		while(num_page<=num_pages){

			commentUrl="http://www.youtube.com/all_comments?v=G8de4QgxZZA&page="+num_page+"&lang=en";
			try {
				Parser ytParser = new Parser(commentUrl);
				ytParser.setEncoding("UTF-8");
				System.out.println(ytParser.toString());
				NodeFilter topCommentsFilter = new HasAttributeFilter("class","comment yt-tile-default");
				commentsList = ytParser.parse(topCommentsFilter);
				for(Node comment : commentsList.toNodeArray()){
					TagNode tag = (TagNode)comment;
					if(tag.getAttribute("data-tag")==null){

						author_id = tag.getAttribute("data-author-id");
						comment_id = tag.getAttribute("data-id");
						comment_score = tag.getAttribute("data-score");
						if(comment_score==null){
							comment_score = "0";
						}

						//going through the html
						comment_body = (Div) tag.getChildren().elementAt(1);
						content_container = (Div) comment_body.getChildren().elementAt(1);
						content = (Div) content_container.getChildren().elementAt(1);
						full_comment = "";

						//getting the comment text
						commentText = (NodeList) content.getChild(1).getChildren();
						for(Node text : commentText.toNodeArray()){
							comment_text = new ArrayList<String>();
							if(text instanceof ParagraphTag){
								if(text.getFirstChild()!=null){
									int children = ((ParagraphTag) text).getChildCount();
									if(children>1){
										int i = 0;
										while(i<(children)){
											if(((ParagraphTag) text).getChild(i).getText().contains("href")){
												comment_text.add(" ");
											}else{
												comment_text.add(((ParagraphTag) text).getChild(i).toPlainTextString());
											}
											i++;
										}
									}else{
										comment_text.add((text.getFirstChild().getText()));
									}
								}else{comment_text.add(" ");}
							}
							for (String s : comment_text){
								full_comment += s + " ";
							}
							full_comment = full_comment.trim();
							full_comment = body_cleaner.cleaner(full_comment);

						}
						//getting comment metadata
						commentAuthor = (NodeList) content.getChild(3).getChildren();
						for(Node a : commentAuthor.toNodeArray()){
							if(a instanceof Span){
								Span metadata = (Span)a;
								//getting comment author
								if(metadata.getAttribute("class").equals("author ")){
									comment_author = metadata.getChild(1).getFirstChild().getText();
								}
								//getting comment likes and dislikes
								if(metadata.getAttribute("class").equals("comments-rating-positive")){
									comment_likes = metadata.getAttribute("title");
									comment_likes = comment_likes.replaceAll("[a-zA-Z\\s\\:]", "");
									if(comment_likes.indexOf(",")!=-1){
										likes = comment_likes.substring(0,comment_likes.indexOf(",", 0));
										dislikes = comment_likes.substring(comment_likes.indexOf(",")+1);
									}else {likes = comment_likes.trim(); dislikes = "0";}

								}else{likes = "0"; dislikes = "0";}
								//getting comment time
								if(metadata.getAttribute("class").equals("time")){
									if(metadata.getStringText().contains("Antwort an ")){
										comment_age = metadata.getChild(5).getFirstChild().toPlainTextString().trim();
										comment_age = cleaner.cleaner(comment_age).trim();
									}
									else {
										comment_age = metadata.getChild(1).getFirstChild().getText().trim();
										comment_age = cleaner.cleaner(comment_age).trim();

									}
								}
							}
						}

						//parser
						System.out.println(comment_id+","+author_id+","+comment_score
								+","+full_comment+","+comment_author+","+likes+","+dislikes+","+comment_age);

					}

				}
			}catch (ParserException e1) {
				e1.printStackTrace();}


			num_page++;
		}
	}
}
