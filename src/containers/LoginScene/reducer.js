/*
 *
 * LoginScene reducer
 * created by generator
 *
 * source => https://github.com/china-english/react-native-boilerplate
 * author => fei
 *
 */

import { fromJS } from 'immutable';

import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  generateText: 'welcome',
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
