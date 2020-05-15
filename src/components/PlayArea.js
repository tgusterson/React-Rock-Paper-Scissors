import React, { useContext } from 'react';
import GameContext from '../state/Context';
import GamePhase1View from './GamePhase1View';
import GamePhase2View from './GamePhase2View';
import GamePhase3View from './GamePhase3View';
import GamePhase4View from './GamePhase4View';

const PlayArea = () => {
  const [{ gameStage }] = useContext(GameContext);

  return (
    <div>
      {gameStage === 1 && <GamePhase1View />}
      {gameStage === 2 && <GamePhase2View />}
      {gameStage === 3 && <GamePhase3View />}
      {gameStage === 4 && <GamePhase4View />}
    </div>
  );
}

export default PlayArea;