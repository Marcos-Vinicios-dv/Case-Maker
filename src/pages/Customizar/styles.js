import styled from 'styled-components';

export const Container = styled.div`
  width: 90vw;
  height: 90vh;

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 0.5fr 3fr 0.5fr;
  grid-template-areas: '. mCustom' 'pc menuContent' '. menuContent';
`;

export const CustomizeMenu = styled.div`
  grid-area: mCustom;
  align-self: center;
  justify-self: center;
`;

export const MenuContent = styled.div`
  grid-area: menuContent;
  align-self: start;

  display: grid;
  grid-template-rows: 10fr 2fr;

  width: 335px;
  height: 90%;
  margin: 5px auto;

  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;

  > div {
    justify-self: center;
    padding-top: 15px;
  }

  button {
    align-self: center;
    justify-self: center;
    width: 272px;
    height: 38px;

    border-radius: 4px;
    border: none;
    background-color: rgba(0, 209, 114, 0.71);

    color: #ffff;
    font-weight: bold;
  }
`;

export const PC = styled.div`
  grid-area: pc;
  align-self: center;
  justify-self: center;
  width: 80%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
