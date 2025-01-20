import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --fuenteroboto: "Roboto", serif;
  --fuentesource: "Source Sans 3", serif;
}


*, *::before, *::after {
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden; 
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }

  
`;

export default GlobalStyles;
