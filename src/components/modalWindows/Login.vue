<template>
  <div class='login-form'>
    <h2>Вход</h2>
    <div v-if='validationErrors' style='color: red'>
      <p>Неверные логин или пароль</p>
    </div>
    <form @submit.prevent='submitForm'>
      <div class='register-link'>
        <router-link to='#' @click='showDialogRegisterWindow'>Хотите зарегистрироваться?</router-link>
      </div>
      <kursInput
        v-model.trim='login'
        type='text'
        name='login'
        placehold='Логин'></kursInput>
      <div class='restore-password-link'>
        <a href='https://spacgun.ru/forgot-password' @click='hideDialogWindow'>Забыли пароль?
        </a>
      </div>
      <kurs-input
        v-model.trim='password'
        type='password'
        name='password'
        placehold='Пароль'></kurs-input>
      <kurs-button :disabled='isLoading'>Войти</kurs-button>
    </form>
  </div>
</template>

<script>

import KursRegister from '@/components/modalWindows/Register'
import {mapMutations, mapState} from 'vuex'
import KursInput from "@/components/UI/Input.vue";

export default {
  name: 'kursLogin',
  components: {KursInput, KursRegister},
  props: {},
  data() {
    return {
      login: '',
      password: ''

    }
  },
  methods: {
    submitForm() {
      this.$store.dispatch('login', {
        login: this.login,
        password: this.password
      })
        .then(user => {
          console.log('user logged', user)
        })
      this.login = ''
      this.password = ''
    },

    ...mapMutations(['setSingleDialogVisible']),

    showDialogRegisterWindow() {
      this.setSingleDialogVisible(this.dialogWindows[0].name)
    }
  },
  computed: {
    ...mapState({
      dialogWindows: state => state.dialogWindow.dialogWindows,
      isSubmitting: state => state.global.isLoading,
      validationErrors: state => state.auth.validationErrors
    }),

    isLoading() {
      return this.$store.state.global.isLoading
    }

  }
}
</script>

<style scoped>

a{
  margin:0.5em 0 0.5em 0 ;
  text-decoration: none;
  color:white;
}

a:hover{
  margin:0.5em 0 0.5em 0 ;
  text-decoration: none;
  color:#a02828;
}

h2 {
  color: white;
  text-align: center;
  margin-bottom: 20px;
  text-decoration: none;
}

.register-link {
  display: flex;
  right: 0;

}

.register-link > router-link {
  align-items: flex-end;
}
kurs-input{

}

.login-form {
  max-width: 300px;
  min-width: 300px;
  margin: 0 auto;
}

</style>
