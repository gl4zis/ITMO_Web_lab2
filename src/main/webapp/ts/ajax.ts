import {paintGraph, paintNewDot} from "./canvas.js";
import {addNewRow, resetTable} from "./table.js";

const reset: HTMLButtonElement = <HTMLButtonElement> document.getElementById('reset')

reset.addEventListener('click', function () {
    // @ts-ignore
    superagent
        .get('')
        .query({delete: true})
        .then(processReset)
        .catch(serverError)
    resetTable()
    paintGraph()
})

function processReset(): void {
    console.log('Successfully deleted')
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
        serverError(response.headers)
}

function serverError(error: object): void {
    console.error(error)
}

function addHit(htmlTable: string): void {
    const table: HTMLTableElement = document.createElement('table')
    table.innerHTML = htmlTable
    const lastRow: HTMLTableRowElement = table.rows[table.rows.length-1]
    const newPoint: {x: number, y: number, hit: boolean} = {
        x: parseFloat(lastRow.cells[0].innerText),
        y: parseFloat(lastRow.cells[1].innerText),
        hit: Boolean(lastRow.cells[3].innerText)
    }
    paintNewDot(newPoint)
    const newRowHtml: string = lastRow.innerHTML
    addNewRow(newRowHtml)
}