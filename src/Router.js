/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// react && redux module
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Third party plug-in
import {
  Router,
  Stack,
  Scene,
} from 'react-native-router-flux';
import { Container, Footer, FooterTab, Header, Body } from 'native-base';

// import page container
import Home from './container/Home';
import Login from './container/Login';

// import other file
import configureStore from './store'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack hideNavBar>
          <Scene key="home" component={Home} initial />
          <Scene key="login" component={Login} />
        </Stack>
      </Router>
    );
  }
}
