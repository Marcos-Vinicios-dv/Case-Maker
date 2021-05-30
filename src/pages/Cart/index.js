import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as CarrinhoActions from '../../store/modules/carrinho/actions';

import { 
  MdRemoveCircleOutline, 
  MdAddCircleOutline, 
  MdDelete } from 'react-icons/md';
import Wrench from '../../assets/images/Wrench.svg'
import Frete from '../../assets/images/Frete.svg';

import { Container, ProductTable, FreteList, Total, Barra } from './styles';
import { formatPrice } from '../../util/format';

const Cart = () => {
  const total = useSelector(state => formatPrice(
    state.carrinho.reduce((total, produto) => {
      return total + produto.price * produto.quantidade;
    }, 0)
  ));
  const carrinho = useSelector(state => state.carrinho.map(produto => ({
      ...produto,
      subTotal: formatPrice(produto.price * produto.quantidade),
    }))  
  );
  const dispatch = useDispatch();  

  function incremento (produto) {
    dispatch(CarrinhoActions.solicitarAlterarQuantidade(produto.id, produto.quantidade + 1));
  }

  function decremento (produto) {
    dispatch(CarrinhoActions.solicitarAlterarQuantidade(produto.id, produto.quantidade - 1));
  }

  return (
    <Container>
      <ProductTable  cellSpacing="0px">
        <caption>CARRINHO DE COMPRAS</caption>
        <thead>
          <th/>
          <th>PRODUTOS</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th/>
        </thead>
        <tbody>
          { carrinho.map(produto => (
            <tr>
            <td>
              <button type="button">
                <img src={Wrench} alt="Customizar"/>
              </button>
              <img src={produto.image} alt="Pc"/>
            </td>
            <td>
              <strong>{produto.title}</strong>
              <small>Em estoque</small>
            </td>
            <td>
              <div>
                <button type="button" onClick={() => decremento(produto)}>
                  <MdRemoveCircleOutline size={20} color="#00D127"/>
                </button>
                <input type="number" readOnly value={produto.quantidade}/>
                <button type="button" onClick={() => incremento(produto)}>
                  <MdAddCircleOutline size={20} color="#00D127"/>
                </button>
              </div>
            </td>
            <td>
              <strong>{produto.subTotal}</strong>
            </td>
            <td>
              <button type="button" onClick={() => dispatch(CarrinhoActions.removerDoCarrinho(produto.id))}>
                <MdDelete size={20} color="#00D127"/>
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </ProductTable>
      
      {/* <Barra/> */}

      <FreteList>
        <span><img src={Frete} alt=""/>FRETE</span>
      </FreteList>
      
      <Total>
        <h1>TOTAL</h1>
        <div>
          <p>FRETE GRÁTIS</p>
          <Barra/>
          <strong>{total}</strong>
        </div>        
        <button type="button">FINALIZAR COMPRA</button>
      </Total>
    </Container>
  );
}

export default Cart;