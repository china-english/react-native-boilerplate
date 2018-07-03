/**
 *
 * HomeScene Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Input,
  Text,
  Label,
} from 'native-base';
import styles from '../styles';

export default function TextInput(props) {
  const {
    input, placeholder, label, layout,
  } = props;

  const labelText = label || input.name;
  const itemLayout = [];
  if (layout === 'vertical') {
    itemLayout.push(styles.fieldVertical);
  }

  return (
    <Item style={itemLayout}>
      <Label style={styles.label}>
        <Text>{labelText}</Text>
      </Label>
      <Input placeholder={placeholder} {...input} />
    </Item>
  );
}

TextInput.defaultProps = {
  input: {},
  placeholder: '',
  label: '',
  layout: '',
};

TextInput.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  layout: PropTypes.string,
};
