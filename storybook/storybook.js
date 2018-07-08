import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import {
  StyleProvider,
} from 'native-base';
import { Provider } from 'react-redux';

import getTheme from '../src/theme/components';
import variables from '../src/theme/variables/platform';

import configureStore from '../src/store';
import { loadStories } from './storyLoader';

// import stories
configure(() => {
  loadStories();
}, module);

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// https://github.com/storybooks/storybook/issues/2081
// eslint-disable-next-line react/prefer-stateless-function
class StorybookUIHMRRoot extends Component {
  render() {
    const store = configureStore();

    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={store}>
          <StorybookUIRoot />
        </Provider>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('nativeBoilerplate', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
