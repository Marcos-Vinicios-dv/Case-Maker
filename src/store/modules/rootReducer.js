import { combineReducers } from 'redux';

import carrinho from './carrinho/reducer';
import customizar from './customizar/reducer';

export default combineReducers({
  carrinho,customizar
});