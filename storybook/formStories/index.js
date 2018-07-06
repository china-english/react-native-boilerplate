import React from 'react';

import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';
import AppHeader from '../../src/components/AppHeader';
import TextInput from '../../src/forms/formFields/TextInput';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('AppHeader', () => (
    <AppHeader />
  ))
  .add('TextInput', () => (
    <TextInput />
  ));
