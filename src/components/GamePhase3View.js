import React, { useContext, useEffect } from 'react';
import GameContext from '../state/Context';
import GamePhase3ViewContainer from './GamePhaseContainer';
import SelectorContainer from './SelectorContainer';
import Selector from './Selector';
import PickText from './PickText';
import { chooseUserStyleProps, chooseUserIcon, chooseComputerStyleProps, chooseComputerIcon } from './styles/stylePropHelpers';

const GamePhase3View = () => {
  const [state, dispatch] = useContext(GameContext);

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'DETERMINE_WINNER'
      })
    }, 2000);
  });

  return (
    <>
      <GamePhase3ViewContainer>
        <SelectorContainer selected styleProps={chooseUserStyleProps(state)}>
          <Selector selected icon={chooseUserIcon(state)} />
          <PickText left>you picked</PickText>
        </SelectorContainer>
        <SelectorContainer selected styleProps={chooseComputerStyleProps(state)}>
          <Selector selected icon={chooseComputerIcon(state)} />
          <PickText right>the house picked</PickText>
        </SelectorContainer>
      </GamePhase3ViewContainer>
    </>
  );
};

export default GamePhase3View;