  <template>
    <TopText :topText='topText' />
  <div class='marks'>

    <div class='icons top-icons'>
      <div class='v-container v-container-1'>
        <kurs-icon :icon-text='"Мега крутые компы"'
                   :icon-img="require('@/assets/home/icons/marks/m1.png')" />
      </div>
      <div class='v-container v-container-2'>
        <kurs-icon :icon-text='"Спасибо, собрали прекраснейший ПК"'
                   :icon-img="require('@/assets/home/icons/marks/m2.png')" />
      </div>


    <div class='v-container v-container-3'>
      <kurs-icon :icon-text='"Это действительно лучшая компания в городе"'
                 :icon-img="require('@/assets/home/icons/marks/m3.png')" />
    </div>

    </div>
  </div>
</template>

<script>
import kursIcon from '@/components/UI/Icon.vue'
import TopText from "@/components/UI/TopText.vue";

export default {
  name: 'Marks',
  components: {TopText, kursIcon},
  data() {
    return {
      topText: 'Ваши отзывы'
    }
  }
}
</script>

<style scoped>


h1{
  color: #ffffff;
  position: absolute;
}
.marks {
  background-color: black;
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.icons {
  display: flex;
  justify-content: space-between;

}

.icon-text{
  font-size: 2em;
}

.v-container {
  display: flex;

}

</style>