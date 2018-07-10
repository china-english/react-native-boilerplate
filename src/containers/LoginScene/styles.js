import { Dimensions } from 'react-native';
import { grey200, white } from '../../theme/variables/commonColor';

import variables from '../../theme/variables/platform';

const { height } = Dimensions.get('window');
const { headerHeight, footerHeight, statusbarHeight } = variables;

export default {
  contentContainer: {
    justifyContent: 'center',
  },
  content: {
    backgroundColor: grey200,
  },
  contentView: {
    backgroundColor: white,
    minHeight: height - headerHeight - footerHeight - statusbarHeight,
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  footerTble: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  generateText: {
    textAlign: 'center',
    marginVertical: 10,
  },
};
