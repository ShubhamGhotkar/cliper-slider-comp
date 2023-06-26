import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { userData } from "./data/userData";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  userData,
  render: (h) => h(App),
}).$mount("#app");
