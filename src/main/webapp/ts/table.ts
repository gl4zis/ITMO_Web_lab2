export const table: HTMLTableElement = <HTMLTableElement> document.getElementById('res-table')

export function addNewRow(rowHtml: string): void {
    const newRow: HTMLTableRowElement = table.insertRow(table.rows.length)
    newRow.innerHTML = rowHtml
}

export function resetTable(): void {
    while (table.rows.length > 2)
        table.deleteRow(-1)
}