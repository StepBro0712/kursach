<template>
  <div class='main'>
    <div>
      <h1 style='color: white'>Панель администратора</h1>

      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLayout'
}
</script>

<style scoped>
.main {
  min-height: 55em;
  max-width: 115em;
  background-image: url('@/assets/admin/admin.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

}
h1{
  text-align: center;
  margin: 1em 0 1em 0;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
}
</style>
