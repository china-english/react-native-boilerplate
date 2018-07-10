/*
 *
 * LoginScene reducer
 *
 */

import { fromJS } from 'immutable';

import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  test: 'welcome',
});

function loginSceneReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default loginSceneReducer;
