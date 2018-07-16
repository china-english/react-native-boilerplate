/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// react && redux module
import React from 'react';
import { Provider } from 'react-redux';

import { StyleProvider, Root } from 'native-base';

import getTheme from 'theme/components';
import variables from 'platform';

import TranslateRoute from './translateRoute';
import configureStore from './store';


const store = configureStore();

export default function App() {
  return (
    <StyleProvider style={getTheme(variables)}>
      <Provider store={store}>
        <Root>
          <TranslateRoute />
        </Root>
      </Provider>
    </StyleProvider>
  );
}
