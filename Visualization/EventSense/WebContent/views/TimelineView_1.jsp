<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>WikiTimes - Timeline</title>

<link rel="stylesheet" type="text/css" href="CSS/style.css">
<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600" rel="stylesheet" type="text/css" />
<link href='http://fonts.googleapis.com/css?family=Abel|Satisfy' rel='stylesheet' type='text/css'>
<script src="jquery.min.js"></script>
<script>
                $(document).ready(function() {
                     $(".cat").hover(function(){
                        $(this).css("color","#A31919");
                        $(this).css("text-decoration","none");
                        },
                        function(){
                        $(this).css("color","#0040FF");
                        $(this).css("text-decoration","underline");
                      });
               
               
               
                $(".story").hover(function(){
                        $(this).css("color","#A31919");
                        $(this).css("text-decoration","none");
                        },
                        function(){
                        $(this).css("color","#0040FF");
                        $(this).css("text-decoration","underline");
                      });
               
            
                $(".newstory").hover(function(){
                        $(this).css("color","#A31919");
                        $(this).css("text-decoration","none");
                        },
                        function(){
                        $(this).css("color","#0040FF");
                        $(this).css("text-decoration","underline");
                      });
                
                $(".cate").hover(function(){
                        $(this).css("color","#A31919");
                        $(this).css("text-decoration","none");
                        },
                        function(){
                        $(this).css("color","#0040FF");
                        $(this).css("text-decoration","underline");
                      });
                
                $(".newentity").hover(function(){
                    $(this).css("color","#A31919");
                    $(this).css("text-decoration","none");
                    },
                    function(){
                    $(this).css("color","#222222");
                    $(this).css("text-decoration","underline");
                  });
              
            });
            </script>
            <style type="text/css" >
				div#container{width:1100px ; margin-left: auto; margin-right: auto;}
				div#menus {width:90%; float:left;position: relative;}
				div#content {width:30%; float:left;position: relative;}
				div#summary{width:80% ; margin-left: auto; margin-right: auto; position: relative;}			
			</style>
			<style>
				a:link	  {text-decoration: none;}
				a:visited {text-decoration: none;}
				a:active  {text-decoration: blink;}
				a:hover   {text-decoration: none;}
			</style> 
</head>

<body>
	
	<div id = "container">
	
		<!-- start #header -->
	    <s:include value="/views/header.jsp"></s:include>
		<!-- end #header -->

<!--  #############################################  -->
	<div id ="menus" >
			<h3 class="mainhead"><s:property value="itemType"/>: <b><s:property value="itemName"/></b> 
				<s:if test="hasWikipediaUrl != false">
					(<s:a href="%{wikipediaUrl}" >Wikipedia Page</s:a>)
				</s:if>
			</h3>
		        
		    <h3 class="mainhead">Timeline: <b><s:property value="searchsize"/></b> events from <b><s:property value="fromDate"/></b> to <b><s:property value="toDate"/></b></h3>
	    	<br/><br/><br/>   
	 </div>	

<!--  #############################################  -->



