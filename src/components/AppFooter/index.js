/**
*
* AppFooter Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import {
  Footer,
  FooterTab,
  Text,
} from 'native-base';

import styles from './styles';

function AppFooter(props) {
  const { pageName } = props;
  return (
    <Footer>
      <FooterTab style={styles.footerTble}>
        <Text style={styles.text}>react-native-boilerplate {pageName}Footer</Text>
      </FooterTab>
    </Footer>
  );
}
AppFooter.defaultProps = {
  pageName: '',
};
AppFooter.propTypes = {
  pageName: PropTypes.string,
};

export default AppFooter;
