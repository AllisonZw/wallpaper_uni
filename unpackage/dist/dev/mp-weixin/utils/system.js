"use strict";
const common_vendor = require("../common/vendor.js");
const STSTEM_INFO = common_vendor.index.getSystemInfoSync();
const getStatusBarHeight = () => STSTEM_INFO.statusBarHeight || 15;
const getTitleBarHeight = () => {
  if (common_vendor.index.getMenuButtonBoundingClientRect()) {
    const { top, height } = common_vendor.index.getMenuButtonBoundingClientRect();
    return (top - getStatusBarHeight()) * 2 + height || 0;
  } else {
    return 40;
  }
};
const navBarHeight = () => getStatusBarHeight() + getTitleBarHeight();
exports.getStatusBarHeight = getStatusBarHeight;
exports.getTitleBarHeight = getTitleBarHeight;
exports.navBarHeight = navBarHeight;
