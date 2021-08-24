import styled from 'styled-components';

export const Container = styled.main`
  width: 90%;
  max-width: 1370px;

  margin: 0 auto;
`;

export const LandingPage = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);

  display: flex;
  align-items: center;
`;

export const InformationSection = styled.section`
  margin-top: -15%;

  h1 {
    color: var(--gray-50);
    font-size: 2.69rem;
    line-height: 3.2rem;

    span {
      color: var(--green);
    }
  }

  p {
    font-size: 1.2rem;
    width: 480px;
    margin: 1rem 0 1.6rem 0;
  }

  button {
    color: var(--gray-50);
    font-weight: 500;
    background-color: var(--green);

    border: none;
    border-radius: 4px;

    padding: 0.5rem 1.8rem;

    transition: 0.2s ease;
    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (min-width: 1440px) {
    margin-top: -20%;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 2.15rem;
      line-height: 2.69rem;
    }

    p {
      font-size: 1rem;
      width: 400px;
      margin: 0.8rem 0 1.2rem 0;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.6rem;
      line-height: 2rem;
    }

    p {
      font-size: 0.9rem;
      width: 300px;
      margin: 0.8rem 0 1.2rem 0;
    }

    button {
      font-size: 0.9rem;
      padding: 0.4rem 1.2rem;
    }
  }
`;
