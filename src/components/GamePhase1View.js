import React, { useContext } from 'react';
import styled from 'styled-components';
import GameContext from '../state/Context';
import { desktopBreakpoint, paperBgFrom, paperBgTo, rockBgFrom, rockBgTo, scissorsBgFrom, scissorsBgTo, paperShadow, rockShadow, scissorsShadow } from './styles/theme';
import backgroundTriangle from './styles/assets/bg-triangle.svg';
import rockSVG from './styles/assets/icon-rock.svg';
import paperSVG from './styles/assets/icon-paper.svg';
import scissorsSVG from './styles/assets/icon-scissors.svg';
import SelectorContainer from './SelectorContainer';
import Selector from './Selector';

const GamePhase1ViewContainer = styled.div`
  margin: 130px auto;
  height: 285px;
  width: 375px;
  position: relative;

  background: url(${backgroundTriangle}) no-repeat center;
  background-size: 50%;

  @media screen and (min-width: ${desktopBreakpoint}) {
    background-size: 270px;
    height: 435px;
    width: 480px;
  }
`;

const GamePhase1View = () => {
  const [, dispatch] = useContext(GameContext);

  const onPaperSelect = () => {
    dispatch({
      type: 'CHOOSE_PAPER'
    })
  };
  const onScissorsSelect = () => {
    dispatch({
      type: 'CHOOSE_SCISSORS',
    })
  };
  const onRockSelect = () => {
    dispatch({
      type: 'CHOOSE_ROCK'
    })
  };

  return (
    <GamePhase1ViewContainer>
      <SelectorContainer
        onClick={onPaperSelect}
        styleProps={{
          clickable: true,
          position: 'left',
          fromColor: paperBgFrom,
          toColor: paperBgTo,
          shadow: paperShadow,
        }}>
        <Selector icon={paperSVG} />
      </SelectorContainer>
      <SelectorContainer
        onClick={onScissorsSelect}
        styleProps={{
          clickable: true,
          position: 'right',
          fromColor: scissorsBgFrom,
          toColor: scissorsBgTo,
          shadow: scissorsShadow,
        }}>
        <Selector icon={scissorsSVG} />
      </SelectorContainer>
      <SelectorContainer
        onClick={onRockSelect}
        styleProps={{
          clickable: true,
          position: 'bottom',
          fromColor: rockBgFrom,
          toColor: rockBgTo,
          shadow: rockShadow,
        }}>
        <Selector icon={rockSVG} />
      </SelectorContainer>
    </GamePhase1ViewContainer>
  );
};

export default GamePhase1View;