<template>
  <div>
    <fieldset style="border-radius: 10px">
      <legend>First Name</legend>
      <input type="text" id="text" value="Hey there" style="border: none" />
    </fieldset>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  inputValues: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
/* .form {
  text-align: start;
}
fieldset {
  position: relative;
  border: 1px solid gray;
}
legend {
  position: absolute;
  top: -16px;
  color: #1a1e2b;
  background-color: #fff;
  width: fit-content;
  padding: 0.16rem 0rem;
}
input {
  border: 1px solid red;
  width: 100%;
  color: #1a1e2b;
  font-size: 30px;
} */
</style>
