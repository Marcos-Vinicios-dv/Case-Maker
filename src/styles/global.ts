import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  :root {
    --white: #ffffff;
    --green: #00D172;
    --yellow: #FFFF8B;

    --gray-50: #F6F6F6;
    --gray-100: #f2f2f2; 
    --gray-200: #d1d1d1;
    --gray-300: #929292;

    --gunmetal-500: #2E3A48;
    --gunmetal-600: #232E3C;
    --gunmetal-700: #202A36;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background-color: #202A36;
    color: var(--gray-200);
    overflow-y: auto;

    ::-webkit-scrollbar-track
    {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.0);
      border-radius: 10px;
      background-color: none;
    }

    ::-webkit-scrollbar
    {
      width: 8px;
      background-color: #202A36;
    }

    ::-webkit-scrollbar-thumb
    {
      border-radius: 30px;
      box-shadow: inset 0 0 6px #202A36;
      background-color: #929292;
    }   
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
