import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import styles from './styles';

export default function FooterView(props) {
  const { children } = props;
  return (
    <Container style={styles.main}>
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
