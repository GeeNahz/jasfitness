<template>
  <div
    :class="[backgroundColor, textColor, roundedEnd]"
    class="flex flex-col justify-center text-center p-5 w-80 md:w-96 h-96 break-words md:max-h-7xl md:max-w-7xl shadow-2xl relative"
  >
    <slot name="mainIcon"></slot>
    <p class="text-4xl font-bold">
      <slot name="header">The header</slot>
    </p>
    <p class="text-sm font-light">
      <slot>Write anything here</slot>
    </p>
    <div class="absolute right-4 -bottom-3 opacity-10 w-44">
      <slot name="backgroundIcon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BelowHeroSection',
  props: {
    textColor: {
      type: String,
      default: 'text-white'
    },
    backgroundColor: {
      type: String,
      default: 'bg-black'
    },
    roundedEnd: {
      type: String,
      default: 'rounded-b-xl'
    }
  }
}
</script>
