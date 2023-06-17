<script setup lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import Steps from './Steps.vue'
import FormDetails from './FormDetails.vue'
import FormSuccess from './FormSuccess.vue'
import type { Instructor } from '../types'
import Service from '@/services/GenericService/Service'
import { useAlertStore } from '@/stores/alerts'

defineComponent({
  components: { Steps, FormDetails, FormSuccess },
})

interface Props {
  email?: string;
  name?: string;
  userId?: string | number;
  planName?: string;
  isNewClient?: string | boolean;
  isPropAvailable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isPropAvailable: false,
});

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
    name: '',
    userId: 0,
    email: '',
    amount: 0,
    duration: 0,
    planId: 0,
    planName: '',
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
function setFirstLastNames({ firstName, lastName }: { firstName: string; lastName: string; }) {
  steps.value[0].firstName = firstName
  steps.value[0].lastName = lastName
}

// TODO: check this out
function splitNames({ name }: { name: string }) {
  if (name.length) {
    let nameArr = name.split(' ')
    setFirstLastNames({
      firstName: nameArr[0],
      lastName: nameArr[nameArr.length - 1]
    })
  }
}

const alertStore = useAlertStore();
const instructors = ref<Instructor[]>([]);
async function fetchInstructors() {
  try {
    const res = await Service.instructors();
    instructors.value = res.data.results;
  } catch (error) {
    console.log("Error while fetching instructors: ", error)
    alertStore.error("Unable to get instructors. Please refresh your browser to try again.")
  }
}

function setDataFromQuery() {
  if (props.isPropAvailable) {
    const dataObj = {
      email: props.email,
      name: props.name,
      userId: props.userId,
      planName: props.planName,
      isNewClient: props.isNewClient,
    };
    Object.assign(steps.value[0], dataObj);
  } else {
    Object.assign(steps.value[0], route.query);
  }
  if (steps.value[0]?.name !== '') {
    splitNames({ name: steps.value[0]?.name as string });
  }
}
onMounted(() => {
  setDataFromQuery()
})
const currentStep = ref(0)
const componentSteps = [FormDetails, FormSuccess]

function goToStep(step: number) {
  currentStep.value = step
}
const isComplete = (idx: number) => steps.value[idx - 1]?.step.status === 'complete'
function prev(index: number) {
  setStepStatus(index)
  goToStep(index)
  // switchPage(index)
}
function next(index: number) {
  // perform some form of validation before going to next page
  if (isComplete(index)) {
    setStepStatus(index)
    goToStep(index)
  }
  // raise warning or alert
  // switchPage(index)
}

function switchPage(pageNumber: number) {
  if (pageNumber > currentStep.value) {
    next(pageNumber)
  } else {
    prev(pageNumber)
  }
}
function setStepStatus(index: number) {
  for (let idx = 0; idx < steps.value.length; idx++) {
    if (steps.value[idx].step.status === ('current' || 'pending')) {
      steps.value[idx].step.status = 'pending'
    }
    if (idx === index && steps.value[idx].step.status !== 'complete') {
      steps.value[idx].step.status = 'current'
    }
  }
}
function setStepCompleteStatus(index: number) {
  steps.value[index].step.status = 'complete'
}

function handleCompleted(obj: { [key: string]: any }) {
  let index = steps.value.findIndex((step) => step.id === obj.id)
  setStepCompleteStatus(index)
  next(index + 1)
  // make api call to send data here
}

function updateFormDetails(updatedDetails: { [key: string]: any }, id: string | number) {
  // perform some verifications before making the update
  let idx = steps.value.findIndex((step) => step.id === id)
  Object.assign(steps.value[idx], updatedDetails)
}
</script>

<template>
  <div class="p-10 min-h-[100vh] flex justify-center items-center bg-inherit">
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
              :instructors="instructors"
              @update="updateFormDetails"
              @completed="handleCompleted"
            />
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

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