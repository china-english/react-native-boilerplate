/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
import Home from './scene/Home';
import Login from './scene/Login';
import {Container, Footer, FooterTab, Header, Body} from 'native-base';

export default class App extends Component {
  render() {
    // const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';
    return (
        <Router
          // uriPrefix={prefix}
        >
          <Stack
            hideNavBar
            // key="root"
            // titleStyle={{ alignSelf: 'center' }}
          >
            <Scene key="home" component={Home} initial />
            <Scene key="login" component={Login} />
          </Stack>
        </Router>
    );
  }
}
