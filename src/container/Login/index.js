/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
  Container,
  Footer,
  FooterTab,
  Header,
  Button,
  Content,
} from 'native-base';

export default class Login extends Component { // eslint-disable-line
  render() {
    return (
      <Container>
        <Header
          style={{
            backgroundColor: '#F5FCFF',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Login</Text>
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          style={{
            backgroundColor: '#F5FCFF',
          }}
        >
          <View>
            <Button onPress={() => Actions.pop()}>
              <Text>Back Home</Text>
            </Button>
          </View>
        </Content>
        <Footer>
          <FooterTab
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Login footer</Text>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
