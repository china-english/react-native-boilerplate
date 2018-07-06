import React from 'react';
import { Text } from 'native-base';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import ContentView from './ContentView';
import Button from './Button';
import TextInput from '../../src/forms/formFields/TextInput';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('componentStories', module)
  .addDecorator((getStory) => <ContentView>{getStory()}</ContentView>)
  .add('TextInput', () => (
    <TextInput />
  ))
  .add('button', () => (
    <Button onPress={action('clicked-text')}>
      <Text>button</Text>
    </Button>
  ));
