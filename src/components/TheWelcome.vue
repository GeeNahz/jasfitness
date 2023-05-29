<script setup lang="ts">
import { ref } from 'vue';
const isOpen = ref<boolean>(false)
</script>

<template>
  <div class="container">
    <button @click="isOpen = true">Open Modal</button>

    <teleport to="body">
      <div v-if="isOpen" class="wrapper">
        <h3>Modal displays here:</h3>
        <div class="modal">
          <h4>Hi! I'm the modal</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vel.</p>
          <button @click="isOpen = false">Close</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.25);
}
.wrapper .modal {
  width: fit-content;
  color: #303030;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 15px;
}
</style>
