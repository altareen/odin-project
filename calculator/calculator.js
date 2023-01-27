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
        return divide(first, second);
    }
}

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

const fourButton = document.createElement('button');
fourButton.textContent = '4';
container.appendChild(fourButton);

const fiveButton = document.createElement('button');
fiveButton.textContent = '5';
container.appendChild(fiveButton);

const sixButton = document.createElement('button');
sixButton.textContent = '6';
container.appendChild(sixButton);

const sevenButton = document.createElement('button');
sevenButton.textContent = '7';
container.appendChild(sevenButton);

const eightButton = document.createElement('button');
eightButton.textContent = '8';
container.appendChild(eightButton);

const nineButton = document.createElement('button');
nineButton.textContent = '9';
container.appendChild(nineButton);

const zeroButton = document.createElement('button');
zeroButton.textContent = '0';
container.appendChild(zeroButton);

const addButton = document.createElement('button');
addButton.textContent = '+';
container.appendChild(addButton);

const subtractButton = document.createElement('button');
subtractButton.textContent = '-';
container.appendChild(subtractButton);

const multiplyButton = document.createElement('button');
multiplyButton.textContent = '*';
container.appendChild(multiplyButton);

const divideButton = document.createElement('button');
divideButton.textContent = '/';
container.appendChild(divideButton);

const equalsButton = document.createElement('button');
equalsButton.textContent = '=';
container.appendChild(equalsButton);

const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
container.appendChild(clearButton);

// create event listeners for each of the buttons
oneButton.addEventListener('click', () => {
    display.textContent = '1';
});

twoButton.addEventListener('click', () => {
    display.textContent = '2';
});

threeButton.addEventListener('click', () => {
    display.textContent = '3';
});

fourButton.addEventListener('click', () => {
    display.textContent = '4';
});

fiveButton.addEventListener('click', () => {
    display.textContent = '5';
});

sixButton.addEventListener('click', () => {
    display.textContent = '6';
});

sevenButton.addEventListener('click', () => {
    display.textContent = '7';
});

eightButton.addEventListener('click', () => {
    display.textContent = '8';
});

nineButton.addEventListener('click', () => {
    display.textContent = '9';
});

zeroButton.addEventListener('click', () => {
    display.textContent = '0';
});

addButton.addEventListener('click', () => {
    display.textContent = '+';
});

subtractButton.addEventListener('click', () => {
    display.textContent = '-';
});

multiplyButton.addEventListener('click', () => {
    display.textContent = '*';
});

divideButton.addEventListener('click', () => {
    display.textContent = '/';
});

equalsButton.addEventListener('click', () => {
    display.textContent = '=';
});

clearButton.addEventListener('click', () => {
    display.textContent = '0';
});



/*

const container = document.querySelector("#container");
container.classList.toggle("grid-container");
const entry = document.querySelector("#entry");

// set up the start button
const startButton = document.createElement('button');
startButton.textContent = 'Start';
entry.appendChild(startButton);

// create an event listener for the start button
startButton.addEventListener('click', () => {
    container.replaceChildren();
    displayGrid();
});

function displayGrid() {
    let num = Number(prompt("Enter the number of squares per side of the grid:"));
    if (num > 100) {
        num = 100;
    }

    let columnQuantity = "";
    for (let i = 0; i < num; i++) {
        columnQuantity += "auto ";
    }
    container.setAttribute("style", `grid-template-columns: ${columnQuantity}`);

    for (let i = 0; i < num * num; i++) {
        let square = document.createElement("div");
        square.classList.toggle("grid-item");
        square.textContent = `${i}`;
        container.appendChild(square);
        
        square.addEventListener("mouseover", () => {
            square.classList.remove("grid-item");
            square.classList.add("grid-element");
        });
    }
}

*/
