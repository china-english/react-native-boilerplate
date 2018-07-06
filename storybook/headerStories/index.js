import React from 'react';

import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import HeaderView from './HeaderView';

import AppHeader from '../../src/components/AppHeader';

storiesOf('headerStories', module)
  .addDecorator((getStory) => <HeaderView>{getStory()}</HeaderView>)
  .add('header', () => (
    <AppHeader />
  ));
