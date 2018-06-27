/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// react && redux module
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Router from './Router';
import configureStore from './store';

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
