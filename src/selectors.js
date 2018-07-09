import { createGetSelector } from 'reselect-immutable-helpers';
// import { createSelector } from 'reselect';
// import Immutable from 'immutable';

export const selectReducer = (state) => state.get('nativeBoilerplate');

export const selectCounter = createGetSelector(selectReducer, 'counter');

export const selectLanguage = createGetSelector(selectReducer, 'language');
