/**
|-------------------------------------------------------------------------------
| calculator.js
|-------------------------------------------------------------------------------
|
| Author:       Alwin Tareen
| Created:      Jan 25, 2023
| Execution:    chrome calculator.html
|
| This program implements a simple calculator.
|
*/

let digits = [];
let current = 0;
let operation = "";

const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const multiply = function(first, second) {
	return first * second;
};

const divide = function(first, second) {
	return first / second;
};

const operate = function(operator, first, second) {
    if (operator == "+") {
        return add(first, second);
    }
    else if (operator == "-") {
        return subtract(first, second);
    }
    else if (operator == "*") {
        return multiply(first, second);
    }
    else if (operator == "/") {
        if (second == 0) {
            return "Error: divide by zero";
        }
        else {
            return divide(first, second);
        }
    }
};

const updateDisplay = function() {
    display.textContent = digits.join("");
};

// establish the container and display
const container = document.querySelector("#container");
container.classList.toggle("grid-container");
const display = document.querySelector("#display");

// set up the calculator buttons
const oneButton = document.createElement('button');
oneButton.textContent = '1';
container.appendChild(oneButton);

const twoButton = document.createElement('button');
twoButton.textContent = '2';
container.appendChild(twoButton);

const threeButton = document.createElement('button');
threeButton.textContent = '3';
container.appendChild(threeButton);

const addButton = document.createElement('button');
addButton.textContent = '+';
container.appendChild(addButton);

const fourButton = document.createElement('button');
fourButton.textContent = '4';
container.appendChild(fourButton);

const fiveButton = document.createElement('button');
fiveButton.textContent = '5';
container.appendChild(fiveButton);

const sixButton = document.createElement('button');
sixButton.textContent = '6';
container.appendChild(sixButton);

const subtractButton = document.createElement('button');
subtractButton.textContent = '-';
container.appendChild(subtractButton);

const sevenButton = document.createElement('button');
sevenButton.textContent = '7';
container.appendChild(sevenButton);

const eightButton = document.createElement('button');
eightButton.textContent = '8';
container.appendChild(eightButton);

const nineButton = document.createElement('button');
nineButton.textContent = '9';
container.appendChild(nineButton);

const multiplyButton = document.createElement('button');
multiplyButton.textContent = '*';
container.appendChild(multiplyButton);

const zeroButton = document.createElement('button');
zeroButton.textContent = '0';
container.appendChild(zeroButton);

const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
container.appendChild(clearButton);

const equalsButton = document.createElement('button');
equalsButton.textContent = '=';
container.appendChild(equalsButton);

const divideButton = document.createElement('button');
divideButton.textContent = '/';
container.appendChild(divideButton);

// create event listeners for each of the buttons
oneButton.addEventListener('click', () => {
    digits.push('1');
    updateDisplay();
});

twoButton.addEventListener('click', () => {
    digits.push('2');
    updateDisplay();
});

threeButton.addEventListener('click', () => {
    digits.push('3');
    updateDisplay();
});

fourButton.addEventListener('click', () => {
    digits.push('4');
    updateDisplay();
});

fiveButton.addEventListener('click', () => {
    digits.push('5');
    updateDisplay();
});

sixButton.addEventListener('click', () => {
    digits.push('6');
    updateDisplay();
});

sevenButton.addEventListener('click', () => {
    digits.push('7');
    updateDisplay();
});

eightButton.addEventListener('click', () => {
    digits.push('8');
    updateDisplay();
});

nineButton.addEventListener('click', () => {
    digits.push('9');
    updateDisplay();
});

zeroButton.addEventListener('click', () => {
    digits.push('0');
    updateDisplay();
});

addButton.addEventListener('click', () => {
    if (current != 0) {
        current = operate(operation, current, Number(digits.join("")));
        display.textContent = current;
    }
    else {
        current = Number(digits.join(""));
    }
    operation = '+';
    digits = [];
});

subtractButton.addEventListener('click', () => {
    if (current != 0) {
        current = operate(operation, current, Number(digits.join("")));
        display.textContent = current;
    }
    else {
        current = Number(digits.join(""));
    }
    operation = '-';
    digits = [];
});

multiplyButton.addEventListener('click', () => {
    if (current != 0) {
        current = operate(operation, current, Number(digits.join("")));
        display.textContent = current;
    }
    else {
        current = Number(digits.join(""));
    }
    operation = '*';
    digits = [];
});

divideButton.addEventListener('click', () => {
    if (current != 0) {
        current = operate(operation, current, Number(digits.join("")));
        display.textContent = current;
    }
    else {
        current = Number(digits.join(""));
    }
    operation = '/';
    digits = [];
});

equalsButton.addEventListener('click', () => {
    if (current != 0) {
        display.textContent = operate(operation, current, Number(digits.join("")));
        current = 0;
        digits = [];
    }
});

clearButton.addEventListener('click', () => {
    display.textContent = '0';
    current = 0;
    digits = [];
});
