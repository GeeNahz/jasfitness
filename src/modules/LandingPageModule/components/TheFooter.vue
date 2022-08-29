<template>
  <footer class="md:px-52 bg-zinc-900">
    <div class="flex flex-col justify-around p-16 md:flex-row md:gap-5 md:h-80">
      <!-- Useful links -->
      <div class="links flex gap-16 lg:gap-60 mb-5">
        <div class="flex flex-col items-start space-y-4">
          <p class="font-bold uppercase text-gray-500">Category</p>
          <ul class="space-y-2 text-start mb-8 md:mb-0 text-white">
            <li class="text-xs lg:text-sm font-light capitalize">
              <a href="https://" class="hover:text-[#fe902d]"> First Link </a>
            </li>
            <li class="text-xs lg:text-sm font-light capitalize text-white">
              <a href="https://" class="hover:text-[#fe902d]">
                Second Long Link
              </a>
            </li>
            <li class="text-xs lg:text-sm font-light capitalize text-white">
              <a href="https://" class="hover:text-[#fe902d]"> Third Link </a>
            </li>
            <li class="text-xs lg:text-sm font-light capitalize text-white">
              <a href="https://" class="hover:text-[#fe902d]">
                Fourth Long Link
              </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-start space-y-4">
          <p class="font-bold uppercase text-gray-500">Category</p>
          <ul class="space-y-2 text-start mb-8 md:mb-0 text-white">
            <li class="text-xs lg:text-sm font-light capitalize">
              <a href="https://" class="hover:text-[#fe902d]"> First Link </a>
            </li>
            <li class="text-xs lg:text-sm font-light capitalize text-white">
              <a href="https://" class="hover:text-[#fe902d]">
                Second Long Link
              </a>
            </li>
            <li class="text-xs lg:text-sm font-light capitalize text-white">
              <a href="https://" class="hover:text-[#fe902d]"> Third Link </a>
            </li>
            <li class="text-xs lg:text-sm font-light capitalize text-white">
              <a href="https://" class="hover:text-[#fe902d]">
                Fourth Long Link
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Social links -->
      <div class="space-y-10">
        <div class="flex justify-center items-center space-x-9 my-0">
          <a
            href="https://"
            class="w-14 h-14 rounded-full bg-zinc-800 text-white hover:bg-[#fe902d] flex justify-center items-center"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://"
            class="w-14 h-14 rounded-full bg-zinc-800 text-white hover:bg-[#fe902d] flex justify-center items-center"
          >
            <i class="fa-brands fa-twitter fa-lg"></i>
          </a>
          <a
            href="https://"
            class="flex items-center justify-center w-14 h-14 rounded-full text-white bg-zinc-800 hover:bg-[#fe902d]"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
        </div>
        <div class="text-white space-y-5">
          <div class="flex justify-center items-start space-x-3">
            <i class="fa-solid fa-location-dot"></i>
            <span class="text-xs md:text-sm">
              B242, Penthouse estate, Airport Rd, Lugbe
            </span>
          </div>
          <div class="flex justify-start items-center space-x-3">
            <i class="fa-solid fa-phone"></i>
            <span class="text-xs md:text-sm">0811785442</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom section -->
    <p class="float-end text-gray-300 text-sm"><a href="#">Back to top</a></p>
    <p class="text-gray-300 text-sm">
      &copy; 2022 Company, Inc. &middot;
      <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
