import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content,
} from 'native-base';

export default function HeaderView(props) {
  const { children } = props;
  return (
    <Container>
      {children}
      <Content></Content>
    </Container>
  );
}

HeaderView.defaultProps = {
  children: null,
};

HeaderView.propTypes = {
  children: PropTypes.node,
};
