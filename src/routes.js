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
import HomeScene from 'containers/HomeScene';
import LoginScene from 'containers/LoginScene';

// -- ADD NEW ROUTE FILE --

export default function AppRouter(props) {
  return (
    <Router>
      <Stack hideNavBar>
        <Scene key="home" component={HomeScene} initial {...props} />
        <Scene key="login" component={LoginScene} {...props} />
      </Stack>
    </Router>
  );
}
