import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import { useDispatch } from 'react-redux';

import Carrinho from '../../../assets/images/ButtonCarrinho.svg'
import { Container, ListaDeProdutos } from './styles';

import * as CarrinhoActions from '../../../store/modules/carrinho/actions';
import { formatPrice } from '../../../util/format';

function Presets() {
  const [ produtos, setProdutos ] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    async function carregarProdutos() {
      const response = await api.get('products');

      const data = response.data.map(produto => ({
        ...produto, precoFormatado: formatPrice(produto.price)
      }))
      setProdutos(data);
    }
    carregarProdutos();     
  },[]);

  function addCarrinho(id) {
    dispatch(CarrinhoActions.solicitarAddAoCarrinho(id))
  }

  return (
    <Container>
      <ListaDeProdutos>
        {produtos.map(produto => (
          <li key={produto.id}>
            <img src={produto.image} alt="pc"/>        
            <strong>{produto.title}</strong>
            <div>
              <span>Cores:</span>
              <input type="radio"/>
              <input type="radio"/>
            </div>
            <span>{produto.precoFormatado}</span>
            <button type="button" onClick={() => addCarrinho(produto.id)}>
              <img src={Carrinho} alt=""/>
            </button>
          </li>
        ))}
      </ListaDeProdutos>
    </Container>
  );
}

export default Presets;