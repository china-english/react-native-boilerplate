import React from 'react';

import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';

// -- IMPORT NEW STORYBOOK FILE --
import TextInput from '../../src/forms/formFields/TextInput';

storiesOf('Form Fields', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Text Input', () => (
    <TextInput />
  ));
