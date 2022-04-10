import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300&family=Noto+Sans+KR:wght@300;400&display=swap');
 *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
    font-weight: 400;
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
    /* overflow: scroll; */
  }
  
  button{
    cursor: pointer;
    border: none;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 500;
  }

`;
export default GlobalStyle;
