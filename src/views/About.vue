<template>
  <div class='sup'>
    <h1 style='color: white'>Часто задаваемые вопросы</h1>
    <Questions/>
  </div>
  <Support/>


</template>

<script>
import Support from '@/components/homePage/Support.vue'
import Questions from '@/components/help/Questions.vue'
export default {
  name: 'About',
  components: {
    Questions,
    Support,
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
.sup {
  height: 50em;
  margin: 0 auto;
}
h1{
  text-align: center;
  margin: 1em 0 1em 0;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
}
</style>


