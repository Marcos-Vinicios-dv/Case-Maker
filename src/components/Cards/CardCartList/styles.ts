import styled from 'styled-components';

export const Container = styled.li`
  display: flex;

  background-color: var(--gunmetal-600);
  border-radius: 4px;

  padding: 1.5rem 3rem;

  img {
    max-height: 124px;
    max-width: 104px;
    margin-right: 2.75rem;
  }

  & + li {
    margin-top: 1rem;
  }

  @media (max-width: 900px) {
    img {
      max-height: 84px;
      margin-right: 2.15rem;
    }
  }

  @media (max-width: 600px) {
    padding: 1rem 1.5rem;
  }
`;

export const InfoBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  div:first-child {
    width: 30%;
    color: var(--gray-300);

    h2 {
      color: var(--gray-50);
      font-weight: 600;
      font-size: 1rem;
    }

    span {
      text-transform: capitalize;
      font-size: 0.9rem;
    }
  }

  div:last-child {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      display: block;
    }

    span:nth-child(2) {
      /* padding: 0.8rem; */
      background-color: var(--gunmetal-700);
      border-radius: 4px;

      input {
        text-align: center;
        color: var(--gray-200);
        margin-left: 0.9rem;
        width: 30px;

        background: none;
        border: none;
      }

      button {
        padding: 0.5rem 0.8rem;
        border-radius: 4px;

        svg {
          color: var(--green);
          margin-bottom: -3px;
        }
        transition: 0.2s ease;
        &:hover {
          background-color: var(--green);

          svg {
            color: var(--gray-50);
          }
        }
      }
    }

    span:nth-child(3) {
      font-weight: 600;
      color: var(--gray-50);
    }

    button {
      background: none;
      border: none;

      svg {
        color: var(--gray-200);
        margin-bottom: -3px;

        transition: 0.2s ease;
        &:hover {
          color: var(--green);
        }
      }
    }
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 1rem;
    }

    div:first-child {
      width: 40%;
    }

    div:last-child {
      span:first-child {
        display: none;
      }

      span:nth-child(2) {
        order: 1;

        padding: 0.5rem;

        input {
          margin-left: 0;
        }

        button {
          padding: 0 0.5rem;
        }
      }

      button {
        order: 2;
      }
    }
  }

  @media (max-width: 600px) {
    align-items: flex-start;
    position: relative;

    div:first-child {
      width: 100%;
    }

    div:last-child {
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0rem;

      align-items: flex-end;

      > button {
        position: absolute;
        top: 0;
        right: 0;
      }

      span:nth-child(2) {
        padding: 0.4rem;

        input {
          margin-left: 0;
        }

        button {
          padding: 0 0.2rem;
        }
      }
    }
  }
`;
