<template>
  <div>
    <button
      @click="() => onClick"
      :class="buttonClass"
      :disabled="buttonDisabled"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  buttonClass: { type: String, default: 'btn btn-primary hover:' },
  buttonText: { type: String, default: 'Click me!' },
  buttonDisabled: { type: Boolean, default: false },
  onClick: {
    type: Function,
    default: () => {
      console.log('Custom button clicked')
    }
  }
})
</script>
