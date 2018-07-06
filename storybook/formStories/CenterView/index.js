import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';

export default function CenterView(props) {
  const { children } = props;
  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  );
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
