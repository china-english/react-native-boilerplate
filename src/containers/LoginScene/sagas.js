/*
 *
 * LoginScene sagas
 *
 */
import {
  // takeLatest,
  // cancel,
  // call,
  put,
} from 'redux-saga/effects';

import { defaultAction } from './actions';

export function* defaultSaga() {
  try {
    yield put(defaultAction());
    console.log('Good job! Success inject sagas in LoginScene');
  } catch (error) {
    console.log('Opps! There seem to be some problems When we use sagas, please check it');
  }
}

export default [
  {
    key: 'loginScene',
    saga: defaultSaga,
  },
];
