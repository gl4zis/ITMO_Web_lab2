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

    function removeAlert(): void{
        stack.removeChild(alert)
    }

    setTimeout(removeAlert, 5000)
    alert.onclick = removeAlert
}

new MutationObserver((): void => {
    for (let i: number = 0; i < stack.children.length; i++)
        (<HTMLDivElement> stack.children[i]).style.top = String(20 + i * 86) + "px"
}).observe(stack, {childList: true})