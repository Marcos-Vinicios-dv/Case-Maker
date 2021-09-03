import styled from 'styled-components';

interface FormProps {
  loading?: number;
}

export const Form = styled.form<FormProps>`
  padding-bottom: 2rem;

  max-width: 272px;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    color: var(--gray-50);

    margin-bottom: 2.15rem;
  }

  button {
    color: var(--gray-50);
    font-size: 1.15rem;
    font-weight: 500;

    padding: 0.4rem 0;
    margin-top: 2.15rem;

    background-color: var(--green);
    border: none;
    border-radius: 4px;

    transition: 0.2s ease;

    filter: ${({ loading }) => loading && 'brightness(0.8)'};

    &:hover {
      filter: brightness(0.8);
    }
  }

  span + span {
    margin-top: 1.75rem;
  }

  > span:last-child {
    color: #3c4856;
    font-weight: 400;

    margin-top: 2rem;

    transition: 0.2s ease;
    &:hover {
      filter: brightness(1.2);
      cursor: pointer;
    }

    a {
      color: #3c4856;
    }
  }

  animation: fadeInBack 1s cubic-bezier(0.075, 0.82, 0.165, 1) both;
  @keyframes fadeInBack {
    from {
      transform: translateX(80px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    margin: 0 auto;

    > span:last-child {
      text-align: center;
    }
  }
`;
