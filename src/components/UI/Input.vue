<template>
  <input
    :value='modelValue'
    @input='updateInput'
    class='inp form-group'
    :placeholder='placehold'
    :type='type'
    style='align-self: center;'
    required>
</template>

<script>
export default {
  name: 'kursInput',

  props: {
    placehold: {
      type: String,
      required: true
    },
    modelValue: [String, Number],
    // name: {
    //   type: String,
    //   required: true
    // },
    type: {
      type: String,
      required: true
    }
  },

  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style>

.inp {

  width: 100%;
  height: 52px;

  background: #E4F7FF;
  border-radius: 25px;

  text-indent: 15px;
  padding-right: 20px;
}

.form-group {
  margin-bottom: 1rem;
}

</style>