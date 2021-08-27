// import { useDispatch, useSelector } from 'react-redux';
// import * as CarrinhoActions from '../../store/modules/carrinho/actions';

import { CardCartList } from '../../components/Cards/CardCartList';
import { Container, CartList } from './styles';
// import { formatPrice } from '../../util/format';

const Cart = () => {
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
  // const dispatch = useDispatch();

  // function incremento(produto) {
  //   dispatch(
  //     CarrinhoActions.solicitarAlterarQuantidade(
  //       produto.id,
  //       produto.quantidade + 1
  //     )
  //   );
  // }

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
        <CardCartList />
        <CardCartList />
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
