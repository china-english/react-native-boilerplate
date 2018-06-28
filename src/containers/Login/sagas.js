import {
  put,
} from 'redux-saga/effects';

import { displayAction } from './actions';

export function* injectActions() {
  yield put(displayAction());
  console.log('Good job! Success inject sagas in LoginScene');
}

export default [
  {
    key: 'inject-actions',
    saga: injectActions,
  },
];
