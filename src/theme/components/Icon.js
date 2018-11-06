// @flow

import * as commonColor from 'commonColor';
import variable from '../variables/platform';

export default (variables /* : * */ = variable) => {
  const iconTheme = {
    fontSize: variables.iconFontSize,
    color: commonColor.black,
  };

  return iconTheme;
};
