/**
*
* LoginForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash/pick';
import { reduxForm } from 'redux-form/immutable';
import {
  Button,
  Text,
  Form,
} from 'native-base';

import { translate } from 'utils/helpers';
import Group from 'formFields';

import styles from './styles';

const LoginForm = (props) => {
  const { handleSubmit, ...otherProps } = props;

  // Add your formField in this object
  const formFieldsObject = {
    email: {
      label: 'email',
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

  // 使用 pick 方法挑选出你需要展示的formField
  const formFields = [
    pick(formFieldsObject, 'email', 'password'),
  ];

  return (
    <Form style={styles.form}>
      {formFields.map((formField) => (
        <Group
          fieldsObject={formField}
          key={formField}
          {...otherProps}
        />
      ))}
      <Button block primary style={styles.button} onPress={handleSubmit}>
        <Text>{translate('submit')}</Text>
      </Button>
    </Form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
};

export default reduxForm({
  form: 'loginForm',
  destroyOnUnmount: false,
})(LoginForm);
