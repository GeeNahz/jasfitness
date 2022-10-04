<template>
  <div>
    <div class="section-title">
      <p class="text-2xl font-semibold font-inter text-center">
        Choose your age range?
      </p>
      <label><input type="checkbox" v-model="isChild" /> Are you a child</label>
    </div>
    <form @input="submit" @change="submit" class="flex flex-col gap-2">
      <label v-if="isChild">
        Age range:
        <input type="radio" v-model="userAgeRange" value="<5" /> &lt;5
        <input type="radio" v-model="userAgeRange" value="5-10" /> 5-10
        <input type="radio" v-model="userAgeRange" value="11-19" /> 11-19
      </label>
      <label v-else>
        Age range:
        <input type="radio" v-model="userAgeRange" value="20-44" /> 20-44
        <input type="radio" v-model="userAgeRange" value="45-64" /> 45-64
        <input type="radio" v-model="userAgeRange" value=">64" /> &gt;64
      </label>
    </form>
  </div>
</template>

<script setup>
import { ref, defineComponent } from 'vue'

defineComponent({
  name: 'BmiCalculatorAge'
})

const props = defineProps({
  wizard: {
    type: Object
  }
})

const emit = defineEmits(['update'])

const userAgeRange = ref(props.wizard.ageRange || '')
const isChild = ref(props.wizard.isChild || false)
const validFields = ref(false)

const checkValidFields = () => {
  if (userAgeRange.value !== '') {
    validFields.value = true
  } else {
    validFields.value = false
  }
}

const submit = () => {
  checkValidFields()
  emit('update', {
    data: {
      ageRange: parseInt(userAgeRange.value)
      // weightUnit: userWeightUnit.value
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
