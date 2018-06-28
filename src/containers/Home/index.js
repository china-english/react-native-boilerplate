/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Content,
  Text,
} from 'native-base';

import Header from '../../components/Header';
import {
  addToCounter,
  minusToCounter,
} from '../../actions';
import { selectCounter } from '../../selectors';

import styles from './styles';

class Home extends Component { //eslint-disable-line
  render() {
    const { addCounter, minusCounter, counter } = this.props;
    return (
      <Container>
        <Header />
        <Content
          contentContainerStyle={styles.contentContainer}
          style={styles.content}
        >
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
          <Button
            onPress={() => {
              Actions.push('login');
            }}
            style={styles.button}
          >
            <Text>Go to Login!</Text>
          </Button>
          <Button
            onPress={() => {
              addCounter();
            }}
            style={styles.button}
          >
            <Text>Add counter</Text>
          </Button>
          <Button
            onPress={() => {
              minusCounter();
            }}
            style={styles.button}
          >
            <Text>Minus counter</Text>
          </Button>
          <Text>
            {counter}
          </Text>
        </Content>
        <Footer>
          <FooterTab style={styles.footerTble}>
            <Text>home footer</Text>
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
