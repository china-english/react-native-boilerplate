import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content,
} from 'native-base';

export default function ContentView(props) {
  const { children } = props;
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

ContentView.defaultProps = {
  children: null,
};

ContentView.propTypes = {
  children: PropTypes.node,
};
