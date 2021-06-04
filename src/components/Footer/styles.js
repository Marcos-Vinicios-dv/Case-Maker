import styled from 'styled-components';

export const Container = styled.div`
  width: 111%;
  height: 200px;

  padding-top: 30px;

  background-color: #1e2832;

  position: relative;
  left: -100px;
  bottom: -100px;

  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;

  h3 {
    color: #00d172;
  }

  section {
    p {
      color: rgba(255, 255, 255, 0.5);
    }

    img {
      margin-top: 20px;
    }
  }
`;
