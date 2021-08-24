import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;

  > a + a {
    margin-left: 3rem;
  }
  div {
    margin-left: 6.99rem;

    a + a {
      margin-left: 1rem;
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

    div {
      width: 100%;
      margin-left: 0;
      order: 1;

      padding-bottom: 1.6rem;
      margin-bottom: 1.6rem;
      border-bottom: 2px solid var(--gunmetal-500);

      a {
        display: block;
        width: 30px;
        margin-left: auto;

        position: relative;
        right: -6px;

        &::before {
          content: 'Carrinho';
          position: absolute;
          left: -85px;
          top: 2px;
          font-weight: 400;
        }
      }

      a + a {
        margin-left: auto;
        &::before {
          content: 'Login';
          left: -55px;
        }
      }
    }
  }
`;

interface StyledLinkProps {
  isActive: number;
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--gray-100)')};

  svg {
    width: 24px;
    height: 24px;
  }

  transition: 0.2s ease;
  &:hover {
    color: var(--green);
  }
`;
