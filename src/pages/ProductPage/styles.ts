import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);

  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    margin-top: 20%;
  }
`;

export const InfoContainer = styled.section`
  width: 100%;
  padding: 3rem 5%;

  background-color: var(--gunmetal-600);

  display: flex;
  justify-content: center;
  align-items: center;

  > div:first-child {
    display: flex;
    justify-content: flex-end;

    padding: 0 2rem 0 0;
  }

  > div {
    width: 50%;
    padding-left: 2rem;

    > img {
      max-width: 70%;
    }

    h1 {
      color: var(--gray-50);
      font-size: 2.15rem;

      margin-bottom: 0.5rem;
    }

    > span:nth-child(3) {
      display: flex;
      align-items: center;
      color: var(--gunmetal-400);

      margin-top: 1rem;
      position: relative;

      > div:first-child {
        position: absolute;
        width: 100%;
        height: 120%;
        background-color: transparent;
        z-index: 5;
      }
    }

    .react-stars {
      margin: -4px 0.6rem 0 0;

      span + span {
        margin-left: 0.3rem;
      }
    }
  }

  button {
    color: var(--gray-50);
    font-weight: 500;
    font-size: 1.25rem;

    padding: 0.5rem 1.75rem;

    background-color: var(--green);
    border: none;
    border-radius: 4px;

    display: flex;
    align-items: center;

    transition: 0.2s ease;
    &:hover {
      filter: brightness(0.8);
    }

    svg {
      width: 24px;
      height: 24px;

      margin-right: 8px;
    }
  }

  @media (max-width: 900px) {
    > div {
      img {
        width: 90%;
        max-height: 410px;
      }

      h1 {
        font-size: 1.75rem;
        margin-bottom: 0.2rem;
      }
    }

    button {
      font-size: 1.15rem;

      padding: 0.5rem 1.5rem;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    > div:first-child {
      justify-content: center;
      padding: 0;
    }

    > div {
      width: 100%;
      padding: 0;

      img {
        max-width: 250px;
        max-height: 300px;

        margin-bottom: 2.75rem;
      }

      button {
        width: 100%;

        justify-content: center;
      }
    }
  }
`;

export const Price = styled.span`
  display: block;
  margin: 1.15rem 0 1.75rem;

  color: var(--gray-50);
  font-weight: 600;
  font-size: 1.5rem;

  span {
    font-size: 2.15rem;
  }

  @media (max-width: 900px) {
    margin: 1rem 0 1.5rem;

    font-size: 1.25rem;

    span {
      font-size: 1.75rem;
    }
  }
`;

export const DataSheet = styled.section`
  margin: 2rem auto 8rem;
  width: 90%;
  max-width: 1370px;

  h1 {
    color: var(--gray-50);
    font-weight: 600;
    font-size: 1.75rem;
  }

  div {
    margin: 0 auto;
    width: 70%;
    grid-template-columns: 1fr 1fr;
    display: grid;

    ul {
      margin: 1.75rem 0;
      list-style: none;

      h3 {
        color: var(--gray-50);
        font-weight: 500;
      }
    }

    ul:last-child,
    ul:nth-child(2) {
      margin-left: 25%;
    }
  }

  > span {
    display: block;
    color: var(--gray-50);
    font-weight: 600;

    text-align: center;
    margin: 4rem 0 2rem;
  }

  @media (max-width: 900px) {
    div {
      width: 70%;
    }
  }

  @media (max-width: 600px) {
    div {
      width: 100%;
      grid-template-columns: 1fr;
      ul:last-child,
      ul:nth-child(2) {
        margin-left: 0;
      }
    }
  }
`;
