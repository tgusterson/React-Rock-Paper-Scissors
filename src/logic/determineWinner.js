export const getComputerChoice = () => {
  const rock = 0;
  const paper = 1;
  const scissors = 2;
  const computerChoice = Math.floor(Math.random() * Math.floor(3));
  if (computerChoice === rock) return 'rock'
  if (computerChoice === paper) return 'paper'
  if (computerChoice === scissors) return 'scissors'
}

export const determineWinner = (userChoice, computerChoice) => {
  const response = {
    message: '',
    winner: null,
    userChoice,
    computerChoice
  };

  if (userChoice === 'rock' && computerChoice === 'paper') {
    response.message = 'You lose. Paper beats rock.';
    response.winner = 'Computer';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    response.message = 'You win. Paper beats rock.';
    response.winner = 'User';
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    response.message = 'You lose. Rock beats scissors.';
    response.winner = 'Computer';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    response.message = 'You win. Rock beats scissors.';
    response.winner = 'User';
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    response.message = 'You lose. Scissors beats paper.';
    response.winner = 'Computer';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    response.message = 'You Win. Scissors beats paper.';
    response.winner = 'User';
  } else {
    response.message = 'It\'s a tie!';
  }
  return response;
}