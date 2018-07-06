import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';

// -- IMPORT NEW STORYBOOK FILE --
import LoginForm from '../../src/forms/LoginForm';

storiesOf('Form', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Login Form', () => (
    <LoginForm onSubmit={action('submit form data')} />
  ));
