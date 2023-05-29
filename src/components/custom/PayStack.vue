<script setup lang="ts">
import PaystackPop from "@paystack/inline-js"

interface Props {
  publicKey: string;
  email: string;
  amount: number;
  reference?: string;
  currency?: string;
  channels?: string[];
  metadata?: { [key: string]: any };
  label?: string;
  onSuccess: (response: any) => any;
  onCancel: () => any;
  buttonText?: string;
  buttonClass?: string;
  buttonDisable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {

  reference: "",
  currency: "NGN",
  label: "",
  channels: () => {
    return ['card', 'bank', 'ussd', 'qr', 'mobile_money'];
  },
  metadata: () => { return {}; },
  onSuccess: (response: any) => {
    console.log(response);
  },
  onCancel: () => console.log("Payment cancelled"),
  buttonClass: "btn btn-primary",
  buttonText: "Pay With Paystack",
  buttonDisable: false,
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
    onSuccess: (response: any) => {
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