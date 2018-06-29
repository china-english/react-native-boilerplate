import { createGetSelector } from 'reselect-immutable-helpers';
// import { createSelector } from 'reselect';
// import Immutable from 'immutable';

export const selectLoginReducer = (state) => state.get('login');

export const selectDisplay = createGetSelector(selectLoginReducer, 'display');
