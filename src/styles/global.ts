import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo';
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-size: 12px;
    background: #F9F9F9;
  }

  #root{
    margin: 0 auto;
    max-width: 780px;
    height: 100%;
    background: #fff;
   height:100vh;
    overflow: scroll;
  }
  
  button{
    cursor: pointer;
    border: none;
  }
`;
export default GlobalStyle;
