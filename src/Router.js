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
import HomeScene from './containers/HomeScene';
import LoginScene from './containers/LoginScene';

export default function App() {
  return (
    <Router>
      <Stack hideNavBar>
        <Scene key="home" component={HomeScene} initial />
        <Scene key="login" component={LoginScene} />
      </Stack>
    </Router>
  );
}
