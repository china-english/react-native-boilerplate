import React from 'react';

import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import ContentView from 'storybook/ContentView';

import TextInput from '.';

storiesOf('Text Input', module)
  .addDecorator((getStory) => <ContentView>{getStory()}</ContentView>)
  .add('default', () => (
    <TextInput placeholder="placeholderEmail" />
  ))
  .add('with label', () => (
    <TextInput label="email" placeholder="placeholderEmail" />
  ))
  .add('with layout', () => (
    <TextInput label="email" layout="vertical" placeholder="placeholderEmail" />
  ))
  .add('with secureTextEntry', () => (
    <TextInput label="email" secureTextEntry placeholder="placeholderEmail" />
  ))
  .add('with fixedLabel', () => (
    <TextInput label="email" itemSettings={{ fixedLabel: true }} placeholder="placeholderEmail" />
  ))
  .add('with floatingLabel', () => (
    <TextInput label="email" itemSettings={{ floatingLabel: true }} placeholder="placeholderEmail" />
  ))
  .add('with stackedLabel', () => (
    <TextInput label="email" itemSettings={{ stackedLabel: true }} placeholder="placeholderEmail" />
  ));
