<template>
  <div class='main-third'>
      <Swiper
        effect='cube'
        :grab-cursor='true'
        :navigation='{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }'
      >
        <SwiperSlide v-for='photo in photos' :key='photo'>
          <img :src='requirePhoto(photo)' alt='img' />
        </SwiperSlide>
      </Swiper>
    </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import SwiperCore, { Pagination, Navigation, EffectCards} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

SwiperCore.use([EffectCards, Pagination, Navigation])

export default {
  name: 'Slider',
  components: {
    Swiper,
    SwiperSlide

  },
  data() {
    return {
      photos: ['slider1.png', 'slider2.png', 'slider3.png']
    }
  },
  methods: {
    requirePhoto(photo) {
      return require(`@/assets/home/thirdScreen/${photo}`)
    }
  }
}
</script>

<style scoped>

h1{
  color: #ffffff;
  position: absolute;
  top: 10%;
  left: 42%;
}

swiper {
  width: 1704px;
  height: 800px;
  overflow: hidden;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  margin: 2em 0 2em 0;
  border-radius: 0.5em;
}

</style>
