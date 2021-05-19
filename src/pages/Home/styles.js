import styled, { keyframes } from 'styled-components';
import Back from '../../assets/images/Vetor-Back.png';
import { darken } from 'polished';

export const isBouncing = keyframes`
to {
  transform: translateY(30px);
}
`;
export const slideLetters = keyframes `
0% {
  transform: translateX(30px);
  opacity:0
}
40% {
  opacity:.6
}
100% {
  transform: translateX(0px);
  opacity:1
}
`;
export const fadeInBack = keyframes `
0%{
    transform:translateZ(80px);
    opacity:0
}
100%{
    transform:translateZ(0);
    opacity:1
}
`;
export const fade = keyframes `
0%{
    opacity:0
}
100%{
    opacity:1
}
`;

export const Container = styled.section`
  width: 90vw;
  height: 90vh;

  background-image: url(${Back});
  background-position: top -85px right 0px;
  background-repeat: no-repeat;
  background-size: 90% 110%;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 3fr 0.5fr 0.5fr; 
  grid-template-areas:"mainText pc" ". pc" "img img";

  > img {
    grid-area: img;
    margin: auto 0;
    justify-self: center;

    width: 40px;
    height: 40px;

    animation: ${isBouncing} 1s ease-in alternate infinite;
  } 
`;

export const PC = styled.div `
  grid-area: pc;
  align-self: center;
  justify-self: center;
  transform: rotate(-90deg);
  position: relative;
  top: -60px;

  width: 50%;

  animation: ${fade} .6s cubic-bezier(.39,.575,.565,1.000) 1.3s both;
  

  div .sc-htoDjs {
    transform: translateY(400px);
  }
  //ARRUMAR RESPONSIVIDADE DEPOIS
  
`;


export const CustomButton = styled.button `
  border: 1px solid #05C46D;
  border-radius: 4px;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 30px 80px rgba(0, 0, 0, 0.12);

  animation: ${fadeInBack} .6s cubic-bezier(.39,.575,.565,1.000) 1.3s both;
  
  background: none;
  transition: .2s ease-in-out;
  color: #fff;
  font-weight: bold;
  
  width: 14rem;
  height: 4rem;

  &:hover {
    background: ${darken(0.03,"#05C46D")};
  }
`;

export const MainText = styled.div `
  grid-area: mainText;
  align-self: center;
  color: #d1d1d1;
  text-align: center;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  span {
    font-size: 3em;
    animation: ${slideLetters} .6s cubic-bezier(.39,.575,.565,1.000) .7s both;
  }

  div {
    text-align: left;
    animation: ${fadeInBack} .6s cubic-bezier(.39,.575,.565,1.000) 1s both;
    p {      
      font-size: 1.3em;
      
      & + p {
        margin-top: 1.5em;
      }
    }
  }
`;
