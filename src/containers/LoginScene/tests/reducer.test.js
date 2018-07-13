import { fromJS } from 'immutable';
import loginSceneReducer from '../reducer';

describe('loginSceneReducer', () => {
  it('returns the initial state', () => {
    const initialState = fromJS({
      test: 'welcome',
    });
    expect(loginSceneReducer(undefined, {})).toEqual(initialState);
  });
});
