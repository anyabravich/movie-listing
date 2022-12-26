import { createGlobalStyle } from "styled-components";
import { rem } from "polished";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url("./fonts/Poppins-Regular.woff2") format("woff2"),
      url("./fonts/Poppins-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Poppins";
    src: url("./fonts/Poppins-SemiBold.woff2") format("woff2"),
      url("./fonts/Poppins-SemiBold.woff") format("woff");
    font-weight: 600;
    font-style: normal;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    background: #121829;
  }
`;

export default GlobalStyle;
