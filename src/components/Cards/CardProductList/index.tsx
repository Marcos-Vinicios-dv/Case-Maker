import { useCallback } from 'react';
import { BiPlus } from 'react-icons/bi';
import { IoStar } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ProductFormatted } from '../../../services/hooks/usePresets';
import { addProductToCartRequest } from '../../../store/modules/cart/actions';
import { User } from '../../../services/hooks/useUser';
import { IState } from '../../../store';

import { Container } from './styles';

interface CardProductProduct {
  product: ProductFormatted;
}

export const CardProduct = ({ product }: CardProductProduct) => {
  const user = useSelector<IState, User>((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCart = useCallback(() => {
    if (user.email) {
      toast.success(`Gabinete ${product.titulo} adicionado ao carrinho`);
      dispatch(addProductToCartRequest(product));
    } else {
      toast.warn('Para adicionar ao carrinho é necessário estar logado');
    }
  }, [dispatch, product, user.email]);

  const handleProductSelect = useCallback(() => {
    history.push(`/produto/${product._id}`);
  }, [history, product._id]);

  const separatePrice = product.preco_formatado.split(',');

  return (
    <Container>
      <img src={product.Imagem_URL} alt="" onClick={handleProductSelect} />
      <h2 onClick={handleProductSelect}>{product.titulo}</h2>
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
