import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
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

    overflow-y: scroll;

::-webkit-scrollbar-track
{
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: none;
}

::-webkit-scrollbar
{
	width: 10px;
	background-color: #1E2832;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: rgba(196, 196, 196, 0.3);
}   
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