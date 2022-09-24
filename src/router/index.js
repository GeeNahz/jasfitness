import { createRouter, createWebHistory } from 'vue-router'

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
  routes
})

export default router
