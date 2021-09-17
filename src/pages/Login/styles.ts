import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 1370px;
  min-height: calc(100vh - 4rem);

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  section {
    margin-top: -10%;
  }

  @media (max-width: 600px) {
    min-height: calc(100vh - 7.5rem);
    position: relative;
    flex-direction: column;
    justify-content: flex-start;

    section {
      margin-top: 1.15rem;
    }
  }
`;

export const LogoSection = styled.section`
  padding-right: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 116px;
  }

  > span {
    text-align: center;
    width: 210px;
    display: block;

    span {
      color: var(--green);

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 600px) {
    padding-right: 0;

    position: absolute;
    bottom: 1.5rem;

    img {
      display: none;
    }

    > span {
      width: auto;
      text-align: left;
    }
  }
`;

export const FormSection = styled.section`
  width: 50%;

  padding-left: 2.8rem;

  border-left: 2px solid var(--gunmetal-500);

  @media (max-width: 600px) {
    width: 100%;
    padding-left: 0;
    border-left: none;
  }
`;
