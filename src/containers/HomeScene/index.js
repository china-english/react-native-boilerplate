/**
 *
 * HomeScene Container
 *
 */

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
  View,
  Button,
} from 'native-base';

import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

import { translate } from '../../utils/helpers';

import { selectTest } from './selectors';
// import { defaultAction } from './actions';
import reducer from './reducer';

import sagas from './sagas';

import { selectCounter } from '../../selectors';
import {
  addToCounter,
  minusToCounter,
} from '../../actions';

import styles from './styles';

export class HomeScene extends React.Component { // eslint-disable-line
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

  render() {
    const {
      test, addCounter, minusCounter, counter, changeLanguage,
    } = this.props;
    return (
      <Container>
        <AppHeader title="Home Scene" hasLeft={false} hasRight={false} />

        <Content
          contentContainerStyle={styles.contentContainer}
          style={styles.content}
        >
          <View style={styles.contentView}>
            <Text style={styles.generateText}>{translate(test)}</Text>
            <Text style={styles.generateText}>
              {translate('generatorMessage')}
            </Text>

            <Button
              onPress={() => {
                Actions.push('login');
              }}
              style={styles.button}
            >
              <Text>{translate('login')}</Text>
            </Button>

            <Button
              onPress={() => {
                changeLanguage('zh');
              }}
              style={styles.button}
            >
              <Text>{translate('zh')}</Text>
            </Button>
            <Button
              onPress={() => {
                changeLanguage('en');
              }}
              style={styles.button}
            >
              <Text>{translate('en')}</Text>
            </Button>

            <Button
              onPress={() => {
                addCounter();
              }}
              style={styles.button}
            >
              <Text>{translate('add')}</Text>
            </Button>
            <Button
              onPress={() => {
                minusCounter();
              }}
              style={styles.button}
            >
              <Text>{translate('minus')}</Text>
            </Button>

            <Text style={styles.generateText}>{counter}</Text>
          </View>
        </Content>

        <AppFooter pageName="HomeScene" />
      </Container>
    );
  }
}

HomeScene.defaultProps = {
  addCounter: null,
  counter: 0,
  changeLanguage: () => null,
  minusCounter: null,
  test: '',
};

HomeScene.propTypes = {
  addCounter: PropTypes.func,
  counter: PropTypes.number,
  changeLanguage: PropTypes.func,
  minusCounter: PropTypes.func,
  test: PropTypes.string,
};

const mapStateToProps = createPropsSelector({
  counter: selectCounter,
  test: selectTest,
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
