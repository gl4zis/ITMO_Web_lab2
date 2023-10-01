<%@ page import="model.Row" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<jsp:useBean id="newRow" class="model.Row" scope="request"/>
<jsp:useBean id="table" class="model.Table" scope="session"/>
<jsp:setProperty name="table" property="newRow" value="${newRow}"/>
<table>
    <%
        for (Row row : table) {
    %>
    <tr>
        <td><%= row.x()%></td>
        <td><%= row.y()%></td>
        <td><%= row.r()%></td>
        <td><%= row.hit()%></td>
        <td><%= row.formattedDate()%></td>
        <td><%= row.time()%>ms</td>
    </tr>
    <%
        }
    %>
</table>