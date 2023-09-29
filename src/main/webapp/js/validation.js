const rField = document.getElementById('r')
const yField = document.getElementById('y')
const numberRegex = /^-?\d([\.,]\d{1,2})?$/

rField.addEventListener('input', validateR)
yField.addEventListener('input', validateY)

function validateR() {
    if (isRValid())
        rField.className = 'right'
    else
        rField.className = 'wrong'
}

function validateY() {
    if (isYValid())
        yField.className = 'right'
    else
        yField.className = 'wrong'
}

export function validatePoint(x, y) {
    return isRValid() && !(y < -5 || y > 3 || x < -2 || x > 5);
}

export function isRValid() {
    const rValue = parseFloat(rField.value.replace(',', '.'))
    return numberRegex.test(rField.value) && rValue >= 1 && rValue <= 4
}

export function isYValid() {
    const yValue = parseFloat(yField.value.replace(',', '.'))
    return numberRegex.test(yField.value) && yValue >= -3 && yValue <= 3
}

export function isValid() {
    return isRValid() && isYValid()
}