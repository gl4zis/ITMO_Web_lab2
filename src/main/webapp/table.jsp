<%@ page contentType="text/html;charset=UTF-8"%>
<jsp:useBean id="row" class="model.Row" scope="request"/>
<jsp:useBean id="table" class="model.Table" scope="session"/>
<jsp:setProperty name="table" property="newRow" value="${row}"/>
<html>
<head>
    <script src="./js_modules/three.r134.min.js"></script>
    <script src="./js_modules/vanta.net.min.js"></script>
    <script src="./js_modules/myVanta.js" defer></script>
    <link href="./static/style.css" rel="stylesheet"/>
    <meta charset="UTF-8">
    <title>New Result</title>
</head>
<body>
    <table id="main">
        <tr>
            <td>
                <table class="results mh-center container">
                    <tr>
                        <th>X</th>
                        <th>Y</th>
                        <th>R</th>
                        <th>Hit</th>
                        <th>Time</th>
                        <th>Time of work</th>
                    </tr>
                    <tr>
                        <td>${row.x()}</td>
                        <td>${row.y()}</td>
                        <td>${row.r()}</td>
                        <td>${row.hit()}</td>
                        <td>${row.formattedDate()}</td>
                        <td>${row.time()}ms</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <form action="" method="get">
                    <button id="back" type="submit" class="mh-center">Go Back</button>
                </form>
            </td>
        </tr>
    </table>
</body>
</html>
