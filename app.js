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

function getHumanChoice() {

  const userChoice = prompt('Enter your choice: Rock, Paper or Scissors');
  const userChoiceFormatted = userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase();
  
  return userChoiceFormatted;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log('Tie!');

  } else if ((humanChoice === 'Rock' && computerChoice === 'Scissors') 
    || (humanChoice === 'Paper' && computerChoice === 'Rock') 
    || (humanChoice === 'Scissors' && computerChoice === 'Paper')) {

    humanScore++;
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);

  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);