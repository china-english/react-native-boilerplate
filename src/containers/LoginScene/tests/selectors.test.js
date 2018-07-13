import { fromJS } from 'immutable';
import { selectLoginSceneReducer } from '../selectors';

describe('selectLoginSceneReducer', () => {
  it('Tests specified unit', () => {
    const expected = fromJS({});
    const initialState = fromJS({});
    expect(selectLoginSceneReducer(initialState)).toEqual(expected);
  });
});
