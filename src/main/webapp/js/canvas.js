import {submit} from "./main.js"
import {validatePoint, isRValid} from "./validation.js";
import {validationError} from "./form.js";

const cv = document.getElementById("canvas")
const ctx = cv.getContext('2d')
const rField = document.getElementById("r")
const h = cv.height
const w = h
const R = w * 0.4

cv.onclick = sendClickCoords
rField.addEventListener('input', paintGraph)

export function paintGraph() {
    ctx.clearRect(0, 0, w, h)

    ctx.strokeStyle = '#CCCCCC'
    ctx.fillStyle = '#00BFFF88'

    ctx.beginPath()
    ctx.moveTo(0, h / 2)
    ctx.lineTo(w, h / 2)
    ctx.lineTo(w * (19 / 20), h * (9 / 20))
    ctx.moveTo(w, h / 2)
    ctx.lineTo(w * (19 / 20), h * (11 / 20))
    ctx.moveTo(w / 2, h)
    ctx.lineTo(w / 2, 0)
    ctx.lineTo(w * (9 / 20), h * (1 / 20))
    ctx.moveTo(w / 2, 0)
    ctx.lineTo(w * (11 / 20), h * (1 / 20))

    const fontSize = w / 25

    ctx.moveTo(w / 2 - R, h / 2 - fontSize / 2)
    ctx.lineTo(w / 2 - R, h / 2 + fontSize / 2)
    ctx.moveTo(w / 2 - R / 2, h / 2 - fontSize / 2)
    ctx.lineTo(w / 2 - R / 2, h / 2 + fontSize / 2)
    ctx.moveTo(w / 2 + R / 2, h / 2 - fontSize / 2)
    ctx.lineTo(w / 2 + R / 2, h / 2 + fontSize / 2)
    ctx.moveTo(w / 2 + fontSize / 2, h / 2 + R / 2)
    ctx.lineTo(w / 2 - fontSize / 2, h / 2 + R / 2)
    ctx.moveTo(w / 2 + fontSize / 2, h / 2 - R / 2)
    ctx.lineTo(w / 2 - fontSize / 2, h / 2 - R / 2)
    ctx.stroke()

    const rValue = parseFloat(rField.value.replace(',', '.'))
    if (isRValid()) {
        ctx.beginPath()
        ctx.arc(w / 2, h / 2, R / 2, Math.PI, 3 * Math.PI / 2)
        ctx.lineTo(w / 2, h / 2)
        ctx.fill()

        ctx.fillRect(w / 2 - R, h / 2, R, R / 2)
        ctx.beginPath()
        ctx.moveTo(w / 2 + R / 2, h / 2)
        ctx.lineTo(w / 2, h / 2)
        ctx.lineTo(w / 2, h / 2 + R / 2)
        ctx.fill()

        ctx.fillStyle = '#CCCCCC'
        ctx.font = 'bold ' + fontSize + 'pt Arial'
        const textWidth = ctx.measureText(rValue).width;
        ctx.fillText(-rValue, w / 2 - R - textWidth/2, h / 2 - fontSize)
        ctx.fillText(rValue / 2, w / 2 + fontSize, h / 2 - R / 2 + fontSize/2)
        ctx.fillText(rValue / 2, w / 2 + R / 2 - textWidth/2, h / 2 - fontSize)
        ctx.fillText(-rValue / 2, w / 2 + fontSize, h / 2 + R / 2 + fontSize/2)
        ctx.fillText(-rValue / 2, w / 2 - R / 2 - textWidth/2, h / 2 - fontSize)
        ctx.stroke()
    }
}

export function paintNewDot({x, y, hit}) {
    if (hit === 'NO')
        ctx.fillStyle = '#F00'
    else
        ctx.fillStyle = '#0F0'

    const rValue = rField.value
    const xCenter = w/2 + (R * x / rValue)
    const yCenter = h/2 - (R * y / rValue)
    ctx.beginPath()
    ctx.arc(xCenter, yCenter, w/100, 0, Math.PI*2, true)
    ctx.fill()
}

export function sendClickCoords(event) {
    const rValue = rField.value
    const rect = cv.getBoundingClientRect()
    const x = (event.clientX - rect.left - w/2)*rValue/R
    const y = (h/2 - (event.clientY - rect.top))*rValue/R

    processClick(x, y)
}

function processClick(x, y) {
    if (validatePoint(x, y))
        submit(x, y, rField.value)
    else
        validationError(false)
}