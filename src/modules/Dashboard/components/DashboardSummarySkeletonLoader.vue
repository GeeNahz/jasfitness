<template>
  <div class="flex justify-between w-full">
    <div class="item skeleton-loader">
      <p class="text-xs md:text-base bg-gray-300 item-title"></p>
      <p class="text-xl md:text-3xl font-semibold bg-gray-300 item-body"></p>
      <!-- <p class="text-xs md:text-base bg-gray-300 item-title"></p> -->
    </div>
    <div class="item skeleton-loader">
      <p class="text-xs md:text-base bg-gray-300 item-title"></p>
      <p class="text-xl md:text-3xl font-semibold bg-gray-300 item-body"></p>
      <!-- <p class="text-xs md:text-base bg-gray-300 item-title"></p> -->
    </div>
    <div class="item skeleton-loader">
      <p class="text-xs md:text-base bg-gray-300 item-title"></p>
      <p class="text-xl md:text-3xl font-semibold bg-gray-300 item-body"></p>
      <!-- <p class="text-xs md:text-base bg-gray-300 item-title"></p> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../assets/styles/base';
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.item-title,
.item-body {
  border-radius: 0.2rem;
}
.item-title {
  width: 10rem;
  height: 1.5rem;
  margin-bottom: 0.5rem;

  @include responsive('mobile-landscape-width') {
    width: 5rem;
    height: 0.75rem;
    margin-bottom: 0.25rem;
  }
}
.item-body {
  width: 6rem;
  height: 1.5rem;
  margin-bottom: 0.5rem;

  @include responsive('mobile-landscape-width') {
    width: 3rem;
    height: 0.75rem;
    margin-bottom: 0.25rem;
  }
}

.skeleton-loader {
  animation: fade 1s ease-in-out infinite alternate;
}

@keyframes fade {
  0% {
    opacity: 10%;
  }
  100% {
    opacity: 100%;
  }
}
</style>
