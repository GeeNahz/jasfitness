<template>
  <div class="w-full md:w-[500px] mx-auto px-3">
    <form @submit.prevent="handleWizardUpdate" class="w-full">
      <!-- data fields -->
      <div class="name flex flex-col md:flex-row md:gap-3">
        <input
          type="text"
          name="firstName"
          id="first-name"
          placeholder="First name"
          v-model="data.firstName"
          required
        />
        <input
          type="text"
          name="lastName"
          id="last-name"
          placeholder="Last name"
          v-model="data.lastName"
          required
        />
      </div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        v-model="data.email"
        required
      />

      <!-- plan card here -->
      <div class="select-plan mt-2 md:mt-4">
        <p
          class="mb-2 md:mb-3 text-sm md:text-base font-medium md:font-semibold"
        >
          Choose a plan
        </p>
        <!-- <div class="flex gap-2 md:gap-3"> -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
          <FormDetailsCard
            v-for="plan in plans"
            :key="plan.id"
            :item="plan"
            @selected="setSelectedPlan"
            class="hover:cursor-pointer"
          />
        </div>
      </div>

      <hr class="border-2 border-gray-300 my-4 md:my-9" />

      <!-- outline of charges -->
      <div class="costs-outline">
        <div class="cost">
          <p class="item">Subscription includes VAT (7.5%)</p>
          <p class="price"></p>
        </div>
        <div class="cost">
          <p class="item font-medium">Total Billing</p>
          <p class="price">₦ {{ computedAmount }}</p>
        </div>
      </div>

      <paystack
        v-if="Object.keys(data).length > 0"
        buttonClass="'text-base font-semibold py-2 mt-3 w-full rounded-md text-gray-100 hover:text-gray-50 active:text-gray-50 btn btn-warning hover: disabled:text-white disabled:'"
        button-text="Continue to Payment"
        :button-disable="!fieldsValidated"
        :amount="(computedAmount || 0) * 100"
        :email="data.email || ''"
        :public-key="publicKey"
        :metadata="paystackMetadata"
        :on-success="onSuccess"
        :on-cancel="onClose"
      ></paystack>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue'

import { validation } from '@/composables/validation.js'
import GenericService from '@/services/GenericServices/GenericService.js'

import paystack from '@/components/AppPaystack.vue'
import FormDetailsCard from './FormDetailsCard.vue'
import { useStore } from 'vuex'

const props = defineProps({
  wizard: {
    type: Object,
    required: true
  }
})
/** 
 * {
    id: 1,
    name: 'Premium',
    billing: 'Monthly',
    price: '20,000',
    selected: false
  },
  {
    id: 2,
    name: 'V-I-P',
    billing: 'Monthly',
    price: '40,000',
    selected: false
  }
*/

function setDataAmount(priceValue) {
  data.value.amount = priceValue
}
function setDataProperties(properties) {
  data.value.properties = properties
}
function getSelectedPlanByName(planName) {
  for (let plan of plans.value) {
    if (plan.name.toLowerCase() === planName.toLowerCase()) {
      return plan
    }
  }
}
function setSelectedPlan(selectedItem) {
  for (let index = 0; index < plans.value.length; index++) {
    plans.value[index].selected = false
    if (
      plans.value[index].name.toLowerCase() == selectedItem?.name.toLowerCase()
    ) {
      setDataAmount(plans.value[index].amount)
      setDataProperties(plans.value[index].properties)
      plans.value[index].selected = true
    }
  }
}

const plans = ref([]) // to be auto fetched from server
function formatPlansObj(planData) {
  for (let idx = 0; idx < planData.length; idx++) {
    plans.value.push({
      id: idx + 1,
      name: planData[idx].title,
      duration: `${planData[idx].properties.duration}`,
      amount: planData[idx].amount,
      selected: false,
      properties: planData[idx].properties
    })
  }
}
const store = useStore()
async function getFitnessPlans() {
  try {
    let fitnessPlans = await GenericService.fitness_plan()
    formatPlansObj(fitnessPlans.data.results.reverse())
  } catch (error) {
    store.dispatch('landingpage/error', {
      message:
        'We were unable to fetch available plans. Refresh your browser to try again.'
    })
  }
  let selectedPlan = getSelectedPlanByName(data.value?.planName)
  setSelectedPlan(selectedPlan)
}
getFitnessPlans()

const data = ref({})
const publicKey = ref('')
onMounted(async () => {
  data.value = props.wizard[0]
  publicKey.value = process.env.VUE_APP_PAYSTACK_PUBLIC_KEY
})

const { useIsValidTextInputs } = validation()
const fieldsValidated = computed(() =>
  useIsValidTextInputs([
    data.value.firstName,
    data.value.lastName,
    data.value.email
  ])
)
const emit = defineEmits(['update', 'completed'])
function handleWizardUpdate() {
  if (fieldsValidated.value) {
    data.value.isValid = true
  } else {
    data.value.isValid = false
  }
  emit('update', data.value, data.value.id)
}

// paystack options
const paystackMetadata = ref({})
// const vat = computed(() => (7.5 * dataAmount.value) / 100)
// + vat.value
const computedAmount = computed(() => data.value.amount)

watch(
  data,
  () => {
    handleWizardUpdate()
    paystackMetadata.value = {
      first_name: data.value.firstName,
      last_name: data.value.lastName,
      email: data.value.email,
      plan: data.value.planName,
      amount: data.value.amount,
      duration: data.value.properties.duration,
      new_sub: data.value.isNewClient === 'true',
      type: data.value.properties.type,
      reason: `Gym payment for ${data.value.planName}`
    }
  },
  { deep: true }
)
function onSuccess(e) {
  let jsondata = {
    id: data.value.id,
    firstName: data.value.firstName,
    lastName: data.value.lastName,
    email: data.value.email,
    reference: e.reference,
    new_sub: data.value.isNewClient === 'true'
  }

  emit('completed', jsondata)
}
function onClose() {
  console.log('Paystack closed')
}
</script>

<style scoped lang="scss">
form {
  input[type='text'],
  input[type='email'] {
    @apply w-full h-10 rounded-md px-3 mb-3 bg-gray-100 text-gray-700 focus:bg-gray-200 placeholder:text-gray-400 focus:outline-none;
  }
}
.costs-outline {
  & .cost {
    @apply flex justify-between mb-2;

    & .item {
      @apply text-xs;
    }
    & .price {
      @apply text-sm md:text-base font-semibold;
    }
  }
}
</style>
