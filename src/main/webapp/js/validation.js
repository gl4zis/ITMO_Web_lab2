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
    const isValid = isRValid() && !(y < -3 || y > 3 || x < -4 || x > 4);
    if (!isValid)
        pointValidationError();
    return isValid;
}
export function isRValid() {
    const rValue = parseFloat(rField.value.replace(',', '.'));
    return numberRegex.test(rField.value) && rValue >= 1 && rValue <= 4;
}
export function isYValid() {
    const yValue = parseFloat(yField.value.replace(',', '.'));
    return numberRegex.test(yField.value) && yValue >= -3 && yValue <= 3;
}
export function validationError(needYBlink) {
    if (!isRValid()) {
        rField.className = "blinking";
        setTimeout(validateR, 2000);
        console.error("R is not valid");
    }
    if (needYBlink && !isYValid()) {
        yField.className = "blinking";
        setTimeout(validateY, 2000);
        console.error("Y is not valid");
    }
}
function pointValidationError() {
    console.error("Point is not valid");
}
