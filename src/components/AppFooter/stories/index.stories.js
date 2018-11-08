/**
 *
 * AppFooter storybook file
 * created by generator
 *
 * source => https://github.com/china-english/react-native-boilerplate
 * author => fei
 *
 */

import React from 'react';
import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import FooterView from 'storybook/FooterView';

import AppFooter from '..';

storiesOf('App Footer', module)
  .addDecorator((getStory) => <FooterView>{getStory()}</FooterView>)
  .add('AppFooter', () => (
    <AppFooter />
  ))
  .add('AppFooter with pageName', () => (
    <AppFooter pageName="story" />
  ));
