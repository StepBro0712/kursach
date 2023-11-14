<template>
  <div class='main_home_screen'>
    <div class='text_button_block'>
      <div class='main_text'>
        <p>Мы лучшие в Томске</p>
        <p>По ассортименту и цене</p>
      </div>
      <div class='buttons'>
        <kurs-button @click='$emit("scroll-to-element")'>Звони нам</kurs-button>
      </div>
    </div>
  </div>
</template>

