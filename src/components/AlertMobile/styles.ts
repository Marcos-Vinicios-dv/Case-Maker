import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 90%;
    max-width: 500px;
    background-color: var(--gunmetal-700);
    border-radius: 4px;

    display: flex;
    flex-direction: column;

    margin-top: -30%;
    padding: 1.2rem 1.2rem 1rem;

    h1 {
      color: var(--green);
      font-size: 1.2rem;
    }

    p {
      text-align: justify;
      margin: 0.5rem 0;
    }

    div {
      align-self: flex-end;
      margin-top: 1.2rem;

      button {
        font-weight: 600;
        background-color: var(--green);
        color: var(--gray-50);

        padding: 0.5rem;
        border: none;
        border-radius: 4px;
      }
    }
  }
`;
