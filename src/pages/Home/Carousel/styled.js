import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;

  > div {
    position: absolute;
    bottom: 0px;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    background: rgba(0, 0, 0, 0.3);

    img {
      position: relative;
      bottom: -10px;
      left: -50px;
    }
  }

  img {
    transform: rotate(90deg);
  }

  img:last-child {
    margin-left: 60px;
  }
`;
