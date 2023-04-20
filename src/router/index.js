import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

import { useState } from '@/composables/useState.js'
import { validateToken } from '@/services/utils/ValidateTokenUtility'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: () => {
      return { name: 'LandingPageHome' }
    }
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () =>
      import(/* webpackChunkName: "404" */ '../views/404View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  const { AuthToken } = useState()
  if (to.meta.requireAuth) {
    if (!AuthToken.value) {
      next({ name: 'LoginPage' })
      // set notifications panel here to show that the user
      // is not logged in
    } else if (!validateToken(AuthToken.value)) {
      next({ name: 'LoginPage' })
      // set notifications panel here to show that the session has expired
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
