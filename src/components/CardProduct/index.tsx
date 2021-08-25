import { FaStar } from 'react-icons/fa';
import { BiPlus } from 'react-icons/bi';

import { Container } from './styles';

import pc from '../../assets/images/pc.png';

export const CardProduct = () => {
  return (
    <Container>
      <img src={pc} alt="" />
      <h2>Thermaltake</h2>
      <span className="sub-info">
        <FaStar />
        4,5 <span>Em estoque</span>
      </span>
      <span className="main-info">
        R$ <span>450</span>,00
      </span>
      <button type="button">
        <BiPlus />
      </button>
    </Container>
  );
};
