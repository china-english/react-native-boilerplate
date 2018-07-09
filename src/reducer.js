import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { reducer as formReducer } from 'redux-form/immutable';

import { ADD_TO_COUNTER, MINUS_TO_COUNTER, CHANGE_LANGUAGE } from './constants';

const initialState = fromJS({
  counter: 0,
  language: '',
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_COUNTER:
      return state.update('counter', (counter) => counter + 1);
    case MINUS_TO_COUNTER:
      return state.update('counter', (counter) => counter - 1);
    case CHANGE_LANGUAGE:
      return state.update('language', () => action.language);
    default:
      return state;
  }
};

export default function createReducer(injectedReducers) {
  const allReducer = combineReducers({
    nativeBoilerplate: reducer,
    form: formReducer,
    ...injectedReducers,
  });
  const rootReducer = (state = fromJS({}), action) => allReducer(state, action);
  return rootReducer;
}
