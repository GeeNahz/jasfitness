<template>
  <div class="lg:pt-20 px-4 w-full h-[858px] lg:h-[551px] bg-[#171717]">
    <div
      class="w-full h-[95%] lg:h-[90%] flex flex-col md:flex-row justify-evenly items-center lg:items-start text-white lg:text-2xl font-inter capitalize"
    >
      <div class="flex flex-col items-center lg:block">
        <div class="font-inter font-semibold text-2xl lg:text-4xl mb-4">
          <p>Quick Links</p>
          <div
            class="border-b border-2 border-yellow-600 mt-1 mx-auto lg:mx-0 w-[60%]"
          ></div>
        </div>
        <ul class="lg:space-y-[14px] grid grid-cols-2 gap-4 lg:block">
          <li>
            <router-link :to="{ name: 'LandingPageHome' }" class="w-full"
              >About us</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'LandingPageHome' }" class="w-full"
              >Community</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'LoginPage' }" class="w-full"
              >Log in</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'SignupPage' }" class="w-full"
              >sign up</router-link
            >
          </li>
        </ul>
      </div>
      <div class="flex flex-col items-center lg:block">
        <div class="font-inter w-max font-semibold text-2xl lg:text-4xl mb-4">
          <p>Our schedules</p>
          <div
            class="border-b border-2 border-yellow-600 mt-1 mx-auto lg:mx-0 w-[60%]"
          ></div>
        </div>
        <ul
          class="lg:space-y-[14px] flex flex-col justify-center gap-4 lg:block"
        >
          <li class="flex gap-4 lg:gap-5 items-center">
            <p>Monday - Saturday</p>
            <p>6.00AM - 9.00PM</p>
          </li>
          <li class="flex gap-14 lg:gap-24 items-center">
            <p>Public Holidays</p>
            <p>6.00AM - 8.00PM</p>
          </li>
          <li class="flex gap-[106px] lg:gap-[170px] items-center">
            <p>Cleaning</p>
            <p>1.00PM - 4.00PM</p>
          </li>
        </ul>
      </div>
      <div class="flex flex-col items-center lg:block">
        <div class="font-inter font-semibold text-2xl lg:text-4xl mb-4">
          <p>Contact us</p>
          <div
            class="border-b border-2 border-yellow-600 mx-auto lg:mx-0 mt-1 w-[60%]"
          ></div>
        </div>
        <ul class="lg:space-y-[14px] flex justify-center gap-4 lg:block">
          <li class="uppercase">Message us</li>
          <li class="flex gap-2">
            <div>
              <a href="www.facebook.com"
                ><img src="@/assets/icons/facebook.svg" alt="f-social"
              /></a>
            </div>
            <div>
              <a href="www.instagram.com"
                ><img src="@/assets/icons/instagram.svg" alt="i-social"
              /></a>
            </div>
            <div>
              <a href="www.youtube.com"
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
        &copy; 2022 Jas Fitness Center &#124;
        <a href="https://">Privacy Policy</a> &#124;
        <a href="https://">Terms & Conditions</a> &#124; Powered by JAS FITNESS
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
