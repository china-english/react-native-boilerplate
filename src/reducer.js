import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

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

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;
