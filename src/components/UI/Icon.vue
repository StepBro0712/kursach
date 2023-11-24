<template>
  <div class='container_icon'>
    <div class='bgIcon'></div>
    <div>
      <img :src='iconImg' alt='makrs' class='g'>
      <p class='icon_text' v-html='iconText'></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kursIcon',
  props: {
    iconImg: {},
    iconText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.container_icon {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.bgIcon {
  margin: 0 7.5em 0 7.5em;
  width: 20em;
  height: 12em;
  background: #a02828;
  filter: blur(9em);
  border-radius: 2px;

}

.container_icon > div:nth-child(2) {
  position: absolute;
  text-align: center;
}

.icon_text {
  color: white;
  font-size: 1.5em;
  width: 15em;
}

.g {
  margin-bottom: 10px;
}
</style>
