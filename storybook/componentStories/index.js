import React from 'react';
import { Text } from 'native-base';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import ContentView from './ContentView';
import Button from './Button';

// -- IMPORT NEW STORYBOOK FILE --
import TextInput from '../../src/forms/formFields/TextInput';

storiesOf('Component', module)
  .addDecorator((getStory) => <ContentView>{getStory()}</ContentView>)
  .add('Text Input', () => (
    <TextInput />
  ))
  .add('Button', () => (
    <Button onPress={action('clicked-text')}>
      <Text>button</Text>
    </Button>
  ));
