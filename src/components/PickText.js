import styled, { css } from 'styled-components';
import { desktopBreakpoint } from './styles/theme';

const PickText = styled.p`
font-size: 1rem;
text-transform: uppercase;
position: absolute;
color: white;
bottom: -40px;

${props => props.left && css`
  left: 50%;
  margin-left: -37.5px;
`}

${props => props.right && css`
  right: 50%;
  margin-right: -60px;
`}

@media screen and (min-width: ${desktopBreakpoint}) {
  letter-spacing: 2px;
  font-size: 1.5rem;
  top: -86px;
  ${props => props.left && css`
    left: 50%;
    margin-left: -66px;
  `}

  ${props => props.right && css`
    right: 50%;
    margin-right: -114px;
  `}
}
`;

export default PickText;