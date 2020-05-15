import React, { useContext } from 'react';
import GameContext from '../state/Context';
import GamePhase4ViewContainer from './GamePhaseContainer';
import SelectorContainer from './SelectorContainer';
import Selector from './Selector';
import PickText from './PickText';
import GameOver from './GameOver';
import { chooseUserStyleProps, chooseUserIcon, chooseComputerStyleProps, chooseComputerIcon } from './styles/stylePropHelpers';

const GamePhase4View = () => {
  const [state] = useContext(GameContext);

  return (
    <>
      <GamePhase4ViewContainer>
        <SelectorContainer gameOver selected styleProps={chooseUserStyleProps(state)}>
          <Selector gameOver selected icon={chooseUserIcon(state)} />
          <PickText left>you picked</PickText>
        </SelectorContainer>
        <SelectorContainer gameOver selected styleProps={chooseComputerStyleProps(state)}>
          <Selector gameOver selected icon={chooseComputerIcon(state)} />
          <PickText right>the house picked</PickText>
        </SelectorContainer>
        <GameOver />
      </GamePhase4ViewContainer>
    </>
  );
};

export default GamePhase4View;