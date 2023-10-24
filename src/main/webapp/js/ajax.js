import { paintGraph, paintNewDot } from "./canvas.js";
import { addNewRow, getLastPoint, resetTable } from "./table.js";
import { addAlert } from "./alerts.js";
const reset = document.getElementById('reset');
reset.addEventListener('click', function () {
    const url = document.URL;
    fetch(url, { method: 'DELETE' })
        .then((response) => {
        if (!response.ok)
            return Promise.reject();
    })
        .then(processReset)
        .catch(serverError);
});
function processReset() {
    resetTable();
    paintGraph();
    addAlert("success", "Table was successfully reset");
}
export function submit(data) {
    const roundX = +data.x.toFixed(3);
    const roundY = +data.y.toFixed(3);
    const roundR = +data.r.toFixed(3);
    const url = document.URL + "?X=" + roundX + "&Y=" + roundY + "&R=" + roundR;
    fetch(url)
        .then((response) => {
        if (response.ok)
            return response.text();
        else
            return Promise.reject(response);
    })
        .then(addHit)
        .catch(serverError);
}
function serverError() {
    addAlert("warning", "No connection with web-server");
}
function addHit(htmlTable) {
    const table = document.createElement('table');
    table.innerHTML = htmlTable;
    const newRowHtml = table.rows[table.rows.length - 1].innerHTML;
    addNewRow(newRowHtml);
    paintNewDot(getLastPoint());
}
