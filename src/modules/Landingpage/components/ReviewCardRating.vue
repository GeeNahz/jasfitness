<script setup lang="ts">
import { defineComponent, computed } from "vue";
defineComponent({ name: "ReviewCardRating" });
interface Props {
  stars: number;
}
withDefaults(defineProps<Props>(), { stars: 0 });

const StarCount = computed(() => [...Array(5)]);
</script>

<template>
  <div class="stars-review">
    <span v-for="(star, index) in StarCount" :key="index" class="star">
      <svg
        class="big-stars"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.0881 7.64095C23.1998 7.14095 22.7531 6.54095 22.1947 6.54095L15.8286 5.74095L12.9247 0.540954C12.813 0.340954 12.7014 0.240954 12.478 0.140954C11.9196 -0.159046 11.2494 0.0409541 10.9144 0.540954L8.12224 5.74095L1.75615 6.54095C1.42109 6.54095 1.19772 6.64095 1.08603 6.84095C0.639291 7.24095 0.639291 7.84095 1.08603 8.24095L5.66515 12.241L4.54829 17.941C4.54829 18.141 4.54829 18.341 4.65998 18.541C4.99504 19.041 5.66515 19.241 6.22358 18.941L11.9196 16.241L17.6155 18.941C17.7272 19.041 17.9506 19.041 18.174 19.041C18.2857 19.041 18.2857 19.041 18.3973 19.041C18.9558 18.941 19.4025 18.441 19.2908 17.841L18.174 12.141L22.7531 8.14095C22.9765 8.04095 23.0881 7.84095 23.0881 7.64095Z"
          :fill="index <= stars - 1 ? '#FFBE41' : '#1f1f1f'"
        />
      </svg>
      <svg
        class="small-stars"
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.7084 6.25768C14.7772 5.86724 14.5019 5.39871 14.1579 5.39871L10.236 4.77401L8.44706 0.713435C8.37826 0.55726 8.30945 0.479172 8.17184 0.401084C7.82782 0.16682 7.41498 0.322996 7.20857 0.713435L5.48843 4.77401L1.56652 5.39871C1.3601 5.39871 1.22249 5.4768 1.15368 5.63297C0.87846 5.94533 0.87846 6.41385 1.15368 6.7262L3.97471 9.84972L3.28665 14.3007C3.28665 14.4569 3.28665 14.6131 3.35546 14.7693C3.56187 15.1597 3.97471 15.3159 4.31873 15.0816L7.82782 12.9732L11.3369 15.0816C11.4057 15.1597 11.5433 15.1597 11.6809 15.1597C11.7497 15.1597 11.7497 15.1597 11.8185 15.1597C12.1626 15.0816 12.4378 14.6912 12.369 14.2226L11.6809 9.77163L14.5019 6.64812C14.6396 6.57003 14.7084 6.41385 14.7084 6.25768Z"
          :fill="index <= stars - 1 ? '#FFBE41' : '#1f1f1f'"
        />
      </svg>
    </span>
  </div>
</template>

<style scoped>
.big-stars {
  display: block;
}
.small-stars {
  display: none;
}
.stars-review {
  display: flex;
  width: max-content;
}
.star {
  margin: 0;
  padding: 0;
  width: inherit;
}

@media screen and (max-width: 640px) {
  .big-stars {
    display: none;
  }
  .small-stars {
    display: block;
  }
  .star {
    width: 1rem;
  }
}
</style>
