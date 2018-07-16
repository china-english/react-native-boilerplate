import I18n from 'react-native-i18n';
import startCase from 'lodash/startCase';
import en from 'translations/en';
import zh from 'translations/zh';

I18n.fallbacks = true;
I18n.translations = {
  en,
  zh,
};

export const translate = (value) => {
  if (!value) return value;
  const label = I18n.t(`${value}`);
  if (label.indexOf('[missing') === 0) {
    console.warn('translate', label);
    return startCase(value);
  }
  return label;
};
