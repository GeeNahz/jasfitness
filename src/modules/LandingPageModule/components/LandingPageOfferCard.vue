<template>
  <div
    class="flex flex-col items-center text-center p-5 w-60 max-h-max md:w-72 bg-zinc-800 rounded"
  >
    <p class="uppercase text-white text-lg font-bold">{{ title }}</p>
    <div class="w-32 h-32 my-3 fill-white">
      <img :src="require(`../assets/${svgIcon}`)" :alt="svgIcon" />
    </div>
    <p class="text-white text-sm font-light">{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: 'LandingPageOfferCard',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    body: {
      type: String,
      default: 'Description'
    },
    svgIcon: {
      type: String,
      default: 'aerobics.svg'
    }
  }
}
</script>
