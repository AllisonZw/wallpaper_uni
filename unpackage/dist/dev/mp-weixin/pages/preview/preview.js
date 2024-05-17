"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_dateformat2 + _easycom_uni_icons2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_uni_icons + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const infoPopup = common_vendor.ref(null);
    const scorePopup = common_vendor.ref(null);
    const userScore = common_vendor.ref(0);
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    const clickInfo = () => {
      infoPopup.value.open();
    };
    const clickInfoClose = () => {
      infoPopup.value.close();
    };
    const clickScore = () => {
      scorePopup.value.open();
    };
    const clickScoreClose = () => {
      scorePopup.value.close();
    };
    const submitScore = () => {
      console.log("评分了");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(5, (item, k0, i0) => {
          return {};
        }),
        b: common_vendor.o(maskChange),
        c: common_assets._imports_0$2,
        d: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        e: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        f: common_vendor.p({
          type: "info",
          size: "28"
        }),
        g: common_vendor.o(clickInfo),
        h: common_vendor.p({
          type: "star",
          size: "28"
        }),
        i: common_vendor.o(clickScore),
        j: common_vendor.p({
          type: "download",
          size: "23"
        }),
        k: maskState.value,
        l: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        m: common_vendor.o(clickInfoClose),
        n: common_vendor.p({
          readonly: true,
          touchable: true,
          value: "3.5",
          size: "16"
        }),
        o: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        p: common_vendor.sr(infoPopup, "2dad6c07-5", {
          "k": "infoPopup"
        }),
        q: common_vendor.p({
          type: "bottom"
        }),
        r: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        s: common_vendor.o(clickScoreClose),
        t: common_vendor.o(($event) => userScore.value = $event),
        v: common_vendor.p({
          allowHalf: true,
          modelValue: userScore.value
        }),
        w: common_vendor.t(userScore.value),
        x: common_vendor.o(submitScore),
        y: !userScore.value,
        z: common_vendor.sr(scorePopup, "2dad6c07-8", {
          "k": "scorePopup"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"], ["__file", "/Users/allison/Documents/StudyResource/Demo/uniapp/wallpaper/pages/preview/preview.vue"]]);
wx.createPage(MiniProgramPage);
