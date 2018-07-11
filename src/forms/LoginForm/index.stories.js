import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import ContentView from '../../../storybook/ContentView';

import LoginForm from '.';

storiesOf('Login Form', module)
  .addDecorator((getStory) => <ContentView>{getStory()}</ContentView>)
  .add('LoginForm', () => (
    <LoginForm onSubmit={action('submit loginForm data')} />
  ));
