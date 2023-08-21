let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
let roundMessage = '';
const buttons = document.querySelectorAll('button');
const scoreInfo = document.getElementById('score-info');
const scoreMessage = document.getElementById('score-message');
const playerSign = document.getElementById('player-sign');
const computerSign = document.getElementById('computer-sign');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    updateSign(playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
        roundWinner = 'It\'s a tie!';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            roundWinner = 'You won this round!';
            if (playerScore === 5) {
                roundWinner = 'You won the game! Reload the page to play again.';
                disableButtons();
            }
        }
    else {
        computerScore++;
        roundWinner = 'The computer won this round.';
        if (computerScore === 5) {
            roundWinner = 'The computer won the game. Reload the page to play again.';
            disableButtons();
        }
    }
    scoreInfo.textContent = `${roundWinner}`;
    scoreMessage.textContent = `${roundMessage}`;
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function updateSign(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock': 
            playerSign.textContent = '✊'
            break
        case 'paper':
            playerSign.textContent = '✋'
            break
        case 'scissors':
            playerSign.textContent = '✌️';
            break
    }
    switch (computerSelection) {
        case 'rock': 
            computerSign.textContent = '✊'
            break
        case 'paper':
            computerSign.textContent = '✋'
            break
        case 'scissors':
            computerSign.textContent = '✌️';
            break
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.id);
    })
})
