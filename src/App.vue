<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
window.parent.postMessage("Hello from parent window!", "*");

export default {
  mounted() {
    let m = JSON.parse(localStorage.getItem("textArray"));
    console.log(m);
    // const urlParams = new URLSearchParams(window.location.search);
    // const data1 = urlParams.get("data1");
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
