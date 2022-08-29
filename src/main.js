import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import LandingPageModule from './modules/LandingPageModule'

import { registerModules } from './register-modules'
import './index.css'

registerModules({
  landingpage: LandingPageModule
})

createApp(App).use(store).use(router).mount('#app')
