import React from 'react';
import { View } from 'react-native';
import {
  Button, Text,
} from 'native-base';
import { reduxForm } from 'redux-form';
import pick from 'lodash/pick';

import * as FormField from '../formFields';

import styles from './styles';

const formFieldsObject = {
  email: {
    label: 'Email',
    type: 'textInput',
    placeholder: 'placeholderEmail',
  },
  password: {
    label: 'password',
    type: 'textInput',
    placeholder: 'placeholderPassword',
  },
};

function LoginForm() {
  const loginFileds = [
    pick(formFieldsObject, 'email', 'password'),
  ];
  return (
    <View style={styles.form}>
      {loginFileds.map((loginFiled) => (
        <FormField.Group
          fieldsObject={loginFiled}
          key={loginFiled}
        />
      ))}
      <Button block style={styles.button}>
        <Text>Submit</Text>
      </Button>
    </View>
  );
}
export default reduxForm({
  form: 'loginForm',
})(LoginForm);
