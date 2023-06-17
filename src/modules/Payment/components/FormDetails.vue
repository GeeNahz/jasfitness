<script setup lang="ts">
import { onMounted, ref, computed, watch } from 'vue'

import { validation } from '@/composables/validation'
import GenericService from '@/services/GenericService/Service'

import paystack from '@/components/custom/PayStack.vue'
import FormDetailsCard from './FormDetailsCard.vue'
import type { Instructor, PaymentFormData, PaymentPlans, ServerPlan } from '../types'
import { useAlertStore } from '@/stores/alerts'
import FormDetailsInstructorContainer from "./FormDetailsInstructorContainer.vue";

interface Props {
  wizard: { [key: string]: any };
  instructors?: Instructor[];
}

// const instructors: Instructor[] = [
//   {
//     id: 1,
//     avatar: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     name: "Penance Ian",
//     specialty: "Dance",
//   },
//   {
//     id: 2,
//     avatar: "https://images.unsplash.com/photo-1613145997970-db84a7975fbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     name: "Mike Trough",
//     specialty: "Body building",
//   },
//   {
//     id: 3,
//     avatar: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//     name: "Cynthia Christopher",
//     specialty: "Whole Fitness",
//   },
//   {
//     id: 4,
//     avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//     name: "Branden Fraesar",
//     specialty: "Calisthenics",
//   },
//   {
//     id: 5,
//     avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//     name: "Rebecca Moore",
//     specialty: "Cardio",
//   },
// ]

const props = defineProps<Props>();
  const emit = defineEmits<{
  (event: "completed", payload: { [key: string]: any }): void;
  (event: "update", data: PaymentFormData, id: number): void;
}>();

const data = ref<PaymentFormData>({
  amount: 0,
  email: "",
  firstName: "",
  id: 0,
  isNewClient: false,
  isValid: false,
  lastName: "",
  name: "",
  planId: "",
  planName: "",
  properties: "",
  userId: 0,
})
const plans = ref<PaymentPlans[]>([]) // to be auto fetched from server

function updateData(plan: PaymentPlans) {
  data.value!.planName = plan.name
  data.value!.amount = plan.amount
  data.value!.planId = plan.id
  data.value!.properties = plan.properties
}
function getSelectedPlanByName(planName: string) {
  if (!planName || planName === '') {
    return plans.value[0]
  }
  for (let plan of plans.value) {
    if (plan.name.toLowerCase() === planName.toLowerCase()) {
      return plan
    }
  }
}
function setSelectedPlan(selectedItem: { [key: string]: any }) {
  for (let index = 0; index < plans.value.length; index++) {
    plans.value[index].selected = false
    if (
      plans.value[index].name.toLowerCase() == selectedItem?.name.toLowerCase()
    ) {
      updateData(plans.value[index])
      plans.value[index].selected = true
    }
  }
}

function formatPlansObj(planData: ServerPlan[]) {
  for (let idx = 0; idx < planData.length; idx++) {
    plans.value.push({
      id: planData[idx].id,
      name: planData[idx].title,
      duration: `${planData[idx].properties.duration}`,
      amount: planData[idx].amount,
      selected: false,
      properties: planData[idx].properties
    })
  }
}

const alertStore = useAlertStore();
async function getFitnessPlans() {
  try {
    let fitnessPlans = await GenericService.fitness_plan()
    formatPlansObj(fitnessPlans.data.results.reverse())
  } catch (error) {
    alertStore.error("We were unable to fetch available plans. Refresh your browser to try again.");
  }
  let selectedPlan = getSelectedPlanByName(data.value?.planName as string)
  setSelectedPlan(selectedPlan as PaymentPlans)
}
getFitnessPlans();

const publicKey = ref<string>("");
onMounted(() => {
  data.value = props.wizard[0];
  publicKey.value = (import.meta.env.VITE_APP_PAYSTACK_PUBLIC_KEY as string);
})

const { useIsValidTextInputs } = validation()
const fieldsValidated = computed(() =>
  useIsValidTextInputs([
    data.value!.firstName,
    data.value!.lastName,
    data.value!.email
  ])
)
function handleWizardUpdate() {
  fieldsValidated.value ? data.value!.isValid = true : data.value!.isValid = false;

  emit('update', data.value as PaymentFormData, data.value!.id)
}

const isNew = computed(
  () => data.value!.isNewClient
);

// paystack options
const paystackMetadataNewUser = ref({})
const paystackMetadataOldUser = ref({})
// const vat = computed(() => (7.5 * dataAmount.value) / 100)
// + vat.value
const computedAmount = computed(() => {
  if (isNew.value) {
    return (
      data.value!.amount + 3000 + data.value?.properties?.new_sub_charges || 0
    )
  } else {
    return data.value!.amount + data.value?.properties?.resub_charges || 0
  }
})
const metadataReason = computed(() => {
  if (isNew.value) return `New gym subscription for ${data.value!.planName}`
  return `Gym re-subscription for ${data.value!.planName}`
})

