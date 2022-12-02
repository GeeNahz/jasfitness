<template>
  <div class="us-unit">
    <form class="form-group">
      <div class="flex gap-1">
        <!-- imperical ft and in height fields -->
        <div class="mb-4">
          <label for="height" class="visually-hidden form-label">Height</label>
          <input
            id="height"
            type="text"
            aria-label="height"
            placeholder="Height (feet)"
            class="form-control"
            v-model="creds.height"
          />
        </div>
        <div class="mb-4">
          <label for="heightIn" class="visually-hidden form-label">
            Height in
          </label>
          <input
            id="heightIn"
            type="text"
            aria-label="heightIn"
            placeholder="(inches)"
            class="form-control"
            v-model="creds.heightIn"
          />
        </div>
      </div>
      <div class="mb-4">
        <label for="weight" class="form-label visually-hidden">Weight</label>
        <input
          id="weight"
          type="text"
          aria-label="weight"
          placeholder="Weight (pounds lb)"
          class="form-control"
          v-model="creds.weight"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
import { defineComponent, ref, watch } from 'vue'

defineComponent({
  name: 'BmiCalculatorImperical'
})

const props = defineProps({
  wizard: {
    type: Object
  }
})

const emit = defineEmits(['update'])

const creds = ref({
  height: props.wizard.height,
  heightIn: props.wizard.heightIn,
  weight: props.wizard.weight
})

watch(creds, () => emit('update', creds.value), {
  deep: true
})
</script>

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