<!--  #############################################  -->
		<!--  Related News Stories - start -->	
		<div id = "content">
			<h3 class="mainhead">Related News Stories</h3>
			<s:iterator value="relatedStories" var="story" >	
				<s:div id="#story.id" class="story" style="margin-left: 100px;"> 
				<a href="
						<s:if test="useContextPath != false">
			    			<s:url action="storyTimeline" includeContext="true">
								<s:param name="storyId" value="#story.id" > </s:param>
							</s:url>
						</s:if>
						<s:else>
							<s:url action="storyTimeline" includeContext="false">
								<s:param name="storyId" value="#story.id" > </s:param>
							</s:url>
						</s:else>
						">
						<font color="#0040FF" ><s:property value="#story.name"/></font>
				</a> 
				</s:div>
			</s:iterator>
		</div>
		<!--  Related Stories - end --> 
	    <!--  #############################################  -->
	
		<div id = "content"><br/><br/><br/></div>
		
		<!--  #############################################  -->
		<!--  Top Entities - start -->
		<div id = "content">
            <h3 class="mainhead">Top Entities</h3>
		  	<s:iterator value="topEntities" var="entity" >	
				<s:div id="#entity.id" class="cat" style="margin-left: 100px;"> 
					<a href="
						<s:if test="useContextPath != false">
			    			<s:url action="entityTimeline" includeContext="true">
								<s:param name="entityId" value="#entity.id" > </s:param>
							</s:url>
						</s:if>
						<s:else>
							<s:url action="ShowEventEntity" includeContext="false">
								<s:param name="entityId" value="#entity.id" > </s:param>
							</s:url>
						</s:else>
					">
					<font color="#0040FF" ><s:property value="#entity.name"/></font>
				</a> 
				</s:div>
			</s:iterator>
		</div>
		<!--  Top Entities - end -->
		<!--  #############################################  -->
	
		<div id = "content"><br/><br/><br/></div>
	
		
		<!--  #############################################  -->
		<!--  Related Categories - start -->
		<div id = "content">
			<h3 class="mainhead">Related Categories</h3>
			<s:iterator value="relatedCategories" var="category" >	
				<s:div id="#category.id" class="cat" style="margin-left: 100px;"> 
					<a href="
							<s:if test="useContextPath != false">
		    					<s:url action="StoryListByCategory" includeContext="true">
									<s:param name="CategoryId" value="#category.id" > </s:param>
								</s:url>
							</s:if>
							<s:else>
								<s:url action="StoryListByCategory" includeContext="false">
									<s:param name="CategoryId" value="#category.id" > </s:param>
								</s:url>
							</s:else>
						">
						<font color="#0040FF" ><s:property value="#category.name"/></font>
					</a> 
				</s:div>
			</s:iterator>
		</div>
	    <!--  Related Categories - end --> 
	    <!--  #############################################  -->






		<!--  #############################################  -->
		<!--  Timeline - start -->

   		<div id ="menus" >
		        
		    <h3 class="mainhead"><b> The full timeline: </b></h3>
	    	<br/><br/><br/>   	
			
			<font size = "2">
		    <s:iterator value="events" var="event">	
		    	<div class="change">	
		    		<s:div>
		    			<font color="#0040FF" >
		    				<a href="
		    					<s:if test="useContextPath != false">
									<s:url action="ShowEventByDate" includeContext="true">
										<s:param name="storyDate" value="#event.date" > </s:param>
									</s:url>
								</s:if>
								<s:else>
									<s:url action="ShowEventByDate" includeContext="false">
										<s:param name="storyDate" value="#event.date" > </s:param>
									</s:url>
								</s:else>">
								<strong><s:date name="#event.date" format="dd-MM-yyyy" /></strong>
							</a>
		    			</font>
		    			<br/>
		    			<s:if test="#event.story.name != ''">		    				 
		    				<span >
		    				<a href="
		    					<s:if test="useContextPath != false">
			    					<s:url action="storyTimeline" includeContext="true">
										<s:param name="storyId" value="#event.story.id" > </s:param>
									</s:url>
								</s:if>
								<s:else>
									<s:url action="storyTimeline" includeContext="false">
										<s:param name="storyId" value="#event.story.id" > </s:param>
									</s:url>
								</s:else>
							">
								<font color="#0040FF" ><s:property value="#event.story.name"/></font>
							</a>:
							</span> 				
		    			</s:if>	
		    			
					</s:div>
					
					
					<s:div style="width:95%; margin-left: auto; margin-right: auto; position: relative;">
						<s:property escape = "false"  value="#event.description"/>
						
						
						<s:if test="#event.references.size() >= 0">
						&nbsp;(<s:iterator var="sources" value="#event.references">
								<s:a href="%{ #sources.url}" rel="nofollow">
									<font color="#0040FF" ><s:property  value="#sources.source"/></font>
									<img src="Images/newsarticle.jpg" width="15" height="15" alt="" />
								</s:a>
							</s:iterator>)<br/>
						</s:if>
					
					
						<!-- 
						<s:div style="width:100%; float:left;position: relative;">
							<s:property escape = "false"  value="#event.description"/>
						</s:div>
						 -->
						
						<s:if test="#event.category != null">
			    			Category: 
			    			<span  >
				    			<a href="
				    				<s:if test="useContextPath != false">
										<s:url action="StoryListByCategory" includeContext="true">
											<s:param name="CategoryId" value="#event.category.id" > </s:param>
										</s:url>
									</s:if>
									<s:else>
										<s:url action="StoryListByCategory" includeContext="false">
											<s:param name="CategoryId" value="#event.category.id" > </s:param>
										</s:url>
									</s:else>">
									<font color="#0040FF" ><s:property value="#event.category.name"/></font>
								</a>
			    			</span>    				
			    		</s:if>
			    	</s:div>
				</div>
			</s:iterator>
			</font>
		</div>
		<!--  Timeline - end -->
		<!--  #############################################  -->
		
		
		
		
	
 	</div>
 	
	<div id="footer">
		<p>Copyright (c) L3S Research Center. All rights reserved.</p>
	</div>
	<!-- end #footer -->
</body>
</html>
