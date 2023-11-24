<template>
  <header class='navbar navbar-expand-lg navbar-black bg-black'>
    <div class='container'>
      <router-link class='navbar-brand' to='/'>
        <img src='@/assets/logo1.png' width="150"  height="200" alt='Logo' class='logo-img'>
      </router-link>
      <ul class='navbar-nav mr-auto'>
        <li class='nav-item'>
          <router-link class='nav-link' :to='`/price`'>ГОТОВЫЕ ВАРИАНТЫ</router-link>
        </li>
        <li class='nav-item'>
          <router-link class='nav-link' :to='`/creatPc`'>СОЗДАТЬ СВОЙ ДИЗАЙН</router-link>
        </li>
        <li class='nav-item'>
          <router-link class='nav-link' :to='`/basket`'>ОПЛАТА</router-link>
        </li>
        <li class='nav-item'>
          <router-link class='nav-link' :to='`/about`'>ПОДДЕРЖКА</router-link>
        </li>
      </ul>
      <!-- Личный кабинет и социальные сети -->
      <ul class='navbar-nav ml-auto'>
        <li class='nav-item'>
          <a class='nav-link' href='#'>
            <img src='@/assets/header/user.svg' alt='user' class='logo-img'>
            <router-link
              class='nav-link'
              v-if='loggedUser'
              style='display: inline; text-decoration: none'
              :to='`/cabinet`'>
              {{ loggedUser.login }}
            </router-link>
            <span v-else @click='showDialogLoginWindow'>Мой профиль</span>
          </a>
        </li>

      </ul>
    </div>
  </header>
  <kurs-main-modal />
</template>
<script>
import KursLogin from '@/components/modalWindows/Login'
import KursRegister from '@/components/modalWindows/Register'
import KursTextMultyModal from '@/components/modalWindows/textMultyModal'
import KursMainModal from '@/components/modalWindows/MainModal'

import {mapState, mapMutations} from 'vuex'

export default {
  name: 'kursTopbar',

  components: {
    KursTextMultyModal,
    KursLogin,
    KursRegister,
    KursMainModal
  },

  data() {
    return {}
  },

  methods: {
    ...mapMutations(['setSingleDialogVisible']),

    showDialogLoginWindow() {
      this.setSingleDialogVisible(this.dialogWindows[1].name)
    }
  },

  computed: {
    ...mapState({
      dialogWindows: state => state.dialogWindow.dialogWindows,
      loggedUser: state => state.auth.currentUser
    })
  }
}
</script>

<style scoped>
/* Стили для шапки */
.navbar {
  padding: 10px 0;

}
header{
  background-color: #010711;
}
.navbar-brand {
  display: flex;
  align-items: center;
}

.logo-img {
  max-height: 40px;
  margin-right: 10px;
}

.logo-text {
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
  margin-bottom: 0;
}

.navbar-nav .nav-item {
  margin-right: 15px;
}

.navbar-nav .nav-link {
  color: #fff;
  font-weight: bold;
  transition: color 0.3s ease;
  font-size: 20px;
}

.navbar-nav .nav-link:hover {
  color: #a02828;
}

.navbar-nav.ml-auto .nav-link i {
  font-size: 20px;
  color: #fff;
  transition: color 0.3s ease;
}

.navbar-nav.ml-auto .nav-link:hover i {
  color: #f00;
}

.social-media {
  display: flex;
  justify-content: space-between;
}

.social-media-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.social-media-item {
  margin-right: 10px;

}

.social-media-link {
  display: flex;
  align-items: center;
}

.social-media-img {

  margin-right: 5px;
}

</style>
