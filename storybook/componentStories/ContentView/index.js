import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import styles from './styles';

export default function ContentView(props) {
  const { children } = props;
  return (
    <Container style={styles.main}>
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
