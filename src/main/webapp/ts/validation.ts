import {rField, yField} from "./form.js";

const numberRegex: RegExp = /^-?\d([\.,]\d{1,2})?$/

rField.addEventListener('input', validateR)
yField.addEventListener('input', validateY)

function validateR(): void {
    if (isRValid())
        rField.className = 'right'
    else
        rField.className = 'wrong'
}

function validateY(): void {
    if (isYValid())
        yField.className = 'right'
    else
        yField.className = 'wrong'
}

export function validatePoint(x: number, y: number): boolean {
    return isRValid() && !(y < -3 || y > 3 || x < -4 || x > 4);
}

export function isRValid(): boolean {
    const rValue: number = parseFloat(rField.value.replace(',', '.'))
    return numberRegex.test(rField.value) && rValue >= 1 && rValue <= 4
}

export function isYValid(): boolean {
    const yValue: number = parseFloat(yField.value.replace(',', '.'))
    return numberRegex.test(yField.value) && yValue >= -3 && yValue <= 3
}

export function validationError(): void {
    if (!isRValid()) {
        rField.className = "blinking"
        setTimeout(validateR, 2000)
    }
    if (!isYValid()) {
        yField.className = "blinking"
        setTimeout(validateY, 2000)
    }
}