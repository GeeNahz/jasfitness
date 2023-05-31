import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { GenericStoreState } from '@/types';

export const useGenericStore = defineStore('genericStore', () => {
  const defaultState: GenericStoreState = {
    showSplashScreen: false,
  }
  const state = ref<GenericStoreState>(defaultState);

  const showSplashScreen = computed(() => state.value.showSplashScreen);

  function toggleSplashScreen(value: boolean) {
    state.value.showSplashScreen = value;
  }

  return { state, showSplashScreen, toggleSplashScreen }
})
