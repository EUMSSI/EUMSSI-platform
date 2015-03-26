
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">


    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
            
            <title>EventSense - Word Cloud </title>
            <link rel="stylesheet" type="text/css" href="CSS/style.css">
            <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600" rel="stylesheet" type="text/css" />
            <link href='http://fonts.googleapis.com/css?family=Abel|Satisfy' rel='stylesheet' type='text/css'>
            <script src="jquery.min.js"></script>
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
			
			<style>
				.link {
				  fill: none;
				  stroke: #666;
				  stroke-width: 1.5px;
				}
				
				.node circle {
				  fill: #ccc;
				  stroke: #fff;
				  stroke-width: 1.5px;
				}
				
				text {
				  font: 10px sans-serif;
				  pointer-events: none;
				}
			</style>
							
		</head>
	<body>

	<div class="container">
		<!-- start #header -->
		<s:include value="/views/header.jsp"></s:include>
		<!-- end #header --> 
		
		
		
		 
		<div style="margin-left: 300px">
		 	<h3 class="mainhead">
		 	Wordcloud visualization</h3>
		<br/>
		<br/>
		</div>
		<div style=style="width:50%; margin-left: auto; margin-right: auto; position: relative;">
		
		<script src="scripts/d3/d3.js"></script>
		<script src="scripts/d3/d3.layout.cloud.js"></script>
		<script src="jquery.min.js"></script>
		<script src="https://raw.github.com/douglascrockford/JSON-js/master/json2.js"> </script>
		
		
		<%--  <script src="scripts/d3/app.js"></script> --%>
		<script type="text/javascript">
		var cooccurenceJson = '<s:property escape = "false"  value="coocc"/>';
		var dataobject = '<s:property escape = "false"  value="tfjson"/>';
		
		var size = 500;
		
		var scale = 1;
		var tf = JSON.parse(dataobject);
		
		var max_size = size/tf.length;
		for (var i in tf) {
		        scale = 7.0 * max_size / tf[i].size;
		        console.log("scale is ", scale);
		        break;
		}

		//update 
		for (var i in tf) {
		       tf[i].size = 10 + tf[i].size * scale;
		}
		console.log("data is: ", tf);
		var fill = d3.scale.category20();
		
		  d3.layout.cloud().size([size * 2, size * 2])
		      .words(tf)
		      .padding(5)
		      .rotate(function() { return ~~(-1) * (Math.random() * 2); })
		      .font("Impact")
		      .fontSize(function(d) { return d.size; })
		      .on("end", draw)
		      .start();
		  function draw(words) {
		    d3.select("body").append("svg")
		        .attr("width", size*2)
		        .attr("height", size*2)
		      .append("g")
		        .attr("transform", "translate(450,350)")
		      .selectAll("text")
		        .data(words)
		      .enter().append("text")
		        .style("font-size", function(d) { return d.size + "px"; })
		        .style("font-family", "Impact")
		        .style("fill", function(d, i) { return fill(i); })
		        .attr("text-anchor", "middle")
		        .attr("transform", function(d) {
		          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
		        })
		        .text(function(d) { return d.text; })
		        .on("mouseover", function(d) {
					  d3.select(this).style("font-size", function(d) { return (d.size + 20)  + "px"; })})
				 .on("mouseleave", function(d) {
				  	 d3.select(this).style("font-size", function(d) { return (d.size)  + "px"; })})
		        .on("click", function (d){
		        	alert(d.text);
      			});
		  }
			</script>
		 </div>
   </div>  
   
   		
	</body>
</html>