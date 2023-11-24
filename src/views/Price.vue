<template>
  <div class='b'>
    <h1 style='color: white'>Лучшее из нашей коллекции</h1>
  </div>
  <Bests/>
  <Bests2/>

</template>

<script>
import Bests from "@/components/homePage/Bests.vue";
import Bests2 from "@/components/homePage/Bests2.vue";
export default {
  name: 'Price',
  components: {
    Bests2,
    Bests,
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

<style scoped>
h1{
  text-align: center;
  margin: 1em 0 1em 0;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
}
</style>


