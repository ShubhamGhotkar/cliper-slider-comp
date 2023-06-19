<template>
  <div class="img-container">
    <img :src="imgArray[imgIndex]" alt="product_img" class="product_img" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="right-icon icon"
      @click="setSrcIndex('right')"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="left-icon icon"
      @click="setSrcIndex('left')"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: ["imgArray"],

  data() {
    return {
      imgIndex: 0,
    };
  },

  methods: {
    setSrcIndex(action) {
      if (action === "left") {
        this.imgIndex--;
        if (this.imgIndex <= 0) {
          this.imgIndex = this.imgArray.length - 2;
        }
      } else if (action === "right") {
        this.imgIndex++;
        if (this.imgIndex === this.imgArray.length - 1) {
          this.imgIndex = 0;
        }
      }
    },
  },
};
</script>

<style scoped>
.img-container {
  margin-top: 1.5rem;
  position: relative;
}
.product_img {
  width: 29rem;
  height: 29rem;
  border: 1px solid rgb(159, 158, 158);
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
  transform: translate(50%, -50%);
}
</style>
