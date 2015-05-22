


<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.HashMap,java.util.ArrayList" %>
<%@ taglib uri="/struts-tags" prefix="s"%>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">


    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
            <title>Categories Page</title>
            <link rel="stylesheet" type="text/css" href="CSS/style.css">
            <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600" rel="stylesheet" type="text/css" />
            <link href='http://fonts.googleapis.com/css?family=Abel|Satisfy' rel='stylesheet' type='text/css'>
            <script src="jquery.min.js">
            </script>
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
                 $('.cat').click(function () {
                    //id = $(this).attr('id').substring(1);
                    id = $(this).attr('id');
                    window.location = 'ShowStory.jsp?id=' + id;
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
		<input type="button" id="sort" value="sortByEvents" style="margin-left:12%;" />
		<input type="button" id="nsort" value="sortByNewsstories" />
		<table id="displayTable" width="80%" border="0">
		
		<thead>
           <tr>
           <th align="left"><h3 class="newhead" style="margin-left: 100px;">Categories</h3></th>
           <th><h3 class="newhead">number of events</h3></th>
           <th><h3 class="newhead">number of stories</h3></th>
           
         </tr>
        
          </thead>
          
		<tbody>
		 <s:if test="catset.size() <1">
		 	<h4 class="mainhead"> No category found</h4>
		 </s:if>
		 
		 <s:bean id="ContentComparator" name="de.l3s.wikitimes.service.ContentComparator"></s:bean>
         <s:sort source="categories" comparator="#ContentComparator">
		 <s:iterator>
		 <s:set var="CategoryName" value="name" />
		 <s:set var="CategoryId" value="id" />
		 <s:set var="eventCount" value="count" />
		 <s:set var="newscount" value="newscount" />
		 <tr>
		 <td >
		 <s:div id="#CategoryId" class="cat" style="margin-left: 100px;">
		 
		 <a href="
		 			<s:if test="useContextPath != false">
						<s:url action="ShowStoryByCategory" includeContext="true">
							<s:param name="CategoryId" value="#CategoryId" > </s:param>
						</s:url>
					</s:if>
					<s:else>
						<s:url action="ShowStoryByCategory" includeContext="false">
							<s:param name="CategoryId" value="#CategoryId" > </s:param>
						</s:url>
					</s:else>
					">
					<font color="#0040FF" ><s:property value="#CategoryName"/></font></a> 
					</s:div>
		</td>
					
					<td align="center"><s:property value="#eventCount"/></td>
					<td align="center"><s:property value="#newscount"/></td>
		
		</tr>
		 </s:iterator>
		 </s:sort>

		 </tbody>
		      </table>
		       
		<script>
		    window.onload = function () {
		        var oTable = document.getElementById('displayTable');
		        var oTbody = oTable.tBodies[0];
		        var oBtn = document.getElementById('sort');
		        var obtn2 = document.getElementById('nsort');
		        var arr = [];
		        var isAsc = true;
		        oBtn.onclick = function () {
		            for (var i = 0; i < oTbody.rows.length; i++ ) {
		                arr[i] = oTbody.rows[i];
		                }
		                
		            arr.sort(function (td1, td2){
		                if(isAsc) {
		                    return parseInt(td1.cells[1].innerHTML) - parseInt(td2.cells[1].innerHTML);
		                    } else {
		                        return parseInt(td2.cells[1].innerHTML) - parseInt(td1.cells[1].innerHTML);
		                        }
		                
		                });
		            
		            for(var j =0; j < arr.length; j++ ) {
		                oTbody.appendChild(arr[j]);
		                }
		           
		            isAsc = !isAsc;
		            } 
		        obtn2.onclick = function () {
		            for (var i = 0; i < oTbody.rows.length; i++ ) {
		                arr[i] = oTbody.rows[i];
		                }
		                
		            arr.sort(function (td1, td2){
		                if(isAsc) {
		                    return parseInt(td1.cells[2].innerHTML) - parseInt(td2.cells[2].innerHTML);
		                    } else {
		                        return parseInt(td2.cells[2].innerHTML) - parseInt(td1.cells[2].innerHTML);
		                        }
		                
		                });
		            
		            for(var j =0; j < arr.length; j++ ) {
		                oTbody.appendChild(arr[j]);
		                }
		           
		            isAsc = !isAsc;
		            } 
		        }
		</script>
            <br> <br> <br> <br> <br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div id="footer">
            <p>Copyright (c) L3S Research Center. All rights reserved. </p>
        </div>
        <!-- end #footer -->
        </body>
    </html>

