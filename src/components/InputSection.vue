<template>
  <div>
    <div v-for="(itm, indx) in inputArray" :key="indx" class="input-container">
      <div class="label-container">
        <label :class="itm.labelClasses">{{ itm.labelTittle }}</label>
        <label
          class="product_info mg font-blur"
          v-if="itm.clientsProp[0].clientSeen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="label-svg mar-t"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
          Not seen by clients</label
        >
        <label class="product_info mg" v-if="itm.clientsProp[0].iIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="label-svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </label>
      </div>
      <textarea
        :class="itm.inputClasses"
        cols="30"
        rows="4"
        v-if="itm.type === 'textArea'"
      ></textarea>

      <!--  -->
      <select :class="itm.inputClasses" v-if="itm.type === 'select'">
        <option
          v-for="(option, ind) in itm.option"
          :key="ind"
          :value="option"
          :class="itm.inputClasses"
        >
          {{ option }}
        </option>
      </select>

      <!--  -->
      <input type="text" :class="itm.inputClasses" v-if="itm.type === 'text'" />
      <!--  -->
      <div class="price-container" v-if="false">
        <div class="price-container-itm-1">
          <div class="price-label-div">
            <span class="product_info mg font-light">Unit Price:</span>
            <div class="select-div">
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
          <input type="text" class="product_input pd" placeholder="$ 1299.99" />
        </div>
        <div class="price-container-itm-2">
          <label class="product_info mg markup-div font-light">Markup:</label>
          <input type="text" class="product_input pd" placeholder="0.0 %" />
        </div>
        <div class="price-container-itm-3">
          <label class="product_info mg font-light">Client price:</label>
          <input type="text" class="product_input pd" placeholder="$ 1299.99" />
        </div>
      </div>
      <!--  -->
      <div
        class="select-container"
        v-if="itm.clientsProp[0].isSelect"
        @click="changeCursor(itm.setData)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="svg-arrow"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["inputArray"],
  methods: {
    changeCursor(e) {
      window.parent.postMessage({ action: "select text", key: e }, "*");
      document.body.style.cursor = "crosshair";
      
    },
  },
};
</script>

<style scoped>
.input-container {
  position: relative;
}
.product_info {
  font-size: 1.7rem;
  font-weight: 400;
  color: gray;
}
.mg {
  display: block;

  margin-top: 1.8rem;
  margin-bottom: 0.3rem;
}

.product_input {
  width: 100%;
  padding: 1rem 0.2rem;
  border-radius: 0.8rem;
  border: 2px solid rgb(212, 211, 211);
}
.text-area {
  width: 100%;
  resize: none;
  border-radius: 0.8rem;
  overflow-y: auto;
  border: 2px solid rgb(212, 211, 211);
}

.dropdown {
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1rem;
  cursor: pointer;
  color: gray;
}
.dropdown:focus,
.dropdown:active {
  border: 1px solid gray;
}
.dropdown-input {
  width: 60%;
  padding: 1rem;
  border: 1px solid gray;
}
.dropdown {
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1rem;
  cursor: pointer;
  color: gray;
}

.label-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.label-svg {
  height: 2rem;
  width: 2rem;
  cursor: pointer;
}

.select-container {
  height: 2rem;
  width: 2rem;
  border: 2px dashed gray;

  position: absolute;
  top: 60%;
  right: -2.7rem;
  transform: translate(-50% -50%);

  cursor: pointer;
}

.select-container:active,
.select-container::selection {
  cursor: crosshair;
  scale: 1.05;
}
.svg-arrow {
  height: 1.3rem;
  width: 1.3rem;
  stroke: gray;
  font-weight: bolder;
  position: absolute;
  bottom: -0.8rem;
  right: -0.8rem;
  stroke-width: 5;
}
</style>
