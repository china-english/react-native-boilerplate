import { createGetSelector } from 'reselect-immutable-helpers';
import Immutable from 'immutable';
// import { createSelector } from 'reselect';

/*
 * Direct selector to the homeScene reducer
 * 直接挑选 homeSceneReducer
 */
export const selectHomeSceneReducer = (state) => state.get('homeScene', Immutable.Map());

/*  selector parameters from homeSceneReducer
 * 选择其中的特定字段
 */
export const selectTest = createGetSelector(
  selectHomeSceneReducer, 'test'
);
