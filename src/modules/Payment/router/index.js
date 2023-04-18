import { createRouter, createWebHistory } from 'vue-router'

const Module = () =>
  import(/* webpackChunkName "PaymentModule" */ '../Module.vue')

const routes = [
  {
    path: '/payments',
    component: Module,
    children: [{}]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
