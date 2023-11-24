<template>
  <div class='best'>

    <div class='best top-icons'>
      <div class='v-container v-container-1'>
        <ul>
          <li><div class='v-container v-container-2'>
            <product :product-text='"PERFORMANCE L\n"+
        "300.000₽"'
                     :product-img="require('@/assets/home/icons/products/p1.png')" />
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
            <product :product-text='"PERFORMANCE L\n"+
        "300.000₽"'
                     :product-img="require('@/assets/home/icons/products/p2.png')" />
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
            <product :product-text='"PERFORMANCE L\n"+
        "300.000₽"'
                     :product-img="require('@/assets/home/icons/products/p3.png')" />
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
            <product :product-text='"PERFORMANCE L\n"+
        "300.000₽"'
                     :product-img="require('@/assets/home/icons/products/p4.png')" />
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
            <product :product-text='"PERFORMANCE L\n"+
        "300.000₽"'
                     :product-img="require('@/assets/home/icons/products/p5.png')" />
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
  name: 'Bests',
  components: {TopText, product},
  data() {
    return {
      topText: 'Наши лучшие сборки'
    }
  }
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
.best {
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