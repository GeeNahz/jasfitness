<script setup lang="ts">
import AppBadge from './AppBadge.vue';

interface QuickLink {
  id: number;
  routeName: string;
  displayName: string;
  isNew?: boolean;
}
const quickLinks: QuickLink[] = [
  {
    id: 1,
    routeName: "AboutPage",
    displayName: "About Us",
    isNew: false,
  },
  {
    id: 2,
    routeName: "CommunityPage",
    displayName: "Community",
    isNew: false,
  },
  {
    id: 3,
    routeName: "LoginPage",
    displayName: "Log in",
    isNew: false,
  },
  {
    id: 4,
    routeName: "PlansPage",
    displayName: "Sign up",
    isNew: false,
  },
  {
    id: 5,
    routeName: "Careers",
    displayName: "careers",
    isNew: true,
  },
];
</script>
<template>
  <div
    class="footer-container lg:pt-20 px-4 w-full h-[858px] lg:h-[551px] bg-[#171717]"
  >
    <div
      class="w-full h-[95%] lg:h-[90%] flex flex-col lg:flex-row justify-evenly items-center lg:items-start text-white text-sm lg:text-lg font-inter capitalize"
    >
      <div class="flex flex-col items-center lg:block">
        <div class="font-inter font-semibold text-lg lg:text-2xl mb-4">
          <p>Quick Links</p>
          <div
            class="border-b border-2 border-yellow-600 mt-1 mx-auto lg:mx-0 w-[60%]"
          ></div>
        </div>
        <ul class="lg:space-y-[14px] grid grid-cols-2 gap-4 lg:block">
          <li v-for="quickLink in quickLinks" :key="quickLink.id">
            <router-link
              :to="{ name: quickLink.routeName }"
              class="w-full flex gap-2"
            >
              {{ quickLink.displayName }} <AppBadge v-if="quickLink.isNew" color="green">New🔥</AppBadge>
            </router-link
            >
          </li>
          <!-- <li>
            <router-link :to="{ name: 'HelpPage' }" class="w-full"
              >help</router-link
            >
          </li> -->
        </ul>
      </div>
      <div class="flex flex-col items-center lg:block">
        <div class="font-inter w-max font-semibold text-lg lg:text-2xl mb-4">
          <p>Our schedules</p>
          <div
            class="border-b border-2 border-yellow-600 mt-1 mx-auto lg:mx-0 w-[60%]"
          ></div>
        </div>
        <ul
          class="lg:space-y-[14px] flex flex-col justify-center gap-4 lg:block"
        >
          <li class="flex gap-[22px] lg:gap-12 items-center">
            <p>Monday - Saturday</p>
            <p>6.00AM - 9.00PM</p>
          </li>
          <li class="flex gap-12 lg:gap-20 items-center">
            <p>Public Holidays</p>
            <p>6.00AM - 8.00PM</p>
          </li>
          <li class="flex gap-[92px] lg:gap-[137px] items-center">
            <p>Cleaning</p>
            <p>1.00PM - 4.00PM</p>
          </li>
        </ul>
      </div>
      <div class="flex flex-col items-center lg:block">
        <div class="font-inter font-semibold text-lg lg:text-2xl mb-4">
          <p>Contact us</p>
          <div
            class="border-b border-2 border-yellow-600 mx-auto lg:mx-0 mt-1 w-[60%]"
          ></div>
        </div>
        <ul class="lg:space-y-[14px] flex justify-center gap-4 lg:block">
          <li class="uppercase">Message us</li>
          <li class="flex gap-2">
            <div>
              <a
                href="https://web.facebook.com/people/Jas-Fitness-Center/100069109021018/"
                ><img src="@/assets/icons/facebook.svg" alt="f-social"
              /></a>
            </div>
            <div>
              <a href="https://www.instagram.com/jasfitnesscenter/"
                ><img src="@/assets/icons/instagram.svg" alt="i-social"
              /></a>
            </div>
            <div>
              <a href="https://www.youtube.com/channel/UC8de7Jb9KDag_JYCW-fsDaA"
                ><img src="@/assets/icons/youtube.svg" alt="f-social"
              /></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="w-full lg:mb-7 text-[#969696] font-extralight text-[10px] lg:text-sm text-center"
    >
      <p>
        &copy; 2023 Jas Fitness Center &#124;
        <router-link :to="{ name: 'privacy-policy' }">Privacy Policy</router-link> &#124;
        <router-link :to="{ name: 'terms-of-service' }">Terms & Conditions</router-link> &#124; Powered by JAS FITNESS
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/styles/base';

.footer-container {
  padding-top: 8rem;
  @include responsive('tablet-width') {
    // padding-top: 0;
  }
}
</style>
