import { fromJS } from 'immutable';
import { selectHomeSceneReducer } from '../selectors';

describe('selectHomeSceneReducer', () => {
  it('Tests specified unit', () => {
    const expected = fromJS({});
    const initialState = fromJS({});
    expect(selectHomeSceneReducer(initialState)).toEqual(expected);
  });
});
