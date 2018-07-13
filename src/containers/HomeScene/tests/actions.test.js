import {
  defaultAction,
} from '../actions';
import {
  DEFAULT_ACTION,
} from '../constants';

describe('HomeScene actions', () => {
  it('Tests default actions', () => {
    const expected = {
      type: DEFAULT_ACTION,
    };
    expect(defaultAction()).toEqual(expected);
  });
});
