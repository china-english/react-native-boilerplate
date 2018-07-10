import { createGetSelector } from 'reselect-immutable-helpers';
import Immutable from 'immutable';
// import { createSelector } from 'reselect';

/*
 * Direct selector to the loginScene reducer
 * 直接挑选 loginSceneReducer
 */
export const selectLoginSceneReducer = (state) => state.get('loginScene', Immutable.Map());

/*  selector parameters from loginSceneReducer
 * 选择其中的特定字段
 */
export const selectTest = createGetSelector(
  selectLoginSceneReducer, 'test'
);
