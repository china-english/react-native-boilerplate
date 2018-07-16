/**
 *
 * LoginScene Container
 *
 */

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
  View,
} from 'native-base';

import AppHeader from 'components/AppHeader';
import AppFooter from 'components/AppFooter';

import LoginForm from 'forms/LoginForm';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { translate } from 'utils/helpers';

import { selectTest } from './selectors';
// import { defaultAction } from './actions';
import reducer from './reducer';

import sagas from './sagas';

import styles from './styles';

export class LoginScene extends React.Component { // eslint-disable-line
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }
  //
  // componentWillMount() {
  // }
  //
  // componentWillReceiveProps(nextProps) {
  // }
  //
  // componentDidMount() {
  // }
  //
  // componentWillUnmount() {
  // }

  // onClick = () => {
  // }

  onSubmit = (value) => {
    alert(JSON.stringify(value.toJS())); // eslint-disable-line
  }

  render() {
    const { test } = this.props;
    return (
      <Container>
        <AppHeader title="Login Scene" />

        <Content
          contentContainerStyle={styles.contentContainer}
          style={styles.content}
        >
          <View style={styles.contentView}>
            <Text style={styles.generateText}>{translate(test)}</Text>
            <Text style={styles.generateText}>{translate('generatorMessage')}</Text>
            <LoginForm onSubmit={this.onSubmit} />
          </View>
        </Content>

        <AppFooter pageName="LoginScene" />
      </Container>
    );
  }
}

LoginScene.defaultProps = {
  test: '',
};

LoginScene.propTypes = {
  test: PropTypes.string,
};

const mapStateToProps = createPropsSelector({
  test: selectTest,
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
