<template>
  <div>
    <button @click="onClick" :class="buttonClass" :disabled="buttonDisabled">
      <slot />
    </button>
  </div>
</template>

<script setup>
defineProps({
  buttonClass: { type: String, default: 'btn btn-primary hover:' },
  buttonDisabled: { type: Boolean, default: false },
  onClick: { type: Function, default: () => console.log('Custon Btn Clicked') }
})
</script>
