import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    textInputData: {
      id: "",
      VendorProductName: "",
      ClientFacingProductName: "",
      Vendor: "",
      Link: window.location.href,
      Category: "",
      Tags: "",
      MSRP: "",
      SKU: "",
      Price: "",
      Description: "",
      Dimensions: "",
      MaterialFinish: "",
      EstLeadTime: "",
      EstShippingCost: "",
      GeneralNotes: "",
      Corouser: [],
    },
    images: [],
  },
  getters: {},
  mutations: {
    setTextData(state, data) {
      state.textInputData = data;
    },
    setImgData(state, data) {
      state.images = data;
    },
  },
  actions: {},
  modules: {},
});
