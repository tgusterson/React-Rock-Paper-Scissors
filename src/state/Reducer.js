import { getComputerChoice, determineWinner } from '../logic/determineWinner';

export const Reducer = (state, action) => {
  const computerChoice = getComputerChoice();
  switch (action.type) {
    case 'CHOOSE_PAPER':
      return { ...state, userPick: 'paper', gameStage: 2 }
    case 'CHOOSE_SCISSORS':
      return { ...state, userPick: 'scissors', gameStage: 2 }
    case 'CHOOSE_ROCK':
      return { ...state, userPick: 'rock', gameStage: 2 }
    case 'CHOOSE_COMPUTER':
      return { ...state, computerPick: computerChoice, gameStage: 3 }
    case 'DETERMINE_WINNER':
      const result = determineWinner(state.userPick, state.computerPick);
      return {
        ...state,
        gameStage: 4,
        winner: result.winner,
        score:
          (result.winner === 'User') ?
            state.score + 1 :
            (result.winner === 'Computer') ?
              state.score - 1 : state.score
      }
    case 'RESET_STAGE':
      return {
        score: state.score,
        gameStage: 1,
        winner: null,
        userPick: null,
        computerPick: null
      }
    default:
      return
  }
};