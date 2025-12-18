const display = document.getElementById("display");
function insert(value) {
        display.value += value;
    }
function clearDisplay() {
        display.value = "";
    }
function backspace() {
        display.value = display.value.slice(0, -1);
    }

function calculate() {
        try {
            let expression = display.value
                .replace(/sin/g, "Math.sin")
                .replace(/cos/g, "Math.cos")
                .replace(/tan/g, "Math.tan");

            display.value = eval(expression);
        } catch {
            display.value = "Error";
        }
    }