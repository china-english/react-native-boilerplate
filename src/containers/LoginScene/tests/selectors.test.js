/*
 *
 * LoginScene selectors test file
 * created by generator
 *
 * source => https://github.com/china-english/react-native-boilerplate
 * author => fei
 *
 */

import { fromJS } from 'immutable';
import { selectLoginSceneReducer } from '../selectors';

describe('selectLoginSceneReducer', () => {
  it('Tests specified unit', () => {
    const expected = fromJS({});
    const initialState = fromJS({});
    expect(selectLoginSceneReducer(initialState)).toEqual(expected);
  });
});
