import {
  ADD_TO_COUNTER,
  MINUS_TO_COUNTER,
  CHANGE_LANGUAGE,
} from './constants';

export function addToCounter() {
  return {
    type: ADD_TO_COUNTER,
  };
}
export function minusToCounter() {
  return {
    type: MINUS_TO_COUNTER,
  };
}

export function setLanguage(language) {
  return {
    type: CHANGE_LANGUAGE,
    language,
  };
}
