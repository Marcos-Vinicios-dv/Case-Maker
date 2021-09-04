import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
  updateProductQuantityRequest,
  updateProductQuantitySuccess,
} from './actions';
import { IState } from '../..';
import apiFake from '../../../services/fakeApi';
import { AxiosResponse } from 'axios';
import { ActionTypes } from './types';
import { toast } from 'react-toastify';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;
type UpdateProductQuantityRequest = ReturnType<
  typeof updateProductQuantityRequest
>;

interface IStocKResponse {
  id: string;
  amount: number;
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product._id === product._id)
        ?.quantity ?? 0
    );
  });

  const availableStockResponse: AxiosResponse<IStocKResponse> = yield call(
    apiFake.get,
    `stock/${product._id}`
  );

  if (availableStockResponse.data.amount > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product._id));
    toast.error('Quantidade fora de estoque!');
  }
}

function* updateProductQuantity({ payload }: UpdateProductQuantityRequest) {
  if (payload.quantity <= 0) return;

  const availableStockResponse: AxiosResponse<IStocKResponse> = yield call(
    apiFake.get,
    `stock/${payload.productId}`
  );

  const quantityInStock = availableStockResponse.data.amount;

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
