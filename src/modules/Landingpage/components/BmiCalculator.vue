<script lang="ts">
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
<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useLocalStorage } from '@vueuse/core';

// import EmailService from '@/services/GenericServices/GenericService.js'

const emit = defineEmits(['closeBmi'])
const closeBmi = () => {
  clearValues()
  emit('closeBmi')
}

const impericalForm = useLocalStorage('jasfitness-bmi-cal-unit', false)

const sendEmail = ref(false)

const emailAddress = ref('')
const invalidEmail = ref(false)
const invalidEmailMessage = ref('')

const displayInvalidEmailWarning = (message: string) => {
  invalidEmailMessage.value = message
  invalidEmail.value = true
  setTimeout(() => {
    invalidEmail.value = false
    invalidEmailMessage.value = ''
  }, 5000)
}

const handleEmailSend = () => {
  if (emailAddress.value === '') {
    displayInvalidEmailWarning('Please provide a valid email address.')
  } else {
    let postData = {
      bmi: data.value.bmi,
      email: emailAddress.value
    }
    // EmailService.bmi_result(postData)
    //   .then((res) => {
    //     data.value.sentEmail = true
    //     handleShowResult()
    //   })
    //   .catch((err) => {
    //     if (err.message === 'Network Error') {
    //       displayInvalidEmailWarning(
    //         'A network error occured. Please check your network and try again.'
    //       )
    //     } else {
    //       displayInvalidEmailWarning('A problem occured. Please try again.')
    //     }
    //   })
  }
}

const handleShowResult = () => {
  currentComponent.value = 2
  sendEmail.value = false
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
const validateInputs = (values: string[]) => {
  for (let value of values) {
    if (value.trim() === '' || isNaN(Number(value))) return false
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
const calculateBMI = (values: { height: number; weight: number; }) => {
  let BMI = ''
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

function setBmiData(bmiData: any) {
  Object.assign(data.value, bmiData)
}
</script>
<template>
  <!-- container -->
  <div
    class="main-container w-max md:w-[539px] h-min rounded bg-white p-8 md:p-24 m-5 md:m-0 font-inter"
  >
    <!-- top buttons -->
    <div class="relative top-btns">
      <!-- close btn -->
      <div
        class="close-btn -right-8 md:-right-16 hover:cursor-pointer p-3"
        @click="closeBmi"
      >
        <div class="stroke right"></div>
        <div class="stroke left"></div>
      </div>
      <!-- prev btn -->
      <div
        v-if="!firstForm"
        class="close-btn -left-8 md:-left-16 hover:cursor-pointer p-3"
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
        <div class="mb-4">
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
      <!-- validation message -->
      <div class="text-center w-full h-8 mb-6 leading-1">
        <span
          v-if="invalidEmail"
          class="text-xs md:text-smfont-light text-red-400"
        >
          {{ invalidEmailMessage }}
        </span>
      </div>
      <!-- buttons -->
      <div class="btns flex items-center justify-center gap-3">
        <!-- submit button -->
        <button
          class="btn btn-outline-warning w-full h-8 md:h-14 font-semibold text-sm md:text-xl rounded-[10px] hover:text-white"
          @click="handleEmailSend"
        >
          Send
        </button>
        <button
          class="btn btn-warning w-full h-8 md:h-14 font-semibold text-xs md:text-base text-white rounded-[10px] whitespace-nowrap"
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
        <p class="toggle-labels" :class="{ 'active-unit': !impericalForm }">
          Metric Units
        </p>
        <label for="switch" class="switch form-label">
          <input id="switch" type="checkbox" v-model="impericalForm" />
          <span class="slider round"></span>
        </label>
        <p class="toggle-labels" :class="{ 'active-unit': impericalForm }">
          Imperial Units
        </p>
      </div>
      <!-- validation message -->
      <div v-if="currentStep !== forms[2]" class="text-center my-1 w-full h-8">
        <span
          v-if="invalidFields"
          class="text-xs md:text-sm font-light text-red-400"
        >
          Every field requires a number.
        </span>
      </div>
      <button
        v-if="currentStep !== forms[2]"
        class="btn btn-warning w-full h-10 md:h-14 font-semibold md:text-2xl text-white rounded-[10px]"
        @click="handleSubmit"
      >
        Calculate
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.title-text {
  font-weight: 600;
  font-size: 1.953rem;
  margin: 0 auto;
  margin-bottom: 4rem;
  width: max-content;
}
.main-container {
  & .top-btns {
    & .close-btn {
      position: absolute;
      top: -4rem;
      .stroke {
        width: 2rem;
        height: 0.5rem;
        border-radius: 1rem;
        background-color: rgba(244, 199, 119, 0.5);
        z-index: 1;

        &.right {
          transform: translateY(100%) rotate(45deg);
        }
        &.left {
          transform: rotate(-45deg);
        }

        &.top,
        &.middle,
        &.bottom {
          height: 0.2rem;
          width: 1.5rem;
        }
        &.top {
          transform: rotate(-45deg) translate(2px, -4px);
        }
        &.middle {
          width: 2rem;
          transform: translate(5px, 0px);
        }
        &.bottom {
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
      transition: color 0.4s ease-in-out;
      width: max-content;

      &.active-unit {
        color: rgba(0, 0, 0, 0.5);
      }
    }
    & .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;

      & input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + .slider::before {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
        }
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
          height: 26px;
          width: 26px;
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

@media screen and (max-width: 414px) {
  .title-text {
    margin-bottom: 2rem;
    font-size: 1.4rem;
  }
  .bmi-wrapper {
    & .switch-toggle {
      & .toggle-labels {
        font-size: x-small;
      }
      & .switch {
        & input {
          &:checked + .slider::before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
          }
        }
      }
    }
  }
  .main-container {
    & .top-btns {
      top: 2rem;
      & .close-btn {
        .stroke {
          width: 1.5rem;
          height: 0.4rem;
          background-color: rgba(244, 199, 119, 0.7);

          &.top,
          &.middle,
          &.bottom {
            height: 0.2rem;
            width: 1rem;
          }
          &.top {
            transform: rotate(-45deg) translate(2px, 0px);
          }
          &.middle {
            width: 1.5rem;
            transform: translate(5px, 0.4px);
          }
          &.bottom {
            transform: rotate(45deg) translate(2px, 1px);
          }
        }
      }
    }
  }
  .form-control {
    padding: 10px 10px;
    font-size: small;
  }
}
</style>
