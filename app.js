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

function playGame(rounds) {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {

    console.log(`> You: ${humanChoice}`);
    console.log(`> Computer: ${computerChoice}`);
  
    if (humanChoice === computerChoice) {
      console.log('Tie!');
      return 'tie';
  
    } else if ((humanChoice === 'Rock' && computerChoice === 'Scissors') 
      || (humanChoice === 'Paper' && computerChoice === 'Rock') 
      || (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
  
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      return 'human';
  
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
      return 'computer';
    }
  }

  for (let round = 0; round < rounds; round++) {

    console.log(`(Round ${round + 1} / ${rounds})`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const roundWinner = playRound(humanSelection, computerSelection);

    if (roundWinner === 'human') {
      humanScore++
    }  else if (roundWinner === 'computer') {
      computerScore++;
    }

    console.log(`Current Score - You: ${humanScore} | Computer: ${computerScore}`);
  }

  // playRound(getHumanChoice(), getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log(`You won the game!`);
  } else if (computerScore > humanScore) {
    console.log('You lost the game!');
  } else {
    console.log('You Tied!');
  }

  console.log(`Final Score - You: ${humanScore} | Computer: ${computerScore}`);
}

// const rockButton = document.querySelector('.rock-button');
// const paperButton = document.querySelector('.paper-button');
// const scissorsButton = document.querySelector('.scissors-button');

// rockButton.addEventListener('click', () => {
//   // playRound('Rock', getComputerChoice());
//   humanChoice = 'Rock';
//   playGame();
//   console.log('Rock button clicked!');
// });

// paperButton.addEventListener('click', () => {
//   playRound('Paper', getComputerChoice());
//   console.log('Paper button clicked!');
// });

// scissorsButton.addEventListener('click', () => {
//   playRound('Scissors', getComputerChoice());
//   console.log('Scissors button clicked!');
// });

playGame(5);