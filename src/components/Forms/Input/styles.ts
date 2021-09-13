import styled from 'styled-components';

export const InputContainer = styled.span`
  background-color: var(--gunmetal-600);

  position: relative;

  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid var(--gunmetal-600);

  transition: 0.2s ease;

  &:focus-within {
    border-color: var(--green);
  }

  input {
    width: 100%;
    color: var(--gray-200);
    background: none;
    border: none;

    &::placeholder {
      color: #3c4856;
    }

    &:focus {
      outline: none;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: none;
      -webkit-text-fill-color: var(--gray-200);
      box-shadow: 0 0 0px 1000px var(--gunmetal-600) inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  span {
    display: block;
    color: var(--green);
    position: absolute;
    bottom: -1.8rem;
    left: 0;
  }
`;
