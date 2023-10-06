import { paintGraph, paintNewDot } from "./canvas.js";
import { addNewRow, getLastPoint, resetTable } from "./table.js";
import { addAlert } from "./alerts.js";
const reset = document.getElementById('reset');
reset.addEventListener('click', function () {
    // @ts-ignore
    superagent
        .get('')
        .query({ _method: 'delete' })
        .then(processReset)
        .catch(serverError);
    resetTable();
    paintGraph();
});
function processReset() {
    addAlert("success", "Table was successfully reset");
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
        serverError(response);
}
function serverError(error) {
    addAlert("warning", String(error));
}
function addHit(htmlTable) {
    const table = document.createElement('table');
    table.innerHTML = htmlTable;
    const newRowHtml = table.rows[0].innerHTML;
    addNewRow(newRowHtml);
    paintNewDot(getLastPoint());
}
