/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// react && redux module
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { AsyncStorage } from 'react-native';
import { createPropsSelector } from 'reselect-immutable-helpers';

import AppRoutes from './routes';

import { selectLanguage } from './selectors';
import { setLanguage } from './actions';

const languages = ['en', 'zh'];
const deviceLocale = I18n.locale;

class TranslateRoute extends React.Component { // eslint-disable-line
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  async componentWillMount() {
    const { updateLanguage } = this.props;
    try {
      let languageSaved = await AsyncStorage.getItem('language');
      if (deviceLocale !== languageSaved) {
        if (!languageSaved) {
          // if not found, then get the device language
          languageSaved = deviceLocale;
        }
      }
      I18n.locale = languageSaved;
      updateLanguage(languageSaved);
    } catch (error) {
      console.warn('did not find saved language, it will just proceed with deviceLocale');
    }
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
    return <AppRoutes changeLanguage={this.changeLanguage} />;
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
