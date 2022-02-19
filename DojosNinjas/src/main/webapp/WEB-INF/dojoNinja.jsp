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
<title>Dojo with Ninjas</title>
</head>
<body>
<div class="container">
<h1>Dojo: ${dojoToShow.name} with Ninjas below:</h1>
<%-- <h2>${dojoToShow.ninjas}</h2> --%>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Ninja id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Age</th>
      <th scope="col">Dojo location</th>
    </tr>
  </thead>
  <tbody>
    <c:forEach items='${dojoToShow.ninjas }' var='ninjaObj'>
    <tr>
      <th scope="row">${ninjaObj.id}</th>
      <td>${ninjaObj.firstName }</td>
      <td>${ninjaObj.lastName }</td>
      <td>${ninjaObj.age }</td>
      <td>${ninjaObj.dojo.name}</td>
     </tr> 
    </c:forEach>
  </tbody>
</table>


</div>
</body>
</html>