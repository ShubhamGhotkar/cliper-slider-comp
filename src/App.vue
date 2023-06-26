<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { userData } from "./data/userData";

export default {
  mounted() {},
  created() {
    window.addEventListener("message", (event) => {
      let { key, value } = event.data;
      console.log(event.data);

      let user = {
        id: value,
        VendorProductName: "[data-hb-id=Heading]",
        ClientFacingProductName: "",
        Vendor: "",
        Link: value,
        Category: "",
        Tags: "",
        MSRP: "",
        SKU: "[data-enzyme-id=breadcrumbList]",
        Price: "[data-enzyme-id=PriceBlock]",
        Description: "[data-enzyme-id=Collapse-Collapsible]",
        Dimensions: "",
        MaterialFinish: "",
        EstLeadTime: "",
        EstShippingCost: "",
        GeneralNotes: "",
        Corouser: "[data-enzyme-id=InitialImage]",
      };

      if (key === "localhost") {
        window.alert("localhost");
        let isUserExist = this.userExist("localHost", value);
        if (isUserExist) {
          console.log("exist");
        } else {
          userData.localHost.push(user);
          console.log("User Added to localHost", userData);
        }
      } else if (key === "www.wayfair.com") {
        let isUserExist = this.userExist("wayFair", value);
        if (isUserExist) {
          window.alert("exist");
        } else {
          userData.wayFair.push(user);
          console.log("User Added To wayFair", userData);
          event.source.postMessage({ action: "getUserData", key: user }, "*");
        }
      } else if (key === "browserData") {
        this.$store.commit("setTextData", value);
      }
    });
  },
  methods: {
    userExist(userArray, userId) {
      return userData[userArray].find((user) => user.id === userId);
    },
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
