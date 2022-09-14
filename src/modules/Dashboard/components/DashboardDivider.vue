<template>
  <div class="relative border my-4 mx-auto w-11/12">
    <p
      class="absolute -top-3 left-[50%] -translate-x-[50%] rounded-full px-3"
      :class="[textColor, backColor]"
    >
      {{ name }}
    </p>
  </div>
</template>

<script setup>
// import { ref } from 'vue'

// const colorOfText = ref('')
// const colorOfBackground = ref('')

defineProps({
  name: {
    type: String,
    default: 'Divider'
  },
  textColor: {
    type: String,
    default: ''
  },
  backColor: {
    type: String,
    default: 'bg-white'
  }
})
</script>

<style lang="scss" scoped></style>
