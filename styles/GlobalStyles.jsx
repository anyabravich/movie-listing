import { createGlobalStyle } from "styled-components";
import { rem } from "polished";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  #__next {
    background: rgb(18, 24, 41);
  }
  body {
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    background: #121829;
    color: #ffffff;
  }
`;

export default GlobalStyle;
