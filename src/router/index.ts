import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

import { useState } from "@/composables/useState";
import { validateToken } from "@/utils/auth/ValidateToken";
const TestView = () => import("../views/TestPage.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathName(.*)',
      name: '404',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/404Page.vue')
    },
    {
      path: '/test',
      name: 'TestPage',
      component: TestView
    }
  ],
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
