import variable from '../variables/platform';

export default (variables = variable) => {
  const theme = {
    '.bordered': {
      '.noTopBorder': {
        borderTopWidth: 0,
      },
      '.noBottomBorder': {
        borderBottomWidth: 0,
      },
      height: 35,
      paddingVertical: variables.listItemPadding + 1,
      borderBottomWidth: variables.borderWidth,
      borderTopWidth: variables.borderWidth,
      borderColor: variables.listBorderColor,
    },
    'NativeBase.Text': {
      fontSize: variables.tabBarTextSize,
    },
    '.noTopBorder': {
      borderTopWidth: 0,
    },
    '.noBottomBorder': {
      borderBottomWidth: 0,
    },
    height: 38,
    backgroundColor: variable.grey,
    flex: 1,
    justifyContent: 'center',
    paddingLeft: variables.listItemPadding + 5,
  };

  return theme;
};
