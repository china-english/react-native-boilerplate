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
  Label,
} from 'native-base';
import styles from '../styles';

export default function TextInput(props) {
  const {
    input, placeholder, label, layout, itemSettings, secureTextEntry,
    itemstyle, labelStyle,
  } = props;

  const itemLayout = [itemstyle];
  const labelVertical = [labelStyle];
  if (layout === 'vertical') {
    itemLayout.push(styles.fieldVertical);
    labelVertical.push(styles.labelVertical);
  }

  const labelText = label || input.name;
  const placeholderText = (itemSettings && itemSettings.floatingLabel === true)
    ? null : placeholder;

  return (
    <Item {...itemSettings} style={itemLayout}>
      <Label style={labelVertical}>{labelText}</Label>
      <Input
        placeholder={placeholderText}
        onChangeText={input.onChange}
        secureTextEntry={secureTextEntry}
      />
    </Item>
  );
}

TextInput.defaultProps = {
  input: {},
  placeholder: '',
  label: '',
  layout: '',
  itemSettings: {},
  secureTextEntry: false,
  itemstyle: {},
  labelStyle: {},
};

TextInput.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  layout: PropTypes.string,
  itemSettings: PropTypes.object,
  secureTextEntry: PropTypes.bool,
  itemstyle: PropTypes.object,
  labelStyle: PropTypes.object,
};
