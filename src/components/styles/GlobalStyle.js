import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { bodyBgFrom, bodyBgTo } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  };
  html {
    min-height: 100vh;
  }
  body {
    background: radial-gradient(${bodyBgFrom}, ${bodyBgTo});
    background-size: cover;
    background-repeat: no-repeat;
    font-family: 'Barlow Semi Condensed', sans-serif;
  };
`
export default GlobalStyle;