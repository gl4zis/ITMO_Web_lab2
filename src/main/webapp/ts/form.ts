import {isRValid, isYValid, validationError} from "./validation.js";
import {submit} from "./ajax.js";

export const yField: HTMLInputElement = <HTMLInputElement> document.getElementById('y')
const xField: HTMLInputElement = <HTMLInputElement> document.getElementById('x')
export const rField: HTMLInputElement = <HTMLInputElement> document.getElementById('r')
const submitButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById('submit')

submitButton.addEventListener('click', function (): void {
    if (isRValid() && isYValid()) {
        const x: number = Number(xField.value)
        const y: number = parseFloat(yField.value.replace(',', '.'))
        const r: number = parseFloat(rField.value.replace(',', '.'))
        submit(x, y, r)
    } else
        validationError()
})