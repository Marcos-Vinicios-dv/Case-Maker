import { useSelector } from 'react-redux';

import { CardCartList } from '../../components/Cards/CardCartList';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';
import { Container, CartList } from './styles';
// import { formatPrice } from '../../util/format';

const Cart = () => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  // const total = useSelector((state) =>
  //   formatPrice(
  //     state.carrinho.reduce((total, produto) => {
  //       return total + produto.price * produto.quantidade;
  //     }, 0)
  //   )
  // );
  // const carrinho = useSelector((state) =>
  //   state.carrinho.map((produto) => ({
  //     ...produto,
  //     subTotal: formatPrice(produto.price * produto.quantidade),
  //   }))
  // );

  // function decremento(produto) {
  //   dispatch(
  //     CarrinhoActions.solicitarAlterarQuantidade(
  //       produto.id,
  //       produto.quantidade - 1
  //     )
  //   );
  // }

  return (
    <Container>
      <h1>Carrinho</h1>
      <CartList>
        {cart.map((item) => (
          <CardCartList
            key={item.product._id}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
      </CartList>
      <div>
        <span>
          <span>Total</span>
          <strong>
            R$ <span>500</span>,00
          </strong>
        </span>
        <button>Finalizar pedido</button>
      </div>
    </Container>
  );
};

export default Cart;
