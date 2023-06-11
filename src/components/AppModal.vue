<script setup lang="ts">
import IconClose from "./icons/IconClose.vue";

interface Props {
  showBtn?: boolean;
  showTitle?: boolean;
  btnText?: string;
}

withDefaults(defineProps<Props>(), {
  showBtn: true,
  showTitle: true,
  btnText: "Open modal",
})

defineEmits<{
  (event: "openModal"): void;
  (event: "closeModal"): void;
}>();
</script>

<template>
  <button v-if="showBtn" @click="$emit('openModal')">{{ btnText }}</button>
  <teleport to='body'>
    <div class="backdrop">
      <div class="wrapper">
        <div v-if="showBtn" @click="$emit('closeModal')" class="close-toggle">
          <IconClose />
        </div>
        <slot v-if="showTitle" name="title">
          <p>Default title</p>
        </slot>
        <slot>
          <p>Default content</p>
        </slot>
      </div>
    </div>
  </teleport>
</template>

<style scoped lang="scss">
.backdrop {
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  /* padding: 2rem; */
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  position: relative;
  height: fit-content;
  margin: 0 auto;
}
.close-toggle {
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  background-color: rgba(#fff, 0.5);
  border-radius: 50%;
  padding: 0.2rem;
  top: 2%;
  right: 2%;
  z-index: 999;
  transition: background-color 0.2s ease-out;

  @media screen and (min-width: 768px) {
    padding: 0.5rem;
    top: 2%;
    right: 1%;
  }

  &:hover {
    background-color: rgba(#fff, 0.7);
  }
}
</style>
