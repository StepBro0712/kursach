<template>
  <button class='myBtn'>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'kursButton'
}
</script>

<style>
.myBtn {
  padding: 0.3em 2.15em;
  font-size: 1.5em;
  transition: background-color 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ff0000;
  color: #ffffff;

  border: 4px solid #000000;
  border-radius: 35px;
}

.myBtn:hover {
  background-color: #ff0000;
  color: #000000;
}

.myBtn:active {

  background: #000000;
  box-shadow: inset 0 4px 4px rgb(0, 0, 0);

}
</style>