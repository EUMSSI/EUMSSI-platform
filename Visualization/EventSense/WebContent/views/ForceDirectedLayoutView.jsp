
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
				div#container{width:900px ; margin-left: auto; margin-right: auto;}
				div#menus {width:67%; float:left;position: relative;}
				div#content {width:32%; float:left;position: relative;}
				div#summary{width:80% ; margin-left: auto; margin-right: auto; position: relative;}	
						.rightfloat
		            {
		                color: red;
		                background-color: #BBBBBB;
		                float: right;
		                width: 200px;
		            }
		
		            .left {
		                font-size: 20pt;
		            }
		
		            .separator {
		                clear: both;
		                width: 100%;
		                border-top: 1px solid black;
		            }		
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
				  stroke: #CCCCCC;
				  stroke-width: 1.1px;
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
		 	Force-Directed Layout Visualization</h3>
		<br/>
		<br/>
		</div>
		
		<div>
		<script type="text/javascript">
		var cooccurenceJson = '<s:property escape = "false"  value="coocc"/>';
		<script src="scripts/d3/d3.js"></script>
		<script src="scripts/d3/d3.layout.cloud.js"></script>
		<script src="scripts/d3/d3.layout.js"></script>
		<script src="scripts/d3/d3.geom.js"></script>
		<script src="jquery.min.js"></script>
		<script src="https://raw.github.com/douglascrockford/JSON-js/master/json2.js"> </script>
		
		<!-- Force-based layout -->
		<script type="text/javascript" src="http://mbostock.github.com/d3/d3.js?2.6.0"></script>
		<script type="text/javascript" src="http://mbostock.github.com/d3/d3.layout.js?2.6.0"></script>
		<%-- <script type="text/javascript" src="http://mbostock.github.com/d3/d3.geom.js?2.6.0"></script> --%>
		
		<script type="text/javascript">
		var dataobject = '<s:property escape = "false"  value="tfjson"/>';
		var nodes = {};
		var size = 500;
		
		var scale = 1;
		var tf = JSON.parse(dataobject);
		
		var max_size = size/tf.length;
		for (var i in tf) { // get the scale 
		        scale = 4 * max_size / tf[i].size;
		        break;
		}

		//update 
		
		for (var i in tf) {
		       tf[i].size = 8 + tf[i].size * scale;
		       nodes[tf[i].text] = {name: tf[i].text, size: tf[i].size, color: "purple"};
		}
		
		
		var cooccurenceJson = '<s:property escape = "false"  value="coocc"/>';
		var color = d3.scale.category20();
		var links = JSON.parse(cooccurenceJson);
			

			// Compute the distinct nodes from the links.
			links.forEach(function(link) {
				link.source = nodes[link.source];
				link.target = nodes[link.target];
			  //link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
			  //link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
			}); 

			var width = 1060,
			    height = 800;

			var force = d3.layout.force()
			    .nodes(d3.values(nodes))
			    .links(links)
			    .size([width, height])
			    .linkDistance(200)
			    .charge(-300)
			    .on("tick", tick)
			    .start();

			var svg = d3.select("body").append("svg")
			    .attr("width", width)
			    .attr("height", height);

			var link = svg.selectAll(".link")
			    .data(force.links())
			  .enter().append("line")
			    .attr("class", "link");

			var node = svg.selectAll(".node")
			    .data(force.nodes())
			  .enter().append("g")
			    .attr("class", "node")
			    .on("mouseover", mouseover)
			    .on("mouseout", mouseout)
			    .call(force.drag);

			node.append("circle")
			    .attr("r", 6)
		    	.style("fill", "#D4D94A");

			node.append("text")
			    .attr("x", 12)
			    .attr("dy", ".35em")
			    .style("font-size", function(d) { return d.size + "px"; })
			    .style("font-family", "Impact")
			    .style("fill", function (d) { return d.color; })
			    .text(function(d) { return d.name; });

			function tick() {
			  link
			      .attr("x1", function(d) { return d.source.x; })
			      .attr("y1", function(d) { return d.source.y; })
			      .attr("x2", function(d) { return d.target.x; })
			      .attr("y2", function(d) { return d.target.y; })
			      ;

			  node
			      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
			}

			function mouseover() {
			  d3.select(this).select("circle").transition()
			      .duration(750)
			      .attr("r", 16);
			  d3.select(this).select("text").style("font-size", function(d) { return (d.size + 20)  + "px"; });
			}

			function mouseout() {
			  d3.select(this).select("circle").transition()
			      .duration(750)
			      .attr("r", 8);
			 d3.select(this).select("text").style("font-size", function(d) { return (d.size)  + "px"; });
			}
			</script>
			</div>
   </div>  
	</body>
</html>