const needInstructor = computed(() => {
  // TODO 2: adjust this conditional to run its check on the plan by checking for the instructors flag on the selected plan
  if (props.instructors) return props.instructors.length > 0;
  return false;
});
const instructor_id = ref<number | string>("none");
function setSelectedInstructor(id: number | string) {
  instructor_id.value = id;
}

watch(
  [data, instructor_id],
  () => {
    if (!needInstructor.value) {
      setSelectedInstructor("none");
    }

    handleWizardUpdate()
    const commonMetaData = {
      instructor_id: instructor_id.value,
      first_name: data.value!.firstName,
      last_name: data.value!.lastName,
      email: data.value!.email,
      plan_id: data.value!.planId,
      amount: data.value!.amount,
      duration: data.value!.properties.duration,
      new_sub: isNew.value,
      type: data.value!.properties.type,
      reason: metadataReason.value
    }
    paystackMetadataNewUser.value = {
      ...commonMetaData
    }
    paystackMetadataOldUser.value = {
      name: data.value!.name,
      user_id: data.value!.userId,
      ...commonMetaData
    }
  },
  { deep: true }
)
function onSuccess(e: any) {
  let jsondata = {
    id: data.value!.id,
    firstName: data.value!.firstName,
    lastName: data.value!.lastName,
    email: data.value!.email,
    reference: e.reference,
    new_sub: isNew.value
  }

  emit('completed', jsondata)
}
function onClose() {
  alertStore.warning("Your transaction has been canceled.");
}
</script>

<template>
  <div class="w-full md:w-[500px] mx-auto px-3">
    <form v-if="Object.keys(data as PaymentFormData).length" @submit.prevent="handleWizardUpdate" class="w-full">
      <!-- data fields -->
      <div class="name flex flex-col md:flex-row md:gap-3">
        <input
          type="text"
          name="firstName"
          id="first-name"
          placeholder="First name"
          v-model="data!.firstName"
          required
        />
        <input
          type="text"
          name="lastName"
          id="last-name"
          placeholder="Last name"
          v-model="data!.lastName"
          required
        />
      </div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        v-model="data!.email"
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

      <div class="my-4 md:my-9">
        <FormDetailsInstructorContainer
          v-if="instructors?.length"
          :instructors="instructors"
          @instructor-selected="setSelectedInstructor"
          :selected-instructor="instructor_id"
        />
      </div>

      <hr class="border-2 border-gray-300 my-4 md:my-9" />

      <!-- outline of charges -->
      <div class="costs-outline">
        <div class="cost">
          <p class="item">Subscription includes VAT (7.5%)</p>
          <p class="price"></p>
        </div>
        <div v-if="Object.keys(data as PaymentFormData).length > 0" class="cost">
          <p class="item">Charges</p>
          <p class="price">
            ₦
            {{
              isNew
                ? data?.properties?.new_sub_charges
                : data?.properties?.resub_charges
            }}
          </p>
        </div>
        <div v-if="isNew" class="cost">
          <p class="item">Membership setup</p>
          <p class="price">₦ 3000</p>
        </div>
        <div class="cost">
          <p class="item font-medium">Total Billing</p>
          <p class="price" style="font-size: 1rem; line-height: 1.5rem">
            ₦ {{ computedAmount }}
          </p>
        </div>
      </div>

      <paystack
        v-if="Object.keys(data as PaymentFormData).length > 0"
        buttonClass="'text-base font-semibold py-2 mt-3 w-full rounded-md text-gray-100 hover:text-gray-50 active:text-gray-50 btn btn-warning hover: disabled:text-white disabled:'"
        button-text="Continue to Payment"
        :button-disable="!fieldsValidated"
        :amount="(computedAmount || 0) * 100"
        :email="data!.email || ''"
        :public-key="publicKey"
        :metadata="isNew ? paystackMetadataNewUser : paystackMetadataOldUser"
        :label="`${data!.firstName} ${data!.lastName}`"
        :on-success="onSuccess"
        :on-cancel="onClose"
      ></paystack>
    </form>
  </div>
</template>

<style scoped lang="scss">
form {
  input[type='text'],
  input[type='email'] {
    @apply w-full h-10 rounded-md px-3 mb-3 bg-gray-100 text-gray-700 focus:bg-gray-200 placeholder:text-gray-400 focus:outline-none capitalize;
  }
  input[type='email'] {
    @apply lowercase;
  }
}
.costs-outline {
  & .cost {
    @apply flex justify-between mb-2;

    & .item {
      @apply text-xs;
    }
    & .price {
      @apply text-xs md:text-sm font-semibold;
    }
  }
}
</style>
