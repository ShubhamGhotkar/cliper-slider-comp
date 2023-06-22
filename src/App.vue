<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// import store from "./store/index";

export default {
  mounted() {},

  created() {
    window.addEventListener("message", function (event) {
      if (event.data.key == "textData") {
        this.textData = event.data.value;

        // store.commit("setTextData", event.data.value);
      }

      // console.log(event.data);
    });
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
