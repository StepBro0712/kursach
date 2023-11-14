<template>
  <div class='main-third'>
    <div class='swipe-and-bg'>
      <Swiper
        effect='cube'
        :grab-cursor='true'

        :pagination='{ clickable: true }'
        :navigation='{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }'
      >
        <SwiperSlide v-for='photo in photos' :key='photo'>
          <img :src='requirePhoto(photo)' alt='img' />
        </SwiperSlide>
      </Swiper>
      <div class='bgSlide'></div>
      <div class='swiper-button-prev'></div>
      <div class='swiper-button-next'></div>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import SwiperCore, { Pagination, Navigation, EffectCards} from 'swiper'

import 'swiper/css/effect-cube'
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
      photos: ['slide1.png', 'slide2.png', 'slide3.png']
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
.main-third {
  height: 60em;

}
h1{
  color: #ffffff;
  position: absolute;
  top: 10%;
  left: 42%;
}

.swiper {
  width: 1704px;
  height: 800px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

.bgSlide {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1704px;
  height: 800px;
  filter: blur(75px);
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

}

.swiper-button-prev {
  left: 20px;
}

.swiper-button-next {
  right: 20px;
}
</style>
