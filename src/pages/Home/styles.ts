import styled from 'styled-components';

export const Container = styled.main`
  width: 90%;
  max-width: 1370px;

  margin: 0 auto;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    margin-bottom: 6rem;
  }
`;

export const LandingPage = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);

  display: flex;
  align-items: center;

  > svg {
    width: 28px;
    height: 28px;
    color: #f2f2f2;
    position: absolute;
    bottom: 0;
    right: 49%;

    animation: bouncing 1s ease-in alternate infinite;
  }

  @keyframes bouncing {
    from {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0px);
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;

    > svg {
      right: 46.5%;
    }
  }
`;

export const InformationSection = styled.section`
  width: 50%;
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
    font-size: 1.15rem;
    width: 470px;
    margin: 1rem 0 1.6rem 0;
  }

  button {
    color: var(--gray-50);
    font-size: 1.15rem;
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
    width: 100%;
    margin-top: 2rem;
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
    p {
      width: 100%;
      margin: 0.8rem 0 1.2rem 0;
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 2rem;
      line-height: 2.15rem;
    }
  }
`;
