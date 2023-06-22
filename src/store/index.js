import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    textData: [],
  },
  getters: {},
  mutations: {
    setTextData(state, data) {
      state.textData = data;
    },
  },
  actions: {},
  modules: {},
});
