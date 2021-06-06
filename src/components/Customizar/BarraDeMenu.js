import Paleta from '../../assets/images/Paleta.svg';
import Brush from '../../assets/images/Brush.svg';
import Bandage from '../../assets/images/Bandage.svg';
import Led from '../../assets/images/Led.svg';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 335px;
  height: 50px;

  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;

    li {
      padding: 0 14px;
      & + li {
        border-left: 1px solid #00d172;
      }

      img {
        height: 35px;
        width: auto;
        cursor: pointer;
      }
    }
  }
`;

const BarraDeMenu = ({ selectedOption = null }) => {
  function onClickOption({ currentTarget }) {
    if (selectedOption) {
      const option = currentTarget.id;
      selectedOption(option);
    }
  }

  return (
    <Container>
      <ul>
        <li>
          <img id="cores" src={Paleta} alt="cores" onClick={onClickOption} />
        </li>
        <li>
          <img
            id="camuflagens"
            src={Brush}
            alt="camuflagens"
            onClick={onClickOption}
          />
        </li>
        <li>
          <img
            id="adesivos"
            src={Bandage}
            alt="adesivos"
            onClick={onClickOption}
          />
        </li>
        <li>
          <img id="leds" src={Led} alt="leds" onClick={onClickOption} />
        </li>
      </ul>
    </Container>
  );
};

export default BarraDeMenu;
