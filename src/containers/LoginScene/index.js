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

import AppHeader from '../../components/AppHeader';
import LoginForm from '../../forms/LoginForm';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

import sagas from './sagas';
import reducer from './reducer';
import { selectDisplay } from './selectors';
import styles from './styles';

class LoginScene extends Component { // eslint-disable-line
  render() {
    const { display } = this.props;
    return (
      <Container>
        <AppHeader title="Login Scene" />

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
          <LoginForm />
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

LoginScene.propTypes = {
  display: PropTypes.bool,
};

LoginScene.defaultProps = {
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
)(LoginScene);
