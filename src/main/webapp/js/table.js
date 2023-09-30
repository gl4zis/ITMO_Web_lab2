const table = document.getElementById('res-table')

document.getElementById('reset').onclick = function () {
    const form = document.createElement('form')
    form.action = ''
    form.method = 'get'
    const deleteIn = document.createElement('input')
    deleteIn.name = 'delete'
    deleteIn.value = true
    form.appendChild(deleteIn)
    document.body.appendChild(form)
    form.submit()
}