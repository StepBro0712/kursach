<template>
  <div class='container_product'>
    <div class='bgProduct'></div>
    <div>
      <img :src='productImg' alt='product' class='p'>
      <p class='product_text' v-html='productText'></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  props: {
    productImg: {},
    productText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.container_product {
  justify-content: center;
  align-items: center;
  position: relative;
}
.container_product:hover {
  margin-top: 2em;
  font-size: 1em;
  transform: scale(1.15);
  transform-origin: 50% 70%;
}

.bgProduct {
  width: 19em;
  height: 20px;

}

.container_icon > div:nth-child(2) {
  position: absolute;
  text-align: center;

}

.product_text {
  color: white;
}

.p {

  margin: 0.5em 0 0.5em 0;
  border-radius: 0.5em;
}
</style>
