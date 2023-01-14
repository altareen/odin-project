/**
|-------------------------------------------------------------------------------
| rpsgame-ui.js
|-------------------------------------------------------------------------------
|
| Author:       Alwin Tareen
| Created:      Jan 13, 2023
| Execution:    chrome rpsgame-ui.html
|
| This program implements a Rock-Paper-Scissors game.
|
*/

const shapes = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');
const verdict = document.createElement('p');
const player = document.createElement('p');
const computer = document.createElement('p');
const separator = document.createElement('hr');
const heading = document.createElement('h3');
heading.textContent = "Game Results:";
const outcome = document.createElement('p');

// set up the game buttons
const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
container.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
container.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
container.appendChild(scissorsButton);

const replayButton = document.createElement('button');
replayButton.textContent = 'Replay';

// create event listeners for each of the buttons
rockButton.addEventListener('click', () => {
    trial = playRound('rock', getComputerChoice());
    displayOutcome(trial);
});

paperButton.addEventListener('click', () => {
    trial = playRound('paper', getComputerChoice());
    displayOutcome(trial);
});    

scissorsButton.addEventListener('click', () => {
    trial = playRound('scissors', getComputerChoice());
    displayOutcome(trial);
});

replayButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    container.removeChild(verdict);
    container.removeChild(player);
    container.removeChild(computer);
    container.removeChild(separator);
    container.removeChild(heading);
    container.removeChild(outcome);
    container.removeChild(replayButton);
    
    // reactivate game play buttons
    rockButton.removeAttribute('disabled');
    paperButton.removeAttribute('disabled');
    scissorsButton.removeAttribute('disabled');
});

function getComputerChoice() {    
    return shapes[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    let n = shapes.indexOf(computerSelection) - shapes.indexOf(playerSelection);
    let outcome = ((n % 3) + 3) % 3;
    if (outcome == 2) {
        result = `You win! Player's [${playerSelection}] beats Computer's [${computerSelection}].`;
    }
    else if (outcome == 1) {
        result = `You lose! Computer's [${computerSelection}] beats Player's [${playerSelection}].`;
    }
    else {
        result = `You tie! Player's [${playerSelection}] equals Computer's [${computerSelection}].`;
    }
    return result;
}

function displayOutcome(trial) {
    if (trial.startsWith("You win")) {
        playerScore += 1;
    }
    else if (trial.startsWith("You lose")) {
        computerScore += 1;
    }
    verdict.textContent = trial;
    player.textContent = `Player's score: ${playerScore}`;
    computer.textContent = `Computer's score: ${computerScore}`;
    container.appendChild(verdict);
    container.appendChild(player);
    container.appendChild(computer);
    
    if (playerScore + computerScore == 5) {
        announceResults();
    }
}

function announceResults() {
    if (playerScore > computerScore) {
        outcome.textContent = `Player wins the match: ${playerScore} - ${computerScore}`;
    }
    else if (playerScore < computerScore) {
        outcome.textContent = `Computer wins the match: ${computerScore} - ${playerScore}`;
    }

    // deactivate game play buttons
    rockButton.setAttribute('disabled', 'disabled');
    paperButton.setAttribute('disabled', 'disabled');
    scissorsButton.setAttribute('disabled', 'disabled');

    // place elements in the container
    container.appendChild(replayButton);
    container.appendChild(separator);
    container.appendChild(heading);
    container.appendChild(outcome);
    container.appendChild(replayButton);
}
