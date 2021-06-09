import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useDispatch } from 'react-redux';

import Carrinho from '../../assets/images/ButtonCarrinho.svg';
import Cinco from '../../assets/images/FiveStar.svg';
import Quatro from '../../assets/images/FourStar.svg';
import Três from '../../assets/images/ThreeStar.svg';
import Dois from '../../assets/images/TwoStar.svg';
import Um from '../../assets/images/OneStar.svg';
import {
  Container,
  ListaDeProdutos,
  Filtros,
  Marcas,
  Preco,
  Avaliacao,
  Card,
  Gabinete,
  Informacoes,
} from './styles';

import * as CarrinhoActions from '../../store/modules/carrinho/actions';
import { formatPrice } from '../../util/format';

function Presets() {
  const [produtos, setProdutos] = useState([]);
  const [range, setRange] = useState(100);
  const input = document.getElementById('preco');
  const dispatch = useDispatch();

  useEffect(() => {
    async function carregarProdutos() {
      const response = await api.get('products');

      const data = response.data.map(produto => ({
        ...produto,
        precoFormatado: formatPrice(produto.price),
      }));
      setProdutos(data);
    }
    carregarProdutos();
  }, []);

  function addCarrinho(id) {
    dispatch(CarrinhoActions.solicitarAddAoCarrinho(id));
  }

  function setPreco() {
    setRange(input.value);
  }

  return (
    <Container>
      <Filtros>
        <Marcas>
          <h4>Marcas</h4>
          <div>
            <span>Thermaltake</span>
            <span>Cougar</span>
            <span>Aigo</span>
            <span>Cooler Master</span>
          </div>
        </Marcas>
        <Preco>
          <h4>Preço</h4>
          <span>{range}</span>
          <input
            id="preco"
            type="range"
            min="100"
            max="1000"
            onInput={() => setPreco()}
          />
        </Preco>
        <Avaliacao>
          <h4>Avaliações</h4>
          <div>
            <img src={Cinco} alt="Cinco Estrelas" />
            <img src={Quatro} alt="Quatro Estrelas" />
            <img src={Três} alt="Três Estrelas" />
            <img src={Dois} alt="Dois Estrelas" />
            <img src={Um} alt="Um Estrelas" />
          </div>
        </Avaliacao>
      </Filtros>

      <ListaDeProdutos>
        {produtos.map(produto => (
          <Card key={produto.id}>
            <Gabinete>
              <img src={produto.image} alt="pc" />
              <strong>{produto.title}</strong>
            </Gabinete>
            <Informacoes>
              <div>
                <p>Cores: </p>
                <input type="radio" name="cor" value="preto" id="one" />
                <input type="radio" name="cor" value="branco" id="two" />
              </div>
              <span>{produto.precoFormatado}</span>
              <div>
                <span>
                  <img src={Cinco} alt="" /> 5.0
                </span>
                <button
                  type="button"
                  onClick={() => addCarrinho(produto.id, produto.title)}
                >
                  <img src={Carrinho} alt="" />
                </button>
              </div>
            </Informacoes>
          </Card>
        ))}
      </ListaDeProdutos>
    </Container>
  );
}

export default Presets;
