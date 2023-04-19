import { createRouter, createWebHistory } from 'vue-router'

const Module = () =>
  import(/* webpackChunkName "PaymentModule" */ '../Module.vue')

const SubscriptionPage = () =>
  import(
    /* webpackChunkName "SubscriptionPage" */ '../views/SubscriptionPage.vue'
  )

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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
