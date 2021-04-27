import styled from 'styled-components';
import Back from '../../assets/images/Vetor-Back.png';

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

  img {
    grid-area: img;
    align-self: end;
    justify-self: center;

    width: 40px;
    height: 40px;
  } 
`;

export const PC = styled.div `
  grid-area: pc;
  align-self: flex-start;
  justify-self: center;
  margin-top: 60px;
  width: 50%;
  height: 50%;

  img {
    width: 500px;
    height: 500px;
  }
`;

export const CustomButton = styled.button `
  border: none;
  border-radius: 4px;

  background: rgba(0, 209, 114, 0.71);

  color: #d1d1d1;
  font-weight: bold;

  width: 14rem;
  height: 4rem;
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
  }

  div {
    text-align: left;

    p {
      
      font-size: 1.3em;
      
      & + p {
        margin-top: 1.5em;
      }
    }
  }
`;
