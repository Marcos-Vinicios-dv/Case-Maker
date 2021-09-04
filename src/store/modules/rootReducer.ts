import { combineReducers } from 'redux';

import { customizar } from './customizar/reducer';
import { user } from './user/reducer';
import { cart } from './cart/reducer';

export default combineReducers({
  customizar,
  user,
  cart,
});
