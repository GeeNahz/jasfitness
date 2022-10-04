<template>
  <div>
    <div class="section-title">
      <p class="text-2xl font-semibold font-inter text-center">
        How tall are you?
      </p>
    </div>
    <form @input="submit" @change="submit" class="flex flex-col gap-2">
      <label>
        Unit:
        <select v-model="userHeightUnit">
          <option value="cm">Centimeters</option>
          <option value="in">Inches</option>
        </select>
      </label>
      <label>
        Height:
        <input v-model="userHeight" type="text" placeholder="Your height" />
      </label>
    </form>
  </div>
</template>

<script setup>
import { defineComponent, ref } from 'vue'

defineComponent({
  name: 'BmiCalculatorHeight'
})
const props = defineProps({
  wizard: {
    type: Object
  }
})

const emit = defineEmits(['update'])

const userHeight = ref(props.wizard.height || '')
const userHeightUnit = ref(props.wizard.heightUnit || 'cm')
const validFields = ref(false)

const checkValidFields = () => {
  if (userHeight.value !== '') {
    validFields.value = true
  } else {
    validFields.value = false
  }
}

const submit = () => {
  checkValidFields()
  emit('update', {
    data: {
      height: parseInt(userHeight.value),
      heightUnit: userHeightUnit.value
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
