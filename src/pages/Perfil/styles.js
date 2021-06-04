import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 90vw;
  height: 90vh;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: fadeInBack 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;

  @keyframes moverCardLeft {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-400px);
    }
  }

  @keyframes moverCardRight {
    from {
      transform: translateX(-400px);
    }
    to {
      transform: translateX(0px);
    }
  }

  @keyframes rotateRight {
    from {
      transform: rotateY(0deg) translateX(30px);
    }
    to {
      transform: rotateY(-360deg) translateX(0px);
    }
  }

  @keyframes rotateLeft {
    from {
      transform: rotateY(0deg) translateX(0px);
    }
    to {
      transform: rotateY(360deg) translateX(30px);
    }
  }
  @keyframes pulse {
    to {
      box-shadow: 0 0 0 10px rgba(232, 76, 61, 0);
    }
  }

  @keyframes fadeInBack {
    from {
      transform: translateZ(80px);
      opacity: 0;
    }
    to {
      transform: translateZ(0);
      opacity: 1;
    }
  }
`;

export const ToggleSection = styled.div`
  background: #4e555c;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);

  width: 1000px;
  height: 500px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;

    animation: paused;

    strong {
      width: 300px;
      color: #d1d1d1;
      font-size: 1.3rem;
      text-align: center;
      margin-bottom: 30px;

      span {
        color: #00d127;
      }
    }

    button {
      background: none;
      border: 1px solid #d1d1d1;
      color: #d1d1d1;
      font-weight: bold;
      font-size: 1.1rem;

      width: 150px;
      height: 50px;

      box-shadow: 0 0 0 0 rgba(225, 225, 225, 0.7);
      animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);

      transition: 0.5s;

      &:hover {
        animation: paused;
      }
    }
  }

  img {
    position: absolute;
    left: 260px;

    ${props =>
      props.cadastrar &&
      css`
        animation: rotateLeft 1.5s cubic-bezier(0.86, 0, 0.07, 1) forwards;
      `}
    ${props =>
      props.login &&
      css`
        animation: rotateRight 1.5s cubic-bezier(0.86, 0, 0.07, 1) forwards;
      `}
  }
`;

export const FormSection = styled.section`
  position: relative;
  right: -200px;
  z-index: 5;
  width: 450px;
  height: 600px;
  color: #d1d1d1;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  background: #1e2832;

  ${props =>
    props.cadastrar &&
    css`
      animation: moverCardLeft 1.5s cubic-bezier(0.86, 0, 0.07, 1) forwards;
    `}
  ${props =>
    props.login &&
    css`
      animation: moverCardRight 1.5s cubic-bezier(0.86, 0, 0.07, 1) forwards;
    `}
`;
