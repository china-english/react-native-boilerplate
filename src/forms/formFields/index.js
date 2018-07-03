import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray } from 'redux-form/immutable';
import map from 'lodash/map';

import TextInput from './TextInput';

const allFields = {
  textInput: TextInput,
};

export const Group = ({ fieldsObject, ...otherProps }) => {
  const renderFieldObject = (fieldObject, name) => {
    const isRequired = fieldObject.validate ? fieldObject.validate.some((d) => d.name === 'isRequired') : false;
    if (fieldObject.isFieldArray) {
      return (
        <FieldArray isRequired={isRequired} {...fieldObject} {...otherProps} component={allFields[fieldObject.type]} key={name} name={name} />
      );
    }

    return (
      <Field
        isRequired={isRequired}
        {...fieldObject}
        {...otherProps}
        component={allFields[fieldObject.type]}
        key={name}
        name={name}
      />
    );
  };

  return map(fieldsObject, renderFieldObject);
};

Group.propTypes = {
  fieldsObject: PropTypes.object,
};

Group.defaultProps = {
  fieldsObject: {},
};
