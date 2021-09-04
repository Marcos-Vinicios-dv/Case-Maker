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

  div:nth-child(2) {
    .MuiSlider-root {
      color: var(--green);
    }

    .MuiSlider-rail {
      padding: 0.1rem 0;
    }

    .MuiSlider-track {
      padding: 0.1rem 0;
    }

    .MuiSlider-thumb {
      padding: 0.1rem 0;
    }
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
`;

export const PriceContainer = styled.div`
  > span {
    display: block;
    padding: 0.5rem 0;
  }
  div {
    display: flex;
    justify-content: space-between;

    span {
      display: block;
    }
  }
  color: inherit;
`;

interface BrandButtonProps {
  active: boolean;
}

export const BrandButton = styled.li<BrandButtonProps>`
  color: ${(props) => (props.active ? 'var(--green)' : 'inherit')};
`;
