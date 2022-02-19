<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
   <!-- form:form -->
 <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
   <!-- for rendering errors on PUT routes -->
 <%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<title>New Dojo</title>
</head>
<body>


	<form:form action="/dojos/new" method="post" modelAttribute="dojo">
	<h1>New Dojo Info</h1>
    		<div class="container">
              <a href="/ninjas/new">Add a Ninja</a>
              <div>
                <form:label path="name">Dojo Name</form:label>
                <form:errors path="name" class= "text-danger"/>
                <form:input path="name" type="text" class= "form-control"/>
         		</div>
                <input type="submit" value="Submit"/>
            </div>
        </form:form> 
  

</body>
</html>