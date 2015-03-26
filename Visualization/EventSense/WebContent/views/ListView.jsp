
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">


    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
            
            <title>WikiTimes - Results List</title>
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
        </head>
        <body>
			<!-- start #header -->
		    <s:include value="/views/header.jsp"></s:include>
			<!-- end #header --> 
		
		 
		
		          
        <table id="displayTable" width="80%" border="0"  >
		
		<thead>
           <tr>
            <th align="left"><h3 class="newhead" style="margin-left: 100px;"><s:property value="itemType"/></h3></th>
          
           <th><h3 class="newhead"><input type="button" id="sort" value="From" style="margin-left:12%;" /> </h3></th>
           <th><h3 class="newhead"><input type="button" id="endsort" value="To" />  </h3></th>
           <th><h3 class="newhead"><input type="button" id="nsort" value="Number of events in this period" /></h3></th>
           
           <!--  <th><h3 class="newhead">Total number of events</h3></th>  -->
         </tr>        
          </thead>
          
		<tbody>
            
            <tr></tr>
            <s:iterator value="items" var="item">
				<tr>
				<td>
				<s:div id="#item.id" class="story" style="margin-left: 100px;">
				
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
					</a>&nbsp;&nbsp;
					
				</s:div>
				</td>
				
				<td align="center"><s:property value="#story.startDate"/></td>
				<td align="center"><s:property value="#story.endDate"/></td>
				<td align="center"><s:property value="#story.events.size()"/></td>
				
				<!-- <td align="center"><s:property value="#totalNo"/></td>  -->
			</s:iterator>
			</tbody>
			</table>
            <br> <br> <br> <br> <br><br><br><br><br><br><br><br><br><br><br><br><br>
            <div id="footer">
            <p>Copyright (c) L3S Research Center. All rights reserved.</p>
        </div>
        <!-- end #footer -->
        <script>
		    window.onload = function () {
		        var oTable = document.getElementById('displayTable');
		        var oTbody = oTable.tBodies[0];
		        		        
		        var oBtn = document.getElementById('sort');
		        var obtn2 = document.getElementById('nsort');
		        var obtn3 = document.getElementById('endsort');
		        var isAsc = true;
		        
		        
		        oBtn.onclick = function () {
		        	var arr = [];
		            for (var i = 0; i < oTbody.rows.length; i++ ) {
		                arr[i] = oTbody.rows[i];
		                }
		           
		            
		            arr.sort(function (td1, td2){
		                if(isAsc) {
		                	return Date.parse(td1.cells[1].innerHTML) - Date.parse(td2.cells[1].innerHTML);
	                    } else {
	                        return Date.parse(td2.cells[1].innerHTML) - Date.parse(td1.cells[1].innerHTML);
	                        }
		                
		                });
		            
		            for(var j =0; j < arr.length; j++ ) {
		                oTbody.appendChild(arr[j]);
		                }
		           
		            isAsc = !isAsc;
		            };
		            
		        obtn3.onclick = function () {
		        	var arr = [];
		            for (var i = 0; i < oTbody.rows.length; i++ ) {
		                arr[i] = oTbody.rows[i];
		                }
		                
		            arr.sort(function (td1, td2){
		                if(isAsc) {
		                	return Date.parse(td1.cells[2].innerHTML) - Date.parse(td2.cells[2].innerHTML);
	                    } else {
	                        return Date.parse(td2.cells[2].innerHTML) - Date.parse(td1.cells[2].innerHTML);
	                        }
		                
		                });
		            
		            for(var j =0; j < arr.length; j++ ) {
		                oTbody.appendChild(arr[j]);
		                }
		           
		            isAsc = !isAsc;
		            };
		        
		        
		        obtn2.onclick = function () {
		        	var arr = [];
		            for (var i = 0; i < oTbody.rows.length; i++ ) {
		                arr[i] = oTbody.rows[i];
		                }
		                
		            arr.sort(function (td1, td2){
		                if(isAsc) {
		                    return parseInt(td1.cells[3].innerHTML) - parseInt(td2.cells[3].innerHTML);
		                    } else {
		                        return parseInt(td2.cells[3].innerHTML) - parseInt(td1.cells[3].innerHTML);
		                        }
		                
		                });
		            
		            for(var j =0; j < arr.length; j++ ) {
		                oTbody.appendChild(arr[j]);
		                }
		           
		            isAsc = !isAsc;
		            };
		        }
		</script>
        </body>
    </html>