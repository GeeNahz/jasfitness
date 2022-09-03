import { createRouter, createWebHistory } from 'vue-router'
const Module = () =>
  import(/* webpackChunkName: "landingpageModule" */ '../Module.vue')

const HomeView = () =>
  import(/* webpackChunckName: "PaymentsModule" */ '../views/HomeView.vue')

const routes = [
  {
    path: '/payments',
    component: Module,
    children: [
      {
        path: '',
        name: 'PaymentsHomeView',
        component: HomeView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
