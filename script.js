let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

// add event listner to the buttons that call playRound with the correct playerSelection
function getUserChoice() {
    let playerSelection = prompt("Choose your weapon.");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' ||
        playerSelection === 'paper' ||
        playerSelection === 'scissors') {
            return playerSelection;
        } else {
            console.log('Please choose rock, paper, or scissors.');
        }
}

function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * 3);
    switch (computerSelection) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'The game is a tie.';
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            roundWinner = 'computer';
            computerScore++;
        } else {
            roundWinner = 'player';
            playerScore++;
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            roundWinner = 'computer';
            computerScore++;
        } else {
            roundWinner = 'player';
            playerScore++;
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            roundWinner = 'computer';
            computerScore++;
        } else {
            roundWinner = 'player';
            playerScore++;
        }
    }
    console.log(roundWinner);
    console.log(playerScore);
    console.log(computerScore);
}

function playRound() {
    let playerSelection = getUserChoice();
    let computerSelection = getComputerChoice();
    console.log('You picked: ' + playerSelection);
    console.log('The computer picked: ' + computerSelection);
    console.log(determineWinner(playerSelection, computerSelection));
}

playRound();