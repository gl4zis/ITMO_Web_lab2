import {paintGraph, paintNewDot} from "./canvas.js";
import {addNewRow, getLastPoint, resetTable} from "./table.js";
import {addAlert} from "./alerts.js";
import {Form} from "./form";

const reset: HTMLButtonElement = <HTMLButtonElement> document.getElementById('reset')

reset.addEventListener('click', function () {
    const url: string = document.URL + "/?_method=delete"
    fetch(url)
        .then((response: Response) => {
            if (response.status !== 200)
                return Promise.reject()
        })
        .then(processReset)
        .catch(serverError)
})

function processReset(): void {
    resetTable()
    paintGraph()
    addAlert("success", "Table was successfully reset")
}

export function submit(data: Form): void {
    const roundX: number = +data.x.toFixed(3)
    const roundY: number = +data.y.toFixed(3)
    const roundR: number = +data.r.toFixed(3)
    const url: string = document.URL + "/?X=" + roundX + "&Y=" + roundY + "&R=" + roundR
    fetch(url)
        .then((response: Response): Promise<string> => {
            if (response.status === 200)
                return response.text()
            else
                return Promise.reject(response)
        })
        .then(addHit)
        .catch(serverError)
}

function serverError(): void {
    addAlert("warning", "No connection with web-server")
}

function addHit(htmlTable: string): void {
    const table: HTMLTableElement = document.createElement('table')
    table.innerHTML = htmlTable
    const newRowHtml: string = table.rows[0].innerHTML
    addNewRow(newRowHtml)
    paintNewDot(getLastPoint())
}