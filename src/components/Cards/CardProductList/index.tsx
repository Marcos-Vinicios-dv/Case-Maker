import { BiPlus } from 'react-icons/bi';

import { useCallback } from 'react';
import { Container } from './styles';

import { ProductFormatted } from '../../../services/hooks/usePresets';
import { IoStar } from 'react-icons/io5';
import { addProductToCartRequest } from '../../../store/modules/cart/actions';
import { useDispatch } from 'react-redux';

interface CardProductProduct {
  product: ProductFormatted;
}

export const CardProduct = ({ product }: CardProductProduct) => {
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  const separatePrice = product.preco_formatado.split(',');

  return (
    <Container>
      <img src={product.Imagem_URL} alt="" />
      <h2>{product.titulo}</h2>
      <span className="sub-info">
        <IoStar />
        {product.avaliacao}{' '}
        <span>
          {product.disponibilidade ? 'Em estoque' : 'Fora de estoque'}
        </span>
      </span>
      <span className="info">
        R$ <span>{separatePrice[0]}</span>,{separatePrice[1]}
      </span>
      <button type="button" onClick={handleAddToCart}>
        <BiPlus />
      </button>
    </Container>
  );
};
