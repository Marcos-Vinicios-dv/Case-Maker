import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.svg';

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

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
    font: 14px Poppins, sans-serif;
  }

  #root {
    max-width: 90%;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;