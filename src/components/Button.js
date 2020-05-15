import styled, { css } from 'styled-components';
import { lightText, darkText, fontWeightMed } from './styles/theme';

const Button = styled.button`
  font-weight: ${fontWeightMed};
  cursor: pointer;
  outline: none;
  border-radius: 10px;
  border: ${props => props.inverted ? '#8690AB' : 'white'} 2px solid;
  text-transform: uppercase;
  background: ${props => props.inverted ? 'none' : 'white'};
  color: ${props => props.inverted ? lightText : darkText};
  padding: 15px 35px;
  ${props => props.inverted && css`
    padding: 11.5px 35px;
  `};
  letter-spacing: 2px;
  margin-bottom: ${props => props.inverted ? '50px' : '0'};
  :hover {
    color: ${props => props.inverted ? lightText : 'hsl(349, 87%, 48%)'};
  }
`
export default Button;