export const table = document.getElementById('res-table');
export function addNewRow(rowHtml) {
    const newRow = table.insertRow(table.rows.length);
    newRow.innerHTML = rowHtml;
}
export function resetTable() {
    while (table.rows.length > 2)
        table.deleteRow(-1);
}
export function getPoint(index) {
    const row = table.rows[index];
    return {
        x: parseFloat(row.cells[1].innerText.replace(',', '.')),
        y: parseFloat(row.cells[2].innerText.replace(',', '.')),
        hit: row.cells[4].innerText === 'YES'
    };
}
export function getLastPoint() {
    return getPoint(table.rows.length - 1);
}
