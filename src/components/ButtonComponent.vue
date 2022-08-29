<template>
  <button
    @click="onClick"
    class="rounded-md shadow-xl"
    :class="[backgroundColor, textColor, paddingX, paddingY]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    onClick: {
      type: Function,
      required: false
    },
    text: {
      type: String,
      default: 'Primary'
    },
    backgroundColor: {
      type: String,
      default: 'bg-blue-600'
    },
    textColor: {
      type: String,
      default: 'text-white-600'
    },
    paddingX: {
      type: String,
      default: 'px-4'
    },
    paddingY: {
      type: String,
      default: 'py-2'
    }
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    OnClick() {
      this.$emit('onClick', this.text)
    }
  }
}
</script>
