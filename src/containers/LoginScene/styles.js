import { Dimensions } from 'react-native';
import { grey200, white } from '../../theme/variables/commonColor';

const { height } = Dimensions.get('window');

export default {
  contentContainer: {
    justifyContent: 'center',
  },
  content: {
    backgroundColor: grey200,
  },
  contentView: {
    backgroundColor: white,
    height: height - 64 - 55,
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
