<template>
  <div class="container">
    <div class="product">
      <div class="product_tittle">
        <div class="label-container">
          <label class="product_info mg">Product Image</label>
          <label class="product_info mg refresh-btn"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="refresh-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            <span class="refresh-text"> Refresh</span></label
          >
        </div>
      </div>

      <ImgSlider :imgArray="this.$store.state.textInputData.Corouser" />

      <label class="product_info mg">Clip additional images:</label>

      <div class="img-container">
        <div class="product_img-click" @click="handleSelectImage">
          <div class="product_img-click-dash">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="dash-curser"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"
              />
            </svg>
          </div>
        </div>
        <img
          :src="img"
          alt="select_img"
          :key="img"
          class="select-img"
          v-for="img in $store.state.textInputData.SelectImg"
        />
      </div>

      <InputSection :inputArray="cliperData" />
      <!--  -->
      <div class="flex btn-container">
        <button class="btn-cancle save-btn" @click="handleSave">
          Save Change
        </button>
        <button class="btn-cancle deleteBtn" @click="handleDelete">
          Cancle
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ImgSlider from "../components/Img-Slider.vue";
import InputSection from "../components/InputSection.vue";

export default {
  components: {
    ImgSlider,
    InputSection,
  },

  data() {
    return {
      cliperData: [
        {
          labelTittle: "Where do you want to save this item?",
          type: "select",
          option: ["My Library"],
          labelClasses: "product_info mg",
          inputClasses: "product_input dropdown",
          placeholder: "",
          prop: 'disabled selected value=""',
          clientsProp: [{ clientSeen: false, iIcon: false, isSelect: false }],
          setData: "",
        },
        {
          labelTittle: "Vendor Product Name:",
          type: "textArea",
          option: [],
          labelClasses: "product_info mg",
          inputClasses: "product_input text-area",
          placeholder: "",
          prop: "",
          clientsProp: [{ clientSeen: false, iIcon: false, isSelect: false }],
          setData: "VendorProductName",
        },
        {
          labelTittle: "Client-Facing Product Name:",
          type: "text",
          option: [],
          labelClasses: "product_info mg",
          inputClasses: "product_input",
          placeholder: "",
          prop: "",
          clientsProp: [{ clientSeen: false, iIcon: true, isSelect: false }],
          setData: "ClientFacingProductName",
        },
        {
          labelTittle: "Vendor:",
          type: "text",
          option: [],
          labelClasses: "product_info mg",
          inputClasses: "product_input",
          placeholder: "",
          prop: "",
          clientsProp: [{ clientSeen: false, iIcon: false, isSelect: false }],
          setData: "Vendor",
        },
        {
          labelTittle: "Link:",
          type: "text",
          option: [],
          labelClasses: "product_info mg",
          inputClasses: "product_input",
          placeholder: "",
          prop: "",
          clientsProp: [{ clientSeen: false, iIcon: false, isSelect: false }],
          setData: "Link",
        },
        {
          labelTittle: "Category:",
          type: "select",
          option: [
            "Choose or Create new category...",
            "Appliances",
            "Bed & Bath",
            "Furniture",
            "Kitchen",
            "Lightning",
            "Outdoor",
          ],
          labelClasses: "product_info mg",
          inputClasses: "product_input dropdown",
          placeholder: "",
          prop: 'disabled selected value=""',
          clientsProp: [{ clientSeen: false, iIcon: false, isSelect: false }],
          setData: "Category",
        },
        {
          labelTittle: "Tags:",
          type: "text",
          option: [],
          labelClasses: "product_info mg",
          inputClasses: "product_input",
          placeholder: "",
          prop: "",
          clientsProp: [{ clientSeen: false, iIcon: false, isSelect: false }],
          setData: "Tags",
        },
        {
          labelTittle: "",
          type: "unit-price",
          option: [],
          labelClasses: "",
          inputClasses: "",
          placeholder: "",
          prop: "",
          clientsProp: [{ clientSeen: false, iIcon: false, isSelect: false }],
          setData: "",
        },

        {
          labelTittle: "MSRP:",
          type: "text",
          option: [],
          labelClasses: "product_info mg",
          inputClasses: "product_input select",
          placeholder: "",
          prop: "",
          clientsProp: [{ clientSeen: false, iIcon: false, isSelect: true }],
          setData: "MSRP",
        },
        {
          labelTittle: "SKU:",
          type: "text",
          option: [],
          labelClasses: "product_info mg",
          inputClasses: "product_input select",
          placeholder: "",
          prop: "",
          clientsProp: [{ clientSeen: false, iIcon: false, isSelect: true }],
          setData: "SKU",
        },
        {
          labelTittle: "Description:",
          type: "textArea",
          option: [],
          labelClasses: "product_info mg",
          inputClasses: "product_info text-area select",
          placeholder: "",
          prop: "",
          clientsProp: [{ clientSeen: false, iIcon: false, isSelect: true }],
          setData: "Description",
        },
        {
          labelTittle: "Dimensions:",
          type: "text",
          option: [],
          labelClasses: "product_info mg",
          inputClasses: "product_input select",
          placeholder: "",
          prop: "",
          clientsProp: [{ clientSeen: false, iIcon: false, isSelect: true }],
          setData: "Dimensions",
        },
        {
          labelTittle: "Material/Finish:",
          type: "text",
          option: [],
          labelClasses: "product_info mg",
          inputClasses: "product_input select",
          placeholder: "",
          prop: "",
          clientsProp: [{ clientSeen: false, iIcon: false, isSelect: true }],
          setData: "MaterialFinish:",
        },
        {
          labelTittle: "Est. Lead Time:",
          type: "text",
          option: [],
          labelClasses: "product_info mg",
          inputClasses: "product_input",
          placeholder: "",
          prop: "",
          clientsProp: [{ clientSeen: true, iIcon: false, isSelect: false }],
          setData: "EstLeadTime",
        },
        {
          labelTittle: "Est. Shipping Cost:",
          type: "text",
          option: [],
          labelClasses: "product_info mg",
          inputClasses: "product_input",
          placeholder: "",
          prop: "",
          clientsProp: [{ clientSeen: true, iIcon: false, isSelect: false }],
          setData: "EstShippingCost",
        },
        {
          labelTittle: "General Notes:",
          type: "textArea",
          option: [],
          labelClasses: "product_info mg",
          inputClasses: "product_info text-area select",
          placeholder: "",
          prop: "",
          clientsProp: [{ clientSeen: true, iIcon: false, isSelect: true }],
          setData: "GeneralNotes",
        },
      ],
    };
  },

  methods: {
    handleSave() {
      window.parent.postMessage({ action: "save change", key: "" }, "*");
    },
    handleDelete() {
      window.parent.postMessage({ action: "delete frame", key: "" }, "*");
    },

    handleSelectImage() {
      window.parent.postMessage({ action: "select image", key: "" }, "*");
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  max-height: auto;
}

.product {
  width: 100%;
  min-height: 100vh;
  background: whitesmoke;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 4rem 0 2.5rem;
  background-color: #e8f4f5;
}

.label-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.slider-svg {
  height: 100%;
  width: 100%;
  stroke: white;
  stroke-width: 3;
}

.product_info {
  font-size: 1.7rem;
  font-weight: 400;
  color: gray;
}

.img-container {
  width: 100%;

  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
  height: auto;
}
.product_img {
  width: 29rem;
  height: 29rem;
  border: 1px solid rgb(159, 158, 158);
}
.product_img-click {
  order: 1;
}
.product_img-click,
.select-img {
  height: 5rem;
  width: 5rem;
  border: 1px solid rgb(172, 172, 172);
  margin-top: 0.5rem;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.product_img-click:active,
.product_img-click:visited {
  cursor: crosshair;
}

.product_img-click-dash {
  height: 2rem;
  width: 2rem;
  border: 2px dashed gray;
  position: relative;
}

.dash-curser {
  height: 1.3rem;
  width: 1.3rem;
  stroke: gray;
  font-weight: bolder;
  position: absolute;
  bottom: -0.7rem;
  right: -0.7rem;
  stroke-width: 4;
}

.btn-cancle {
  padding: 1rem 1.6rem;
  border: none;
  color: #00b2c2;
  background-color: #e8f4f5;
  font-size: 2rem;
  cursor: pointer;
}

.btn-container {
  width: 23vw;
  padding: 4rem 0;
}

.save-btn {
  background-color: #f74545;
  color: white;
  padding: 1rem 3rem;
}

.icon {
  position: absolute;
  height: 2.8rem;
  width: 2.8rem;
  top: 50%;
  font-weight: bold;
  cursor: pointer;
}

.icon:hover {
  background-color: rgba(154, 151, 151, 0.137);
  border-radius: 100px;
}

.left-icon {
  left: 0;
  transform: translate(-90%, -65%);
}

.right-icon {
  right: 0;
  transform: translate(100%, -50%);
}

.select-div {
  width: 2rem;
  height: 2rem;
  border: 2px dashed gray;
  transform: translateY(20%);
  position: relative;
}

.price-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.price-label-div {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.price-container-itm-1 {
  flex: 0 0 45%;
  display: grid;
  gap: 0.5rem;
}

.price-container-itm-2 {
  flex: 0 0 30%;
  display: grid;
  gap: 0.5rem;
}

.price-container-itm-3 {
  flex: 0 0 25%;
  display: grid;
  gap: 0.5rem;
}

.label-svg {
  height: 2rem;
  width: 2rem;
  cursor: pointer;
}

.font-blur {
  font-weight: 500;
  color: rgb(174, 174, 174);
  font-size: 1.5rem;
}

.font-light {
  font-size: 1.4rem;
}

.mg {
  display: block;
  margin-top: 1.8rem;
  margin-bottom: 0.3rem;
}

.pd {
  padding: 1rem;
}

.flex {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.select-div-container {
  position: relative;
}

.select-position {
  position: absolute;
  top: 2.5rem;
  right: -2.8rem;
  cursor: pointer;
}

.mar-t {
  top: 7rem;
}

.refresh-btn {
  color: red;
  font-weight: 600;
}

.refresh-icon {
  height: 2.2rem;
  width: 2.2;
  stroke: #00b2c2;
  stroke-width: 2;
  transform: translateY(0.5rem);
  cursor: pointer;
}

.refresh-icon:hover {
  background-color: #00b2c21c;
  border-radius: 100px;
}

.refresh-text {
  font-size: 1.7rem;
  color: #00b2c2;
}
</style>
