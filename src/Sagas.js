import {
  fork, all, put,
} from 'redux-saga/effects';

import { addToCounter } from './actions';

export function* getAllProducts() {
  yield put(addToCounter());
  console.log('hello, Welcome to use redux-saga!');
}

export default function* root() {
  yield all([fork(getAllProducts)]);
}
