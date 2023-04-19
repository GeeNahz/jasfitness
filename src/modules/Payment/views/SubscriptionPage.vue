<template>
  <div
    class="pt-20 min-h-[100vh] flex justify-center items-center bg-[#f8f8f8]"
  >
    <div class="h-[720px] w-[700px] rounded-xl shadow bg-[#fefefe] py-16">
      <header class="text-center">
        <div
          class="logo font-semibold text-xl flex gap-2 justify-center items-center"
        >
          <div class="logo-img h-16 w-14">
            <img
              src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/JasFitnessCenter_CsBC8awdj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984852958"
              alt="jf logo"
              class="h-full w-full object-cover"
            />
          </div>
          <h2>Jas<span class="text-amber-400">Fitness</span></h2>
        </div>
        <div class="header-text">
          <h2 class="text-xl font-semibold">Subscription Portal</h2>
        </div>
      </header>

      <div class="steps mx-auto w-max my-14">
        <Steps :steps="steps" @switchPage="switchPage" />
      </div>

      <div class="forms" style="height: fit-content">
        <transition name="slide" mode="out-in">
          <keep-alive>
            <Component
              :is="componentSteps[currentStep]"
              :wizard="steps"
              @update="updateFormDetails"
            />
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, computed } from 'vue'

import Steps from '../components/Steps.vue'
import FormDetails from '../components/FormDetails.vue'
import FormSuccess from '../components/FormSuccess.vue'

export default defineComponent({
  components: { Steps, FormDetails, FormSuccess },
  setup() {
    const currentStep = ref(0)
    const componentSteps = ['FormDetails', 'FormSuccess']
    function switchPage(pageNumber) {
      currentStep.value = pageNumber
    }

    const steps = ref([
      {
        id: 1,
        step: {
          name: 'Your details',
          status: 'complete' // one of current | pending | complete
        },
        name: '',
        email: '',
        amount: 23
      },
      {
        id: 2,
        step: {
          name: 'Payment',
          status: 'current' // one of current | pending | complete
        }
      }
    ])

    const selectedCurrency = ref('NGN')
    const currencies = ref({
      NGN: 100,
      USD: 100,
      GHC: 100
    })
    function conversionRate(selectedCurrency) {
      return currencies.value[selectedCurrency]
    }

    const paystackAmount = computed(() => {
      return steps.value[0].amount * conversionRate(selectedCurrency.value)
    })

    function updateFormDetails(updatedDetails) {
      // perform some verifications before making the update
      Object.assign(steps.value[0], updatedDetails)
    }

    return {
      currentStep,
      componentSteps,
      steps,
      updateFormDetails,
      paystackAmount,
      switchPage
    }
  }
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
