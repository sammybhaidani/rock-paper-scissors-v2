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
  return userChoice;
}
