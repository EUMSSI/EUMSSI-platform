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
<!-- <script src="jquery.min.js"></script> -->
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
				div#menus {width:70%; float:left;position: relative;}
				div#content {width:30%; float:left;position: relative;}
				div#summary{width:80% ; margin-left: auto; margin-right: auto; position: relative;}			
			</style>
			<style>
				a:link	  {text-decoration: none;}
				a:visited {text-decoration: none;}
				a:active  {text-decoration: blink;}
				a:hover   {text-decoration: none;}
			</style> 
			
			
			<!-- START TimelineJS -->
			 <!-- jQuery -->
	        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	        
	        <!-- BEGIN TimelineJS -->
	        <script type="text/javascript" src="http://cdn.knightlab.com/libs/timeline/latest/js/storyjs-embed.js"></script>
	        
	        <script>
	            $(document).ready(function() {
	            	var dataObject = ${timeline};
	            	if(timeline!=null){
	                createStoryJS({
	                    type:       'timeline',
	                    width:      '800',
	                    height:     '600',
	                    source:     dataObject,
	                    embed_id:   'my-timeline'
	                  
	                  });
	            	}
	            });
	        </script>
	        <!-- END TimelineJS -->
			
			
</head>

<body>
	
	<div id = "container">
	
		<!-- start #header -->
	    <s:include value="/views/header.jsp"></s:include>
		<!-- end #header -->

		<table height=1200px>
			<tr height=200px>
				<td colspan="2">
					<!--  top headline -->
					<!--  #############################################  -->
					<!-- <div id ="menus" >  -->
							<h3 class="mainhead"><s:property value="itemType"/>: <b><s:property value="itemName"/></b> 
								<s:if test="hasWikipediaUrl != false">
									(<s:a href="%{wikipediaUrl}" >Wikipedia Page &nbsp;
										<img src="Images/Wikipedia-logo.png" width="20" height="20" alt="" />
									</s:a>)
								</s:if>
							</h3>
						        
						    <h3 class="mainhead">Timeline: <b><s:property value="searchsize"/></b> events from <b><s:property value="fromDate"/></b> to <b><s:property value="toDate"/></b></h3>
					    	<br/><br/>
					    	   
					<!-- </div>  -->	
					<!--  #############################################  -->
				</td>
			<tr>
	
	
			<!-- <tr height=2000px>  -->
			<tr>
				<td valign="top" width=25% style="border-right:solid 1px #000"> <!-- LEFT SIDEBAR -->
					<!--  <div class=scrollable>  -->   
						
					<!--  #############################################  -->
					<!--  Related Categories - start -->
					<!-- <div id = "content"> -->
						<h3 class="mainhead">Categories</h3>
						<s:iterator value="relatedCategories" var="category" >	
							<s:div id="#category.id" class="cat" style="margin-left: 10px;"> 
								<a href="
									<s:if test="itemType == 'Query'">
										<s:if test="useContextPath != false">
					    					<s:url action="eventSearchByKeyword" method="eventSearch" includeContext="true">
												<s:param name="query" value="query" > </s:param>
												<s:param name="fromDate" value="fromDate" > </s:param>
												<s:param name="toDate" value="toDate" > </s:param>
												<s:param name="filterType">filterByCategory</s:param>
												<s:param name="filterItemId" value="#category.id" > </s:param>
											</s:url>
										</s:if>
										<s:else>
											<s:url action="eventSearchByKeyword" method="eventSearch" includeContext="false">
												<s:param name="query" value="query" > </s:param>
												<s:param name="fromDate" value="fromDate" > </s:param>
												<s:param name="toDate" value="toDate" > </s:param>
												<s:param name="filterType">filterByCategory</s:param>
												<s:param name="filterItemId" value="#category.id" > </s:param>
											</s:url>
										</s:else>
									</s:if>	
									
									<s:if test="itemType == 'News Story'">
										<s:if test="useContextPath != false">
					    					<s:url action="storyTimeline" includeContext="true">
												<s:param name="storyId" value="itemId" > </s:param>
												<s:param name="fromDate" value="fromDate" > </s:param>
												<s:param name="toDate" value="toDate" > </s:param>
												<s:param name="filterType">filterByCategory</s:param>
												<s:param name="filterItemId" value="#category.id" > </s:param>
											</s:url>
										</s:if>
										<s:else>
											<s:url action="storyTimeline" includeContext="false">
												<s:param name="storyId" value="itemId" > </s:param>
												<s:param name="fromDate" value="fromDate" > </s:param>
												<s:param name="toDate" value="toDate" > </s:param>
												<s:param name="filterType">filterByCategory</s:param>
												<s:param name="filterItemId" value="#category.id" > </s:param>
											</s:url>
										</s:else>
									</s:if>
									
									<s:if test="itemType == 'Entity'">
										<s:if test="useContextPath != false">
					    					<s:url action="entityTimeline" includeContext="true">
												<s:param name="entityId" value="itemId" > </s:param>
												<s:param name="fromDate" value="fromDate" > </s:param>
												<s:param name="toDate" value="toDate" > </s:param>
												<s:param name="filterType">filterByCategory</s:param>
												<s:param name="filterItemId" value="#category.id" > </s:param>
											</s:url>
										</s:if>
										<s:else>
											<s:url action="entityTimeline" includeContext="false">
												<s:param name="entityId" value="itemId" > </s:param>
												<s:param name="fromDate" value="fromDate" > </s:param>
												<s:param name="toDate" value="toDate" > </s:param>
												<s:param name="filterType">filterByCategory</s:param>
												<s:param name="filterItemId" value="#category.id" > </s:param>
											</s:url>
										</s:else>
									</s:if>
									">
									<font color="#0040FF" size = "2">
										<s:property value="#category.name"/>
										&nbsp;(<s:property value="#category.count"/>)
									</font>
								</a> 
							</s:div>
						</s:iterator>
					<!-- </div> -->
				    <!--  Related Categories - end --> 
				    <!--  #############################################  -->
					
					<br/><br/><br/>
					
					<!--  #############################################  -->
					<!--  Related News Stories - start -->	
					<!-- <div id = "content">  -->
						<h3 class="mainhead">News Stories</h3>
						<s:iterator status="status" value="relatedStories" var="story" >	
							<s:div id="#story.id" class="story" style="margin-left: 10px;"> 
							<a href="
								<s:if test="itemType == 'Query'">
									<s:if test="useContextPath != false">
						    			<s:url action="eventSearchByKeyword" method="eventSearch" includeContext="true">
											<s:param name="query" value="query" > </s:param>
											<s:param name="fromDate" value="fromDate" > </s:param>
											<s:param name="toDate" value="toDate" > </s:param>
											<s:param name="filterType">filterByStory</s:param>
											<s:param name="filterItemId" value="#story.id" > </s:param>
										</s:url>
									</s:if>
									<s:else>
										<s:url action="eventSearchByKeyword" method="eventSearch" includeContext="false">
											<s:param name="query" value="query" > </s:param>
											<s:param name="fromDate" value="fromDate" > </s:param>
											<s:param name="toDate" value="toDate" > </s:param>
											<s:param name="filterType">filterByStory</s:param>
											<s:param name="filterItemId" value="#story.id" > </s:param>
										</s:url>
									</s:else>
								</s:if>
								
								<s:if test="itemType == 'Entity'">
									<s:if test="useContextPath != false">
						    			<s:url action="entityTimeline" includeContext="true">
											<s:param name="entityId" value="itemId"></s:param>
											<s:param name="fromDate" value="fromDate" > </s:param>
											<s:param name="toDate" value="toDate" > </s:param>
											<s:param name="filterType">filterByStory</s:param>
											<s:param name="filterItemId" value="#story.id" > </s:param>
										</s:url>
									</s:if>
									<s:else>
										<s:url action="entityTimeline" includeContext="false">
											<s:param name="entityId" value="itemId"></s:param>
											<s:param name="fromDate" value="fromDate" > </s:param>
											<s:param name="toDate" value="toDate" > </s:param>
											<s:param name="filterType">filterByStory</s:param>
											<s:param name="filterItemId" value="#story.id" > </s:param>
										</s:url>
									</s:else>
								</s:if>
									
									">
									<font color="#0040FF" size = "2">
										<s:property value="#story.name"/>
										&nbsp;
										(<s:property value="#story.events.size()"/>)
									</font>
							</a> 
							</s:div>
						</s:iterator>
					<!-- </div> -->
					<!--  Related Stories - end --> 
				    <!--  #############################################  -->
				
					<br/><br/><br/>					
					
					<!--  #############################################  -->
					<!--  Top Entities - start -->
					<!-- <div id = "content"> -->
			            <h3 class="mainhead">Top Entities</h3>
					  	<s:iterator value="topEntities" var="entity" >	
							<s:div id="#entity.id" class="cat" style="margin-left: 10px;"> 
								<a href="
									<s:if test="itemType == 'Query'">
										<s:if test="useContextPath != false">
											<s:url action="eventSearchByKeyword" method="eventSearch" includeContext="true">
												<s:param name="query" value="query" > </s:param>
												<s:param name="fromDate" value="fromDate" > </s:param>
												<s:param name="toDate" value="toDate" > </s:param>
												<s:param name="filterType">filterByEntity</s:param>
												<s:param name="filterItemId" value="#entity.id" > </s:param>
											</s:url>
										</s:if>
										<s:else>
											<s:url action="eventSearchByKeyword" method="eventSearch" includeContext="false">
												<s:param name="query" value="query" > </s:param>
												<s:param name="fromDate" value="fromDate" > </s:param>
												<s:param name="toDate" value="toDate" > </s:param>
												<s:param name="filterType">filterByEntity</s:param>
												<s:param name="filterItemId" value="#entity.id" > </s:param>
											</s:url>
										</s:else>
									</s:if>
									
									<s:if test="itemType == 'News Story'">
										<s:if test="useContextPath != false">
											<s:url action="storyTimeline" includeContext="true">
												<s:param name="storyId" value="itemId" > </s:param>
												<s:param name="fromDate" value="fromDate" > </s:param>
												<s:param name="toDate" value="toDate" > </s:param>
												<s:param name="filterType">filterByEntity</s:param>
												<s:param name="filterItemId" value="#entity.id" > </s:param>
											</s:url>
										</s:if>
										<s:else>
											<s:url action="storyTimeline" includeContext="false">
												<s:param name="storyId" value="itemId" > </s:param>
												<s:param name="fromDate" value="fromDate" > </s:param>
												<s:param name="toDate" value="toDate" > </s:param>
												<s:param name="filterType">filterByEntity</s:param>
												<s:param name="filterItemId" value="#entity.id" > </s:param>
											</s:url>
										</s:else>
									</s:if>
									
									<s:if test="itemType == 'Entity'">
										<s:if test="useContextPath != false">
											<s:url action="entityTimeline" includeContext="true">
												<s:param name="entityId" value="itemId" > </s:param>
												<s:param name="fromDate" value="fromDate" > </s:param>
												<s:param name="toDate" value="toDate" > </s:param>
												<s:param name="filterType">filterByEntity</s:param>
												<s:param name="filterItemId" value="#entity.id" > </s:param>
											</s:url>
										</s:if>
										<s:else>
											<s:url action="entityTimeline" includeContext="false">
												<s:param name="entityId" value="itemId" > </s:param>
												<s:param name="fromDate" value="fromDate" > </s:param>
												<s:param name="toDate" value="toDate" > </s:param>
												<s:param name="filterType">filterByEntity</s:param>
												<s:param name="filterItemId" value="#entity.id" > </s:param>
											</s:url>
										</s:else>
									</s:if>
									
								">
								<font color="#0040FF" size = "2">
									<s:property value="#entity.name"/>
									&nbsp;
									(<s:property value="#entity.frequency"/>)
								</font>
							</a> 
							</s:div>
						</s:iterator>
					<!-- </div> -->
					<!--  Top Entities - end -->
					<!--  #############################################  -->
				
					<br/><br/>
				</div>
				</td>
				
				
				
				
				<td valign="top" width=75%>				
					<!-- Visualized Timeline -->
					<!--  #############################################  -->
					<div id="my-timeline"></div>
					<br/><br/><br/>
					<!--  #############################################  -->
					<!--  Timeline - start -->
			
					   <!--  <div class=scrollable>  -->     
					        
					    <h3 class="mainhead"> The full timeline:</h3>
						
						<font size = "2">
					    <s:iterator value="events" var="event">	
					    	<div class="change">	
															   
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
										<s:if test="#event.storyRelationConfidence != 1">		
											<s:div style= "background: #F0F0F0;">
												<font color="#0040FF" ><s:property value="#event.story.name"/>:</font>
											</s:div>
										</s:if>
										<s:else>
											<font color="#0040FF" ><s:property value="#event.story.name"/>:</font>
										</s:else>										
										</a>
										</span> 				
					    			</s:if>	
					    			
								
									<s:div style="width:95%; margin-left: auto; margin-right: auto; position: relative;">
											<s:property escape = "false"  value="#event.description"/>
									
									
									<s:if test="#event.references.size() >= 0">
									&nbsp;&nbsp;(<s:iterator var="sources" value="#event.references">
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
					
					
					<!--  #############################################  -->
					<br/><br/><br/>
				</td>
			<tr>		
			
			<tr>
				<!--  Full timeline -->
				<td colspan="2">
					
				</td>
			</tr>
			</table>
 	</div>
 	
</body>
</html>
