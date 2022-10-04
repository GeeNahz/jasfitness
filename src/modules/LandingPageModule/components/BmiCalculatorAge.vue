<template>
  <div>
    <div class="section-title">
      <p class="text-2xl font-semibold font-inter text-center">
        Choose your age range?
      </p>
      <label><input type="checkbox" v-model="isChild" /> Are you a child</label>
    </div>
    <form @change="submit" class="flex flex-col gap-2">
      <label v-if="isChild" class="space-x-2">
        Age range:
        <label v-for="age in ageRangeChild" :key="age.value" :for="age.value">
          <input
            type="radio"
            :id="age.value"
            v-model="userAgeRange"
            :value="age.value"
          />
          {{ age.text }}
        </label>
      </label>

      <label v-else class="space-x-2">
        Age range:
        <label v-for="age in ageRangeAdult" :key="age.value" :for="age.value">
          <input
            type="radio"
            :id="age.value"
            v-model="userAgeRange"
            :value="age.value"
          />
          {{ age.text }}
        </label>
      </label>
    </form>
  </div>
</template>

<script setup>
import { ref, defineComponent } from 'vue'

const ageRangeChild = ref([
  { value: '<5', text: '< 5' },
  { value: '5-10', text: '5 - 10' },
  { value: '11-19', text: '11 - 19' }
])
const ageRangeAdult = ref([
  { value: '20-44', text: '20 - 44' },
  { value: '45-64', text: '45 - 64' },
  { value: '>60', text: '> 60' }
])

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
      ageRange: userAgeRange.value,
      isChild: isChild.value
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
