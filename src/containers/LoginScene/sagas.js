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
    /* add the page node in the store
     * 在 store 中添加该页面在 redux 中的节点
     */
    yield put(defaultAction());
    console.log('Good job! Success inject sagas in LoginScene');
  } catch (error) {
    console.log('Opps! There seem to be some problems When we use sagas, please check it');
  }
}

export function* watchDefaultSaga() {
  // yield takeLatest(DEFAULT_ACTION, defaultSaga);
  // yield cancel(watcher);
}

export default [
  {
    key: 'loginScene',
    saga: defaultSaga,
  },
];
