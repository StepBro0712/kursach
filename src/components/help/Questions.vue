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
          <p>Могу ли я внести изменения в конфигурацию ПК перед покупкой?</p>
        </div>
      </li>
      <li>
        <div class="question">
          <img src="@/assets/home/icons/question.svg" alt="question">
          <p>Как работает процесс оформления заказа и оплаты?</p>
        </div>
      </li>
    </ul>

  </div>
  <div class='questions2'>
    <ul>
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
      topText: 'Частые вопросы',
    };
  }
};
</script>

<style scoped>

h1{
  color: #ffffff;
  position: absolute;
}
.questions {
  background-color: black;
  height: 20em;
  display: flex;
  flex-direction: row;


}

p{
  font-size: 1.5em;
  width: 15em;
  color: white;
  margin-left: 2.5em;
}

ul{
  display: flex;
  flex-direction: row;
  list-style:none;
  text-align: center;

}
.questions2 > ul{
  margin-right: 5em;
  margin-top: 6em;
  margin-bottom: 20em;
}
.questions2 > li{

  margin-bottom: 20em;
}

.questions2{
  margin-bottom: 8em;
  height: 20em;
}

li
{
  margin-right: 20em;
  width: 10em;
  text-align: center;

}

img{
  width: 10em;
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin-left: 10em;
}



</style>