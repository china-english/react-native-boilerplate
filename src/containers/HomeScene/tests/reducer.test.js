import { fromJS } from 'immutable';
import homeSceneReducer from '../reducer';

describe('homeSceneReducer', () => {
  it('returns the initial state', () => {
    const initialState = fromJS({
      test: 'welcome',
    });
    expect(homeSceneReducer(undefined, {})).toEqual(initialState);
  });
});
