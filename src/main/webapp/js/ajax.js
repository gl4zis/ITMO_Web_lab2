import { paintGraph, paintNewDot } from "./canvas.js";
import { addNewRow, resetTable } from "./table.js";
const reset = document.getElementById('reset');
reset.addEventListener('click', function () {
    // @ts-ignore
    superagent
        .get('')
        .query({ delete: true })
        .then(processReset)
        .catch(serverError);
    resetTable();
    paintGraph();
});
function processReset() {
    console.log('Successfully deleted');
}
export function submit(x, y, r) {
    // @ts-ignore
    superagent
        .get('')
        .query({ X: +x.toFixed(3), Y: +y.toFixed(3), R: +r.toFixed(3) })
        .then(processResponse)
        .catch(serverError);
}
function processResponse(response) {
    if (response.status === 200)
        addHit(String(response.text));
    else
        serverError(response.headers);
}
function serverError(error) {
    console.error(error);
}
function addHit(htmlTable) {
    const table = document.createElement('table');
    table.innerHTML = htmlTable;
    const lastRow = table.rows[table.rows.length - 1];
    const newPoint = {
        x: parseFloat(lastRow.cells[0].innerText),
        y: parseFloat(lastRow.cells[1].innerText),
        hit: Boolean(lastRow.cells[3].innerText)
    };
    paintNewDot(newPoint);
    const newRowHtml = lastRow.innerHTML;
    addNewRow(newRowHtml);
}
