import React from 'react';
import PropTypes from 'prop-types';
import { Button as NBButton } from 'native-base';

export default function Button(props) {
  const { children, onPress } = props;
  return (
    <NBButton onPress={onPress}>{children}</NBButton>
  );
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
