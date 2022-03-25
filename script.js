const numbers = document.querySelectorAll('.number-button');
const screen = document.querySelector('.screen');
const operators = document.querySelectorAll('.operator-button');
const equalsButton = document.querySelector('.equals-button');
let displayValue;
let firstNumber;
let operator;
let secondNumber;
let result;

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function substract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate(firstNumber, operator, secondNumber) {
    if (operator === '+') {
        return add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return substract(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        return divide(firstNumber, secondNumber);
    } else {
        return 'ERROR';
    }
}

function display(event) {
    screen.textContent += event.target.textContent;
    displayValue = screen.textContent;
}

function displayResult(result) {
    result = Number(result);
    if (result % 1 != 0) {
        result = result.toFixed(2)
    }
    screen.textContent = result;
    displayValue = screen.textContent;
    secondNumber = undefined;
    result = undefined;
}

numbers.forEach(number => number.addEventListener("click", e => {
    // Displays the pressed number on the screen. 
    display(e);
    if (firstNumber !== undefined) {
        // Splits the numbers that are separated by an operator and assign them
        // to an array.
        let displayNumbers = displayValue.split(/[*+\/-]+|[A-Za-z]+/);
        secondNumber = displayNumbers[1];
    }
}))

operators.forEach(button => button.addEventListener("click", e => {
    if (secondNumber !== undefined && result === undefined) {
        result = operate(firstNumber, operator, secondNumber);
        displayResult(result);
    }
    firstNumber = displayValue;    
    display(e);
    operator = e.target.textContent;
}))

equalsButton.addEventListener("click", () => {
    if (!firstNumber || !operator || !secondNumber) {
        return;
    } else {
        result = operate(firstNumber, operator, secondNumber);
        displayResult(result);
    }
})