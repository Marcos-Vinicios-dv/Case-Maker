import styled from 'styled-components';

interface ContainerFilterProps {
  isOpen: boolean;
  isVisible: boolean;
}

export const ContainerFilter = styled.div<ContainerFilterProps>`
  display: none;

  position: fixed;
  bottom: ${({ isOpen, isVisible }) => (isOpen ? '0' : isVisible && '2rem')};
  left: ${({ isOpen, isVisible }) => (isOpen ? '0' : isVisible && '2rem')};

  z-index: 2;

  width: ${({ isOpen }) => (isOpen ? '100vw' : 'auto')};
  height: ${({ isOpen }) => (isOpen ? '100vh' : 'auto')};

  transition: 0;
  background: ${({ isOpen }) => (isOpen ? 'rgba(0, 0, 0, 0.2)' : 'none')};

  > div {
    //transições
    transition: all 0.4s ease, border-radius 0.8s ease;

    width: ${({ isOpen }) => (isOpen ? '264px' : '45px')};
    height: ${({ isOpen }) => (isOpen ? '520px' : '45px')};
    border-radius: ${({ isOpen }) => (isOpen ? '5px' : '50%')};
    background-color: ${({ isOpen }) =>
      isOpen ? 'var(--gunmetal-700)' : 'var(--green)'};

    display: flex;
    align-items: center;
    justify-content: center;

    position: ${({ isOpen }) => (isOpen ? 'absolute' : 'relative')};
    bottom: ${({ isOpen }) => (isOpen ? '2rem' : '0')};
    left: ${({ isOpen }) => (isOpen ? '2rem' : '0')};

    > svg {
      width: 30px;
      height: 30px;
      color: var(--gray-50);
    }

    > button {
      background: none;
      border: none;
      position: absolute;
      top: 0.8rem;
      right: 0.8rem;

      svg {
        width: 20px;
        height: 20px;
        color: var(--gray-200);
      }
    }

    aside {
      transition: all 0.1s ease;
      width: 172px;

      margin: 1rem 0;

      position: absolute;
      top: 16px;

      opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
      visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    }
  }

  @media (max-width: 900px) {
    display: block;
  }
`;
