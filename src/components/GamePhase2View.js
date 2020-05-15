import React, { useContext, useEffect } from 'react';
import GameContext from '../state/Context';
import GamePhase2ViewContainer from './GamePhaseContainer';
import SelectorContainer from './SelectorContainer';
import Selector from './Selector';
import PickText from './PickText';
import { chooseUserStyleProps, chooseUserIcon } from './styles/stylePropHelpers';

const GamePhase2View = () => {
  const [state, dispatch] = useContext(GameContext);

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'CHOOSE_COMPUTER'
      })
    }, 2000);
  });

  return (
    <>
      <GamePhase2ViewContainer>
        <SelectorContainer selected styleProps={chooseUserStyleProps(state)}>
          <Selector selected icon={chooseUserIcon(state)} />
          <PickText left>you picked</PickText>
        </SelectorContainer>
        <SelectorContainer selected styleProps={{
          position: 'right',
          fromColor: 'none',
          toColor: 'none',
          shadow: 'none',
        }}>
          <Selector selected />
          <PickText right>the house picked</PickText>
        </SelectorContainer>
      </GamePhase2ViewContainer>
    </>
  );
};

export default GamePhase2View;