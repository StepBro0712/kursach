<template>
  <div class='FifthScreen'>
    <TopText :topText='topText' />
    <H1 class='text-center'>Мы всега готовы ответить на вашы вопросы</H1>

    <form class='container-form' @submit.prevent='onSubmit'>
      <kurs-input
        class='inp-form-home'
        v-model.trim='name'
        type=''
        name='name'
        placehold='Ваше имя'
      />
      <input
        v-model.trim='phoneNumber'
        id='tel'
        class='inp-form-home'
        type='tel'
        required
        @input='validatePhoneNumber'
        placeholder='+7 9__ '
        v-mask="['+7 9## ###-##-##', '8(9##) ###-##-##']">

      <kurs-button :disabled='phoneNumberInvalid'>Отправить запрос</kurs-button>
    </form>
    <p class='sub-text' v-if='phoneNumberInvalid'>Номер телефона должен содержать 11 цифр</p>
  </div>
</template>

<script>
import {mask} from 'vue-the-mask'
import KursTextMultyModal from '@/components/modalWindows/textMultyModal'
import {mapMutations, mapState} from 'vuex'
import KursInput from "@/components/UI/Input.vue";
import TopText from "@/components/UI/TopText.vue";

export default {
  directives: {mask},
  name: 'Support',
  components: {KursInput, TopText, KursTextMultyModal},
  data() {
    return {
      topText: 'Мы поможем',
      name: '',
      phoneNumber: '',
      phoneNumberInvalid: false
    }
  },
  methods: {
    ...mapMutations({
      showCapcha: 'setSingleDialogVisible'
    }),
    validatePhoneNumber() {
      const totalCharacters = this.phoneNumber.length
      if (totalCharacters !== 16) {
        this.phoneNumberInvalid = true
        // Установить значение инпута обратно на предыдущее корректное значение
        this.$nextTick(() => {
          this.phoneNumber = this.phoneNumber.slice(0, 16)
        })
      } else {
        this.phoneNumberInvalid = false
      }
    },
    onSubmit() {
      if (this.capchaValid) {
        this.$store.dispatch('requestCall', {
          name: this.name,
          phone_number: this.phoneNumber
        }).then()
        this.name = ''
        this.phoneNumber = ''
      } else {
        this.showCapcha('dialogCapchaVisible')
      }
    }
  },
  computed: {
    ...mapState({
      capchaValid: state => state.dialogWindow.capchaValid
    })
  }
}
</script>

<style scoped>

.FifthScreen {
  max-width: 75%;
  margin: 0 auto;
  height: 20em;
  position: relative;
}

.container-form {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.inp-form-home {
  max-width: 18em;
  width: 100%;
  height: 52px;
  margin: 0;
  background: #E4F7FF;
  border-radius: 25px;

  text-indent: 15px;
}

.sub-text {
  color: white;

  bottom: 50%;
  left: 50%;
  text-align: center;
}

.text-center {
  color: #fff;
  position: relative;
  bottom: 1em;
  font-size: 20px;
}
</style>