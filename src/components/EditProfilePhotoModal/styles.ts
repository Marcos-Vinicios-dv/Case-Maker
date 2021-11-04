import styled, { css } from 'styled-components';
import { Line } from 'rc-progress';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 10;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 572px;
  background-color: var(--gunmetal-700);
  border-radius: 4px;
  padding: 1rem;

  transition: height 1s ease;

  button {
    align-self: flex-end;
    color: var(--gray-50);
    font-weight: 500;

    padding: 0.4rem 1rem;

    background-color: var(--green);
    border: none;
    border-radius: 4px;

    transition: 0.2s ease;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 900px) {
    width: 470px;
  }

  @media (max-width: 600px) {
    width: 300px;
  }
`;

const dragActive = css`
  border-color: var(--green);
`;

const dragReject = css`
  border-color: #f04343;
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  width: 100%;
  height: 144px;

  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px dashed var(--gunmetal-400);
  border-radius: 4px;
  cursor: pointer;

  ${(props) => props.isDragActive && dragActive}
  ${(props) => props.isDragReject && dragReject}

  svg {
    width: 42px;
    height: 42px;

    color: var(--green);
  }
`;

const messageColors = {
  default: 'var(--gunmetal-400)',
  error: '#f04343',
  success: 'var(--green)',
};

export const UploadMessage = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 8px 0 0;

  @media (max-width: 900px) {
    text-align: center;
    width: 370px;
  }

  @media (max-width: 600px) {
    width: 170px;
  }
`;

export const Preview = styled.div`
  width: 388px;
  height: 358px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  margin-bottom: 1rem;

  @media (max-width: 600px) {
    width: 232px;
    height: 232px;
  }
`;

export const FileInfo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  margin-top: 0.5rem;

  span {
    flex: 1;
  }

  button {
    background-color: transparent;
    color: var(--gunmetal-500);
    padding: 0.4rem 0;

    & + button {
      padding: 0.4rem 1rem;
      background: var(--green);
      color: var(--gray-50);

      margin-left: 0.8rem;

      &:hover {
        filter: brightness(0.8);
      }
    }

    &:hover {
      filter: brightness(1.2);
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    div {
      align-self: flex-end;
      margin-top: 0.5rem;
    }
  }
`;

export const ProgressBar = styled(Line).attrs({
  strokeWidth: 1,
  strokeColor: '#00D172',
  trailColor: '#00d17367',
})``;
