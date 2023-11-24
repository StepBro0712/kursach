<template>
  <div class='questions'>
  <ul>
    <li>
    <div class="question">
        <img src="@/assets/home/icons/question.svg" alt="question">
        <p>Как выбрать правильную конфигурацию ПК для моих потребностей?</p>
    </div>
    </li>
    <li>
    <div class="question">
      <img src="@/assets/home/icons/question.svg" alt="question">
      <p>Каковы сроки и стоимость доставки?</p>
    </div>
    </li>
    <li>
    <div class="question">
      <img src="@/assets/home/icons/question.svg" alt="question">
      <p>Могу ли я настроить или обновить компоненты после покупки?</p>
    </div>
    </li>
    <li>
    <div class="question">
      <img src="@/assets/home/icons/question.svg" alt="question">
      <p>Каковы гарантии на продукцию?</p>
    </div>
    </li>
    <li>
    <div class="question">
      <img src="@/assets/home/icons/question.svg" alt="question">
      <p>Есть ли у вас программы лояльности или скидки?</p>
    </div>
    </li>
    <li>
    <div class="question">
      <img src="@/assets/home/icons/question.svg" alt="question">
      <p>Как я могу связаться с вашей службой поддержки?</p>
    </div>
    </li>
  </ul>
  </div>
</template>

<script>


export default {
  name: 'Questions',
  data() {
    return {
      topText: 'Частые вопросы'
    }
  }
}
</script>

<style scoped>

h1{
  color: #ffffff;
  position: absolute;
}
.questions {
  background-color: black;
  height: 500px;
  display: flex;
  flex-direction: row;
}

.questions {
  display: flex;
  justify-content: space-between;
}

p{
  width: 19em;
  color: white;
}

ul{
  list-style:none;
  margin-left: -2em;
}
li
{
  width: 10em;
  text-align: center;
}

</style>