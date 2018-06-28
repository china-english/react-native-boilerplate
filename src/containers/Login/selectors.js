import { createGetSelector } from 'reselect-immutable-helpers';
// import { createSelector } from 'reselect';
// import Immutable from 'immutable';
// import { selectReducer } from '../../selectors';

export const selectLoginReducer = (state) => state.get('login');

export const selectDisplay = createGetSelector(selectLoginReducer, 'display');
