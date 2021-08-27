import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: calc(100vh - 4rem);
  max-width: 1370px;

  margin: 0 auto;

  display: flex;

  section:first-child {
    width: 70%;
  }

  @media (max-width: 900px) {
    height: auto;
    min-height: calc(100vh - 4rem);

    flex-direction: column;

    section:first-child {
      width: 100%;
      margin-top: 2.15rem;
    }
  }
`;

export const ContainerMenu = styled.section`
  width: 30%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding: 2.15rem 0;

  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
  }
`;

export const MenuOptions = styled.div`
  width: 100%;
  max-width: 300px;
  height: 48px;

  background-color: var(--green);
  border-radius: 4px;

  padding: 0 2.15rem;
  margin-bottom: 1.75rem;

  display: flex;
  justify-content: space-between;

  button {
    background: none;
    border: none;

    display: flex;
    align-items: center;

    padding: 0 1rem;

    svg {
      width: 20px;
      height: 20px;

      color: var(--gray-50);
    }

    transition: 0.2s ease;
    &:hover {
      background-color: #00bc67;
    }
  }

  button:last-child {
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const MenuContent = styled.div`
  width: 100%;
  max-width: 300px;
  height: 90%;
  max-height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0.4rem 0 1rem;

  text-align: center;

  background-color: var(--gunmetal-600);
  border-radius: 4px;

  ul {
    margin-top: 1rem;
    width: 80%;
    list-style: none;

    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
    gap: 20px;

    li {
      width: 40px;
      height: 40px;

      background-color: white;
    }
  }

  button {
    border: none;
    border-radius: 30px;
    background-color: var(--gunmetal-700);

    margin-top: auto;

    width: 90%;
    padding: 0.6rem 0;

    color: var(--gray-50);
    font-weight: 600;

    span {
      color: var(--green);
    }

    transition: 0.2s ease;
    &:hover {
      color: var(--green);
      text-decoration: underline;
    }
  }

  @media (max-width: 900px) {
    min-height: 600px;
  }
`;
