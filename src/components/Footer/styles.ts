import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background-color: #1e2832;
  padding: 2.15rem 0;

  z-index: 2;

  display: flex;
  justify-content: space-evenly;

  img {
    width: 100px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;

    text-align: center;

    section {
      margin-top: 2.15rem;
    }
  }
`;
