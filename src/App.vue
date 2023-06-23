<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// import store from "./store/index";

// window.addEventListener("message", (event) => {
//   if (event.data.action === "page data") {
//     store.commit("setTextData", event.data.value);
//     // console.log();
//   }
// });
export default {
  mounted() {
    // window.parent.postMessage({ action: "get data", key: "" }, "*");
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}
</style>
