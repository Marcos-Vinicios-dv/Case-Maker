import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
  updateProductQuantityRequest,
  updateProductQuantitySuccess,
} from './actions';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';

import { IState } from '../..';
import { ActionTypes } from './types';
import api from '../../../services/api';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;
type UpdateProductQuantityRequest = ReturnType<
  typeof updateProductQuantityRequest
>;

interface IStocKResponse {
  estoque: {
    _id: string;
    quantidade: number;
  }[];
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const isCustomCase = product.tipo === 'customizado';
  if (isCustomCase) {
    yield put(addProductToCartSuccess(product));
  } else {
    const currentQuantity: number = yield select((state: IState) => {
      return (
        state.cart.items.find((item) => item.product._id === product._id)
          ?.quantity ?? 0
      );
    });

    const availableStockResponse: AxiosResponse<IStocKResponse> = yield call(
      api.get,
      `estoque?produto=${product._id}`
    );

    if (availableStockResponse.data.estoque[0].quantidade > currentQuantity) {
      yield put(addProductToCartSuccess(product));
    } else {
      yield put(addProductToCartFailure(product._id));
      toast.error('Quantidade fora de estoque!');
    }
  }
}

function* updateProductQuantity({ payload }: UpdateProductQuantityRequest) {
  if (payload.quantity <= 0) return;

  const availableStockResponse: AxiosResponse<IStocKResponse> = yield call(
    api.get,
    `estoque?produto=${payload.productId}`
  );

  const quantityInStock = availableStockResponse.data.estoque[0].quantidade;

  if (quantityInStock < payload.quantity) {
    toast.error('Quantidade fora de estoque!');
    return;
  }

  yield put(updateProductQuantitySuccess(payload.productId, payload.quantity));
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock),
  takeLatest(ActionTypes.updateProductQuantityRequest, updateProductQuantity),
]);
