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
        stack.removeChild(alert);
    }
    setTimeout(removeAlert, 5000);
    alert.onclick = removeAlert;
}
new MutationObserver(() => {
    for (let i = 0; i < stack.children.length; i++)
        stack.children[i].style.top = String(20 + i * 86) + "px";
}).observe(stack, { childList: true });
