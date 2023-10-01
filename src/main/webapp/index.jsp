<%@ page import="model.Row" %>
<%@ page contentType="text/html; charset=UTF-8"%>
<jsp:useBean id="table" class="model.Table" scope="session"/>
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
    <script>var exports = {};</script>
    <script src="./js_modules/superagent.js"></script>
    <script src="./js_modules/three.r134.min.js"></script>
    <script src="./js_modules/vanta.net.min.js"></script>
    <script src="./js_modules/myVanta.js" defer></script>

    <script src="./js/canvas.js" type="module"></script>
    <script src="./js/validation.js" type="module"></script>
    <script src="./js/ajax.js" type="module"></script>
    <script src="./js/table.js" type="module"></script>
    <script src="./js/form.js" type="module"></script>

    <link href="./static/style.css" rel="stylesheet"/>
    <meta charset="UTF-8">
    <title>LaboratoryWork2</title>
</head>
<body>
    <table id="main">
        <tr>
            <th>
                <div class="container header mh-center">
                    <img id="icon" src="./static/dog.jpg" alt="No icon">
                    <h3>
                        Макеев Роман
                        <br>
                        Группа P3208
                        <br>
                        Вариант 1814
                    </h3>
                </div>
            </th>
        </tr>
        <tr>
            <td>
                <table class="mh-center form-table container">
                    <tr>
                        <td>
                            <label for="y">Type Y:</label>
                            <br>
                            <input class="wrong" type="text" name="Y" id="y"
                                   placeholder="-3...3"/>
                        </td>
                        <td>
                            <label for="r">Type R:</label>
                            <br>
                            <input class="right" type="text" name="R" id="r" value="1"
                                   placeholder="1...4"/>
                        </td>
                        <td rowspan="2">
                            <canvas id="canvas" height="250px" width="250px">
                                Something wrong
                            </canvas>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="x">Select X:</label>
                            <br>
                            <select name="X" id="x" >
                                <option value="-4">-4</option>
                                <option value="-3">-3</option>
                                <option value="-2">-2</option>
                                <option value="-1">-1</option>
                                <option value="0" selected>0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </td>
                        <td class="button">
                            <button class="mv-center" id="submit" type="submit">Submit</button>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table id="res-table" class="results mh-center">
                    <tr>
                        <th colspan="6">
                            <h3>Results:</h3>
                        </th>
                    </tr>
                    <tr>
                        <td>X</td>
                        <td>Y</td>
                        <td>R</td>
                        <td>Hit</td>
                        <td>Time</td>
                        <td>Time of work</td>
                    </tr>
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
            </td>
        </tr>
        <tr>
            <td class="reset">
                <button id="reset" class="mh-center" type="submit">Reset</button>
            </td>
        </tr>
    </table>
</body>
</html>