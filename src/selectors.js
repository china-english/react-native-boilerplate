import { createGetSelector } from 'reselect-immutable-helpers';
// import { createSelector } from 'reselect';
// import Immutable from 'immutable';

export const selectReducer = (state) => state.get('reducer');

export const selectCounter = createGetSelector(selectReducer, 'counter');
