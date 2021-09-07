import { useCallback } from 'react';
import { IoClose } from 'react-icons/io5';

import { Container, InfoBox } from './styles';

import { BiPlus, BiMinus } from 'react-icons/bi';
import { IProduct } from '../../../store/modules/cart/types';
import { useDispatch } from 'react-redux';
import {
  removeProductFromCart,
  updateProductQuantityRequest,
} from '../../../store/modules/cart/actions';
import { formatNumber } from '../../../util/format';

interface CardCartListProps {
  product: IProduct;
  quantity: number;
}

export const CardCartList = ({ product, quantity }: CardCartListProps) => {
  const dispatch = useDispatch();

  const increment = useCallback(() => {
    dispatch(updateProductQuantityRequest(product._id, quantity + 1));
  }, [dispatch, product._id, quantity]);

  const decrement = useCallback(() => {
    dispatch(updateProductQuantityRequest(product._id, quantity - 1));
  }, [dispatch, product._id, quantity]);

  const removeProduct = useCallback(() => {
    dispatch(removeProductFromCart(product._id));
  }, [dispatch, product._id]);

  const priceFormatted = formatNumber(product.preco * quantity);

  return (
    <Container>
      <img src={product.Imagem_URL} alt="PC" />
      <InfoBox>
        <div>
          <h2>{product.titulo}</h2>
          <span>{product.tipo}</span>
        </div>

        <div>
          <span>
            {product.disponibilidade ? 'Em estoque' : 'Fora de estoque'}
          </span>
          <span>
            <button type="button" onClick={decrement}>
              <BiMinus />
            </button>
            <input type="number" value={quantity} readOnly />{' '}
            <button type="button" onClick={increment}>
              <BiPlus />
            </button>
          </span>
          <span>R$ {priceFormatted}</span>
          <button type="button" onClick={removeProduct}>
            <IoClose />
          </button>
        </div>
      </InfoBox>
    </Container>
  );
};
