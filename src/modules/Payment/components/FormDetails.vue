<template>
  <div class="w-[500px] mx-auto">
    <form @submit.prevent="handleFormSubmit" class="w-full">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Full name"
        v-model="data.name"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        v-model="data.email"
      />

      <input type="hidden" name="amount" v-model="data.amount" />
      <!-- place plan card here -->

      <hr class="border-2 border-gray-300 my-9" />

      <div class="costs-outline">
        <div class="cost">
          <p class="item">Subscription includes VAT (7.5%)</p>
          <p class="price"></p>
        </div>
        <div class="cost">
          <p class="item font-medium">Total Billin</p>
          <p class="price">₦{{ data.amount }}</p>
        </div>
      </div>
      <!-- <button
        type="submit"
        class="text-base font-semibold py-2 mt-3 w-full rounded-md bg-amber-400 text-white"
      >
        Continue to Payment
      </button> -->
      <paystack
        v-if="data"
        buttonClass="'text-base font-semibold py-2 mt-3 w-full rounded-md text-gray-100 hover:text-gray-50 btn btn-warning hover:'"
        buttonText="Continue to Payment"
        :amount="data.amount * 100"
        :email="data.email"
        :public-key="publicKey"
        :reference="reference"
        :on-success="onSuccess"
        :on-cancel="onClose"
      ></paystack>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import { v4 as uuid } from 'uuid'

import paystack from 'vue3-paystack'

const props = defineProps({
  wizard: {
    type: Object,
    required: true
  }
})

// const plans = ref([
//   {
//     id: 1,
//     name: 'Premium',
//     billing: 'Monthly',
//     price: '20,000'
//   },
//   {
//     id: 2,
//     name: 'V-I-P',
//     billing: 'Monthly',
//     price: '40,000'
//   }
// ]) // to be auto fetched from server
const data = ref({})
const publicKey = ref('')
onMounted(() => {
  // request for plans from endpoint
  data.value = props.wizard[0]
  publicKey.value = process.env.VUE_APP_PAYSTACK_PUBLIC_KEY
})

// const emit = defineEmits(['update'])
function handleFormSubmit() {
  // console.log(props.wizard)
  // emit('update', data.value)
}

// paystack options
const reference = uuid()
function onSuccess(e) {
  console.log(e)
}
function onClose() {
  console.log('Paystack closed')
}
</script>

<style scoped lang="scss">
form {
  input[type='text'],
  input[type='email'] {
    @apply w-full h-10 rounded-md px-3 mb-3 bg-gray-200 text-gray-700 focus:bg-gray-300 placeholder:text-gray-400 focus:outline-none;
  }
}
.costs-outline {
  & .cost {
    @apply flex justify-between mb-2;

    & .item {
      @apply text-xs;
    }
    & .price {
      @apply font-semibold;
    }
  }
}
</style>
