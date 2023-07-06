<template>
  <div class="container mb-32 px-6">
    <!-- title -->
    <div class="page-title pb-14 border-b-2 mb-14">
      <h1 class="text-5xl font-bold mb-4">Privacy Policy</h1>
      <p class="font-semibold">
        Last Updated: 
        <span class="font-normal">June, 2023</span>
      </p>
    </div>
    
    <div class="body">
      <p class="summary-text w-full lg:w-[900px] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor officia, esse illo suscipit expedita rerum ipsa excepturi dolore quia sapiente, eaque laborum impedit! Atque porro, iusto possimus modi animi nemo dicta facilis assumenda rerum. Labore et vitae porro. Voluptates sunt distinctio perferendis? Unde ipsum inventore perferendis distinctio sit repellat quae facere iusto dolores pariatur, voluptas, aperiam vel eveniet obcaecati. Dolor nemo inventore molestias velit, obcaecati quidem omnis rem doloremque?
      </p>

      <div class="main-section">
        
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  @apply w-full lg:w-[900px] mx-auto;

  & .sub-section {
    @apply mb-16;
    
    & .sub-section__title {
      @apply font-bold text-xl uppercase mb-4 border-b pb-2;
    }

    & .sub-section__content {
      @apply mb-5;
      .sub-section__content__sub-title {
        @apply font-medium text-base mb-1;
      }

      .sub-section__content__body {
        @apply font-light;
      }
    }
  }
}

.ref {
  @apply text-amber-500 font-medium hover:underline;
}
</style>