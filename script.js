const numbers = document.querySelectorAll('.number-button');
const screen = document.querySelector('.screen');
const operators = document.querySelectorAll('.operator-button');
let displayValue;
let firstNumber;

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

numbers.forEach(number => number.addEventListener("click", e => {
    screen.textContent += e.target.textContent;
    displayValue = screen.textContent;
}))

operators.forEach(operator => operator.addEventListener("click", e => {
    if (displayValue === undefined) {
        alert('You cannot use an operator without putting a number first');
    } else {
        let firstNumber = displayValue;
        screen.textContent += e.target.textContent;
        displayValue = screen.textContent;
    }
}))