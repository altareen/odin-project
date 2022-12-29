/**
|-------------------------------------------------------------------------------
| rockpaperscissors.js
|-------------------------------------------------------------------------------
|
| Author:       Alwin Tareen
| Created:      Oct 08, 2019
| Execution:    node rockpaperscissors.js
|
| This program implements a Rock-Paper-Scissors game.
|
*/

const shapes = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {    
    return shapes[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    let n = shapes.indexOf(computerSelection) - shapes.indexOf(playerSelection);
    let outcome = ((n % 3) + 3) % 3;
    if (outcome == 2) {
        result = `You Win! Player's ${playerSelection} beats Computer's ${computerSelection}`;
    }
    else if (outcome == 1) {
        result = `You Lose! Computer's ${computerSelection} beats Player's ${playerSelection}`;
    }
    else {
        result = `You Tie! Player's ${playerSelection} equals Computer's ${computerSelection}`;
    }
    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    console.log("5-Round Game of Rock-Paper-Scissors:")
    for (let i = 0; i < 5; i++) {
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        let trial = playRound(playerSelection, computerSelection);
        console.log(trial);
        if (trial.startsWith("You Win")) {
            playerScore += 1;
        }
        else if (trial.startsWith("You Lose")) {
            computerScore += 1;
        }
    }
    
    console.log("\nGame Results:")
    console.log(`Your Score: ${playerScore} Computer's Score: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You Win!");
    }
    else if (playerScore < computerScore) {
        console.log("You Lose!");
    }
    else {
        console.log("You Tie!")
    }    
}

game();
