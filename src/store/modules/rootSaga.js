import { all } from 'redux-saga/effects';

import carrinho from './carrinho/sagas';

export default function* rootSaga() {
  return yield all([carrinho]);
}