import { rField, yField } from "./form.js";
const numberRegex = /^-?\d([\.,]\d{1,2})?$/;
rField.addEventListener('input', validateR);
yField.addEventListener('input', validateY);
function validateR() {
    if (isRValid())
        rField.className = 'right';
    else
        rField.className = 'wrong';
}
function validateY() {
    if (isYValid())
        yField.className = 'right';
    else
        yField.className = 'wrong';
}
export function validatePoint(x, y) {
    return isRValid() && !(y < -3 || y > 3 || x < -4 || x > 4);
}
export function isRValid() {
    const rValue = parseFloat(rField.value.replace(',', '.'));
    return numberRegex.test(rField.value) && rValue >= 1 && rValue <= 4;
}
export function isYValid() {
    const yValue = parseFloat(yField.value.replace(',', '.'));
    return numberRegex.test(yField.value) && yValue >= -3 && yValue <= 3;
}
export function validationError() {
    if (!isRValid()) {
        rField.className = "blinking";
        setTimeout(validateR, 2000);
    }
    if (!isYValid()) {
        yField.className = "blinking";
        setTimeout(validateY, 2000);
    }
}
