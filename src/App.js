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
  View
} from 'react-native';
import {Container, Footer, FooterTab, Header, Body} from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Text style={styles.welcome}>
          Welcome to React  Native!
        </Text>
      </Header>
      <Body>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
      </Body>
      <Footer>
        <FooterTab>
          <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
          </Text>
        </FooterTab>
      </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});
