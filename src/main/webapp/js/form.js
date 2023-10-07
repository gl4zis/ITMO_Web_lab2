import { isRValid, isYValid, validationError } from "./validation.js";
import { submit } from "./ajax.js";
export const yField = document.getElementById('y');
const xField = document.getElementById('x');
export const rField = document.getElementById('r');
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function () {
    if (isRValid() && isYValid()) {
        const x = Number(xField.value);
        const y = parseFloat(yField.value.replace(',', '.'));
        const r = parseFloat(rField.value.replace(',', '.'));
        submit({ x, y, r });
    }
    else
        validationError(true);
});
