// @flow

import color from 'color';

import { Platform, Dimensions, PixelRatio } from 'react-native';

import {
  brandInfo,
  brandSuccess,
  brandWarning,
  brandSidebar,
  brandLight,
  brand,
  darkGrey,
  white,
  red,
  black,
  lightBlue,
  purple,
  fullBlack,
  badgeBg,
  disabledBg,
  generateBorder,
  inputBorder,
  grey650,
} from 'commonColor';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX = platform === 'ios' && (deviceHeight === 812 || deviceWidth === 812);

export default {
  platformStyle,
  platform,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  // Accordion
  headerStyle: '#edebed',
  iconStyle: fullBlack,
  contentStyle: brandLight,
  expandedIconStyle: fullBlack,
  accordionBorderColor: '#d3d3d3',

  // Android
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  btnUppercaseAndroidText: true,

  // Badge
  badgeBg,
  badgeColor: white,
  badgePadding: platform === 'ios' ? 3 : 0,

  // Button
  btnFontFamily: platform === 'ios' ? 'System' : 'Roboto_medium',
  btnDisabledBg: disabledBg,
  buttonPadding: 6,
  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
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
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: white,
  cardBorderColor: generateBorder,
  cardBorderRadius: 2,
  cardItemPadding: platform === 'ios' ? 10 : 12,

  // CheckBox
  CheckboxRadius: platform === 'ios' ? 13 : 0,
  CheckboxBorderWidth: platform === 'ios' ? 1 : 2,
  CheckboxPaddingLeft: platform === 'ios' ? 4 : 2,
  CheckboxPaddingBottom: platform === 'ios' ? 0 : 5,
  CheckboxIconSize: platform === 'ios' ? 21 : 16,
  CheckboxIconMarginTop: platform === 'ios' ? undefined : 1,
  CheckboxFontSize: platform === 'ios' ? 23 / 0.9 : 17,
  checkboxBgColor: lightBlue,
  checkboxSize: 20,
  checkboxTickColor: white,

  // Color
  brandPrimary: brand,
  brandInfo,
  brandSuccess,
  brandDanger: red,
  brandWarning,
  brandDark: fullBlack,
  brandLight,

  // Container
  containerBgColor: white,

  // Date Picker
  datePickerTextColor: fullBlack,
  datePickerBg: 'transparent',

  // Font
  DefaultFontSize: 16,
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
  footerDefaultBg: platform === 'ios' ? brandLight : brand,
  footerPaddingBottom: 0,

  // FooterTab
  tabBarTextColor: platform === 'ios' ? '#6b6b6b' : purple,
  tabBarTextSize: platform === 'ios' ? 14 : 11,
  activeTab: platform === 'ios' ? brand : white,
  sTabBarActiveTextColor: brand,
  tabBarActiveTextColor: platform === 'ios' ? brand : white,
  tabActiveBgColor: platform === 'ios' ? '#cde1f9' : brand,

  // Header
  toolbarBtnColor: white,
  toolbarDefaultBg: platform === 'ios' ? brandLight : brand,
  toolbarHeight: platform === 'ios' ? 64 : 56,
  toolbarSearchIconSize: platform === 'ios' ? 20 : 23,
  toolbarInputColor: platform === 'ios' ? '#CECDD2' : white,
  searchBarHeight: platform === 'ios' ? 30 : 40,
  searchBarInputHeight: platform === 'ios' ? 30 : 50,
  toolbarBtnTextColor: platform === 'ios' ? brand : white,
  toolbarDefaultBorder: platform === 'ios' ? '#a7a6ab' : brand,
  iosStatusbar: platform === 'ios' ? 'dark-content' : 'light-content',
  get statusBarColor() {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: platform === 'ios' ? 30 : 28,
  iconHeaderSize: platform === 'ios' ? 33 : 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: inputBorder,
  inputSuccessBorderColor: brandSuccess,
  inputErrorBorderColor: badgeBg,
  inputHeightBase: 50,
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return darkGrey;
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: platform === 'ios' ? 20 : 24,
  listItemSelected: platform === 'ios' ? brand : brand,

  // List
  listBg: 'transparent',
  listBorderColor: '#c9c9c9',
  listDividerBg: brandLight,
  listBtnUnderlayColor: inputBorder,
  listItemPadding: platform === 'ios' ? 10 : 12,
  listNoteColor: '#808080',
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: badgeBg,
  inverseProgressColor: brandSidebar,

  // Radio Button
  radioBtnSize: platform === 'ios' ? 25 : 23,
  radioSelectedColorAndroid: brand,
  radioBtnLineHeight: platform === 'ios' ? 29 : 24,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: platform === 'ios' ? brandLight : brand,
  segmentActiveBackgroundColor: platform === 'ios' ? brand : white,
  segmentTextColor: platform === 'ios' ? brand : white,
  segmentActiveTextColor: platform === 'ios' ? white : brand,
  segmentBorderColor: platform === 'ios' ? brand : white,
  segmentBorderColorMain: platform === 'ios' ? darkGrey : brand,

  // Spinner
  defaultSpinnerColor: brand,
  inverseSpinnerColor: brandSidebar,

  // Tab
  tabDefaultBg: platform === 'ios' ? brandLight : brand,
  topTabBarTextColor: platform === 'ios' ? grey650 : '#b3c7f9',
  topTabBarActiveTextColor: platform === 'ios' ? brand : white,
  topTabBarBorderColor: platform === 'ios' ? darkGrey : white,
  topTabBarActiveBorderColor: platform === 'ios' ? brand : white,

  // Tabs
  tabBgColor: brandLight,
  tabFontSize: 15,

  // Text
  textColor: black,
  inverseTextColor: white,
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: platform === 'ios' ? 'System' : 'Roboto_medium',
  titleFontSize: platform === 'ios' ? 17 : 19,
  subTitleFontSize: platform === 'ios' ? 11 : 14,
  subtitleColor: platform === 'ios' ? darkGrey : white,
  titleFontColor: platform === 'ios' ? fullBlack : white,

  // Other
  borderRadiusBase: platform === 'ios' ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  black,
  inputGroupRoundedBorderRadius: 30,

  // iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34,
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21,
    },
  },
};
