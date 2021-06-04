import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 40%;

    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      max-width: 25%;
    }
    a {
      margin: auto 10px;
      img {
        height: 30px;
        width: auto;
      }
    }
  }
`;

export const NavLinks = styled.nav`
  font-size: 1.2em;
  font-weight: bold;
  color: #d1d1d1;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin-right: 10em;

    li {
      a {
        padding-bottom: 4px;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
          color: #00d172;
          border-bottom: 2px solid #00d172;
        }
      }

      & + li {
        padding-left: 3em;
      }
    }
  }
`;

export const Home = styled(Link)`
  color: inherit;

  ${props =>
    props.active === '/' &&
    css`
      color: #00d172;
      border-bottom: 2px solid #00d172;
    `}
`;

export const Presets = styled(Link)`
  color: inherit;
`;

export const Customizar = styled(Link)`
  color: inherit;

  ${props =>
    props.active === '/customizar' &&
    css`
      color: #00d172;
      border-bottom: 2px solid #00d172;
    `}
`;
