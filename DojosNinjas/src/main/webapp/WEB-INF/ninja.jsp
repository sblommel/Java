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
<title>New Ninja</title>
</head>
<body>
	<div class="container">
	<h1>New Ninja Info</h1>
	<form:form action="/ninjas/new" method="post" modelAttribute="ninja">
    <div>
        <form:label path="firstName">First Name:</form:label>
        <form:errors path="firstName" class="text-danger"/>
        <form:input path="firstName" type= "text" class= "form-control"/>
    </div>
    <div>
                <form:label path="lastName">Last Name</form:label>
                <form:errors path="lastName" class= "text-danger"/>
                <form:input path="lastName" type="text" class= "form-control"/>
            </div>
            <div>
                <form:label path="age">Age</form:label>
                <form:errors path="age" class= "text-danger"/>
                <form:input path="age" type="number" step="0.1" class= "form-control"/>
            </div>
            <div>
                <form:label path="dojo">Which team does the player play for?</form:label>
                <form:errors path="dojo" class= "text-danger"/>
                <form:select path="dojo" name="" id="" class="form-select">
                    <c:forEach items='${ allDojos }' var='dojoObj'>
                        <option value="${dojoObj.id}">${dojoObj.name}</option>
                    </c:forEach>
                </form:select>

            </div>
    <input type="submit" value="Submit"/>
</form:form>    
	</div>
	
</body>
</html>