export type alertType = "success" | "warning"

const stack: HTMLElement = <HTMLElement> document.getElementById("alerts");

export function addAlert(type: alertType, message: string): void {
    const alert: HTMLDivElement = document.createElement("div")
    alert.classList.add("alert", type)
    const title: HTMLElement = document.createElement("h3")
    title.classList.add("title")
    title.innerText = type === "success" ? "Great" : "Error"
    const text: HTMLElement = document.createElement("p")
    text.classList.add("content")
    text.innerText = message
    alert.append(title, text)
    stack.appendChild(alert)

    function removeAlert(): void {
        if (Array.from(stack.children).indexOf(alert) !== -1)
            stack.removeChild(alert)
    }

    setTimeout(removeAlert, 5000)
    alert.onclick = removeAlert
}

new MutationObserver((): void => {
    const len: number = stack.children.length
    const alerts: HTMLDivElement[] = <HTMLDivElement[]> Array.from(stack.children)
    if (len > 4)
        stack.removeChild(alerts[0])
    let topSum: number = window.innerHeight - 25;
    for (let i: number = 0; i < len; i++) {
        const alert: HTMLDivElement = <HTMLDivElement> alerts[i]
        topSum -= (15 + alert.clientHeight)
        alert.style.top = String(topSum) + "px"
    }
}).observe(stack, {childList: true})