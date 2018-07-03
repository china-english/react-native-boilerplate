import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Text, Form,
} from 'native-base';

import pick from 'lodash/pick';
import { reduxForm } from 'redux-form/immutable';

import Group from '../formFields';

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
    secureTextEntry: true,
    placeholder: 'placeholderPassword',
  },
};


const LoginForm = (props) => {
  const {
    handleSubmit, ...otherProps
  } = props;

  const loginFileds = [
    pick(formFieldsObject, 'email', 'password'),
  ];
  return (
    <Form style={styles.form}>
      {loginFileds.map((loginFiled) => (
        <Group
          fieldsObject={loginFiled}
          key={loginFiled}
          {...otherProps}
        />
      ))}
      <Button block primary style={styles.button} onPress={handleSubmit}>
        <Text>Submit</Text>
      </Button>
    </Form>
  );
};
LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
LoginForm.defaultProps = {
  // handleSubmit: () => null,
};

export default reduxForm({
  form: 'loginForm',
})(LoginForm);
