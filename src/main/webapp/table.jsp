<%@ page import="model.Row" %>
<jsp:useBean id="table" class="model.Table" scope="session"/>
<table id="res-table" class="results mh-center">
    <%
        for (int i = 0; i < table.size(); i++) {
            Row row = table.get(i);
    %>
    <tr>
        <td><%= i+1%></td>
        <td><%= row.x()%></td>
        <td><%= row.y()%></td>
        <td><%= row.r()%></td>
        <td><%= row.formattedHit()%></td>
        <td><%= row.formattedDate()%></td>
        <td><%= row.time()%>ms</td>
    </tr>
    <%
        }
    %>
</table>