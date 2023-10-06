import {paintGraph, paintNewDot} from "./canvas.js";
import {addNewRow, getLastPoint, resetTable} from "./table.js";
import {addAlert} from "./alerts.js";

const reset: HTMLButtonElement = <HTMLButtonElement> document.getElementById('reset')

reset.addEventListener('click', function () {
    // @ts-ignore
    superagent
        .get('')
        .query({_method: 'delete'})
        .then(processReset)
        .catch(serverError)
    resetTable()
    paintGraph()
})

function processReset(): void {
    addAlert("success", "Table was successfully reset")
}

export function submit(x: number, y: number, r: number): void {
    // @ts-ignore
    superagent
        .get('')
        .query({X: +x.toFixed(3), Y: +y.toFixed(3), R: +r.toFixed(3)})
        .then(processResponse)
        .catch(serverError)
}

function processResponse(response: Response): void {
    if (response.status === 200)
        addHit(String(response.text))
    else
        serverError(response)
}

function serverError(error: Response): void {
    addAlert("warning", String(error))
}

function addHit(htmlTable: string): void {
    const table: HTMLTableElement = document.createElement('table')
    table.innerHTML = htmlTable
    const newRowHtml: string = table.rows[0].innerHTML
    addNewRow(newRowHtml)
    paintNewDot(getLastPoint())
}