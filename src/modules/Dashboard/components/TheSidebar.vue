<template>
  <div class="relative w-80 h-full px-4 float-left border-r-2 border-gray-300">
    <!-- logo -->
    <div
      class="logo flex items-center space-x-4 px-3 mt-10 mb-20 font-semibold"
    >
      <div
        class="h-10 w-10 rounded bg-yellow-500 flex items-center justify-center"
      >
        JF
      </div>
      <p class="text-inherit">Jas Fitness</p>
    </div>
    <!-- outer side bar -->
    <div class="burger-menu">
      <ul class="space-y-10 text-lg">
        <li>
          <router-link :to="{ name: 'DashboardHome' }" class="p-3 flex gap-3">
            <div class="icon"><i class="fa-solid fa-house fa-xl"></i></div>
            <p>Home</p>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'DashboardFitnessRecord' }"
            class="p-3 flex gap-3"
          >
            <div class="icon">
              <i class="fa-solid fa-file-waveform fa-xl"></i>
            </div>
            <p>Fiteness Record</p>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'DashboardSubscription' }"
            class="p-3 flex gap-3"
          >
            <div class="icon">
              <i class="fa-regular fa-credit-card fa-xl"></i>
            </div>
            <p>Subscription</p>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- logout button -->
    <router-link
      :to="{ name: 'LoginPage' }"
      class="absolute bottom-10 flex items-center space-x-4"
      ><div class="icon">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
      </div>
      <p>Logout</p></router-link
    >
  </div>
</template>

<script setup></script>

<style scoped>
a {
  color: #2c3e50;
  transition: color 0.15s ease-in-out, border 0.15s ease-in-out;
}
a:hover {
  /* color: #745031; */
  color: #ca9b42;
  /* transition: color 0.2s ease-in-out; */
}

a.router-link-exact-active {
  color: #ca9b42;
  border-left: solid #ca9b42;
}
</style>
