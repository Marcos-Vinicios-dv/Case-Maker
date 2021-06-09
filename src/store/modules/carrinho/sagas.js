import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import { addAoCarrinhoSucesso, alterarQuantidadeSucesso } from './actions';

function* addAoCarrinho({ id }) {
  const produtoExiste = yield select(state =>
    state.carrinho.find(p => p.id === id)
  );

  const estoque = yield call(api.get, `/stock/${id}`);

  const QuantidadeEstoque = estoque.data.amount;
  const quantidadeAtual = produtoExiste ? produtoExiste.quantidade : 0;

  const quantidade = quantidadeAtual + 1;

  if (quantidade > QuantidadeEstoque) {
    toast.error('Quantidade fora de estoque!');
    return;
  } else {
    toast.success('Gabinete adicionado com SUCESSO!!!');
  }

  if (produtoExiste) {
    yield put(alterarQuantidadeSucesso(id, quantidade));
  } else {
    const response = yield call(api.get, `products/${id}`);

    const data = {
      ...response.data,
      quantidade: 1,
      precoFormatado: formatPrice(response.data.price),
    };

    yield put(addAoCarrinhoSucesso(data));
  }
}
function* alterarQuantidade({ id, quantidade }) {
  if (quantidade <= 0) return;

  const estoque = yield call(api.get, `/stock/${id}`);
  const QuantidadeEstoque = estoque.data.amount;

  if (quantidade > QuantidadeEstoque) {
    toast.error('Quantidade fora de estoque!');
    return;
  } else {
    toast.success('Gabinete adicionado com SUCESSO!!!');
  }

  yield put(alterarQuantidadeSucesso(id, quantidade));
}

export default all([
  takeLatest('@carrinho/SOLICITAR_ADICIONAR', addAoCarrinho),
  takeLatest('@carrinho/SOLICITAR_ALTERAR_QUANTIDADE', alterarQuantidade),
]);
