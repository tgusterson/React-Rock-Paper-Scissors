import React, { useReducer } from 'react';
import GameContext from '../state/Context';
import Scoreboard from './Scoreboard';
import PlayArea from './PlayArea';
import RulesSection from './RulesSection';
import GlobalStyle from './styles/GlobalStyle';
import { Reducer } from '../state/Reducer';

const initialState = {
  score: 0,
  gameStage: 1,
  winner: null,
  userPick: null,
  computerPick: null
};

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <div className="App">
      <GameContext.Provider value={[state, dispatch]}>
        <GlobalStyle />
        <Scoreboard />
        <PlayArea />
        <RulesSection />
      </GameContext.Provider>
    </div>
  );
}

export default App;
