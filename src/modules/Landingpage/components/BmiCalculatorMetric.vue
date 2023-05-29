<script setup lang="ts">
import { ref, defineComponent, watch } from 'vue'

defineComponent({
  name: 'BmiCalculatorMetric'
})

const props = defineProps<{
  wizard: { height: number; weight: number; }
}>()

const emit = defineEmits(['update'])

const creds = ref({
  height: props.wizard.height,
  weight: props.wizard.weight
})

watch(creds, () => emit('update', creds.value), {
  deep: true
})
</script>
<template>
  <div class="si-unit">
    <form class="form-group">
      <div class="mb-4">
        <label for="height" class="visually-hidden form-label">Height</label>
        <input
          id="height"
          type="text"
          aria-label="height"
          placeholder="Height (meters m)"
          class="form-control"
          v-model="creds.height"
        />
      </div>
      <div class="mb-4">
        <label for="weight" class="form-label visually-hidden">Weight</label>
        <input
          id="weight"
          type="text"
          aria-label="weight"
          placeholder="Weight (kilograms kg)"
          class="form-control"
          v-model="creds.weight"
        />
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
@import '../../../assets/styles/base';

.form-control {
  background-color: rgba(223, 222, 222, 0.2);
  padding: 16px 14px;
  width: 100%;
  border: none;
  outline: none !important;
  border-radius: 10px;

  &:focus,
  &:active {
    background-color: #fff;
    border: none !important;
    outline: none !important;
  }

  &::placeholder {
    color: #999999;
  }

  @include responsive('mobile-landscape-width') {
    padding: 10px 10px;
    font-size: font-size('small');
  }
}
</style>
