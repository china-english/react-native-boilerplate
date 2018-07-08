import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import styles from './styles';

export default function HeaderView(props) {
  const { children } = props;
  return (
    <Container style={styles.main}>
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
