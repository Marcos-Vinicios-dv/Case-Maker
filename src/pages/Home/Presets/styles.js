import styled from 'styled-components';
import BackCard from '../../../assets/images/BackCard.svg'

export const Container = styled.div`
width: 90vw;
height: 100vh;

display: grid;
grid-template-columns: 1fr 3fr;
`;

export const ListaDeProdutos = styled.ul`
grid-column-start: 2;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
place-content: center;
list-style: none;

  li {
    width: 250px;
    height: 350px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #1C242D url(${BackCard}) no-repeat center top;
    background-size: 100%;
    border-radius: 7px;
    padding: 20px;
    color: #fff;

    img {
      align-self: center;
      max-width: 250px;
    }

    > div {
      margin: 10px 0 10px;

      span {
        margin-right: 5px;
      }

      input:last-child {
        margin-left: 5px;
      }
    }

    > strong {
    font-size: 1rem;
    line-height: 20px;
    color: #0B985C;
    margin-top: 40px;
    }

    > span {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 5px 0 20px;
    }  
  }
`;

export const ButtonCarrinho = styled.button`
  background: none;
  border: none;

  width: 36px;
  margin-top: auto;
  margin-left: auto;
`;
