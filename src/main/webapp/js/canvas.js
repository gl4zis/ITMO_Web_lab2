import { isRValid, validatePoint, validationError } from "./validation.js";
import { submit } from "./ajax.js";
import { rField } from "./form.js";
import { getPoint, table } from "./table.js";
const cv = document.getElementById("canvas");
const ctx = cv.getContext('2d');
const h = cv.height;
const w = h;
const rPixels = w * 0.4;
cv.addEventListener('click', sendClickCoords);
rField.addEventListener('input', paintGraph);
window.addEventListener('load', paintGraph);
export function paintGraph() {
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = '#CCCCCC';
    ctx.fillStyle = '#00BFFF88';
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.lineTo(w * (19 / 20), h * (9 / 20));
    ctx.moveTo(w, h / 2);
    ctx.lineTo(w * (19 / 20), h * (11 / 20));
    ctx.moveTo(w / 2, h);
    ctx.lineTo(w / 2, 0);
    ctx.lineTo(w * (9 / 20), h * (1 / 20));
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w * (11 / 20), h * (1 / 20));
    const fontSize = w / 25;
    ctx.moveTo(w / 2 - rPixels, h / 2 - fontSize / 2);
    ctx.lineTo(w / 2 - rPixels, h / 2 + fontSize / 2);
    ctx.moveTo(w / 2 - rPixels / 2, h / 2 - fontSize / 2);
    ctx.lineTo(w / 2 - rPixels / 2, h / 2 + fontSize / 2);
    ctx.moveTo(w / 2 + rPixels / 2, h / 2 - fontSize / 2);
    ctx.lineTo(w / 2 + rPixels / 2, h / 2 + fontSize / 2);
    ctx.moveTo(w / 2 + fontSize / 2, h / 2 + rPixels / 2);
    ctx.lineTo(w / 2 - fontSize / 2, h / 2 + rPixels / 2);
    ctx.moveTo(w / 2 + fontSize / 2, h / 2 - rPixels / 2);
    ctx.lineTo(w / 2 - fontSize / 2, h / 2 - rPixels / 2);
    ctx.stroke();
    if (isRValid()) {
        const rValue = parseFloat(rField.value.replace(',', '.'));
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, rPixels / 2, Math.PI, 3 * Math.PI / 2);
        ctx.lineTo(w / 2, h / 2);
        ctx.fill();
        ctx.fillRect(w / 2 - rPixels, h / 2, rPixels, rPixels / 2);
        ctx.beginPath();
        ctx.moveTo(w / 2 + rPixels / 2, h / 2);
        ctx.lineTo(w / 2, h / 2);
        ctx.lineTo(w / 2, h / 2 + rPixels / 2);
        ctx.fill();
        ctx.fillStyle = '#CCCCCC';
        ctx.font = 'bold ' + fontSize + 'pt Arial';
        ctx.fillText(String(-rValue), w / 2 - rPixels - getNumLen(-rValue) / 2, h / 2 - fontSize);
        ctx.fillText(String(rValue / 2), w / 2 + fontSize, h / 2 - rPixels / 2 + fontSize / 2);
        ctx.fillText(String(rValue / 2), w / 2 + rPixels / 2 - getNumLen(rValue / 2) / 2, h / 2 - fontSize);
        ctx.fillText(String(-rValue / 2), w / 2 + fontSize, h / 2 + rPixels / 2 + fontSize / 2);
        ctx.fillText(String(-rValue / 2), w / 2 - rPixels / 2 - getNumLen(-rValue / 2) / 2, h / 2 - fontSize);
        ctx.stroke();
        paintAllDots();
    }
    function getNumLen(x) {
        return ctx.measureText(String(x)).width;
    }
}
function paintAllDots() {
    for (let i = 0; i < table.rows.length; i++) {
        paintNewDot(getPoint(i));
    }
}
export function paintNewDot(point) {
    if (isRValid()) {
        if (point.hit)
            ctx.fillStyle = '#0F0';
        else
            ctx.fillStyle = '#F00';
        const rValue = parseFloat(rField.value.replace(',', '.'));
        const xCenter = w / 2 + (rPixels * point.x / rValue);
        const yCenter = h / 2 - (rPixels * point.y / rValue);
        ctx.beginPath();
        ctx.arc(xCenter, yCenter, w / 100, 0, Math.PI * 2, true);
        ctx.fill();
    }
}
function sendClickCoords(event) {
    if (isRValid()) {
        const r = parseFloat(rField.value.replace(',', '.'));
        const rect = cv.getBoundingClientRect();
        const x = (event.clientX - rect.left - w / 2) * r / rPixels;
        const y = (h / 2 - (event.clientY - rect.top)) * r / rPixels;
        processClick({ x, y, r });
    }
    else
        validationError(false);
}
function processClick(data) {
    if (validatePoint(data.x, data.y))
        submit(data);
}
