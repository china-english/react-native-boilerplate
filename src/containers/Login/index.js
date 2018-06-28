/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { compose } from 'redux';
import { connect } from 'react-redux';
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
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

import sagas from './sagas';
import reducer from './reducer';
import { selectDisplay } from './selectors';
import styles from './styles';

class Login extends Component { // eslint-disable-line
  render() {
    const { display } = this.props;
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
          {display
            && <Text>Now, display is true</Text>
          }
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

Login.propTypes = {
  display: PropTypes.bool,
};

Login.defaultProps = {
  display: false,
};

const mapStateToProps = createPropsSelector({
  display: selectDisplay,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const withSagas = sagas.map((saga) => injectSaga(saga));

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });

export default compose(
  withReducer,
  ...withSagas,
  withConnect,
)(Login);
