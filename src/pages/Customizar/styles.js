import styled from 'styled-components';

export const Container = styled.div`
  width: 90vw;
  height: 90vh;

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 0.5fr 3fr 0.5fr;
  grid-template-areas: ". mCustom" "pc menuContent" ". menuContent";
`;

export const CustomizeMenu = styled.div `
grid-area: mCustom;
align-self: center;
justify-self: center;
width: 335px;

background-color: rgba(255, 255, 255, .3);
border-radius: 4px;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;    

    li {
      padding: 0 14px; 
      & + li {
        border-left: 1px solid #00D172;
      }

      img {
        height: 35px;
        width: auto;
      }
    }
  }
`;

export const MenuContent = styled.div `
grid-area: menuContent;
align-self: start;
justify-self: center;

width: 335px;
height: 90%;
margin: 5px auto;

background-color: rgba(255, 255, 255, .3);
border-radius: 4px;

  div {
    width: 100%;
    height: 100%;
    padding: 15px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);

    button {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row: 5/5;
      justify-self: center;
      align-self: end;

      width: 272px;
      height: 38px;

      border-radius: 4px;
      border: none;
      background-color: rgba(0, 209, 114, 0.71);

      color: #FFFF;
      font-weight: bold;
    }
  }
`;

export const PC = styled.div `
grid-area: pc;
`;