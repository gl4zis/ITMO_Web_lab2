export const table: HTMLTableElement = <HTMLTableElement> document.getElementById('res-table')

export function addNewRow(rowHtml: string): void {
    const newRow: HTMLTableRowElement = table.insertRow(table.rows.length)
    newRow.innerHTML = rowHtml
    const numberCell: HTMLTableCellElement = newRow.insertCell(0)
    numberCell.innerText = String(table.rows.length)
}

export function resetTable(): void {
    while (table.rows.length > 0)
        table.deleteRow(-1)
}

export function getPoint(index: number): {x: number, y: number, hit: boolean} {
    const row: HTMLTableRowElement = table.rows[index]
    return {
        x: parseFloat(row.cells[1].innerText.replace(',', '.')),
        y: parseFloat(row.cells[2].innerText.replace(',', '.')),
        hit: row.cells[4].innerText === 'YES'
    }
}

export function getLastPoint(): {x: number, y: number, hit: boolean} {
    return getPoint(table.rows.length-1)
}