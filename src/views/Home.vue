<template>
  <div class='main'>
    <Slider />
    <News @scroll-to-element='scrollToElement' />
    <Marks />
    <Support/>

  </div>
</template>

<script>
import kursFirstScreen from '@/components/homePage/News.vue'
import kursThirdScreen from '@/components/homePage/Slider.vue'
import Support from '@/components/homePage/Support.vue'
import Marks from "@/components/homePage/Marks.vue";
import News from "@/components/homePage/News.vue";
import Slider from "@/components/homePage/Slider.vue";

export default {
  name: 'Home',
  components: {
    Slider,
    //News,
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
