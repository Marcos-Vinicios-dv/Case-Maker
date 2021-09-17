import styled from 'styled-components';

export const CarouselContainer = styled.section`
  width: 50%;
  height: 100%;
  display: flex;

  > span {
    align-self: center;
    margin: -20% auto 0;
  }

  .swiper-container {
    width: 100%;
    height: 80%;
  }

  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination-bullet {
    width: 0.7rem;
    height: 0.7rem;
    background-color: var(--gray-300);
    opacity: 0.7;

    & + .swiper-pagination-bullet {
      margin-top: 1rem;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: var(--green);
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 60%;

    .swiper-container {
      height: 100%;
    }
  }
`;

export const SliderItemContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  > img {
    margin-left: 4rem;
    max-height: 400px;
  }

  > div {
    width: 24px;
    height: 24px;

    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;

    margin: 0 0 -55% -2rem;

    display: grid;
    place-content: center;
  }

  @media (max-width: 1024px) {
    img {
      margin-left: 0;
      max-height: 300px;
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
  }
`;
