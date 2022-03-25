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
    screen.textContent = result;
    displayValue = screen.textContent;
numbers.forEach(number => number.addEventListener("click", e => {
    screen.textContent += e.target.textContent;
    displayValue = screen.textContent;
    if (firstNumber !== undefined) {
        let displayNumbers = displayValue.split(/[*+\/-]+|[A-Za-z]+/);
        secondNumber = displayNumbers[1];
    }
}))

operators.forEach(button => button.addEventListener("click", e => {
    firstNumber = displayValue;    
    screen.textContent += e.target.textContent;
    displayValue = screen.textContent;
    operator = e.target.textContent;
}))

equalsButton.addEventListener("click", e => {
    result = operate(firstNumber, operator, secondNumber);
    screen.textContent = result;
})