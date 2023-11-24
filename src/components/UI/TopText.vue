<template>
  <p class='text'>{{ topText }}</p>
</template>

<script>
export default {
  props: {
    topText: {
      type: String,
      required: true
    }
  },
  name: 'TopText'
}
</script>

<style scoped>
.text {
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 113.19%;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  margin: 1em 0 1.5em 0;
}
</style>