<template>
  <div class="h-full">
    <router-view :key="$route.path" class="h-full" />
  </div>
</template>

<script>
export default {
  name: 'DashboardView'
}
</script>
