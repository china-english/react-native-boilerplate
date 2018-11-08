/**
 *
 * HomeScene Container
 * created by generator
 *
 * source => https://github.com/china-english/react-native-boilerplate
 * author => fei
 *
 */

/* global translate changeLanguage */

import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import {
  Container,
  Content,
  Text,
  Button,
} from 'native-base';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import AppHeader from 'components/AppHeader';
import AppFooter from 'components/AppFooter';

import { selectGenerateText } from './selectors';
import { selectCounter } from '../../selectors';
import {
  addToCounter,
  minusToCounter,
} from '../../actions';
// import { defaultAction } from './actions';
import reducer from './reducer';
import sagas from './sagas';
import styles from './styles';

export class HomeScene extends React.PureComponent {
  renderLink = () => (
    <Button
      onPress={() => {
        Actions.push('login');
      }}
      style={styles.button}
    >
      <Text>{translate('login')}</Text>
    </Button>
  )

  renderChangeLanguage = (language) => (
    <Button
      onPress={() => { changeLanguage(language); }}
      style={styles.button}
    >
      <Text>{translate(language)}</Text>
    </Button>
  )

  renderCalculate = (type) => {
    const { addCounter, minusCounter } = this.props;
    const calculateFunc = type === 'add' ? addCounter : minusCounter;
    return (
      <Button
        onPress={calculateFunc}
        style={styles.button}
      >
        <Text>{translate(type)}</Text>
      </Button>
    );
  }

  render() {
    const { generateText, counter } = this.props;
    return (
      <Container>
        <AppHeader title="homeScene" hasLeft={false} hasRight={false} />

        <Content
          contentContainerStyle={styles.contentContainer}
          style={styles.content}
        >
          <Text style={styles.generateText}>{translate(generateText)}</Text>
          <Text style={styles.generateText}>
            {translate('generatorMessage')}
          </Text>

          { this.renderLink() }

          { this.renderChangeLanguage('zh') }
          { this.renderChangeLanguage('en') }

          { this.renderCalculate('add') }
          { this.renderCalculate('minus') }

          <Text style={styles.generateText}>{counter}</Text>
        </Content>

        <AppFooter pageName="HomeScene" />
      </Container>
    );
  }
}

HomeScene.defaultProps = {
  addCounter: null,
  counter: 0,
  minusCounter: null,
  generateText: '',
};

HomeScene.propTypes = {
  addCounter: PropTypes.func,
  counter: PropTypes.number,
  minusCounter: PropTypes.func,
  generateText: PropTypes.string,
};

const mapStateToProps = createPropsSelector({
  counter: selectCounter,
  generateText: selectGenerateText,
});

const mapDispatchToProps = (dispatch) => ({
  addCounter: () => dispatch(addToCounter()),
  minusCounter: () => dispatch(minusToCounter()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homeScene', reducer });

const withSagas = sagas.map((saga) => injectSaga(saga));

export default compose(
  withReducer,
  ...withSagas,
  withConnect,
)(HomeScene);
