import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    textInputData: {},
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
