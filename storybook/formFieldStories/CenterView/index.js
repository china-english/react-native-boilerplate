import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import styles from './styles';

export default function CenterView(props) {
  const { children } = props;
  return (
    <Container style={styles.main}>
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
