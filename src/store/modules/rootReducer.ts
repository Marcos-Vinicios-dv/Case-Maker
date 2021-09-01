import { combineReducers } from 'redux';

import { carrinho } from './carrinho/reducer';
import { customizar } from './customizar/reducer';
import { user } from './user/reducer';

export default combineReducers({
  carrinho,
  customizar,
  user,
});
