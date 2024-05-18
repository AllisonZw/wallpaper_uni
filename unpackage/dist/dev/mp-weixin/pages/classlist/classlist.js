"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uv_skeletons2 = common_vendor.resolveComponent("uv-skeletons");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uv_skeletons2 + _easycom_uni_load_more2)();
}
const _easycom_uv_skeletons = () => "../../uni_modules/uv-skeletons/components/uv-skeletons/uv-skeletons.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uv_skeletons + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "classlist",
  setup(__props) {
    const skeleton = common_vendor.ref([
      {
        type: "flex",
        gap: "5rpx",
        num: 3,
        children: [
          {
            type: "custom",
            style: "width:245rpx;marginLeft: 5rpx;height:440rpx;"
          },
          {
            type: "custom",
            style: "width:245rpx;marginLeft: 5rpx;height:440rpx;"
          },
          {
            type: "custom",
            style: "width:245rpx;marginLeft: 5rpx;height:440rpx;"
          }
        ]
      }
    ]);
    const classList = common_vendor.ref([]);
    const noData = common_vendor.ref(false);
    const queryParams = {
      pageNum: 1,
      pageSize: 12
    };
    common_vendor.onLoad((e) => {
      let { id = null, name = null, type = null } = e;
      if (type)
        queryParams.type = type;
      if (id)
        queryParams.classid = id;
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
      getClassList();
    });
    common_vendor.onReachBottom(() => {
      if (noData.value)
        return;
      queryParams.pageNum++;
      getClassList();
    });
    const getClassList = async () => {
      let res;
      if (queryParams.classid)
        res = await api_apis.apiGetClassList(queryParams);
      classList.value = [...classList.value, ...res.data];
      noData.value = res.data.length !== queryParams.pageSize;
      common_vendor.index.setStorageSync("storgClassList", classList.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          loading: !classList.value.length && !noData.value,
          skeleton: skeleton.value
        }),
        b: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: "/pages/preview/preview?id=" + item._id,
            c: item._id
          };
        }),
        c: classList.value.length || noData.value
      }, classList.value.length || noData.value ? {
        d: common_vendor.p({
          status: noData.value ? "noMore" : "loading"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/allison/Documents/StudyResource/Demo/uniapp/wallpaper/pages/classlist/classlist.vue"]]);
wx.createPage(MiniProgramPage);
