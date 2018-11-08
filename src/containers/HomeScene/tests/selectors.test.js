/*
 *
 * HomeScene selectors test file
 * created by generator
 *
 * source => https://github.com/china-english/react-native-boilerplate
 * author => fei
 *
 */

import { fromJS } from 'immutable';
import { selectHomeSceneReducer } from '../selectors';

describe('selectHomeSceneReducer', () => {
  it('Tests specified unit', () => {
    const expected = fromJS({});
    const initialState = fromJS({});
    expect(selectHomeSceneReducer(initialState)).toEqual(expected);
  });
});
