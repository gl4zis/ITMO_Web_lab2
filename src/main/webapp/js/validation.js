const rField = document.getElementById('r')
const yField = document.getElementById('y')
const numberRegex = /^-?\d([\.,]\d{1,2})?$/

rField.addEventListener('input', validateR)
yField.addEventListener('input', validateY)

document.getElementById('submit-form').addEventListener('submit', function (event) {
    if (!isValid()) {
        validationError(true)
        event.preventDefault()
    }
})

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

function isYValid() {
    const yValue = parseFloat(yField.value.replace(',', '.'))
    return numberRegex.test(yField.value) && yValue >= -3 && yValue <= 3
}

function isValid() {
    return isRValid() && isYValid()
}

export function validationError(needBlinkY) {
    if (!isRValid())
        borderBlink(document.getElementById('r'))
    if (needBlinkY && !isYValid())
        borderBlink(document.getElementById('y'))
}

function borderBlink(field) {
    const oldClass = field.className
    for (let i = 1; i <= 6; i++) {
        if (i % 2 === 1)
            setTimeout(function () {field.className = 'no-border'}, i*200)
        else
            setTimeout(function () {field.className = oldClass}, i*200)
    }
    validateR()
    validateY()
}