<%@ page contentType="text/html;charset=UTF-8"%>
<jsp:useBean id="row" class="model.Row" scope="request"/>
<jsp:useBean id="table" class="model.Table" scope="session"/>
<jsp:setProperty name="table" property="newRow" value="${row}"/>
<table>
    <tr>
        <td><%= row.x()%></td>
        <td><%= row.y()%></td>
        <td><%= row.r()%></td>
        <td><%= row.formattedHit()%></td>
        <td><%= row.formattedDate()%></td>
        <td><%= row.time()%>ms</td>
    </tr>
</table>