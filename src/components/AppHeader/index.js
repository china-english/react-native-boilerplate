/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Actions } from 'react-native-router-flux';

import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Icon,
  Text,
  Toast,
} from 'native-base';

import styles from './styles';

export default function AppHeader(props) {
  const {
    title, hasLeft, hasRight, hasTitle, backMessage,
  } = props;

  const leftButton = (
    <Button
      onPress={() => Actions.pop()}
      style={styles.button}
    >
      <Icon name="arrow-back" />
      <Text>{backMessage}</Text>
    </Button>
  );

  const rightButton = (
    <Button
      onPress={() => Toast.show({
        text: 'No function',
        buttonText: 'Okay',
        duration: 3000,
        position: 'top',
      })}
      style={styles.button}
    >
      <Icon ios="ios-menu" android="md-menu" />
    </Button>
  );

  const titleBody = (
    <Title>{title}</Title>
  );

  return (
    <Header style={styles.headerStyle}>
      <Left>
        { hasLeft && leftButton }
      </Left>
      <Body>
        { hasTitle && titleBody }
      </Body>
      <Right>
        { hasRight && rightButton }
      </Right>
    </Header>
  );
}

AppHeader.propTypes = {
  title: PropTypes.string,
  hasLeft: PropTypes.bool,
  hasTitle: PropTypes.bool,
  hasRight: PropTypes.bool,
  backMessage: PropTypes.string,
};

AppHeader.defaultProps = {
  title: 'homeTitle',
  hasLeft: true,
  hasTitle: true,
  hasRight: true,
  backMessage: 'Back',
};
