import styled from 'styled-components';
import BackCard from '../../assets/images/BackCard.svg';
import { lighten } from 'polished'

export const Container = styled.div`
width: 90vw;
height: 100vh;

display: grid;
grid-template-columns: 1fr 3fr;
`;

export const ListaDeProdutos = styled.ul`
  justify-self: center;
  align-self: center;

  width: 100%;
  height: 100%;
  grid-column-start: 2;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;

`;

export const Card = styled.li`
  align-self: center;
  width: 65%;
  height: 75%;

  background: #1C242D url(${BackCard}) no-repeat center top;
  background-size: 100%;

  box-shadow: 0px 10px 12px rgba(0,0,0,0.2);

  display: grid;
  grid-template-columns: 2fr;
  grid-template-rows: 2fr 1fr;

  border-radius: 7px;
  padding: 20px;

  &:hover {
    div {
      opacity: 1;
    }

    div {
      > img {
      max-width: 50%;
    }
    }
  }
`;

export const Gabinete = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;

  strong {
    color: #0B985C;
  }

  img {
    max-width: 70%;
    margin-bottom: 20px;
    transition: .5s ease-in-out;
  }
`;

export const Informacoes = styled.div`
    text-align: center;
    color: #f2f2f2;

    opacity: 0;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) .5s;

  div:first-child {
    display: flex;
    justify-content: center;
    margin-bottom: 5px;

    input {
      margin: auto 7px;
    }

    input#one:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #333;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid #333;
    }

    input#one:checked:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        border: 1px solid red;
        background-color: #333;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
    }

    input#two:after {
        width: 13px;
        height: 13px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: white;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
    }

    input#two:checked:after {
        width: 13px;
        height: 13px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: white;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid #333;
    }
    
  }

  > span {
    font-size: 1.2rem;
    font-weight: 400;
  }

  div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 10px;

    button {
      background: none;
      border: none;
    }
  }
`;

export const Filtros = styled.div`
  justify-self: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;


  box-shadow: 0px 10px 12px rgba(0,0,0,0.2);

  width: 80%;
  height: 80%;

  background: #3E4650;
  border-radius: 4px;

  h4 {
    color: #f2f2f2;
    font-size: 1.2rem;

    margin-bottom: 10px;
  }
  
`;

export const Marcas = styled.section`
  width: 70%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    span {
      width: 100%;
      height: 40px;
      cursor: pointer;

      color: #d1d1d1;
      font-size: 1.2rem;
      text-align: center;
      padding-top: 5px;

      & + span {
        margin-top: 5px;

        border-top: 1px solid #48A97D;
      }

      transition: .2s cubic-bezier(0.075, 0.82, 0.165, 1);
      
      &:hover {
        background-color: ${lighten(0.05, '#3E4650')}
      }
    }
  }
`;

export const Preco = styled.section`
  width: 70%;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    display: block;
    margin-bottom: 20px;
    width: 70px;
    height: 40px;
    background: #05C46D;
    border-radius: 20px;
    text-align: center;
    border: 2px solid #05C46D;
    color: #fff;
    font-weight: normal;
    font-size: 0.8rem;
    padding-top: 3px;
    &::after {
        content: "R$";
        display: block;
        font-size: 0.8rem;
        letter-spacing: 0.07em;
        margin-top: -2px;
    } 
  }

  input {
    /* margin-top: 29px; */
    width: 100%;
    -webkit-appearance: none;
    &:focus {
        outline: none;
    }
    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 1px;
        cursor: pointer;
        box-shadow: none;
        background: #ffffff;
        border-radius: 0px;
        border: 0px solid #010101;
    }
    &::-moz-range-track {
        width: 100%;
        height: 1px;
        cursor: pointer;
        box-shadow: none;
        background: #ffffff;
        border-radius: 0px;
        border: 0px solid #010101;
    }
  
    &::-webkit-slider-thumb {
        box-shadow: none;
        border: 0px solid #ffffff;
        box-shadow: 0px 10px 10px rgba(0,0,0,0.25);
        height: 22px;
        width: 22px;
        border-radius: 22px;
        background: #05C46D;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -10px;
    }
  &::-moz-range-thumb{
        box-shadow: none;
        border: 0px solid #ffffff;
        box-shadow: 0px 10px 10px rgba(0,0,0,0.25);
        height: 42px;
        width: 22px;
        border-radius: 22px;
        background: rgba(255,255,255,1);
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -20px;
  }
  &::-moz-focus-outer {
    border: 0;
    }
  }
`;

export const Avaliacao = styled.section`
  width: 70%;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 60%;
      height: 30px;
      margin: 5px auto;

      cursor: pointer;
    }
  }
`;