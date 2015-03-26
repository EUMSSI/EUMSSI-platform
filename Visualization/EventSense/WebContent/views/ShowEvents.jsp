<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">


    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>

            <title>Events Page</title>
            <link rel="stylesheet" type="text/css" href="CSS/style.css">
            <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600" rel="stylesheet" type="text/css" />
            <link href='http://fonts.googleapis.com/css?family=Abel|Satisfy' rel='stylesheet' type='text/css'>
            <script src="jquery.min.js">
            </script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
            <script src="views/jquery.awesomeCloud-0.2.min.js"></script>
		<style type="text/css">
			.wordcloud {
				
				height: 2.0in;
				
				padding: 0;
				page-break-after: always;
				page-break-inside: avoid;
				
			}
		</style>
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
            <script>
            
                $(document).ready(function() {
                    $(".entity").hover(function(){
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
               
               
                //var getVar = location.search.replace('?', '').split('=');
                //$('div[id$=' + getVar[1] + ']')[0].scrollIntoView();
            });
            </script>
            <style type="text/css">
				div#container{width:100%}
				div#menus {width:67%; float:left;}
				div#content {width:32%; float:left;}			
			</style>
        </head>
 <body>
	<!-- start #header -->
    <s:include value="/views/header.jsp"></s:include>
	<!-- end #header -->
        
        <div id = "container">
        <div id ="menus" >
       
        <h3 class="mainhead">News Story: <b><s:property value="story.name"/></b> (<s:a href="%{story.wikipediaUrl}" >Wikipedia Page</s:a>)</h3>
        
        <h3 class="mainhead">Story Timeline (<s:property value="searchsize"/> events):</h3>

         <!--  #############################################  -->
			<!--  Timeline - start -->
		    <s:iterator value="events" var="event">	
		    	<div class="change">	
		    		<s:div>
		    			<font size="3">
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
						<font color="#0040FF" ><s:property value="#event.date"/></font>
						</a>		</font>
		    			<s:if test="#event.category != null">
		    				; Category: <span  >
		    				<a href="
		    					<s:if test="useContextPath != false">
									<s:url action="ShowStoryByCategory" includeContext="true">
										<s:param name="CategoryId" value="#event.category.id" > </s:param>
									</s:url>
								</s:if>
								<s:else>
									<s:url action="ShowStoryByCategory" includeContext="false">
										<s:param name="CategoryId" value="#event.category.id" > </s:param>
									</s:url>
								</s:else>">
							<font color="#0040FF" ><s:property value="#event.category.name"/></font></a>
		    				</span>    				
		    			</s:if>
		    			<s:url var="URL" value="" />
		    			<s:if test="#event.story.name != ''">
		    				; News Story: <span >
		    				<a href="
		    					<s:if test="useContextPath != false">
			    					<s:url action="SearchEvent" includeContext="true">
										<s:param name="storyId" value="#event.story.id" > </s:param>
									</s:url>
								</s:if>
								<s:else>
									<s:url action="SearchEvent" includeContext="false">
										<s:param name="storyId" value="#event.story.id" > </s:param>
									</s:url>
								</s:else>
							">
							<font color="#0040FF" ><s:property value="#event.story.name"/></font></a>&nbsp;&nbsp;
							
						<s:a href="%{ #storyUrl}" rel="nofollow">
						<img src="Images/w.jpg" width="15" height="15" alt="" />
						</s:a>
							</span> 				
		    			</s:if>	
		    			
					</s:div>
					
					<s:div style="width:100%; float:left;position: relative;">
						<s:property escape = "false"  value="#event.description"/>
					</s:div>
					
					<s:iterator var="sources" value="#event.references">
						<span>			
							<s:a href="%{ #sources.url}" rel="nofollow">
								<font color="#0040FF" ><s:property  value="#sources.source"/></font>
								<img src="Images/newsarticle.jpg" width="15" height="15" alt="" />
							</s:a>
						</span>			
					</s:iterator>
				</div>
			</s:iterator>
			</div>
			 <!--  Timeline - end -->
			 <!--  #############################################  -->
			
			
			<!--  #############################################  -->
			<!--  Top Entities - start -->
			<div id = "content">
            <h3 class="mainhead">Top Entities</h3>
	        	<div role="main">
		   			<div id="wordcloud2" class="wordcloud">
			            <s:iterator value="topentity" var="TopEntityItem" >
				            <s:set var="TopEntityItemUrl" value="helper.returnURL(#TopEntityItem)" />	
							<s:set var="EntityID" value="helper.returnEntityID(#TopEntityItem)" />
							<s:set var="Frequence" value="tp.get(#TopEntityItem)" />
							<s:url var="wikipediaURL" value="" /> 
							<span data-weight="<s:property value="#Frequence+18"/>"><s:a href="%{ #TopEntityItemUrl}" rel="nofollow">
									<s:property value="#TopEntityItem"/></s:a>
							</span>
						</s:iterator>
					</div>		
				</div>
			</div>
			<!--  Top Entities - end -->
			<!--  #############################################  -->
			
			
			<!--  #############################################  -->
			<!--  Related Categories - start -->
			<div id = "content">
			<h3 class="mainhead">Related Categories</h3>
			
			<s:iterator value="relatedCategories" var="category" >	
				<s:div id="#category.id" class="cat" style="margin-left: 100px;"> 
				<a href="
								<s:if test="useContextPath != false">
			    					<s:url action="ShowStoryByCategory" includeContext="true">
										<s:param name="CategoryId" value="#category.id" > </s:param>
									</s:url>
								</s:if>
								<s:else>
									<s:url action="ShowStoryByCategory" includeContext="false">
										<s:param name="CategoryId" value="#category.id" > </s:param>
									</s:url>
								</s:else>
							">
							<font color="#0040FF" ><s:property value="#category.name"/></font>
				</a> 
				</s:div>
				
			</s:iterator>
			
		    <!--  Related Categories - end --> 
		    <!--  #############################################  -->
			
			<br>
			<br>
			<br>
			
			<!--  #############################################  -->
			<!--  Related News Stories - start -->	
			
			<h3 class="mainhead">Related News Stories</h3>
			
			<s:iterator value="relatedStories" var="story" >	
				<s:div id="#story.id" class="story" style="margin-left: 100px;"> 
				<a href="
						<s:if test="useContextPath != false">
			    			<s:url action="SearchEvent" includeContext="true">
								<s:param name="storyId" value="#story.id" > </s:param>
							</s:url>
						</s:if>
						<s:else>
							<s:url action="SearchEvent" includeContext="false">
								<s:param name="storyId" value="#story.id" > </s:param>
							</s:url>
						</s:else>
						">
						<font color="#0040FF" ><s:property value="#story.name"/></font>
				</a> 
				</s:div>
			</s:iterator>
			 <!--  Related Stories - end --> 
		    <!--  #############################################  -->
			
			</div>
			</div>
	
		

             
	
            <br> <br> <br> <br> <br><br><br><br><br><br><br><br><br><br><br><br><br>
            <div id="footer">
            <p>Copyright (c) L3S Research Center. All rights reserved.</p>
        </div>
        <!-- end #footer -->
         <script>
			$(document).ready(function(){
				
				$("#wordcloud2").awesomeCloud({
					"size" : {
						"grid" : 8,
						"factor" : 1
					},
					"options" : {
						"color" : "random-dark",
						"rotationRatio" : 0.35
					},
					"font" : "'Times New Roman', Times, serif",
					"shape" : "circle"
				});
				
			});
		</script>
        </body>
    </html>


