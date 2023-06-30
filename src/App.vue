<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { defaultConfig } from "../src/config/defaultConfi";
import { userConfigue } from "../src/config/userConfi";
export default {
  data() {
    return {
      updateData: {},
    };
  },
  created() {
    if (!JSON.parse(localStorage.getItem("browserCliperConfig"))) {
      localStorage.setItem(
        "browserCliperConfig",
        JSON.stringify(defaultConfig)
      );
    }
  },
  mounted() {
    window.addEventListener("message", (event) => {
      let { key, value } = event.data;

      console.log(event.data);
      if (key === "setData") {
        event.source.postMessage({ action: "getUserData", key: value }, "*");
      } else if (key === "browserData") {
        this.$store.commit("setTextData", value);
      } else if (key === "updateData") {
        let { keys, path, id } = value;

        this.updateData[keys] = path;
        event.source.postMessage(
          { action: "getUserData", key: this.updateData },
          "*"
        );
        console.log(id);
      } else if (key === "imgData") {
        let { id, imgSrc } = value;
        let data = JSON.parse(localStorage.getItem("browserCliperConfig"));
        for (let key in data) {
          if (data[key].id === id) {
            data[key].SelectImg.push(imgSrc);

            event.source.postMessage(
              { action: "getUserData", key: data[key] },
              "*"
            );
          }
        }
        localStorage.setItem("browserCliperConfig", JSON.stringify(data));
      } else if (key === "updateDataToUserConfigue") {
        if (this.updateData && this.updateData !== {}) {
          let data = userConfigue;
          for (let entry in data) {
            if (data[entry].id === this.updateData.id) {
              data[entry] = this.updateData;
            }
          }
          this.userConfigue = data;
          localStorage.setItem(
            "browserCliperConfig",
            JSON.stringify(userConfigue)
          );
          this.updateData = {};
        }
      } else if (key === "sentData") {
        let data = JSON.parse(localStorage.getItem("browserCliperConfig"));
        if (data) {
          for (let entry in data) {
            if (data[entry].id === value) {
              this.updateData = data[entry];
              event.source.postMessage(
                { action: "getUserData", key: data[entry] },
                "*"
              );
            }
          }
          this.defaultConfig = data;
        }
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
