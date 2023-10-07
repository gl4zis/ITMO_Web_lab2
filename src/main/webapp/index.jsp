<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
    <script src="./js_modules/superagent.js"></script>
    <script src="./js_modules/three.r134.min.js"></script>
    <script src="./js_modules/vanta.net.min.js"></script>
    <script src="./js_modules/myVanta.js" defer></script>

    <script src="./js/canvas.js" type="module" ></script>
    <script src="./js/validation.js" type="module"></script>
    <script src="./js/ajax.js" type="module"></script>
    <script src="./js/table.js" type="module"></script>
    <script src="./js/form.js" type="module"></script>
    <script src="./js/alerts.js" type="module"></script>

    <link href="static/style.css" rel="stylesheet"/>
    <link href="static/alert.css" rel="stylesheet"/>
    <meta charset="UTF-8">
    <title>LaboratoryWork2</title>
</head>
<body>
    <main>
        <aside id="alerts">

        </aside>
        <section id="header" class="container mh-center">
            <img id="icon" src="./static/dog.jpg" alt="No icon">
            <h3>
                Макеев Роман
                <br>
                Группа P3208
                <br>
                Вариант 1814
            </h3>
        </section>
        <section id="form" class="container mh-center">
            <div class="inputs">
                <div>
                    <label for="r">Type R:</label>
                    <input class="right" type="text" name="R" id="r" value="1"
                       placeholder="1...4"/>
                </div>
                <div>
                    <label for="x">Select X:</label>
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
                </div>
                <div>
                    <label for="y">Type Y:</label>
                    <input class="wrong" type="text" name="Y" id="y"
                           placeholder="-3...3"/>
                </div>
                <button class="mv-center" id="submit" type="submit">Submit</button>
            </div>
            <div class="graph">
               <canvas id="canvas" height="250px" width="250px">
                   Here could be your ad
               </canvas>
            </div>
        </section>
        <section id="results" class="mh-center">
        <div class="scroll-table mh-center">
            <table class="results mh-center">
                <tr>
                    <th colspan="7">
                        <h3>Results:</h3>
                    </th>
                </tr>
                <tr>
                    <td>№</td>
                    <td>X</td>
                    <td>Y</td>
                    <td>R</td>
                    <td>Hit</td>
                    <td>Time</td>
                    <td>Time of work</td>
                </tr>
            </table>
            <div class="scroll-table-body">
                <%@include file = "table.jsp"%>
            </div>
        </div>
            <button id="reset" class="mh-center" type="submit">Reset</button>
        </section>
    </main>
</body>
</html>