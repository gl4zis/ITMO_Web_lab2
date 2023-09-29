import {submit} from './main.js'
import {isValid, isRValid, isYValid} from "./validation.js";

document.getElementById('submit').onclick = function () {
    if (isValid()) {
        const x = document.getElementById('x').value
        const y = document.getElementById('y').value
        const r = document.getElementById('r').value
        submit(x, y, r)
    } else
        validationError(true)
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
}