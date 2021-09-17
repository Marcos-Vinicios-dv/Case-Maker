import ReactStars from 'react-rating-stars-component';
import Slider from '@material-ui/core/Slider';

import { Container, PriceContainer, BrandButton } from './styles';
import { useState, useEffect } from 'react';
import { ProductFormatted } from '../../services/hooks/usePresets';

interface FiltrosProps {
  onSetList: React.Dispatch<React.SetStateAction<ProductFormatted[]>>;
  getDefaultProducts: () => Promise<ProductFormatted[]>;
  onSetLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

const brands = ['Todas', 'Thermaltake', 'Aigo', 'Cougar'];

export const Filtros = ({
  onSetList,
  getDefaultProducts,
  onSetLoading,
}: FiltrosProps) => {
  const [inputRangeValue, setInputRangeValue] = useState<number[]>([0, 3000]);
  const [ratingValue, setRatingValue] = useState<number>(5);
  const [price, setPrice] = useState<number[]>([0, 3000]);
  const [brand, setBrand] = useState('Todas');

  function handleInputRangeChange(_: any, newValue: number | number[]) {
    setInputRangeValue(newValue as number[]);
  }

  function handleInputRangeCommitted(_: any, newValue: number | number[]) {
    setPrice(newValue as number[]);
  }

  useEffect(() => {
    async function filterProducts() {
      onSetLoading(true);
      const defaultList = await getDefaultProducts();

      let newProductList = defaultList
        .filter((product) => product.avaliacao <= ratingValue)
        .filter(
          (product) => product.preco >= price[0] && product.preco <= price[1]
        );

      if (brand !== 'Todas') {
        newProductList = newProductList.filter(
          (product) => product.marca === brand
        );
      }
      onSetLoading(false);
      onSetList(newProductList);
    }
    filterProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand, price, ratingValue]);

  return (
    <Container>
      <div>
        <h2>Marca</h2>

        <ul>
          {brands.map((brandItemMap) => (
            <BrandButton
              key={brandItemMap}
              onClick={() =>
                setBrand(brandItemMap === brand ? 'Todas' : brandItemMap)
              }
              active={brandItemMap === brand}
            >
              {brandItemMap}
            </BrandButton>
          ))}
        </ul>
      </div>

      <PriceContainer>
        <h2>Preço</h2>
        <span>Intervalo de preço</span>
        <Slider
          value={inputRangeValue}
          onChange={handleInputRangeChange}
          onChangeCommitted={handleInputRangeCommitted}
          aria-labelledby="range-slider"
          max={3000}
        />
        <div>
          <span>R$ {inputRangeValue[0]},00</span>
          <span>R$ {inputRangeValue[1]},00</span>
        </div>
      </PriceContainer>

      <div>
        <h2>Avaliação</h2>
        <ReactStars
          count={5}
          value={ratingValue}
          onChange={(newRating) => setRatingValue(newRating)}
          size={26}
          activeColor="#eedc3f"
          isHalf={true}
        />
      </div>
    </Container>
  );
};
