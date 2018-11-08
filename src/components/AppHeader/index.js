/**
*
* AppHeader Stateless Component
* created by generator
*
* source => https://github.com/china-english/react-native-boilerplate
* author => fei
*
*/

/* global translate */

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
} from 'native-base';

import styles from './styles';

const AppHeader = (props) => {
  const {
    title, hasLeft, hasRight, hasTitle, backMessage, leftPress, rightPress,
  } = props;

  const leftButton = (
    <Button
      onPress={leftPress}
      style={styles.button}
    >
      <Icon name="arrow-back" />
      <Text>{translate(backMessage)}</Text>
    </Button>
  );
  const rightButton = (
    <Button
      onPress={rightPress}
      style={styles.button}
    >
      <Icon ios="ios-menu" android="md-menu" />
    </Button>
  );
  const titleBody = (
    <Title>{translate(title)}</Title>
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
};

AppHeader.defaultProps = {
  title: 'homeTitle',
  hasLeft: true,
  hasTitle: true,
  hasRight: true,
  backMessage: '',
  leftPress: () => Actions.pop(),
  rightPress: () => null,
};

AppHeader.propTypes = {
  title: PropTypes.string,
  hasLeft: PropTypes.bool,
  hasTitle: PropTypes.bool,
  hasRight: PropTypes.bool,
  backMessage: PropTypes.string,
  leftPress: PropTypes.func,
  rightPress: PropTypes.func,
};

export default AppHeader;
