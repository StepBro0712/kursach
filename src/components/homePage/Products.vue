<template>

  <div class='product'>
    <kurs-topic-text :topText='topText' />

    <div class='product top-icons'>
      <div class='v-container v-container-1'>
        <product :product-text='"1111111111111"'
                   :product-img="require('@/assets/home/icons/products/p1.png')" />
      </div>
      <div class='v-container v-container-2'>
        <product :product-text='"2222222222222222222"'
                   :product-img="require('@/assets/home/icons/products/p2.png')" />
      </div>
    </div>
      <div class='v-container v-container-3'>
        <product :product-text='"3333333333333333"'
                   :product-img="require('@/assets/home/icons/products/p3.png')" />
      </div>

      <div class='v-container v-container-4'>
        <product :product-text='"44444444444444444"'
                   :product-img="require('@/assets/home/icons/products/p4.png')" />
      </div>

      <div class='v-container v-container-5'>
        <product :product-text='"5555555555555555555"'
                   :product-img="require('@/assets/home/icons/products/p5.png')" />
      </div>

  </div>
</template>

<script>
import product from '@/components/UI/Product.vue'
import KursTopicText from "@/components/UI/TopicText.vue";

export default {
  name: 'Products',
  components: {KursTopicText, product},
  data() {
    return {
      topText: 'Наши лучшие сборки'
    }
  }
}
</script>

<style scoped>


h1{
  color: #ffffff;
  position: absolute;
}
.product {
  background-color: black;
  background-size: cover;
  background-position: center;
  height: 920px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

}

.v-container {
  display: flex;

}

</style>