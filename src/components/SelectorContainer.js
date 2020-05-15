import styled, { css } from 'styled-components';
import { desktopBreakpoint } from './styles/theme'

const SelectorContainer = styled.div`
  position: absolute;
  display: flex;
  height: 130px;
  width: 130px;
  border-radius: 50%;
  background: radial-gradient(${({ styleProps }) => styleProps.fromColor}, ${({ styleProps }) => styleProps.toColor});
  box-shadow: inset 0px -6px 1px ${({ styleProps }) => styleProps.shadow};
  ${({ styleProps }) => styleProps.position === 'left' && css`
    top: 0px;
    left: 30px;
  `}
  ${({ styleProps }) => styleProps.position === 'right' && css`
    top: 0px;
    right: 30px;
  `}
  ${({ styleProps }) => styleProps.position === 'bottom' && css`
    left: 50%;
    bottom: 0px;
    margin-left: -65px;
  `}
  ${({ styleProps }) => styleProps.clickable === true && css`
    cursor: pointer;
  `}

@media screen and (min-width: ${desktopBreakpoint}) {
  width: 200px;
  height: 200px;

  ${({ styleProps }) => styleProps.position === 'left' && css`
    top: 0px;
    left: 0px;
  `}
  ${({ styleProps }) => styleProps.position === 'right' && css`
    top: 0px;
    right: 0px;
  `}
  ${({ styleProps }) => styleProps.position === 'bottom' && css`
    left: 50%;
    bottom: 0px;
    margin-left: -100px;
  `}
  ${props => (props.selected || props.gameOver) && css`
    height: 300px;
    width: 300px;
  `}
  ${props => ((props.styleProps.position === 'left') && (props.selected)) && css`
    top: 35px;
    left: -105px;
  `}
  ${props => ((props.styleProps.position === 'right') && (props.selected)) && css`
    top: 35px;
    right: -105px;
  `}
  ${props => ((props.styleProps.position === 'left') && (props.gameOver)) && css`
    top: 35px;
    left: -240px;
  `}
  ${props => ((props.styleProps.position === 'right') && (props.gameOver)) && css`
    top: 35px;
    right: -240px;
  `}
  }
`;

export default SelectorContainer;