let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
const buttons = document.querySelectorAll('button');

function getComputerChoice() {
    const choices = Math.floor(Math.random() * 3);
    switch (choices) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            roundWinner = 'player';
        }
    else {
        computerScore++;
        roundWinner = 'computer';
    }
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(roundWinner);
    console.log(playerScore);
    console.log(computerScore);
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.id);
    })
})
