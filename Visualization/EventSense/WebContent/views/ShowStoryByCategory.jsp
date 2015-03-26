
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">


    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
            <title>Stories Page</title>
            <link rel="stylesheet" type="text/css" href="CSS/style.css">
            <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600" rel="stylesheet" type="text/css" />
            <link href='http://fonts.googleapis.com/css?family=Abel|Satisfy' rel='stylesheet' type='text/css'>
            <script src="jquery.min.js">
            </script>
            <script>
            $(document).ready(function() {
	            $(".story").hover(function(){
	                $(this).css("color","#A31919");
	                $(this).css("text-decoration","none");
	                },
	                function(){
	                $(this).css("color","#0040FF");
	                $(this).css("text-decoration","underline");
	              });
	        	$('.story').click(function () {
	           //id = $(this).attr('id').substring(1);
	           id = $(this).attr('id');
	           window.location = 'ShowEvent.jsp?id=' + id;
	       		 });
           
                //var getVar = location.search.replace('?', '').split('=');
                //$('div[id$=' + getVar[1] + ']')[0].scrollIntoView();
            });
            </script>
            <style>
				a:link
					{
					text-decoration: none;
					}
					a:visited
					{
					text-decoration: none;
					}
					a:active
					{
					text-decoration: blink;
					}
					a:hover
					{
					text-decoration: none;
					}
			</style> 
        </head>
 <body>
	<!-- start #header -->
    <s:include value="/views/header.jsp"></s:include>
	<!-- end #header -->
	
            <h3 class="mainhead">News Stories</h3>
           
            <s:if test="storyset.size() ==0">
            	<h4 class="mainhead"> No stories found on this category</h4>
            </s:if>
            
            <s:iterator var="StoryItem" value="storyset">
            <s:set var="StoryURL" value="helper.returnStoryURL(stories.get(#StoryItem))"/>
            <s:div id="#StoryItem" class="story">
            <s:set var="storyId" value = "stories.get(#storyItem)"/>
					<u><a href="
						<s:if test="useContextPath != false">
							<s:url action="SearchEvent" includeContext="true">
								<s:param name="storyId" value="storyId" > </s:param>
							</s:url>
						</s:if>
						<s:else>
							<s:url action="SearchEvent" includeContext="false">
								<s:param name="storyId" value="storyId" > </s:param>
							</s:url>
						</s:else>
					">
					<font color="#0040FF" ><s:property value="#storyItem"/></font></a></u>&nbsp;&nbsp;
					<s:url var="wikipediaURL" value="" />
					
					<s:a href="%{ #StoryURL}" rel="nofollow">
						<img src="Images/w.jpg" width="15" height="15" alt="" />
					</s:a>
            </s:div>
            </s:iterator>
            <br> <br> <br> <br> <br><br><br><br><br><br><br><br><br><br><br><br><br>
            <div id="footer">
            <p>Copyright (c) L3S Research Center. All rights reserved.</p>
        </div>
        <!-- end #footer -->
        </body>
    </html>

