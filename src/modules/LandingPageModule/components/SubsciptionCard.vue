<template>
  <div
    class="card-container rounded-xl shadow drop-shadow-2xl p-4"
    :class="[backgroundColor]"
  >
    <div class="top">
      <p>
        <slot name="top">Card title</slot>
      </p>
    </div>
    <slot>Default Content</slot>
    <div class="bottom">
      <slot name="bottom">Card footer</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionCard',
  props: {
    backgroundColor: {
      type: String,
      default: 'bg-white'
    }
  }
}
</script>
