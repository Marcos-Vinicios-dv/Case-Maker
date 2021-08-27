import { Container, RatingContainer } from './styles';
import Rating from 'react-rating';

export const Filtros = () => {
  return (
    <Container>
      <div>
        <h2>Marca</h2>

        <ul>
          <li>Thermaltake</li>
          <li>Thermaltake</li>
          <li>Thermaltake</li>
        </ul>
      </div>

      <div>
        <h2>Preço</h2>
        <span>R$ 200,00</span>
        <input type="range" />
      </div>

      <RatingContainer>
        <h2>Avaliação</h2>
        <Rating />
      </RatingContainer>
    </Container>
  );
};
