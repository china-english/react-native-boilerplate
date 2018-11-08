/*
 *
 * HomeScene selectors
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
 * Direct selector to the homeScene reducer
 * 直接挑选 homeSceneReducer
 */
export const selectHomeSceneReducer = (state) => state.get('homeScene', Immutable.Map());

/*  selector parameters from homeSceneReducer
 * 选择其中的特定字段
 */
export const selectGenerateText = createGetSelector(
  selectHomeSceneReducer, 'generateText'
);

/*
 * 使用 createSelector 对数据进行操作, 如下所示
 */
// export const selectFormatString = createSelector(
//   selectGenerateText,
//   (generateText) => generateText
// );
