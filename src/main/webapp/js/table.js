export const table = document.getElementById('res-table');
export function addNewRow(rowHtml) {
    const newRow = table.insertRow(table.rows.length);
    newRow.innerHTML = rowHtml;
}
export function resetTable() {
    while (table.rows.length > 2)
        table.deleteRow(-1);
}
