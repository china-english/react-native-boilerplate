import { Platform, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
export default () => {
  const theme = {
    flex: 1,
    height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
    backgroundColor: '#E0E0E0',
  };

  return theme;
};
