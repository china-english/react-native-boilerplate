/*
 *
 * LoginScene selectors
 * created by generator
 *
 * source => https://github.com/china-english/react-native-boilerplate
 * author => fei
 *
 */

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
export const selectGenerateText = createGetSelector(
  selectLoginSceneReducer, 'generateText'
);

/*
 * 使用 createSelector 对数据进行操作, 如下所示
 */
// export const selectFormatString = createSelector(
//   selectGenerateText,
//   (generateText) => generateText
// );
