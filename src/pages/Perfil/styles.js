import styled, { css, keyframes } from 'styled-components';

export const moverCardLeft = keyframes `
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-400px);
  }
`;
export const moverCardRight = keyframes `
  from {
    transform: translateX(-400px);
  }
  to {
    transform: translateX(0px);
  }
`;
export const opacity = keyframes `
0% {
  opacity:0
}
40% {
  opacity:.6
}
100% {
  opacity:1
}
`;
export const rotateRight = keyframes `
from {
  transform: rotateY(0deg) translateX(30px);
  /* transform: translateX(0px); */
}
to {
  transform: rotateY(-360deg) translateX(0px);
  /* transform: translateX(-40px); */
}
`;
export const rotateLeft = keyframes `
from {
  transform: rotateY(0deg)translateX(0px);
  /* transform: translateX(-40px); */
}
to {
  transform: rotateY(360deg) translateX(30px);
  /* transform: translateX(0px); */
}
`;
export const pulse = keyframes `
to {box-shadow: 0 0 0 10px rgba(232, 76, 61, 0);}
`;

export const Container = styled.div`
width: 90vw;
height: 90vh;

display: flex;
align-items: center;
justify-content: center;
`;

export const ToggleSection = styled.div`
  background: #4E555C;
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
    animation: ${pulse} 1.25s infinite cubic-bezier(0.66, 0, 0, 1);

    transition: 0.5s;

      &:hover {
        animation: paused;
      }
    } 
  } 
  
  img {
    position: absolute; 
    left: 260px;

  ${props => props.cadastrar && css`
  animation: ${rotateLeft} 1.5s cubic-bezier(0.860, 0.000, 0.070, 1.000) forwards;
 `}
 ${props => props.login && css`
  animation: ${rotateRight} 1.5s cubic-bezier(0.860, 0.000, 0.070, 1.000) forwards;
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
  background: #1E2832;

 ${props => props.cadastrar && css`
  animation: ${moverCardLeft} 1.5s cubic-bezier(0.860, 0.000, 0.070, 1.000) forwards;
 `}
 ${props => props.login && css`
  animation: ${moverCardRight} 1.5s cubic-bezier(0.860, 0.000, 0.070, 1.000) forwards;
 `}
`;