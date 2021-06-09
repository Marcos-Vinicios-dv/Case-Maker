import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 90vw;
  height: 90vh;

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 3fr 3fr;
  grid-template-areas: 'pTable total' 'fTable total';
`;

export const ProductTable = styled.table`
  grid-area: pTable;
  width: 100%;
  height: 100px;
  padding: 20px;
  margin-bottom: 15px;

  background-color: #6b727a;
  border-radius: 4px;

  caption {
    color: #d1d1d1;
    font-weight: bold;
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 40px;
  }

  thead th {
    color: rgba(255, 255, 255, 0.33);
    text-align: center;
  }

  button {
    > img {
      margin-right: 5px;
      width: auto;
      height: 30px;
    }
  }

  tbody td:first-child {
    display: flex;
    align-items: flex-start;
  }

  tbody tr:nth-child(even) {
    background: ${darken(0.03, '#6B727A')};
  }

  tbody td {
    width: 30%;
    text-align: center;
    padding: 20px;
  }

  img {
    width: auto;
    height: 100px;
  }

  button {
    background: none;
    border: 0;
  }

  strong {
    color: #fff;
    display: block;
  }

  small {
    color: #05c46d;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      border: 1px solid #c4c4c4;
      border-radius: 1px;
      color: #fff;
      height: 30px;
      width: 30px;
      text-align: center;
      background: none;
      margin: 10px;
    }
  }
`;

export const FreteList = styled.ul`
  grid-area: fTable;
  margin-top: 9px;

  span {
    display: flex;
    align-items: center;

    font-size: 1.5rem;
    font-weight: bold;
    color: #d1d1d1;

    img {
      margin-right: 10px;
    }
  }
`;

export const Total = styled.div`
  grid-area: total;
  justify-self: center;
  color: #ddd;

  > div {
    margin: 30px auto;

    div {
      margin: 5px auto;
    }
  }
  h1 {
    color: #d1d1d1;
    font-size: 1.5rem;
  }

  button {
    border: 0;
    border-radius: 4px;
    background: rgba(0, 209, 114, 0.71);

    color: #d1d1d1;
    font-weight: bold;

    width: 14rem;
    height: 3rem;
  }
`;

export const Barra = styled.div`
  grid-column: 1/1;
  grid-row: 1/1;
  align-self: flex-end;

  width: 100%;
  height: 1px;

  background: #05c46d;
`;
