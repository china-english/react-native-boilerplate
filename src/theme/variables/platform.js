import color from 'color';

import { Platform, Dimensions, PixelRatio } from 'react-native';
import {
  brandInfo,
  brandSuccess,
  brandWarning,
  brandSidebar,
  brand,
  grey,
  darkGrey,
  white,
  blue,
  green,
  red,
  black,
  lightBlue,
  purple,
  blackGrey,
} from './commonColor';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;
const { isPad } = Platform;

export default {
  platformStyle,
  platform,
  // AndroidRipple
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',

  // Badge
  badgeBg: red,
  badgeColor: white,
  // New Variable
  badgePadding: platform === 'ios' ? 3 : 0,

  // Button
  btnFontFamily: platform === 'ios' ? 'System' : 'Roboto_medium',
  btnDisabledBg: darkGrey,
  btnDisabledClr: grey,

  // CheckBox
  checkboxRadius: platform === 'ios' ? 13 : 0,
  CheckboxRadius: isPad ? 16 : this.checkboxRadius,
  CheckboxBorderWidth: platform === 'ios' ? 1 : 2,
  checkboxPaddingLeft: platform === 'ios' ? 4 : 2,
  CheckboxPaddingLeft: isPad ? 6 : this.checkboxPaddingLeft,
  CheckboxPaddingBottom: platform === 'ios' ? 0 : 5,
  checkboxIconSize: platform === 'ios' ? 21 : 14,
  CheckboxIconSize: isPad ? 36 : this.checkboxIconSize,
  CheckboxIconMarginTop: platform === 'ios' ? undefined : 1,
  checkboxFontSize: platform === 'ios' ? 23 / 0.9 : 18,
  CheckboxFontSize: isPad ? 45 : this.checkboxFontSize,
  DefaultFontSize: 17,
  checkboxBgColor: lightBlue,
  checkboxSize: isPad ? 30 : 20,
  checkboxTickColor: white,

  // New Variable
  get defaultTextColor() {
    return this.textColor;
  },

  get btnPrimaryBg() {
    return brand;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return red;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return platform === 'ios' ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  buttonPadding: 6,

  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: white,

  // Font
  fontFamily: platform === 'ios' ? 'System' : 'Roboto',
  fontSizeBase: 15,

  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: 55,
  footerDefaultBg: 'transparent',

  // FooterTab
  tabBarTextColor: lightBlue,
  tabBarTextSize: platform === 'ios' ? 14 : 11,
  activeTab: platform === 'ios' ? blue : white,
  sTabBarActiveTextColor: blue,
  tabBarActiveTextColor: white,
  tabActiveBgColor: brand,

  // Tab
  tabDefaultBg: blue,
  topTabBarTextColor: purple,
  topTabBarActiveTextColor: white,
  topTabActiveBgColor: platform === 'ios' ? blue : undefined,
  topTabBarBorderColor: white,
  topTabBarActiveBorderColor: darkGrey,

  // Header
  toolbarBtnColor: white,
  toolbarDefaultBg: brand,
  toolbarHeight: platform === 'ios' ? 64 : 56,
  toolbarIconSize: platform === 'ios' ? 20 : 22,
  toolbarSearchIconSize: platform === 'ios' ? 20 : 23,
  toolbarInputColor: platform === 'ios' ? grey : white,
  searchBarHeight: platform === 'ios' ? 30 : 40,
  toolbarInverseBg: black,
  toolbarTextColor: white,
  iosStatusbar: 'light-content',
  toolbarDefaultBorder: darkGrey,
  get statusBarColor() {
    return color(this.toolbarDefaultBg).darken(0.2).hex();
  },

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: platform === 'ios' ? 30 : 28,
  iconMargin: 7,
  iconHeaderSize: platform === 'ios' ? 33 : 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: grey,
  inputSuccessBorderColor: green,
  inputErrorBorderColor: red,

  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return blackGrey;
  },

  inputGroupMarginBottom: 10,
  inputHeightBase: 50,
  inputPaddingLeft: 5,

  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: platform === 'ios' ? 37 : 30,
  lineHeight: platform === 'ios' ? 20 : 24,

  // List
  listBorderColor: darkGrey,
  listDividerBg: grey,
  listItemHeight: 45,
  listBtnUnderlayColor: grey,

  // Card
  cardBorderColor: darkGrey,

  // Changed Variable
  listItemPadding: platform === 'ios' ? 10 : 12,

  listNoteColor: darkGrey,
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: red,
  inverseProgressColor: brandSidebar,

  // Radio Button
  radioBtnSize: platform === 'ios' ? 25 : 23,
  radioSelectedColorAndroid: lightBlue,

  // New Variable
  radioBtnLineHeight: platform === 'ios' ? 29 : 24,

  radioColor: darkGrey,

  get radioSelectedColor() {
    return color(this.radioColor).darken(0.2).hex();
  },

  // Spinner
  defaultSpinnerColor: green,
  inverseSpinnerColor: brandSidebar,

  // Tabs
  tabBgColor: grey,
  tabFontSize: 15,
  tabTextColor: brandSidebar,

  // Text
  textColor: black,
  inverseTextColor: white,
  noteFontSize: 14,

  // Title
  titleFontfamily: platform === 'ios' ? 'System' : 'Roboto_medium',
  titleFontSize: platform === 'ios' ? 17 : 19,
  subTitleFontSize: platform === 'ios' ? 12 : 14,
  subtitleColor: white,

  // New Variable
  titleFontColor: white,

  // Other
  borderRadiusBase: 5,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,

  get darkenHeader() {
    return color(this.toolbarDefaultBg).darken(0.03).hex();
  },

  dropdownBg: black,
  dropdownLinkColor: black,
  inputLineHeight: 24,
  jumbotronBg: darkGrey,
  jumbotronPadding: 30,
  deviceWidth,
  deviceHeight,
  // use in components
  brandPrimary: brand,
  grey,
  brandDanger: red,
  black,
  brandWarning,
  brandSuccess,
  // New Variable
  inputGroupRoundedBorderRadius: 30,
};
