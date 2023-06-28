<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {},
  created() {
    window.addEventListener("message", (event) => {
      let { key, value } = event.data;
      console.log("event.data", event.data);
      if (key === "setData") {
        event.source.postMessage({ action: "getUserData", key: value }, "*");
      } else if (key === "browserData") {
        this.$store.commit("setTextData", value);
      } else if (key === "updateData") {
        event.source.postMessage({ action: "getUserData", key: value }, "*");
      } else if (key === "imgData") {
        event.source.postMessage({ action: "getUserData", key: value }, "*");
      }
    });
  },
  methods: {},
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
