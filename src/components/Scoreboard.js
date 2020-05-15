import React, { useContext } from 'react';
import GameContext from '../state/Context';
import styled from 'styled-components';
import LogoSVG from './styles/assets/logo.svg';
import { headerOutline, scoreText, darkText, fontWeightBold, desktopBreakpoint } from './styles/theme';

const ScoreboardContent = styled.div`
  margin: 30px auto 0;
  max-width: 316px;
  display: flex;
  justify-content: space-between;
  border: 3px solid ${headerOutline};
  border-radius: 15px;
  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    width: 80px;
    margin: 22px;
  }
  @media screen and (min-width: ${desktopBreakpoint}) {
    max-width: 704px;
    margin: 30px auto 0px;
    img {
      width: 150px;
    }
  }
`;

const ScoreCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid black;
  background-color: white;
  border-radius: 7px;
  margin: 12px;
  width: 84px;
  height: 74px;

  @media screen and (min-width: ${desktopBreakpoint}) {
    width: 150px;
    height: 115px;
  }
`;

const ScoreTextHeading = styled.p`
  font-size: .66rem;
  font-weight: ${fontWeightBold};
  color: ${scoreText};

  @media screen and (min-width: ${desktopBreakpoint}) {
    letter-spacing: 2px;
    line-height: 1.4;
    font-size: 1rem;
  }
`
const ScoreText = styled.p`
  color: ${darkText};
  font-weight: ${fontWeightBold};
  font-size: 1.75rem;

  @media screen and (min-width: ${desktopBreakpoint}) {
    font-size: 4rem;
  }
`

const Scoreboard = () => {
  const [state] = useContext(GameContext);
  return (
    <ScoreboardContent>
      <img src={LogoSVG} alt="Rock, Paper, Scissors" />
      <ScoreCard>
        <ScoreTextHeading>Score</ScoreTextHeading>
        <ScoreText>{state.score}</ScoreText>
      </ScoreCard>
    </ScoreboardContent>
  );
}

export default Scoreboard;