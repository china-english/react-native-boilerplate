import React from 'react';

import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import FooterView from './FooterView';

import AppFooter from '../../src/components/AppFooter';

storiesOf('specialStories', module)
  .addDecorator((getStory) => <FooterView>{getStory()}</FooterView>)
  .add('footer', () => (
    <AppFooter />
  ));
