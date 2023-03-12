import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import { createMetaManager } from 'vue-meta'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'
import VueGtag from 'vue-gtag'
import { VueCookieNext } from 'vue-cookie-next'

import formkitTheme from '../formkitTheme'
import 'nprogress/nprogress.css'
// import ImageKit from 'imagekitio-vue'

import LandingPageModule from './modules/LandingPageModule'
import Dashboard from './modules/Dashboard'
import Auth from './modules/Auth'
import Membership from './modules/Membership'

import { registerModules } from './register-modules'
import './index.css'

registerModules({
  landingpage: LandingPageModule,
  dashboard: Dashboard,
  auth: Auth,
  membership: Membership
})

const app = createApp(App)
  .use(store)
  .use(router)
  .use(VueCookieNext)
  .use(VueGtag, {
    config: { id: 'G-H69MYFWJBT' },
    router,
    enabled: false
  })
  .use(createMetaManager())
  .use(
    plugin,
    defaultConfig({
      config: {
        classes: generateClasses(formkitTheme)
      }
    })
  )
  .use(VueClipboard)

app.provide('gtag', app.config.globalProperties.$gtag)
app.mount('#app')
