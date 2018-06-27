import {
  take, put, call, fork, select, takeEvery, all,
} from 'redux-saga/effects';

export function* getAllProducts() {
  console.log('hello, Welcome to use redux-saga!');
}

export default function* root() {
  yield all([fork(getAllProducts)]);
}
