<template>
  <div class='bestsSecond'>

    <div class='best2 top-icons'>
      <div class='v-container v-container-1'>
        <ul>
          <li><div class='v-container v-container-2'>
            <product :product-text='"BLACKWIDOW 350.000₽"'
                     :product-img="require('@/assets/home/icons/products/p6.png')" />
          </div></li>
          <li><p>ПРОЦЕССОР:
            AMD Ryzen 7 5800X
            16GB DDR4 3000Mhz
            RX 6800 XT 16G
            SSD M.2 480GB
            WD Blue 2TB
          </p></li>
        </ul>
      <ul>
        <li><div class='v-container v-container-2'>
          <product :product-text='"BLACKWIDOW 300.000₽"'
                   :product-img="require('@/assets/home/icons/products/p7.png')" />
        </div></li>
        <li><p>ПРОЦЕССОР:
          AMD Ryzen 7 5800X
          16GB DDR4 3000Mhz
          RX 6800 XT 16G
          SSD M.2 480GB
          WD Blue 2TB
        </p></li>
      </ul>
        <ul>
          <li><div class='v-container v-container-2'>
            <product :product-text='"BLACKWIDOW 250.000₽"'
                     :product-img="require('@/assets/home/icons/products/p8.png')" />
          </div></li>
          <li><p>ПРОЦЕССОР:
            AMD Ryzen 7 5800X
            16GB DDR4 3000Mhz
            RX 6800 XT 16G
            SSD M.2 480GB
            WD Blue 2TB
          </p></li>
        </ul>
        <ul>
          <li><div class='v-container v-container-2'>
            <product :product-text='"BLACKWIDOW 200.000₽"'
                     :product-img="require('@/assets/home/icons/products/p9.png')" />
          </div></li>
          <li><p>ПРОЦЕССОР:
            AMD Ryzen 7 5800X
            16GB DDR4 3000Mhz
            RX 6800 XT 16G
            SSD M.2 480GB
            WD Blue 2TB
          </p></li>
        </ul>
        <ul>
          <li><div class='v-container v-container-2'>
            <product :product-text='"BLACKWIDOW 150.000₽"'
                     :product-img="require('@/assets/home/icons/products/p10.png')" />
          </div></li>
          <li><p>ПРОЦЕССОР:
           AMD Ryzen 7 5800X
            16GB DDR4 3000Mhz
            RX 6800 XT 16G
            SSD M.2 480GB
            WD Blue 2TB
          </p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import product from '@/components/UI/Product.vue'
import TopText from "@/components/UI/TopText.vue";

export default {
  name: 'BestsSecond',
  components: {TopText, product},
  data() {
    return {
      topText: 'Наши лучшие сборки',

    }
  },
}
</script>

<style scoped>

p{
  color: white;
}

h1{
  color: #ffffff;
  position: absolute;
}
.best2 {
  background-size: cover;
  background-position: center;
  height: 35em;
  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(10, 10, 10, 0.5);
  border-radius: 0.5em;
}
ul{
  list-style:none;
  margin-left: -2em;
}
li:nth-child(2)
{
  margin-left: 5em;
  width: 10em;
  text-align: left;
}
.v-container {
  display: flex;
}
</style>