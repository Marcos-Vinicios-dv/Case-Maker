import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;

  > a + a {
    margin-left: 3rem;
  }
  div {
    margin-left: 6.99rem;

    a {
      position: relative;
    }

    a span {
      display: none;
    }

    a div {
      width: 16px;
      height: 16px;

      font-size: 12px;
      color: var(--gray-50);
      text-align: center;
      border-radius: 50%;

      position: absolute;
      top: -8px;
      right: 0;
      background-color: #de3636;
    }

    a + a {
      margin-left: 1.15rem;
    }
  }

  @media (max-width: 600px) {
    margin-top: 3rem;
    flex-direction: column;
    align-items: flex-end;

    > a {
      order: 2;
    }

    > a + a {
      margin: 0.8rem 0;
    }

    > div {
      width: 100%;
      margin-left: 0;
      order: 1;

      padding-bottom: 1.6rem;
      margin-bottom: 1.6rem;
      border-bottom: 2px solid var(--gunmetal-500);

      a {
        display: flex;
        justify-content: flex-end;

        span {
          display: block;
          margin: 0 1rem 0 0;
          font-weight: 400;
        }
        div {
          top: -5px;
        }

        & + a {
          margin-top: 1rem;
        }
      }
    }
  }
`;

interface StyledLinkProps {
  active: number;
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ active }) => (active ? 'var(--green)' : 'var(--gray-100)')};

  svg {
    width: 24px;
    height: 24px;
  }

  transition: 0.2s ease;
  &:hover {
    color: var(--green);
  }
`;
