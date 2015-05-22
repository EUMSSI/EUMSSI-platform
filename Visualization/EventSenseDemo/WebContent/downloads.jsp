<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
            <title>WikiTimes Downloads</title>
            <link rel="stylesheet" type="text/css" href="CSS/style.css">
            <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600" rel="stylesheet" type="text/css" />
            <link href='http://fonts.googleapis.com/css?family=Abel|Satisfy' rel='stylesheet' type='text/css'>
            <script type="text/javascript">

            
        </script>
            <script src="jquery.min.js">
            </script>
            <script>
                $(document).ready(function() {
                $(".change:even").css("background-color","#A2A29E"); 
                $(".change:odd").css("background-color","#E3E3E2"); 
                //var getVar = location.search.replace('?', '').split('=');
                //$('div[id$=' + getVar[1] + ']')[0].scrollIntoView();
            });
            </script>
        </head>
    <body>
    	
    	<!-- start #header -->
		<s:include value="/views/header.jsp"></s:include>
		<!-- end #header -->

        
        <div id="page">
		
		<b>Events</b><br/>		
		<ul>
			<li>Events of year 2013: <a href="./webresources/WebService/getEvents/json/2000-01-01/2000-12-31">JSON</a> or <a href="./webresources/WebService/getEvents/xml/2000-01-01/2000-12-31">XML</a></li>
			<li>Events of year 2013: <a href="./webresources/WebService/getEvents/json/2001-01-01/2001-12-31">JSON</a> or <a href="./webresources/WebService/getEvents/xml/2001-01-01/2001-12-31">XML</a></li>
			<li>Events of year 2013: <a href="./webresources/WebService/getEvents/json/2002-01-01/2002-12-31">JSON</a> or <a href="./webresources/WebService/getEvents/xml/2002-01-01/2002-12-31">XML</a></li>
			<li>Events of year 2013: <a href="./webresources/WebService/getEvents/json/2003-01-01/2003-12-31">JSON</a> or <a href="./webresources/WebService/getEvents/xml/2003-01-01/2003-12-31">XML</a></li>
			<li>Events of year 2013: <a href="./webresources/WebService/getEvents/json/2004-01-01/2004-12-31">JSON</a> or <a href="./webresources/WebService/getEvents/xml/2004-01-01/2004-12-31">XML</a></li>
			<li>Events of year 2013: <a href="./webresources/WebService/getEvents/json/2005-01-01/2005-12-31">JSON</a> or <a href="./webresources/WebService/getEvents/xml/2005-01-01/2005-12-31">XML</a></li>
			<li>Events of year 2013: <a href="./webresources/WebService/getEvents/json/2006-01-01/2006-12-31">JSON</a> or <a href="./webresources/WebService/getEvents/xml/2006-01-01/2006-12-31">XML</a></li>
			<li>Events of year 2013: <a href="./webresources/WebService/getEvents/json/2007-01-01/2007-12-31">JSON</a> or <a href="./webresources/WebService/getEvents/xml/2007-01-01/2007-12-31">XML</a></li>
			<li>Events of year 2013: <a href="./webresources/WebService/getEvents/json/2008-01-01/2008-12-31">JSON</a> or <a href="./webresources/WebService/getEvents/xml/2008-01-01/2008-12-31">XML</a></li>
			<li>Events of year 2013: <a href="./webresources/WebService/getEvents/json/2009-01-01/2009-12-31">JSON</a> or <a href="./webresources/WebService/getEvents/xml/2009-01-01/2009-12-31">XML</a></li>
			<li>Events of year 2013: <a href="./webresources/WebService/getEvents/json/2010-01-01/2010-12-31">JSON</a> or <a href="./webresources/WebService/getEvents/xml/2010-01-01/2010-12-31">XML</a></li>
			<li>Events of year 2013: <a href="./webresources/WebService/getEvents/json/2011-01-01/2011-12-31">JSON</a> or <a href="./webresources/WebService/getEvents/xml/2011-01-01/2011-12-31">XML</a></li>	
			<li>Events of year 2013: <a href="./webresources/WebService/getEvents/json/2012-01-01/2012-12-31">JSON</a> or <a href="./webresources/WebService/getEvents/xml/2012-01-01/2012-12-31">XML</a></li>
			<li>Events of year 2013: <a href="./webresources/WebService/getEvents/json/2013-01-01/2013-12-31">JSON</a> or <a href="./webresources/WebService/getEvents/xml/2013-01-01/2013-12-31">XML</a></li>
		 	<li>Events of year 2014: <a href="./webresources/WebService/getEvents/json/2014-01-01/2014-12-31">JSON</a> or <a href="./webresources/WebService/getEvents/xml/2014-01-01/2014-12-31">XML</a></li>
		</ul>
		<br/>
		
		<b>Stories</b>
		<ul>
			<li>All stories without event timelines: <a href="./webresources/WebService/getStoriesWithoutTimeline/json">JSON</a> or <a href="./webresources/WebService/getStoriesWithoutTimeline/xml">XML</a></li>
		 	<li>All stories with event timelines (not suitable for viewing in browser due to the size of the data): <a href="./webresources/WebService/getStories/json">JSON</a> or <a href="./webresources/WebService/getStories/xml">XML</a></li>
		</ul>
		<br/>
		
		<b>Entities</b>
		<ul>
			<li>All entities: <a href="./webresources/WebService/getEntities/json">JSON</a> or <a href="./webresources/WebService/getEntities/xml">XML</a></li>
		</ul>
		<br/>
		    
</html>
