<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.HashMap,java.util.ArrayList" %>
<%@ taglib uri="/struts-tags" prefix="s"%>

<!DOCTYPE html>
<html>
    <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
            <title>Eumssi Dataset</title>
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
       
	        <h1 style="color:#A31919;"><a name="rdf" id="rdf">Data</a></h1><br>
	  			<p class="resyle">
	  		<a href="http://eumssi.cloudapp.net/Solr_EUMSSI/#/~cores/content_items"> Eumssi Solr server </a>
	  		You need an account to access. Contact gtran@l3s.de for an account.
	  			</p>
	  			
	  			
	  	 <h1 style="color:#A31919;"><a name="rdf" id="rdf">Code</a></h1><br>
	  			<p class="resyle">
	  		<a href="https://github.com/EUMSSI/EUMSSI-platform"> Eumssi Platform </a>
	  		</p>
		    
  		</div>
  	
            <br> <br> <br>
        </body>
</html>
