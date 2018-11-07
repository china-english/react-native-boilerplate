/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/* global window */

// react && redux module
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { AsyncStorage } from 'react-native';
import { createPropsSelector } from 'reselect-immutable-helpers';
import SplashScreen from 'react-native-splash-screen';

import { translate } from 'utils/helpers';
import AppRoutes from './AppRoutes';
import { selectLanguage } from './selectors';
import { setLanguage } from './actions';

window.translate = translate;
const languages = ['en', 'zh'];

class TranslateRoute extends React.Component { // eslint-disable-line
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    window.changeLanguage = this.changeLanguage;
    SplashScreen.hide();
  }

  changeLanguage = (value) => {
    const { updateLanguage } = this.props;
    try {
      const languageSaved = languages.find((language) => language.indexOf(value) !== -1);
      I18n.locale = languageSaved;
      AsyncStorage.setItem('language', value);
      updateLanguage(languageSaved);
    } catch (error) {
      console.warn('did not find saved language,, it will just proceed with deviceLocale');
    }
  };

  render() {
    return <AppRoutes />;
  }
}

TranslateRoute.defaultProps = {
  updateLanguage: () => null,
};

TranslateRoute.propTypes = {
  updateLanguage: PropTypes.func,
};


const mapStateToProps = createPropsSelector({
  newLanguage: selectLanguage,
});

const mapDispatchToProps = (dispatch) => ({
  updateLanguage: (language) => dispatch(setLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TranslateRoute);
