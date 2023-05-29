<script lang=ts>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MemberSetupModule'
})
</script>
<template>
  <div class="h-full font-inter" :key="$route.path">
    <router-view :key="$route.path" />
  </div>
</template>