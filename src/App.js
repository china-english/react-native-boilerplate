/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// react && redux module
import React from 'react';
import { Provider } from 'react-redux';

import { StyleProvider } from 'native-base';

import Router from './Router';
import configureStore from './store';

import getTheme from './theme/components';
import variables from './theme/variables/platform';

const store = configureStore();

export default function App() {
  return (
    <StyleProvider style={getTheme(variables)}>
      <Provider store={store}>
        <Router />
      </Provider>
    </StyleProvider>
  );
}
