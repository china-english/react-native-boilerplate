import { createGetSelector } from 'reselect-immutable-helpers';
// import { createSelector } from 'reselect';
// import Immutable,{ fromJS } from 'immutable';

/*
 * Direct selector to the homeScene reducer
 * 直接挑选 homeSceneReducer
 */
export const selectHomeSceneReducer = (state) => state.get('homeScene');

/*  selector parameters from homeSceneReducer
 * 选择其中的特定字段
 */
export const selectTest = createGetSelector(
  selectHomeSceneReducer, 'test'
);
