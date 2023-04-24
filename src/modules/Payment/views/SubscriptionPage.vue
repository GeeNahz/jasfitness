<template>
  <div class="px-3 min-h-[100vh] flex justify-center items-center bg-[#f8f8f8]">
    <div
      class="h-fit min-h-max w-full sm:w-[500px] md:w-[700px] rounded-xl shadow bg-[#fefefe] py-16"
    >
      <header class="text-center">
        <div
          class="logo font-semibold text-lg md:text-xl flex gap-2 justify-center items-center"
        >
          <div class="logo-img h-12 md:h-16 w-10 md:w-14">
            <img
              src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/JasFitnessCenter_CsBC8awdj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984852958"
              alt="jf logo"
              class="h-full w-full object-cover"
            />
          </div>
          <h2>Jas <span class="text-amber-400">Fitness</span></h2>
        </div>
        <div class="header-text">
          <h2 class="text-lg md:text-xl font-semibold">Subscription Portal</h2>
        </div>
      </header>

      <div class="steps mx-auto w-max my-8 md:my-14">
        <Steps :steps="steps" @switchPage="switchPage" />
      </div>

      <div class="forms">
        <transition name="slide" mode="out-in">
          <keep-alive>
            <Component
              :is="componentSteps[currentStep]"
              :wizard="steps"
              @update="updateFormDetails"
              @completed="handleCompleted"
            />
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import Steps from '../components/Steps.vue'
import FormDetails from '../components/FormDetails.vue'
import FormSuccess from '../components/FormSuccess.vue'

export default defineComponent({
  components: { Steps, FormDetails, FormSuccess },
  setup() {
    const steps = ref([
      {
        id: 1,
        isValid: false,
        step: {
          name: 'Your details',
          status: 'current' // one of current | pending | complete
        },
        firstName: '',
        lastName: '',
        email: '',
        amount: 0,
        duration: 0,
        planId: 0,
        charges: 0,
        properties: {
          duration: '',
          type: ''
        }
      },
      {
        id: 2,
        isValid: false,
        step: {
          name: 'Complete',
          status: 'pending' // one of current | pending | complete
        }
      }
    ])
    const route = useRoute()
    function setDataFromParams() {
      // these should be made available from when a clients tries to resubscribe only else they fall to the defaults
      steps.value[0].planName = route.query.planName || 'premium'
      steps.value[0].isNewClient = route.query.isNewClient || 'true'
      steps.value[0].firstName = route.query.firstName || ''
      steps.value[0].lastName = route.query.lastName || ''
      steps.value[0].email = route.query.email || ''
    }
    onMounted(() => {
      setDataFromParams()
    })
    const currentStep = ref(0)
    const componentSteps = ['FormDetails', 'FormSuccess']

    function goToStep(step) {
      currentStep.value = step
    }
    function switchPage(pageNumber) {
      if (pageNumber > currentStep.value) {
        next(pageNumber)
      } else {
        prev(pageNumber)
      }
    }
    function setStepStatus(index) {
      for (let idx = 0; idx < steps.value.length; idx++) {
        if (steps.value[idx].step.status === ('current' || 'pending')) {
          steps.value[idx].step.status = 'pending'
        }
        if (idx === index && steps.value[idx].step.status !== 'complete') {
          steps.value[idx].step.status = 'current'
        }
      }
    }
    function setStepCompleteStatus(index) {
      steps.value[index].step.status = 'complete'
    }
    const isComplete = (idx) => steps.value[idx - 1]?.step.status === 'complete'
    function prev(index) {
      setStepStatus(index)
      goToStep(index)
      // switchPage(index)
    }
    function next(index) {
      // perform some form of validation before going to next page
      if (isComplete(index)) {
        setStepStatus(index)
        goToStep(index)
      }
      // raise warning or alert
      // switchPage(index)
    }
    function handleCompleted(obj) {
      let index = steps.value.findIndex((step) => step.id === obj.id)
      setStepCompleteStatus(index)
      next(index + 1)
      // make api call to send data here
    }

    function updateFormDetails(updatedDetails, id) {
      // perform some verifications before making the update
      let idx = steps.value.findIndex((step) => step.id === id)
      Object.assign(steps.value[idx], updatedDetails)
    }

    return {
      currentStep,
      componentSteps,
      steps,
      updateFormDetails,
      switchPage,
      handleCompleted
      // paystackAmount,
    }
  }
  // const selectedCurrency = ref('NGN')
  // const currencies = ref({
  //   NGN: 100,
  //   USD: 100,
  //   GHC: 100
  // })
  // function conversionRate(selectedCurrency) {
  //   return currencies.value[selectedCurrency]
  // }

  // const paystackAmount = computed(() => {
  //   return steps.value[0].amount * conversionRate(selectedCurrency.value)
  // })
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
