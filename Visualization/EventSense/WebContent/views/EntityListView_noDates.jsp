
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">


    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
            
            <title>WikiTimes - Entity List</title>
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
    	        	
                //var getVar = location.search.replace('?', '').split('=');
                //$('div[id$=' + getVar[1] + ']')[0].scrollIntoView();
            });
            </script>
            <style type="text/css" >
				div#container{width:1100px ; margin-left: auto; margin-right: auto;}
				div#menus {width:67%; float:left;position: relative;}
				div#content {width:32%; float:left;position: relative;}
				div#summary{width:80% ; margin-left: auto; margin-right: auto; position: relative;}			
			</style>
            <style>
				a:link {text-decoration: none;}
				a:visited {text-decoration: none;}
				a:active {text-decoration: blink;}
				a:hover {text-decoration: none;}
			</style> 
</head>
<body>
	<div class="container">
		<!-- start #header -->
		<s:include value="/views/header.jsp"></s:include>
		<!-- end #header --> 
	 
		<div style="margin-left: 100px">
		 	<h3 class="mainhead">
		 	List of <b><s:property value="entities.size()"/>&nbsp;entities</b> that have events between <b><s:property value="fromDate"/></b> and <b><s:property value="toDate"/></b></h3>
		</div>
		<br/>
		<br/>
		          
        <table id="displayTable" width="100%" border="0"  >
		
			<thead>
	           	<tr>
	            	<th align="left"><h3 class="newhead" style="margin-left: 100px;">Entity</h3></th>
	            	<th><h3 class="newhead">Number of events in this period</h3></th>
	         	</tr>        
	         </thead>
          
			<tbody>
			<tr height = "30"></tr>
            	<s:iterator value="entities" var="entity">
				<tr>
					<td>
						<s:div id="#entity.id" class="story" style="margin-left: 100px;">
							<a href="
								<s:if test="useContextPath != false">
									<s:url action="entityTimeline" includeContext="true">
										<s:param name="entityId" value="#entity.id" > </s:param>
									</s:url>
								</s:if>
								<s:else>
									<s:url action="entityTimeline" includeContext="false">
										<s:param name="entityId" value="#entity.id" > </s:param>
									</s:url>
								</s:else>
							">					
								<font color="#0040FF" ><s:property value="#entity.name"/></font>
							</a>&nbsp;&nbsp;
							
							<s:set var="entityUrl" value="#entity.wikiURL" />
							<s:a href="%{ #entityUrl}" rel="nofollow">
								<img src="Images/Wikipedia-logo.png" width="20" height="20" alt="" />
							</s:a>
							
							<td align="center"><s:property value="#entity.frequency"/></td>
							
						</s:div>
					</td>
				</tr>
				</s:iterator>
			</tbody>
		</table>
        <br> <br> <br> <br> <br><br>
   </div>    
</body>
</html>