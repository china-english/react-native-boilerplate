/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// react && redux module
import React from 'react';

// Third party plug-in
import {
  Router,
  Stack,
  Scene,
} from 'react-native-router-flux';

// import page container
import Home from './containers/Home';
import Login from './containers/Login';

export default function App() {
  return (
    <Router>
      <Stack hideNavBar>
        <Scene key="home" component={Home} initial />
        <Scene key="login" component={Login} />
      </Stack>
    </Router>
  );
}
