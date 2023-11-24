<template>
  <TopText :topText='topText' />
  <div class='product'>

    <div class='product top-icons'>
      <div class='v-container v-container-1'>
        <product :product-text='"PERFORMANCE XL\n"+
        "350.000₽"'
                   :product-img="require('@/assets/home/icons/products/p1.png')" />
      </div>
      <div class='v-container v-container-2'>
        <product :product-text='"PERFORMANCE L\n"+
      "300.000₽"'
                   :product-img="require('@/assets/home/icons/products/p2.png')" />
      </div>
      <div class='v-container v-container-3'>
        <product :product-text='"PERFORMANCE M\n"+
      "200.000₽"'
                   :product-img="require('@/assets/home/icons/products/p3.png')" />
      </div>

      <div class='v-container v-container-4'>
        <product :product-text='"PERFORMANCE S\n"+
      "100.000₽"'
                   :product-img="require('@/assets/home/icons/products/p4.png')" />
      </div>

      <div class='v-container v-container-5'>
        <product :product-text='"PERFORMANCE XS\n"+
      "80.000₽"'
                   :product-img="require('@/assets/home/icons/products/p5.png')" />
      </div>
    </div>


  </div>
</template>

<script>
import product from '@/components/UI/Product.vue'
import TopText from "@/components/UI/TopText.vue";

export default {
  name: 'Products',
  components: {TopText, product},
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
  background-size: cover;
  background-position: center;
  height: 26em;
  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(10, 10, 10, 0.5);
  border-radius: 0.5em;

}



.v-container {
  display: flex;
}
</style>