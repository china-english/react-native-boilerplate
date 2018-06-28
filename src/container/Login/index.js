/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  Container,
  Footer,
  FooterTab,
  Button,
  Content,
  Text,
} from 'native-base';

import Header from '../../components/Header';

import styles from './styles';

export default class Login extends Component { // eslint-disable-line
  render() {
    return (
      <Container>
        <Header />

        <Content
          contentContainerStyle={styles.contentContainer}
          style={styles.content}
        >
          <Button
            onPress={() => Actions.pop()}
            style={styles.button}
          >
            <Text>Back Home</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab style={styles.footerTble}>
            <Text>Login footer</Text>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
