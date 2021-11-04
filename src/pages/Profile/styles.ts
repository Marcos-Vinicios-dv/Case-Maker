import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 1370px;
  min-height: calc(100vh - 4rem);

  margin: 0 auto 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxInfo = styled.div`
  display: flex;

  margin: 4rem 0 2.75rem;

  color: var(--gunmetal-500);
  font-weight: 500;

  > div:last-child {
    display: flex;
    flex-direction: column;

    margin-left: 3.99rem;

    h1 {
      color: var(--gray-50);
    }

    span {
      display: flex;
      align-items: center;
      margin-top: 1.15rem;

      svg {
        width: 20px;
        height: 20px;
        margin-right: 1rem;
      }
    }

    div {
      align-self: flex-end;
      margin-top: auto;

      button {
        font-weight: 600;
        color: ${({ isEditableOn }) =>
          isEditableOn ? 'var(--gray-50)' : 'var(--gray-300)'};

        padding: 0.5rem 1.8rem;

        border: none;
        border-radius: 4px;
        background-color: ${({ isEditableOn }) =>
          isEditableOn ? 'var(--green)' : 'transparent'};

        transition: 0.2s ease;

        & + button {
          background-color: ${({ isEditableOn }) =>
            isEditableOn ? 'transparent' : 'var(--green)'};
          color: ${({ isEditableOn }) =>
            isEditableOn ? 'var(--gray-300)' : 'var(--gray-50)'};

          margin-left: 1rem;
          padding: 0.5rem 1.8rem;
        }

        &:hover {
          background-color: var(--green);
          color: var(--gray-50);
        }
      }
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;

    > div:last-child {
      margin-left: 3rem;

      h1 {
        font-size: 1.75rem;
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;

    margin-top: 1.15rem;

    > div:last-child {
      margin: 1rem 0 0;
      align-items: center;

      div {
        margin-top: 1.5rem;
        align-self: center;
      }
    }
  }
`;

export const UserImageEdit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 192px;
  height: 192px;

  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border: 2px dashed var(--gray-200);

  color: var(--gray-200);

  div {
    z-index: -1;
    position: absolute;
  }

  svg {
    width: 50px;
    height: 50px;
    z-index: 2;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 900px) {
    width: 160px;
    height: 160px;

    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export const UserImage = styled.div`
  width: 192px;
  height: 192px;

  border-radius: 50%;

  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 900px) {
    width: 160px;
    height: 160px;
  }
`;
