import styled from 'styled-components';

export const Form = styled.form`
  width: 84%;
  padding: 1rem;

  background-color: var(--gunmetal-600);
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  h1 {
    color: var(--gray-50);
    font-size: 1.75rem;
  }

  > div {
    align-self: center;
    width: 70%;

    padding: 2rem 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 40px;

    span {
      background-color: var(--gunmetal-700);

      input {
        &::placeholder {
          color: #3c4856;
        }

        &:focus {
          outline: none;
        }

        &:-webkit-autofill {
          border: none;
          box-shadow: 0 0 0 30px var(--gunmetal-700) inset;
          -webkit-text-fill-color: var(--gray-200) !important;
        }
      }
    }
  }

  button {
    align-self: flex-end;

    color: #3c4856;
    font-size: 1.15rem;
    font-weight: 500;

    background-color: transparent;

    border: none;
    border-radius: 4px;
    padding: 0.5rem 1.8rem;

    transition: 0.2s ease;

    &:hover {
      color: var(--gray-50);
      background-color: var(--green);
    }

    &:disabled {
      cursor: default;
      &:hover {
        color: #3c4856;
        background-color: inherit;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;

    > div {
      width: 90%;
    }
  }
`;
