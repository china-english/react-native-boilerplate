import {ADD_TO_COUNTER, MINUS_TO_COUNTER} from './actions'

import { combineReducers } from 'redux'
// This is the default state of the app i.e. when the app starts for the first time
const initialState = {
  counter: 0
}

// This is a reducer which listens to actions and modifies the state
const reducer = (state = initialState, action) => {
  // A switch is used since if more actions are added in the future, it will be easy
  // to be able to handle this in the reducer since we just add another 'case'.
  switch (action.type) {
    case ADD_TO_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      }
    case MINUS_TO_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state;
    }
}

const rootReducer = combineReducers({
  reducer
})

export default rootReducer;
