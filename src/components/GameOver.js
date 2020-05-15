import React, { useContext } from 'react';
import GameContext from '../state/Context';
import styled from 'styled-components';
import { desktopBreakpoint } from './styles/theme';
import Button from './Button';

const GameOverContainer = styled.div`
  position: absolute;
  bottom: -240px;
  left: 20%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${desktopBreakpoint}) {
    bottom: 50%;
    margin-bottom: -40px;
    left: 26%;
  }
`;

const GameOverText = styled.p`
  font-size: 3.75rem;
  text-align: center;
  text-transform: uppercase;
  color: white;
  margin-bottom: 20px;
`;

const GameOver = () => {
  const [state, dispatch] = useContext(GameContext);
  return (
    <GameOverContainer>
      {state.winner === "Computer" && <GameOverText>You lose</GameOverText>}
      {state.winner === "User" && <GameOverText>You win</GameOverText>}
      {state.winner === null && <GameOverText>It's a tie!</GameOverText>}
      <Button onClick={() => dispatch({
        type: 'RESET_STAGE'
      })}>play again</Button>
    </GameOverContainer>
  );
};

export default GameOver;