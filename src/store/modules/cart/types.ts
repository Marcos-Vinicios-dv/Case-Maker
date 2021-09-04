export interface IProduct {
  Imagem_URL: string;
  disponibilidade: boolean;
  marca: string;
  preco: number;
  titulo: string;
  _id: string;
  preco_formatado: string;
  tipo: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: string[];
}

export enum ActionTypes {
  addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
  updateProductQuantityRequest = 'UPDATE_QUANTITY_PRODUCT_REQUEST',
  updateProductQuantitySuccess = 'UPDATE_QUANTITY_PRODUCT_SUCCESS',
  removeProductFromCart = 'REMOVE_PRODUCT_FROM_CART',
}
