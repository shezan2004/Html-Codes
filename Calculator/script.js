const display = document.getElementById("display");
const container = document.getElementById("btn-container");
let expression = "";

container.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;

    const val = e.target.getAttribute("data-val");

    if (val === "C") {
        expression = "";
    } else if (val === "=") {
        try {
            expression = eval(expression).toString();
        } catch {
            expression = "Error";
        }
    } else {
        expression += val;
    }

    display.innerText = expression || "0";
});