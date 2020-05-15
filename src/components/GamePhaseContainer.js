import styled from 'styled-components';
import { desktopBreakpoint } from './styles/theme';

const GamePhase2ViewContainer = styled.div`
  margin: 130px auto 285px;
  height: 130px;
  width: 375px;
  position: relative;

  @media screen and (min-width: ${desktopBreakpoint}) {
    height: 435px;
    width: 480px;
    margin: 130px auto 130px;
  }
`;

export default GamePhase2ViewContainer;