import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 1370px;
  min-height: 100vh;

  margin: 0 auto;

  h1 {
    margin-top: 2.15rem;
    color: var(--gray-50);
  }

  > div {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;

    padding-top: 2.15rem;

    button {
      color: var(--gray-50);
      font-size: 1.15rem;
      font-weight: 600;

      background-color: var(--green);
      border: none;
      border-radius: 4px;

      padding: 0.5rem 1.8rem;
      margin-left: 2.15rem;
    }

    strong {
      margin-left: 0.4rem;

      color: var(--gray-50);
      font-weight: 500;
      font-size: 1.15rem;

      span {
        font-size: 1.5rem;
      }
    }

    > span {
      color: var(--gray-300);
      font-weight: 500;
      font-size: 0.8rem;
    }
  }
`;

export const CartList = styled.ul`
  list-style: none;

  margin: 1rem 0;
`;
