  <template>

  <div class='twice_home_screen'>

    <div class='icons top-icons'>
      <div class='v-container v-container-1'>
        <kurs-icon :icon-text='"Мега крутые компы"'
                   :icon-img="require('@/assets/home/icons/marks/m1.png')" />
      </div>
      <kurs-topic-text :topText='topText' />
      <div class='v-container v-container-2'>
        <kurs-icon :icon-text='"Спасибо, собрали прекраснейший ПК"'
                   :icon-img="require('@/assets/home/icons/marks/m2.png')" />
      </div>
    </div>

    <div class='v-container v-container-3'>
      <kurs-icon :icon-text='"Это действительно лучшая компания в городе"'
                 :icon-img="require('@/assets/home/icons/marks/m3.png')" />
    </div>


  </div>
</template>

<script>
import kursIcon from '@/components/UI/Icon.vue'
import KursTopicText from "@/components/UI/TopicText.vue";

export default {
  name: 'Marks',
  components: {KursTopicText, kursIcon},
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
.twice_home_screen {
  background-color: black;
  background-size: cover;
  background-position: center;
  height: 920px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.icons {
  display: flex;
  justify-content: space-between;

}

.v-container {
  display: flex;

}

</style>