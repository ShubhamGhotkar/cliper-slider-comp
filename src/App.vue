<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    // window.parent.postMessage("Hello from the iframe!", "*");
    // window.addEventListener("message", function (event) {
    //   let data = event.data;
    //   console.log(data);
    // });
  },
  mounted() {
    // window.parent.postMessage("Hello from the iframe!", "*");

    // var topLevelElement = this.$el.parentNode; // Access the top-level element
    // console.log(topLevelElement);
    // Get the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);

    // Access the individual query parameters
    const data1 = urlParams.get("data1");
    const data2 = urlParams.get("data2");

    console.log(data1); // Output: value1
    console.log(data2); // Output: value2
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
