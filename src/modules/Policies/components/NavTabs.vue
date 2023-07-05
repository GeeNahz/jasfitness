<script setup lang="ts"></script>

<template>
  <nav class="policies-tags pt-3 bg-slate-200">
    <ul class="container flex items-end text-sm text-slate-500">
      <li>
        <router-link :to="{ name: 'privacy-policy' }">Privacy Policy</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'terms-of-service' }">Terms and Conditions</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
li {
  @apply flex;

  & a {
    @apply p-4 rounded-t transition-all hover:text-inherit;
  }

  & a.router-link-exact-active {
    @apply text-slate-800 bg-white;
  }
}
</style>