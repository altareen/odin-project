/**
|-------------------------------------------------------------------------------
| etchasketch.js
|-------------------------------------------------------------------------------
|
| Author:       Alwin Tareen
| Created:      Jan 15, 2023
| Execution:    chrome etchasketch.html
|
| This program implements a simple Etch-A-Sketch clone.
|
*/

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
