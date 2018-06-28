import { fromJS } from 'immutable';

import { DISPLAY_ACTION } from './constants';

const initialState = fromJS({
  display: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_ACTION:
      return state.update('display', (counter) => !counter);
    default:
      return state;
  }
}
export default loginReducer;
