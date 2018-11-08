/**
*
* AppFooter Stateless Component
* created by generator
*
* source => https://github.com/china-english/react-native-boilerplate
* author => fei
*
*/

/* global translate */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Footer,
  FooterTab,
  Text,
} from 'native-base';

import styles from './styles';

const AppFooter = (props) => {
  const { pageName } = props;
  return (
    <Footer>
      <FooterTab style={styles.footerTble}>
        <Text style={styles.text}>
          {translate('footer')} {pageName}Footer
        </Text>
      </FooterTab>
    </Footer>
  );
};

AppFooter.defaultProps = {
  pageName: '',
};

AppFooter.propTypes = {
  pageName: PropTypes.string,
};

export default AppFooter;
