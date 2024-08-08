function showindisplay(value) {
    let display = document.getElementById("display");
    display.value += value;
}
function cleardisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
