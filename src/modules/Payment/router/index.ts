import { createRouter, createWebHistory } from 'vue-router'

const Module = () => import("../Module.vue")

const SubscriptionPage = () => import("../views/SubscriptionPage.vue")

const routes = [
  {
    path: '/payments',
    component: Module,
    children: [
      {
        name: 'SubscriptionPage',
        path: 'subscribe',
        component: SubscriptionPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
