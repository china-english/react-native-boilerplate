/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Actions } from 'react-native-router-flux';
import { createPropsSelector } from 'reselect-immutable-helpers';

import {
  Container,
  Footer,
  FooterTab, Header, Button, Content,
} from 'native-base';
import {
  addToCounter,
  minusToCounter,
} from '../../actions';
import { selectCounter } from '../../selectors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Home extends Component { //eslint-disable-line
  render() {
    const { addCounter, minusCounter, counter } = this.props;
    return (
      <Container>
        <Header
          style={{
            backgroundColor: '#F5FCFF',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>
            home
          </Text>
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
          <View style={styles.container}>
            <Text>
            Welcome to React  Native!
            </Text>
            <Text>
            To get started, edit index.ios.js
            </Text>
            <Text>
            Press Cmd+R to reload,
              {'\n'}
            Cmd+D or shake for dev menu
            </Text>
            <View>
              <Button
                onPress={() => {
                  Actions.push('login');
                }}
              >
                <Text>
                Go to Login!
                </Text>
              </Button>
              <Button
                onPress={() => {
                  addCounter();
                }}
              >
                <Text>
                  Add counter
                </Text>
              </Button>
              <Button
                onPress={() => {
                  minusCounter();
                }}
              >
                <Text>
                  Minus counter
                </Text>
              </Button>
            </View>
            <Text>
              {counter}
            </Text>
          </View>
        </Content>
        <Footer>
          <FooterTab
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>
              home footer
            </Text>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

Home.propTypes = {
  counter: PropTypes.number,
  minusCounter: PropTypes.func,
  addCounter: PropTypes.func,
};

Home.defaultProps = {
  counter: 0,
  minusCounter: null,
  addCounter: null,
};

const mapStateToProps = createPropsSelector({
  counter: selectCounter,
});

const mapDispatchToProps = (dispatch) => ({
  addCounter: () => dispatch(addToCounter()),
  minusCounter: () => dispatch(minusToCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
