import styled from 'styled-components';

export const Container = styled.aside`
  width: 200px;

  h2 {
    color: var(--gray-50);
    font-weight: 600;
  }

  div + div {
    border-top: 2px solid var(--gunmetal-500);
    padding: 1.5rem 0;
  }

  ul {
    list-style: none;
    margin: 0 0 1.15rem 0;

    li {
      padding: 0.5rem 0;

      transition: 0.2s ease;
      &:hover {
        color: var(--green);
        cursor: pointer;
      }
    }
  }

  > div span {
    display: block;
    padding: 0.5rem 0;
  }
`;

export const RatingContainer = styled.div``;
