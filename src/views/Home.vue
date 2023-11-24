<template>
  <Slider />
  <Products/>
    <Marks />
    <Support/>

</template>

<script>
import kursThirdScreen from '@/components/homePage/Slider.vue'
import Products from "@/components/homePage/Products.vue";
import Support from '@/components/homePage/Support.vue'
import Marks from "@/components/homePage/Marks.vue";
import Slider from "@/components/homePage/Slider.vue";


export default {
  name: 'Home',
  components: {
    Slider,
    Products,
    Marks,
    Support,
    kursThirdScreen,

  },
  methods: {
    scrollToElement() {
      this.$nextTick(() => {
        const fifthScreenElement = document.getElementById('fifthScreenElement')

        if (fifthScreenElement) {
          window.scrollTo({
            top: fifthScreenElement.offsetTop,
            behavior: 'smooth'
          })
        }
      })
    }
  }
}
</script>
