import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 1370px;
  min-height: calc(100vh - 4rem);

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

      transition: 0.2s ease;
      &:hover {
        filter: brightness(0.8);
      }
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

  @media (max-width: 900px) {
    min-height: calc(100vh - 8rem);
    h1 {
      font-size: 2.15rem;
      margin-top: 1.15rem;
    }

    > div {
      padding-top: 1.75rem;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 425px) {
    position: relative;

    > div {
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding-top: 0rem;

      position: absolute;
      bottom: 2rem;

      button {
        margin: 0.8rem 0 0;
        width: 100%;
      }
    }
  }
`;

export const CartList = styled.ul`
  list-style: none;

  margin: 1rem 0;
`;
