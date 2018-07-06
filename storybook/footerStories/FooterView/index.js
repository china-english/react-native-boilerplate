import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';

export default function FooterView(props) {
  const { children } = props;
  return (
    <Container>
      <Content></Content>
      {children}
    </Container>
  );
}

FooterView.defaultProps = {
  children: null,
};

FooterView.propTypes = {
  children: PropTypes.node,
};
