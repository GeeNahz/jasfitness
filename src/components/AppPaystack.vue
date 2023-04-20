<template>
  <div>
    <button
      @click="payWithPaystack"
      :disabled="buttonDisable"
      :class="buttonClass"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
import PaystackPop from '@paystack/inline-js'

const props = defineProps({
  // button options
  buttonText: {
    type: String,
    default: 'Pay With Paystack'
  },
  buttonClass: {
    type: String,
    default: 'btn btn-primary'
  },
  buttonDisable: {
    type: Boolean,
    default: false
  },
  // paystack options
  publicKey: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  reference: {
    type: String,
    default: ''
  },
  currency: {
    type: String,
    default: 'NGN'
  },
  channels: {
    type: Array,
    default: function () {
      return ['card', 'bank', 'ussd', 'qr', 'mobile_money']
    }
  },
  metadata: {
    type: Object,
    default: function () {
      return {}
    }
  },
  label: {
    type: String,
    default: ''
  },
  onSuccess: {
    type: Function,
    default: (response) => {
      console.log(response)
    }
  },
  onCancel: {
    type: Function,
    default: () => {
      console.log('Payment cancelled')
    }
  }
})

function payWithPaystack() {
  const paystackOptions = {
    key: props.publicKey,
    email: props.email,
    amount: props.amount,
    ref: props.reference,
    currency: props.currency,
    channels: props.channels,
    metadata: props.metadata,
    label: props.label,
    onSuccess: (response) => {
      props.onSuccess(response)
    },
    onCancel: () => {
      props.onCancel()
    }
  }

  const paystack = new PaystackPop()
  paystack.newTransaction(paystackOptions)
}
</script>
