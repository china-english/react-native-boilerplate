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

import { translate } from 'utils/helpers';

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
