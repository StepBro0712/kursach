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
.myBtn{
  margin-top: 0.5em;
  margin-left: 0.5em;
  padding: 0.2em 2.5em;
  font-size: 2em;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a02828;
  color: #000000;
  border: 4px solid #000000;
  border-radius: 35px;
}

.myBtn:hover {
  background-color: #a02828;
  color: #ffffff;
}

.myBtn:active {
  background: #000000;
  box-shadow: inset 0 4px 4px rgb(0, 0, 0);

}
</style>