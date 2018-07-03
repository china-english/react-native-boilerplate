import { createGetSelector } from 'reselect-immutable-helpers';
// import { createSelector } from 'reselect';
// import Immutable,{ fromJS } from 'immutable';

/*
 * Direct selector to the loginScene reducer
 * 直接挑选 loginSceneReducer
 */
export const selectLoginSceneReducer = (state) => state.get('loginScene');

/*  selector parameters from loginSceneReducer
 * 选择其中的特定字段
 */
export const selectTest = createGetSelector(
  selectLoginSceneReducer, 'test'
);
