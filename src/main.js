import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import formkitTheme from '../formkitTheme'

import LandingPageModule from './modules/LandingPageModule'
import Dashboard from './modules/Dashboard'
import Auth from './modules/Auth'

import { registerModules } from './register-modules'
import './index.css'

registerModules({
  landingpage: LandingPageModule,
  dashboard: Dashboard,
  auth: Auth
})

createApp(App)
  .use(store)
  .use(router)
  .use(
    plugin,
    defaultConfig({
      config: {
        classes: generateClasses(formkitTheme)
      }
    })
  )
  .mount('#app')
