<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.HashMap,java.util.ArrayList" %>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html>
<html>
    <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
            <title>Contact Page</title>
            <link rel="stylesheet" type="text/css" href="CSS/style.css">
            <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600" rel="stylesheet" type="text/css" />
            <link href='http://fonts.googleapis.com/css?family=Abel|Satisfy' rel='stylesheet' type='text/css'>
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
            <div id="wrapper">
            <s:include value="/views/header.jsp"></s:include>
                <div id="page">
		<div id="content">
			<div class="post">
				<h3>Dr. Mohammad Alrifai</h3>
				<div class="entry">
					<p> PostDoc  
					from L3S Research Centre </p>
					<p>E-mail : alrifai@l3s.de</p>
					<p><a href="http://www.l3s.de/en/vcard/id/mohammad-alrifai/">Homepage</a></p>
				</div>
                                <h3 >M.Sc. Giang Binh Tran</h3>
				<div class="entry">
				<p>PhD Student from L3S Research Centre</p>
					<p>E-mail : gtran@l3s.de</p>
					<p><a href="http://www.l3s.de/~gtran">Homepage</a></p>
				</div>
                                <h3 ">Kanik Gupta</h3>
				<div class="entry">
                                        <p>B.Tech CSE (Final Year)</p>
                                        <p>IIT Roorkee</p>
					<p>E-mail : kanikgupta.iitroorkee@gmail.com</p>
					<p>Initial design was done by Kanik Gupta while intern at L3S</p>
					<a href="https://www.facebook.com/kanik.gupta.796" rel="nofollow"><img src="Images/fb.gif" width="15" height="15" alt=""/></a>
				</div>
			</div>
		</div>
        </div>
            </div>
            <br> <br> <br> <br> <br><br><br><br><br><br><br><br><br><br><br><br><br>
        </body>
</html>
