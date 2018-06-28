import variable from '../variables/platform';

export default () => {
  const pickerTheme = {
    '.note': {
      color: variable.black,
    },
    width: 90,
    marginRight: -4,
  };

  return pickerTheme;
};
