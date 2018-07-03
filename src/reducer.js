import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { reducer as formReducer } from 'redux-form';

import { ADD_TO_COUNTER, MINUS_TO_COUNTER } from './actions';

const initialState = fromJS({
  counter: 0,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_COUNTER:
      return state.update('counter', (counter) => counter + 1);
    case MINUS_TO_COUNTER:
      return state.update('counter', (counter) => counter - 1);
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
