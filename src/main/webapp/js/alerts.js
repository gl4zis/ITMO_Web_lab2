const stack = document.getElementById("alerts");
export function addAlert(type, message) {
    const alert = document.createElement("div");
    alert.classList.add("alert", type);
    const title = document.createElement("h3");
    title.classList.add("title");
    title.innerText = type === "success" ? "Great" : "Error";
    const text = document.createElement("p");
    text.classList.add("content");
    text.innerText = message;
    alert.append(title, text);
    stack.appendChild(alert);
    function removeAlert() {
        if (Array.from(stack.children).indexOf(alert) !== -1)
            stack.removeChild(alert);
    }
    setTimeout(removeAlert, 5000);
    alert.onclick = removeAlert;
}
new MutationObserver(() => {
    const len = stack.children.length;
    const alerts = Array.from(stack.children);
    if (len > 4)
        stack.removeChild(alerts[0]);
    let topSum = window.innerHeight - 25;
    alerts.reverse().forEach((alert) => {
        topSum -= (15 + alert.clientHeight);
        alert.style.top = String(topSum) + "px";
    });
}).observe(stack, { childList: true });
