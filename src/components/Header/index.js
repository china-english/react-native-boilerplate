/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';

// import { Actions } from 'react-native-router-flux';

import { Header, Text } from 'native-base';

import styles from './styles';

export default function AppHeader(props) {
  const { title } = props;
  return (
    <Header style={styles.headerStyle}>
      <Text>
        {title}
      </Text>
    </Header>
  );
}

AppHeader.propTypes = {
  title: PropTypes.string,
  // minusCounter: PropTypes.func,
  // addCounter: PropTypes.func,
};

AppHeader.defaultProps = {
  title: 'homeTitle',
  // minusCounter: null,
  // addCounter: null,
};
