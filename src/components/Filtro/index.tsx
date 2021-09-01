import Rating from '@material-ui/lab/Rating';
import Slider from '@material-ui/core/Slider';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { Container, RatingContainer } from './styles';
import { useState } from 'react';

export const Filtros = () => {
  const [inputRangeValue, setInputRangeValue] = useState<number[]>([100, 200]);
  const [ratingValue, setRatingValue] = useState<number | null>(2);

  function handleInputRangeChange(event: any, newValue: number | number[]) {
    setInputRangeValue(newValue as number[]);
  }

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
        <span>
          <span>MIN R$ {inputRangeValue[0]},00</span>
          <span>MAX R$ {inputRangeValue[1]},00</span>
        </span>
        <Slider
          value={inputRangeValue}
          onChange={handleInputRangeChange}
          aria-labelledby="range-slider"
          max={1000}
        />
      </div>

      <RatingContainer>
        <h2>Avaliação</h2>
        <Rating
          name="customized-empty"
          value={ratingValue}
          precision={0.5}
          onChange={(event, newValue) => setRatingValue(newValue)}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </RatingContainer>
    </Container>
  );
};
