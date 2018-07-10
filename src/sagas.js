import {
  fork, all, put,
} from 'redux-saga/effects';
import I18n from 'react-native-i18n';
import { AsyncStorage } from 'react-native';
import { addToCounter, setLanguage } from './actions';

export function* getAllProducts() {
  yield put(addToCounter());
  console.log('hello, Welcome to use redux-saga!');
}

export function* setAppLanguage() {
  const deviceLocale = I18n.locale;
  let languageSaved = yield AsyncStorage.getItem('language');
  try {
    if (deviceLocale !== languageSaved) {
      if (!languageSaved) {
        // if not found, then get the device language
        languageSaved = deviceLocale;
      }
    }
    I18n.locale = languageSaved;
  } catch (error) {
    console.warn('did not find saved language, it will just proceed with deviceLocale');
  }
  yield put(setLanguage(languageSaved));
  console.log(`set your App language as ${languageSaved}!`);
}

export default function* root() {
  yield all([fork(getAllProducts), fork(setAppLanguage)]);
}
