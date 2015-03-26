<%@ taglib uri="/struts-tags" prefix="s"%>
<!-- start #header -->

<%
	String path = request.getContextPath();
	String requestURI = request.getRequestURI();
	String servletURI = request.getServletPath();
	String serverName = request.getServerName();
	boolean useContext = (serverName.equals("eventsense.l3s.de"))?false:true;
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<div id="wrapper">					
	<div id="header-wrapper">
			<div id="header" class="container">
				<div id="logo">
					<a href="
						<% 	if (useContext){ %>
							<s:url action="Index" includeContext="true"></s:url>
						<% }else{ %>
							<s:url action="Index" includeContext="false"></s:url>
						<% } %>
					">
					<h2> <b>EventSense </b> </h2>
					<p> Making sense of multimodal events</p>
						<!-- <img height="88" width="400" src="Images/eumssi-logo-1.png"></img>  -->						
					</a>
				</div>
				
				<div id="menu">
					<font size = "3">
						<ul style="height: 208px;">
							<li 
								<% 
								if (servletURI.endsWith("index.jsp") || servletURI.endsWith("Index.action")){
								%>
									class="current_page_item"
								<% 		
								}
								%>
								>
								<a href="
								<% 	if (useContext){ %>
									<s:url action="Index" includeContext="true"></s:url>
								<% }else{ %>
									<s:url action="Index" includeContext="false"></s:url>
									<% } %>
								">Homepage</a>
							</li>
							
							<li
								<% 
								if (servletURI.endsWith("About.jsp")){
								%>
									class="current_page_item"
								<% 		
								}
								%>
							>
							<a href="About.jsp">About</a></li>
							<!--  <li><a href="Contact.jsp">Contact</a></li>  -->
							<li
							<% 
								if (servletURI.endsWith("Resource.jsp")){
								%>
									class="current_page_item"
								<% 		
								}
								%>
							>
							<a href="Resource.jsp">Datasets</a></li>
							 <li
							 <% 
								if (servletURI.endsWith("Publications.jsp")){
								%>
									class="current_page_item"
								<% 		
								}
								%>
							 >
							 <a href="Publications.jsp">Publications</a></li>
						</ul>
					</font>
				</div>
			</div>
		</div>
</div>				
		<!-- end #header -->