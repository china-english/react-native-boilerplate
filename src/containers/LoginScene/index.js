/**
 *
 * LoginScene Container
 * created by generator
 *
 * source => https://github.com/china-english/react-native-boilerplate
 * author => fei
 *
 */

/* global translate */

import React from 'react';
import PropTypes from 'prop-types';
// import { Actions } from 'react-native-router-flux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import {
  Container,
  Content,
  Text,
} from 'native-base';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import AppHeader from 'components/AppHeader';
import AppFooter from 'components/AppFooter';

import LoginForm from 'forms/LoginForm';

import { selectGenerateText } from './selectors';
// import { defaultAction } from './actions';
import reducer from './reducer';
import sagas from './sagas';
import styles from './styles';

export class LoginScene extends React.Component {
  onSubmit = (value) => {
    alert(JSON.stringify(value.toJS())); // eslint-disable-line
  }

  render() {
    const { generateText } = this.props;
    return (
      <Container>
        <AppHeader title="loginScene" />

        <Content
          contentContainerStyle={styles.contentContainer}
          style={styles.content}
        >
          <Text style={styles.generateText}>{translate(generateText)}</Text>
          <Text style={styles.generateText}>{translate('generatorMessage')}</Text>
          <LoginForm onSubmit={this.onSubmit} />
        </Content>

        <AppFooter pageName="LoginScene" />
      </Container>
    );
  }
}

LoginScene.defaultProps = {
  generateText: '',
};

LoginScene.propTypes = {
  generateText: PropTypes.string,
};

const mapStateToProps = createPropsSelector({
  generateText: selectGenerateText,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loginScene', reducer });

const withSagas = sagas.map((saga) => injectSaga(saga));

export default compose(
  withReducer,
  ...withSagas,
  withConnect,
)(LoginScene);
