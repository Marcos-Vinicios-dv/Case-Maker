import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CardCartList } from '../../components/Cards/CardCartList';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';
import { formatNumber } from '../../util/format';
import { Container, CartList } from './styles';

const Cart = () => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  const total = cart.reduce((total, item) => {
    return total + item.product.preco * item.quantity;
  }, 0);

  useEffect(() => {
    const serialCart = JSON.stringify({
      cart,
    });

    localStorage.setItem('@caseMaker:Cart', serialCart);
  }, [cart]);

  const totalFormatted = formatNumber(total).split(',');

  return (
    <Container>
      <h1>Carrinho</h1>
      <CartList>
        {cart.length > 0 ? (
          cart.map((item) => (
            <CardCartList
              key={item.product._id}
              product={item.product}
              quantity={item.quantity}
            />
          ))
        ) : (
          <li>O carrinho está vazio!</li>
        )}
      </CartList>
      <div>
        <span>
          <span>Total</span>
          <strong>
            R$ <span>{totalFormatted[0]}</span>,{totalFormatted[1]}
          </strong>
        </span>
        <button>Finalizar pedido</button>
      </div>
    </Container>
  );
};

export default Cart;
