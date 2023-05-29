<script setup lang="ts">
import { nextTick } from "vue";
import type { AlertOptions } from "@/types";
import { useClipboard } from "@vueuse/core";
import { useAlertStore } from "@/stores/alerts";

interface Event {
  title: string;
  description: string;
  imageName: string;
  linkUrl: string;
  linkText: string;
}
interface Props {
  event: Event;
}
defineProps<Props>();

const store = useAlertStore();

const { copy } = useClipboard();
const copyToClipboard = async (value: string) => {
  copy(value)
  nextTick(() => {
    let alertData = {
      message: "Number successfully copied to clipboard",
      options: {
        timeout: false
      } as AlertOptions,
    };
    store.success(alertData.message, { timeout: alertData.options.timeout })
  })
}
</script>

<template>
  <div
    class="single-module relative w-[412px] lg:w-full xl:w-[412px] min-w-[300px] h-[431px] bg-white">
    <div class="module h-full bg-cover bg-center" :style="`background-image: url(${event.imageName})`"></div>
    <div class="module-pop-up text-[#171717] font-inter bg-white rounded-t-2xl p-4 h-[60%]">
      <h1 class="font-medium text-xl mb-2">{{ event.title }}</h1>
      <p class="text-sm leading-1 font-light">
        {{ event.description }}
      </p>
      <a v-if="event.linkUrl" :href="event.linkUrl" class="flex gap-2 py-4 text-lg font-quicksand font-semibold"
        target="_blank"><img src="@/assets/icons/GooglereviewlinkIcon.svg" alt="get start" />
        <p>{{ event.linkText }}</p>
      </a>
      <a v-else @click.prevent="copyToClipboard(event.linkText)" href="https://"
        class="flex flex-nowrap gap-2 py-4 text-lg font-quicksand font-semibold"><img
          src="@/assets/icons/GooglereviewlinkIcon.svg" alt="get start" />
        <p>Call {{ event.linkText }}</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.single-module {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
}
.single-module:hover .module-pop-up {
  bottom: 0px;
}
.single-module:hover .module {
  filter: brightness(0.5) blur(2px);
}
.module {
  transition: all 0.5s ease-out;
}
.module-pop-up {
  position: absolute;
  bottom: -60%;
  transition: all 0.5s ease-out 0.1s;
}
</style>