import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import { createMetaManager } from 'vue-meta'
import VueGtag from 'vue-gtag'
import { VueCookieNext } from 'vue-cookie-next'

import formkitTheme from './utils/formkit_theme'
import 'nprogress/nprogress.css'

import Landingpage from './modules/Landingpage'
import Authentication from './modules/Authentication'

import './assets/main.css'
import "./tailwind.css"

import { registerModules } from "./utils/register_modules";
import Dashboard from "./modules/Dashboard";
import Membership from "./modules/Membership";
import Payment from "./modules/Payment";

const moduleConfigs = {
  home: Landingpage,
  auth: Authentication,
  dashboard: Dashboard,
  membership: Membership,
  payment: Payment,
};
registerModules(moduleConfigs);

const app = createApp(App);

app.use(router)
app.use(createPinia())
app.use(VueCookieNext)
app.use(VueGtag, {
  enabled: false,
  config: {
    id: (import.meta.env.VITE_APP_GOOGLE_ANALYTICS_GTAG as string),
  },
})
app.use(createMetaManager())
app.use(plugin, defaultConfig({
  config: {
    classes: generateClasses(formkitTheme)
  }
}));

app.provide("gtag", app.config.globalProperties.$gtag);

app.mount('#app');