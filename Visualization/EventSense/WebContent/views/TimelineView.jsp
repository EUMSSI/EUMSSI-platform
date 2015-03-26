<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title> Timeline</title>

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
	        <!-- <script type="text/javascript" src="scripts/storyjs-embed.js"></script> -->
	        
	        <script>
	            $(document).ready(function() {
	            	var dataObject = ${timeline};
		                createStoryJS({
		                    type:       'timeline',
		                    width:      '760',
		                    height:     '500',
		                    start_zoom_adjust: -2,
		                    source:     dataObject,
		                    embed_id:   'my-timeline'
		                  });
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
						        
						    <h3 class="mainhead">Last <b><s:property value="searchsize"/></b> items from <b><s:property value="fromDate"/></b> to <b><s:property value="toDate"/></b></h3>
					    	<br/><br/>
					    	   
					<!-- </div>  -->	
					<!--  #############################################  -->
				</td>
			<tr>
	
	
			<!-- <tr height=2000px>  -->
			<tr>
				<td valign="top" width=25% style="border-right:solid 1px #000"> <!-- LEFT SIDEBAR -->
					<br/><br/>
				</div>
				</td>
				
				
				<td valign="top" width=75%>				
					<!-- Visualized Timeline -->
					<!--  #############################################  -->
					<div id="my-timeline"></div> 
				
					<br/><br/><br/>
					   <!--  <div class=scrollable>  -->     
					    <h3 class="mainhead"> Details:</h3>
						
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
									<s:div style="width:95%; margin-left: auto; margin-right: auto; position: relative;">
											<s:property escape = "true"  value="#event.headline"/>
									
									
									<s:if test="#event.references.size() > 0">
									&nbsp;&nbsp;(<s:iterator var="sources" value="#event.references">
											<s:a href="%{ #sources.url}" rel="nofollow">
												<font color="#0040FF" ><s:property  value="#sources.source"/></font>
												<img src="Images/newsarticle.jpg" width="15" height="15" alt="" />
											</s:a>
										</s:iterator>)<br/>
									</s:if>
									
						    	</s:div>
							</div>
						</s:iterator>
						</font>   
				</td>
			<tr>		
			
			
			</table>
 	</div>
 	
</body>
</html>
