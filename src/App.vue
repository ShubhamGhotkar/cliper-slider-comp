<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    window.parent.postMessage("Hello from parent window!", "*");

    window.addEventListener("message", function (event) {
      console.log("vue project", event.data);
    });
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const data1 = urlParams.get("data1");

    console.log(data1);
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
