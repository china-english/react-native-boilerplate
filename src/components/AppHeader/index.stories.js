import React from 'react';

import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import HeaderView from '../../../storybook/HeaderView';

import AppHeader from '.';

storiesOf('App Header', module)
  .addDecorator((getStory) => <HeaderView>{getStory()}</HeaderView>)
  .add('AppHeader', () => (
    <AppHeader />
  ));
