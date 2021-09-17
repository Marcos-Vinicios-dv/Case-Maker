import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--gray-50);
    margin-bottom: 1.6rem;
    font-size: 2.15rem;
  }

  p {
    font-size: 1.15rem;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 2.15rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.75rem;
    }

    > p {
      text-align: center;
    }
  }
`;

export const ContentBox = styled.div`
  width: 100%;

  margin-top: 4rem;

  display: flex;

  > span {
    align-self: center;
    margin: 0 auto;
  }

  aside {
    margin-right: 4rem;
  }

  @media (max-width: 900px) {
    > aside {
      display: none;
    }
  }
`;

export const ListaDeProdutos = styled.ul`
  flex: 1;
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  place-items: center;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  }
`;
