/**
 *
 * app routes file
 *
 * source => https://github.com/china-english/react-native-boilerplate
 * author => fei
 *
 */

import React from 'react';
import {
  Router,
  Stack,
  Scene,
} from 'react-native-router-flux';

// import page container
import HomeScene from 'containers/HomeScene';
import LoginScene from 'containers/LoginScene';

export default function AppRoutes() {
  return (
    <Router>
      <Stack hideNavBar>
        <Scene key="home" component={HomeScene} initial />
        <Scene key="login" component={LoginScene} />
      </Stack>
    </Router>
  );
}
