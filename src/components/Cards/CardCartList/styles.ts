import styled from 'styled-components';

export const Container = styled.li`
  display: flex;

  background-color: var(--gunmetal-600);
  border-radius: 4px;

  padding: 1.5rem 3rem;

  img {
    max-height: 124px;
    margin-right: 2.75rem;
  }
`;

export const InfoBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  > div {
    width: 30%;
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
      padding: 0.8rem;
      background-color: var(--gunmetal-700);

      input {
        width: 50px;
      }
    }

    button {
      /* margin-left: 4rem; */

      background: none;
      border: none;

      svg {
        color: var(--gray-200);

        transition: 0.2s ease;
        &:hover {
          color: var(--green);
        }
      }
    }
  }
`;
