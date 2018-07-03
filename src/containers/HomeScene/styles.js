import { Dimensions } from 'react-native';
import { grey200 } from '../../theme/variables/commonColor';

const { height } = Dimensions.get('window');

export default {
  contentContainer: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: height - 64 - 55,
  },
  content: {
    backgroundColor: grey200,
  },
  button: {
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  footerTble: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  generateText: {
    textAlign: 'center',
  },
};
