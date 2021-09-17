import styled from 'styled-components';

export const Container = styled.li`
  width: 256px;
  padding: 1.5rem 1rem;

  position: relative;

  display: flex;
  flex-direction: column;

  background-color: var(--gunmetal-600);
  border-radius: 4px;

  img {
    align-self: center;
    max-height: 150px;
  }

  h2 {
    margin: 0.8rem 0 0rem;
    color: var(--gray-50);
    font-weight: 600;
    font-size: 1rem;
  }

  .sub-info {
    display: flex;
    font-size: 0.8rem;
    color: var(--gray-300);

    span {
      margin-left: 0.5rem;
    }

    svg {
      width: 14px;
      height: 14px;
      color: var(--yellow);
      margin-right: 5px;
    }
  }

  .info {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.9rem;

    color: var(--gray-50);
    font-weight: 600;

    span {
      font-size: 1.2rem;
    }
  }

  button {
    width: 36px;
    height: 36px;
    background-color: var(--gunmetal-700);

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 1rem;
    bottom: 1.5rem;

    border: none;
    border-radius: 50%;
    transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    svg {
      width: 20px;
      height: 20px;

      color: var(--green);
      transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    &:hover {
      background-color: var(--green);

      svg {
        color: var(--gray-50);
      }
    }
  }

  @media (max-width: 600px) {
    width: 230px;

    img {
      align-self: center;
      max-height: 140px;
    }

    .info {
      margin-top: 0.5rem;
    }

    button {
      width: 32px;
      height: 32px;
      background-color: var(--gunmetal-700);

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`;
