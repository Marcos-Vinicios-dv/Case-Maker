import { IoClose } from 'react-icons/io5';

import { Container, InfoBox } from './styles';

import pc from '../../../assets/images/pc.png';

export const CardCartList = () => {
  return (
    <Container>
      <img src={pc} alt="PC" />
      <InfoBox>
        <div>
          <h2>Thermaltake</h2>
          Padrão
        </div>

        <div>
          <span>Em estoque</span>
          <span>
            <button></button>
            <input type="number" readOnly /> <button></button>
          </span>
          <span>R$ 500,00</span>
          <button>
            <IoClose />
          </button>
        </div>
      </InfoBox>
    </Container>
  );
};
