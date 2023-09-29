const rField = document.getElementById('r')
const yField = document.getElementById('y')
const numberRegex = /^-?\d([\.,]\d{1,2})?$/

rField.oninput = validateR
yField.oninput = validateY

export function validatePoint(x, y) {
    return !(y < -5 || y > 3 || x < -2 || x > 5);
}

export function validateR() {
    const rValue = rField.value
    return numberRegex.test(rValue) && Number(rValue) >= 1 && Number(rValue) <= 4
}

function validateY() {
    const yValue = yField.value
    return numberRegex.test(yValue) && Number(yValue) >= -3 && Number(yValue) <= 3
}

function isValid() {
    return validateR() && validateY()
}