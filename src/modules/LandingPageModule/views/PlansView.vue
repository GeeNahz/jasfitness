<template>
  <div>Plans page</div>
  <pre>{{ plans }}</pre>
</template>

<script setup>
import { ref } from 'vue'

const plans = ref([
  {
    slug: 'BUSY-BEE',
    price: 'N15,000',
    billing: 'BILLED QUARTERLY',
    offers: [
      '15% Price Discount',
      'ALL Day Access',
      'FREE Group Classes',
      '1 Guest Pass Per Month'
    ]
  },
  {
    slug: 'PASSER-BY',
    price: 'N20,000',
    billing: 'BILLED MONTHLY',
    offers: [
      'NO Price Discount',
      'ACCESS Once Daily',
      'PERSONAL Dashboard For Tracking Fitness Records',
      'FREE Group Classes',
      'NO Guest Passes',
      'NO Freeze Subscription Request'
    ]
  },
  {
    slug: 'TOO-SURE',
    price: 'N51,000',
    billing: 'BILLED QUARTERLY',
    offers: [
      '15% Price Discount',
      'ALL Day Access',
      'PERSONAL Dashboard For Tracking Fitness Records',
      'FREE Group Classes',
      '1 Guest Pass per Month',
      '4 Days per Subscription Freeze Request'
    ]
  },
  {
    slug: 'REAL-DEAL',
    price: 'N96,000',
    billing: 'BILLED BI-YEARLY',
    offers: [
      '20% Price Discount',
      'ALL Day Access',
      'PERSONAL Dashboard For Tracking Fitness Records',
      'FREE Group Classes',
      '2 Guest Pass per Month',
      '8 Days per Subscription Freeze Request'
    ]
  },
  {
    slug: 'ODOGWU',
    price: 'N168,000',
    billing: 'BILLED YEARLY',
    offers: [
      '30% Price Discount',
      'ALL Day Access',
      'PERSONAL Dashboard For Tracking Fitness Records',
      'FREE Group Classes',
      '3 Guest Pass per Month',
      '14 Days per Subscription Freeze Request'
    ]
  }
])
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/base';
</style>
