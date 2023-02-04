function add(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
}

function subtract(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
}

function divide(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) / step;
    numberElement.innerText = number;
} 

function multiply(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) * step;
    numberElement.innerText = number;


<!-- calculate  -->
<!-- if addition, do addition -->
<!-- if subtract, do subtract -->
<!-- if divide, do divide -->
<!-- if multiply, do multiply -->

    <!-- if addition, do addition -->
    <!-- if subtract, do subtract -->
    <!-- if divide, do divide -->
    <!-- if multiply, do multiply -->

function calculate(operation, step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;

    if (operation == 'addition') {
        number = parseInt(number) + step;
    } else if (operation == 'subtract') {
        number = parseInt(number) - step;
    } else if (operation == 'divide') {
        number = parseInt(number) / step;
    } elif (operation == 'multiply') {
        number = parseInt(number) * step;
    }
numberElement.innerText = number;
}