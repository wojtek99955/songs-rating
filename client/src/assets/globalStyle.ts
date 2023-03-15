import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Sans-Serif;
  }
  body{
      background-color: #f1f1f1;
  }
`;

export default GlobalStyle;
