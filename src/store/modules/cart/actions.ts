import { ActionTypes, IProduct } from './types';

export const addProductToCartRequest = (product: IProduct) => {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
};

export const addProductToCartSuccess = (product: IProduct) => {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
};

export const addProductToCartFailure = (productId: string) => {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    },
  };
};

export const updateProductQuantityRequest = (
  productId: string,
  quantity: number
) => {
  return {
    type: ActionTypes.updateProductQuantityRequest,
    payload: {
      productId,
      quantity,
    },
  };
};

export const updateProductQuantitySuccess = (
  productId: string,
  quantity: number
) => {
  return {
    type: ActionTypes.updateProductQuantitySuccess,
    payload: {
      productId,
      quantity,
    },
  };
};

export const removeProductFromCart = (productId: string) => {
  return {
    type: ActionTypes.removeProductFromCart,
    payload: {
      productId,
    },
  };
};
