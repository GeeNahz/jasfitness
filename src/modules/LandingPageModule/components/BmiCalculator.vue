<template>
  <!-- container -->
  <div
    class="main-container w-[539px] h-min rounded bg-white p-12 md:p-24 font-inter"
  >
    <!-- top buttons -->
    <div class="relative top-btns">
      <!-- close btn -->
      <div
        class="close-btn absolute -top-16 -right-16 hover:cursor-pointer p-3"
        @click="closeBmi"
      >
        <div class="stroke right"></div>
        <div class="stroke left"></div>
      </div>
      <!-- prev btn -->
      <div
        v-if="!firstForm"
        class="close-btn absolute -top-16 -left-16 hover:cursor-pointer p-3"
        @click="back"
      >
        <div class="stroke top"></div>
        <div class="stroke middle"></div>
        <div class="stroke bottom"></div>
      </div>
    </div>
    <div v-if="sendEmail" class="send-email-wrapper">
      <!-- title -->
      <h2 class="title-text">Your Result Is Ready</h2>
      <!-- main content -->
      <form class="form-group">
        <div class="mb-14">
          <label for="email" class="visually-hidden form-label">Email</label>
          <input
            id="email"
            type="email"
            aria-label="email"
            placeholder="Send it to your email."
            class="form-control"
            v-model="emailAddress"
          />
        </div>
      </form>
      <!-- buttons -->
      <div class="btns flex items-center justify-center gap-3">
        <!-- submit button -->
        <button
          class="btn btn-outline-warning w-full h-14 font-semibold text-xl rounded-[10px] hover:text-white"
          @click="handleEmailSend"
        >
          Send
        </button>
        <button
          class="btn btn-warning w-full h-14 font-semibold text-white rounded-[10px]"
          @click="handleShowResult"
        >
          View in browser
        </button>
      </div>
    </div>

    <div v-else class="flex flex-col justify-center relative bmi-wrapper">
      <!-- title -->
      <h2 v-if="currentStep !== forms[2]" class="title-text">
        What's Your BMI
      </h2>
      <!-- main section -->
      <keep-alive>
        <component
          :is="currentStep"
          :wizard="data"
          @update="setBmiData"
        ></component>
      </keep-alive>
      <!-- switch toggler -->
      <div
        v-if="currentStep !== forms[2]"
        class="switch-toggle mb-2 flex items-center justify-center space-x-3"
      >
        <p class="toggle-labels">Metric Units</p>
        <label for="switch" class="switch form-label">
          <input id="switch" type="checkbox" v-model="impericalForm" />
          <span class="slider round"></span>
        </label>
        <p class="toggle-labels">Imperial Units</p>
      </div>
      <!-- validation message -->
      <div v-if="currentStep !== forms[2]" class="text-center my-1 w-full h-8">
        <span v-if="invalidFields" class="text-sm font-light text-red-400">
          Every field requires a number.
        </span>
      </div>
      <!-- <details>
        <pre>{{ data }}</pre>
      </details> -->
      <!-- submit button -->
      <button
        v-if="currentStep !== forms[2]"
        class="btn btn-warning w-full h-14 font-semibold text-2xl text-white rounded-[10px]"
        @click="handleSubmit"
      >
        Calculate
      </button>
    </div>
  </div>
</template>

<script>
import BmiCalculatorMetric from '../components/BmiCalculatorMetric.vue'
import BmiCalculatorImperical from '../components/BmiCalculatorImperical.vue'
import BmiCalculatorResult from '../components/BmiCalculatorResult.vue'

export default {
  name: 'BmiCalculatorComponent',
  components: {
    BmiCalculatorMetric,
    BmiCalculatorImperical,
    BmiCalculatorResult
  }
}
</script>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const emit = defineEmits(['closeBmi'])
const closeBmi = () => {
  clearValues()
  emit('closeBmi')
}

const impericalForm = ref(
  JSON.parse(localStorage.getItem('jasfitness-bmi-cal-unit')) || false
)
console.log(impericalForm.value)
// save to local storage for better user experience
const saveUnitToLocalStorage = () => {
  localStorage.setItem(
    'jasfitness-bmi-cal-unit',
    JSON.stringify(impericalForm.value)
  )
}
// watch for changes to impericalForm ref
watch(impericalForm, () => saveUnitToLocalStorage())

const sendEmail = ref(false)

const emailAddress = ref('')
const handleEmailSend = () => {
  console.log(emailAddress.value)
  data.value.sentEmail = true
  handleShowResult()
}

const handleShowResult = () => {
  currentComponent.value = 2
  sendEmail.value = false
  console.log(data.value.bmi)
}

const data = ref({
  height: '',
  heightIn: '',
  weight: '',
  bmi: '',
  sentEmail: false
})

const handleSubmit = () => {
  let bmiInfo = getBmiInfo()
  if (bmiInfo) {
    data.value.bmi = bmiInfo
    console.log('My BMI:', data.value.bmi)
    currentComponent.value = 3
    sendEmail.value = true
  }
}

