import styled, { css } from 'styled-components';
import { desktopBreakpoint } from './styles/theme';

const Selector = styled.div`
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => props.icon ? 'white' : '#16213D'}  url(${props => props.icon}) no-repeat center;
  background-size: 45%;
  box-shadow: ${props => props.icon ? 'inset 0px 6px 1px #C9D0DA' : 'none'};

  @media screen and (min-width: ${desktopBreakpoint}) {
    width: 155px;
    height: 155px;
    ${props => (props.selected || props.gameOver) && css`
      height: 245px;
      width: 245px;
    `}
  }
`;

export default Selector;