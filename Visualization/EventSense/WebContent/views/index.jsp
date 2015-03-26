<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.HashMap,java.util.ArrayList" %>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ taglib uri="/struts-dojo-tags" prefix="sx"%>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

	<title>EventSense</title>
	<link rel="stylesheet" type="text/css" href="CSS/style.css">
	<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600" rel="stylesheet" type="text/css" />
	<link href='http://fonts.googleapis.com/css?family=Abel|Satisfy' rel='stylesheet' type='text/css'>
	<script type="text/javascript" src="scripts/jscripts.js" ></script>

	<style>
		  body {font-size:12px}
		  td {text-align:center}
		  h1 {font-size:26px;}
		  h4 {font-size:16px;}
		  em {color:#999; margin:0 0px; font-size:11px; display:block}
 	</style>
	
	<style type="text/css" >
				div#container{width:1100px ; margin-left: auto; margin-right: auto;}
				div#menus {width:70%; float:left;position: relative;}
				div#content {width:30%; float:left;position: relative;}
				div#summary{width:80% ; margin-left: auto; margin-right: auto; position: relative;}			
			</style>
			
			<sx:head />
			<script language="javascript">
			    function enableDisable(bEnable) {
			         document.getElementById('fromDate').disabled = !bEnable;
			         document.getElementById('toDate').disabled = !bEnable;
			    }
			   
			</script>
			
	
</head>

<body OnLoad="getCurrentDate();">

<div id = "container">
	<!-- start #header -->
	<s:include value="/views/header.jsp"></s:include>
	<!-- end #header -->
	
	
	<!-- start search form -->
	<!--  <div id="page">  -->
	<br/><br/><br/>
	<br/><br/><br/>
	<br/><br/><br/>
	<br/><br/><br/>
		<form name="query" method="post" action="EventSearchByKeywordInDBOnlyAction" >
			<table width='80%' border="0" >
				<tr>
					<td width=60%>
						<table>
							 <tr height="10">
								<td >
									<ul class="input-list style-1 clearfix">
									<input name="query" id="query" type="text" class="focus" placeholder="query keyword"
										onfocus="false" style="width: 673px">
									</ul>
									
								</td>
							</tr>
							
							<tr height="10">
									<s:submit name="keyword search" value="Generate Timeline" align="center" method="eventSearch" />
									<s:submit name="word cloud" value="Visualize by Wordcloud" align="center" method="wordCloud"/>
									<s:submit name="forceDirectedLayout" value="Force Directed Layout" align="center" method="forceDirectedLayout"/>
							</tr>
							
							
							<!--
							<tr height="10">
								<td width=30%>
									<s:submit name="storySearch" value="Search Stories" align="center"  method="storySearchByName" style="width: 134px;"/>
								</td>
							</tr>
							<tr height="10">
								<td width=30%>
									<s:submit name="entitySearch" value="Search Entities" align="center"  method="entitySearchByName" style="width: 134px;"/>
								</td>
							 </tr>
							 <tr height="10">
								<td >
								<p style="color: #E77471">
									<i>&nbsp;&nbsp;* leave empty for getting all items in the specified time period!</i>
								</p>
								</td>
							</tr>
							-->
						</table>
					</td>
					
				</tr>
				<div align="right" style="color:black">  
				<%-- <select name="fieldMenu">
				<option value="title">Title</option>
				<option value="text">Text</option>
				<option value="transcript">Audio Transcript</option>
				</select> --%>
			
					<div align="right" style="color:black">
					<form> 
						<p style="font-size:20px">
						Select Data Types:
						</p>
						<input type="checkbox" name="useVideo"  id="useVideo" value="true" checked="checked" />  Videos
						<input type="checkbox" name="useNewsArticle" id="useNewsArticle" value="true" checked="checked"  /> News Articles
						
						<br/><br/><br/>
						<p style="font-size:20px"> Select Data Field: </p>
						<input type="checkbox" name="useHeadline"  id="useHeadline" value="true" checked="checked" />  Headline
						<input type="checkbox" name="useText" id="useText" value="true" checked="checked"  /> Text
						<input type="checkbox" name="useTranscript" id="useTranscript" value="true" checked="checked" /> Audio Transcript
					</form>
					</div>
				</div>
				
				
			</div>
			</table>
			
		</form>	
		<br/>
		<br/>
		<br/>
		
		
	</div>
	<!-- end search form -->	
			
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>


	<div id = "container">
		<s:if test="searchsize == -1">
			<h1>Latest News Events between <b><s:property value="fromDate"/></b>
			and 
			<b><s:property value="endDate"/></b>
			</h1>
			<br/>
		
			<div id="menus"><br/><br/><br/></div>
		</s:if>
	
	</div>


<!-- 
		<div id = "container">	
				<table width='90%' border="0" >
					<tr>
						<td width='75%' align="left">
							<div align="left" style="margin-left: 70px">						
								<h1>Data Statistics</h1>
								<br/>
								<ul>
									<li>Number of News Articles : <s:property value="eventsize"/></li>						
									<li>Number of Videos : <s:property value="storysize"/></li>
								</ul>
							</div>
						</td>
						<td width=25%>
						</td>
					</tr>
				</table>
		</div>
 -->


</body>
</html>	