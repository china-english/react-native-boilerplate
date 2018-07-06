/*
 * app 中需要显示在 native-base Content 组件以外的请用这种方式书写 storybook
 */

import React from 'react';

import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import HeaderView from './HeaderView';

import AppHeader from '../../src/components/AppHeader';

storiesOf('Header', module)
  .addDecorator((getStory) => <HeaderView>{getStory()}</HeaderView>)
  .add('App Header', () => (
    <AppHeader />
  ));
