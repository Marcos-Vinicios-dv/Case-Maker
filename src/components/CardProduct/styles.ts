import styled from 'styled-components';

export const Container = styled.li`
  width: 250px;
  padding: 1.5rem 1rem;

  position: relative;

  display: flex;
  flex-direction: column;

  background-color: var(--gunmetal-600);
  border-radius: 5px;

  img {
    align-self: center;
    max-height: 150px;
  }

  h2 {
    margin: 0.8rem 0 0rem;
    color: var(--gray-50);
    font-weight: 500;
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

  .main-info {
    display: block;
    margin-top: 0.8rem;
    font-size: 0.9rem;

    color: var(--gray-50);
    font-weight: 600;

    span {
      font-size: 1.2rem;
    }
  }

  button {
    width: 40px;
    height: 40px;
    background-color: var(--gunmetal-700);

    position: absolute;
    right: 1rem;
    bottom: 1.5rem;

    border: none;
    border-radius: 50%;

    svg {
      width: 28px;
      height: 28px;

      padding-top: 6px;

      color: var(--green);
    }
  }
`;
