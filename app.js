function getComputerChoice() {

  const randomNum = Math.random();

  if (randomNum < 1/3) {
    return 'Rock';
  } else if (randomNum < 2/3) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(humanChoice, computerChoice) {
  
  const playerSelection = document.querySelector('.player-selection');
  const computerSelection = document.querySelector('.computer-selection');
  const roundResult = document.querySelector('.round-winner');

  playerSelection.innerHTML = humanChoice;
  computerSelection.innerHTML = computerChoice;
  
  if (humanChoice === computerChoice) {
    roundResult.innerHTML = 'Tie!';
    return 'tie';

  } else if ((humanChoice === 'Rock' && computerChoice === 'Scissors') 
    || (humanChoice === 'Paper' && computerChoice === 'Rock') 
    || (humanChoice === 'Scissors' && computerChoice === 'Paper')) {

    roundResult.innerHTML = `You Win! ${humanChoice} beats ${computerChoice}`;
    return 'human';

  } else {
    roundResult.innerHTML = `You lose! ${computerChoice} beats ${humanChoice}`;
    return 'computer';
  }
}

let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

function displayScore(roundWinner) {

  if (roundWinner === 'human') {
    humanScore++
  }  else if (roundWinner === 'computer') {
    computerScore++;
  }

  const humanScoreUI = document.querySelector('.player-score');
  const computerScoreUI = document.querySelector('.computer-score');

  humanScoreUI.innerHTML = humanScore;
  computerScoreUI.innerHTML = computerScore;
}

const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');

rockButton.addEventListener('click', () => {
  currentRound++;
  const roundWinner = playRound('Rock', getComputerChoice());
  displayScore(roundWinner);
  checkRound();
});

paperButton.addEventListener('click', () => {
  currentRound++;
  const roundWinner = playRound('Paper', getComputerChoice());
  displayScore(roundWinner);
  checkRound();
});

scissorsButton.addEventListener('click', () => {
  currentRound++;
  const roundWinner = playRound('Scissors', getComputerChoice());
  displayScore(roundWinner);
  checkRound();
});

function checkRound() {
  if (currentRound >= 5) {
    calculateWinner();
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

function calculateWinner() {

  const result = document.querySelector('.match-result');

  if (humanScore > computerScore) {
    result.innerHTML = 'You won the game!';
  } else if (computerScore > humanScore) {
    result.innerHTML = 'You lost the game';
  } else {
    result.innerHTML = 'You tied!';
  }
}

const restart = document.querySelector('.restart');
restart.addEventListener('click', () => {
  resetGame();
})

function resetGame() {
  
  currentRound = 0;
  humanScore = 0;
  computerScore = 0;

  document.querySelector('.player-selection').innerHTML = '';
  document.querySelector('.computer-selection').innerHTML = '';
  document.querySelector('.round-winner').innerHTML = '';
  document.querySelector('.player-score').innerHTML = 0;
  document.querySelector('.computer-score').innerHTML = 0;
  document.querySelector('.match-result').innerHTML = '';

  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}
