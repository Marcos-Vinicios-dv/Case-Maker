import { Reducer } from 'redux';
import produce from 'immer';

import { ActionTypes, ICartState } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};

export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addProductToCartSuccess: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product._id === product._id
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }

      case ActionTypes.addProductToCartFailure: {
        draft.failedStockCheck.push(action.payload.productId);
        break;
      }

      case ActionTypes.updateProductQuantitySuccess: {
        const productIndex = draft.items.findIndex(
          (item) => item.product._id === action.payload.productId
        );

        if (productIndex >= 0) {
          draft.items[productIndex].quantity = Number(action.payload.quantity);
        }

        break;
      }

      case ActionTypes.removeProductFromCart: {
        const productIndex = draft.items.findIndex(
          (item) => item.product._id === action.payload.productId
        );

        if (productIndex >= 0) {
          draft.items.splice(productIndex, 1);
        }
        break;
      }

      default:
        return state;
    }
  });
};
