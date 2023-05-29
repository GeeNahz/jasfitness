<script setup lang="ts">
import { provide, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

import { useMeta } from "vue-meta";

import AppCookieBanner from "./components/AppCookieBanner.vue";
import AppPersonalizeCookies from "./components/AppPersonalizeCookies.vue";
import TheAlerts from "./components/TheAlerts.vue";

// import HelloWorld from './components/HelloWorld.vue'

useMeta({
  title: '',
  htmlAttrs: { lang: 'en', amp: true }
})

const showCookiesPreferences = ref(false)
function toggleShowCookiesPreferences() {
  showCookiesPreferences.value = !showCookiesPreferences.value
}
provide('cookiesPreferences', { toggleShowCookiesPreferences })
</script>

<template>
  <div class="w-full">
    <metainfo>
      <template v-slot:title="{ content }">
        {{ content ? `${content} | Jas-Fitness` : `Jas-Fitness` }}
      </template>
    </metainfo>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <!-- <header>
      <div class="wrapper">  
        <nav>
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
          <RouterLink :to="{ name: 'AboutPage' }">About</RouterLink>
        </nav>
      </div>
    </header> -->
    <!-- main components -->
    <RouterView />
    <AppCookieBanner />
    <AppPersonalizeCookies v-if="showCookiesPreferences" />
    <TheAlerts />
  </div>

</template>

<style>
body {
  /* min-height: 100vh; */
  width: 100%;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
