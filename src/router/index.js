import { createRouter, createWebHistory } from 'vue-router'

import NProgress from 'nprogress'

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

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
