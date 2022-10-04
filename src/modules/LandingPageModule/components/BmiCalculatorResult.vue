<template>
  <div>
    <div class="section-title">
      <p class="text-2xl font-semibold font-inter text-center">Your Results</p>
    </div>
    <form @input="submit" @change="submit" class="flex flex-col gap-2">
      <label>
        Unit:
        <select v-model="userWeightUnit">
          <option value="kg">Kilograms</option>
          <option value="lb">Pounds</option>
        </select>
      </label>
      <label>
        Weight:
        <input v-model="userWeight" type="text" placeholder="Your weight" />
      </label>
    </form>
  </div>
</template>

<script setup>
import { ref, defineComponent } from 'vue'

defineComponent({
  name: 'BmiCalculatorWeight'
})

const props = defineProps({
  wizard: {
    type: Object
  }
})

const emit = defineEmits(['update'])

const userWeight = ref(props.wizard.weight || '')
const userWeightUnit = ref(props.wizard.weightUnit || 'kg')
const validFields = ref(false)

const checkValidFields = () => {
  if (userWeight.value !== '') {
    validFields.value = true
  } else {
    validFields.value = false
  }
}

const submit = () => {
  checkValidFields()
  emit('update', {
    data: {
      weight: parseInt(userWeight.value),
      weightUnit: userWeightUnit.value
    },
    isValid: validFields.value
  })
}
</script>

<style scoped>
.section-title {
  margin: 1rem 0;
}
form input,
form select {
  background-color: none;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
}
</style>
