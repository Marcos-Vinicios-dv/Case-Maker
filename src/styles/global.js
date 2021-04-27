import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.svg';

export default createGlobalStyle `
  @media(max-width: 1080px) {
      html {
          font-size: 93.75%;
      }
  }

  @media(max-width: 720px) {
      html {
          font-size: 87.5%;
      }
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background-image: url(${background});
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;    
  }

  body, input, button {
    font: 300 1rem Montserrat, sans-serif;
  }

  #root {
    max-width: 90%;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;