// get bmi informations
const getBmiInfo = () => {
  if (impericalForm.value) {
    // for imperical units
    let isValid = validateInputs([
      data.value.height,
      data.value.heightIn,
      data.value.weight
    ])

    if (isValid) {
      return calculateBMI({
        height:
          parseFloat(data.value.height) * 12 + parseFloat(data.value.heightIn),
        weight: parseFloat(data.value.weight)
      })
    }
  } else {
    // for metric units
    let isValid = validateInputs([data.value.height, data.value.weight])

    if (isValid) {
      return calculateBMI({
        height: parseFloat(data.value.height),
        weight: parseFloat(data.value.weight)
      })
    }
  }
  displayWarning()
  return false
}

// validate inputs
const validateInputs = (values) => {
  for (let value of values) {
    if (value.trim() === '' || isNaN(value)) return false
  }
  return true
}
const invalidFields = ref(false)
const displayWarning = () => {
  invalidFields.value = true
  setTimeout(() => {
    invalidFields.value = false
  }, 2000)
}

// calculate BMI
const calculateBMI = (values) => {
  let BMI = ''
  console.log(values.weight)
  if (impericalForm.value) {
    BMI = (703 * (values.weight / Math.pow(values.height, 2))).toFixed(2)
  } else {
    BMI = (values.weight / Math.pow(values.height, 2)).toFixed(2)
  }

  return BMI
}

const forms = [
  'BmiCalculatorMetric',
  'BmiCalculatorImperical',
  'BmiCalculatorResult'
]

const currentComponent = ref(0)
onMounted(() => {
  // check to properly assign the form with the appropriate unit
  impericalForm.value ? (currentComponent.value = 1) : null
})

watch(impericalForm, () => {
  if (impericalForm.value) {
    currentComponent.value = 1
  } else {
    currentComponent.value = 0
  }
})

const currentStep = computed(() => {
  return forms[currentComponent.value]
})

function back() {
  if (sendEmail.value) {
    sendEmail.value = false
  }
  clearValues()
  if (impericalForm.value) {
    currentComponent.value = 1
  } else {
    currentComponent.value = 0
  }
}

const firstForm = computed(() => {
  return currentComponent.value === 0 || currentComponent.value === 1
})

function clearValues() {
  data.value.bmi = ''
  data.value.height = ''
  data.value.heightIn = ''
  data.value.weight = ''
  data.value.sentEmail = false
}

function setBmiData(bmiData) {
  Object.assign(data.value, bmiData)
}

// // const displayBmiModal = ref(false)
// // const emptyField = ref(false)

// function next() {
//   currentComponent.value += 1
// }

// // function toggleResult() {
// //   displayBmiModal.value = !displayBmiModal.value
// // }

// const lastForm = computed(function () {
//   return currentComponent.value === length.value - 1
// })

// const length = computed(function () {
//   return forms.value.length
// })
</script>

<style lang="scss" scoped>
.title-text {
  font-weight: font-weight(semibold);
  font-size: 1.953rem;
  margin: 0 auto;
  margin-bottom: 4rem;
  width: max-content;
}
.main-container {
  & .top-btns {
    & .close-btn {
      .stroke {
        width: 2rem;
        height: 0.5rem;
        border-radius: 1rem;
        background-color: rgba(244, 199, 119, 0.5);
        z-index: 1;

        &.right {
          transform: translateY(100%) rotate(45deg);
          // transform: ;
        }
        &.left {
          transform: rotate(-45deg);
        }
        &.top {
          height: 0.2rem;
          width: 1.5rem;
          transform: rotate(-45deg) translate(2px, -4px);
        }
        &.middle {
          height: 0.2rem;
          width: 2rem;
          transform: translate(5px, 0px);
        }
        &.bottom {
          height: 0.2rem;
          width: 1.5rem;
          transform: rotate(45deg) translate(2px, 4px);
        }
      }
    }
  }
}
.bmi-wrapper {
  & .switch-toggle {
    & .toggle-labels {
      color: rgba(0, 0, 0, 0.17);
      margin-bottom: 0.25rem;
    }
    & .switch {
      position: relative;
      display: inline-block;
      width: 100px;
      height: 40px;

      & input {
        opacity: 0;
        width: 0;
        height: 0;

        // &:checked + .slider {
        //   background-color: #2196f3;
        // }
        &:checked + .slider::before {
          -webkit-transform: translateX(60px);
          -ms-transform: translateX(60px);
          transform: translateX(60px);
        }
        // &:focus + .slider {
        //   box-shadow: 0, 0, 1px, #2196f3;
        // }
      }
      & .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #efefef;
        box-shadow: 5px 10px 5px #ccc inset;
        -webkit-transition: 0.4s;
        transition: 0.4s;

        &::before {
          position: absolute;
          content: '';
          height: 32px;
          width: 32px;
          left: 4px;
          bottom: 4px;
          background: linear-gradient(
            -45deg,
            rgb(204, 204, 204),
            rgba(255, 255, 255, 1)
          );
          box-shadow: 1px 1px 1px 1px rgb(204, 204, 204);
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        &.round {
          border-radius: 34px;
        }
        &.round::before {
          border-radius: 50%;
        }
      }
    }
  }
}

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
}
</style>
