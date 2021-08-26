import styled from 'styled-components';

export const Container = styled.header`
  width: 90%;
  max-width: 1370px;

  margin: 0 auto;
  padding: 0.8rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: none;
  }

  @media (max-width: 600px) {
    > nav {
      display: none;
    }

    button {
      display: initial;
      background: none;
      border: none;

      svg {
        color: var(--green);
        width: 30px;
        height: 30px;
      }
    }
  }
`;

interface ResponsiveSideBarPros {
  isMenuOpen: boolean;
}

export const ResponsiveSideBar = styled.div<ResponsiveSideBarPros>`
  position: fixed;

  transition: right 0s ease ${({ isMenuOpen }) => (isMenuOpen ? '0' : '0.2s')};
  top: 0;
  right: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-110%')};
  z-index: 2;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.2);

  aside {
    width: 60%;
    max-width: 280px;
    height: 100%;

    margin-left: auto;
    padding: 1rem 2.15rem;

    background-color: var(--gunmetal-600);

    transition: all 0.5s ease;

    position: relative;
    right: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-100%')};

    button {
      border: none;
      background: none;

      position: absolute;
      left: 2.15rem;

      svg {
        width: 28px;
        height: 28px;

        color: var(--gray-200);
      }
    }
  }
`;
