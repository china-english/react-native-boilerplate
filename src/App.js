/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 // react && redux module
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

// Third party plug-in
import {Container, Footer, FooterTab, Header, Body} from 'native-base';

import Home from './container/Home';
import Login from './container/Login';

import Router from './Router'
import configureStore from './store'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
