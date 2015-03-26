<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">


    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>

            <title>showEventsByDate Page</title>
            <link rel="stylesheet" type="text/css" href="CSS/style.css">
            <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600" rel="stylesheet" type="text/css" />
            <link href='http://fonts.googleapis.com/css?family=Abel|Satisfy' rel='stylesheet' type='text/css'>
            <script src="jquery.min.js">
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
            
        </head>
 <body>
	<!-- start #header -->
    <s:include value="/views/header.jsp"></s:include>
	<!-- end #header -->
        
       
        <div id ="menus" >
        <h3 class="mainhead">Events</h3>
	 
    		
    	 <s:iterator value="events" var="singalEvent">	
    	 <div class="change">	
    		<div>
    			<font color="#0040FF" size="3"><s:property value="#singalEvent.date"/></font>
    			<s:if test="#singalEvent.category != null">
    				; Category: <span  >
    				<a href="
    					<s:if test="useContextPath != false">
							<s:url action="ShowStoryByCategory" includeContext="true">
								<s:param name="CategoryId" value="#singalEvent.category.id" > </s:param>
							</s:url>
						</s:if>
						<s:else>
							<s:url action="ShowStoryByCategory" includeContext="false">
								<s:param name="CategoryId" value="#singalEvent.category.id" > </s:param>
							</s:url>
						</s:else>
					">
					<font color="#0040FF" ><s:property value="#singalEvent.category.name"/></font></a></span>    				
    			</s:if>
    			

    			<s:if test="#singalEvent.story.name != ''">
    				; News Story: <span >
    				<a href="
    					<s:if test="useContextPath != false">
							<s:url action="SearchEvent" includeContext="true">
								<s:param name="storyId" value="#singalEvent.story.id" > </s:param>
							</s:url>
						</s:if>
						<s:else>
							<s:url action="SearchEvent" includeContext="false">
								<s:param name="storyId" value="#singalEvent.story.id" > </s:param>
							</s:url>
						</s:else>
					">
					<font color="#0040FF" ><s:property value="#singalEvent.story.name"/></font></a>&nbsp;&nbsp;
    				<s:url var="wikipediaURL" value="" />
					<s:set var="storyUrl" value="helper.returnStoryURL(#singalEvent.story.id)" />
					<s:a href="%{#wikipediaURL + #storyUrl}" rel="nofollow">
						<img src="Images/w.jpg" width="15" height="15" alt="" />
					</s:a>
					</span>  				
    			</s:if>	
    			
			</div>
			<div style="width:100%; float:left;">
				
				<s:property  escape = "false" escapeHtml="false" value="#singalEvent.description"/>
				
			 </div>
			 <s:iterator var="sources" value="#singalEvent.Source">
			<span>
			
			<s:a href="%{ #sources.URL}" rel="nofollow">
			<font color="#0040FF" ><s:property  value="#sources.Agency"/></font>
			<img src="Images/newsarticle.jpg" width="15" height="15" alt="" />
			</s:a>
			</span>
			
			</s:iterator>
		</div>
	</s:iterator>
	</div>
	

            <br><br>
            
	
            <br> <br> <br> <br> <br><br><br><br><br><br><br><br><br><br><br><br><br>
            <div id="footer">
            <p>Copyright (c) L3S Research Center. All rights reserved.</p>
        </div>
        <!-- end #footer -->
       
        </body>
    </html>