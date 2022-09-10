import { createRouter, createWebHistory } from 'vue-router'
const Module = () =>
  import(/* webpackChunkName: "landingpageModule" */ '../Module')
const BaseView = () =>
  import(/* webpackChunkName: "BaseView" */ '../views/BaseView.vue')

const routes = [
  {
    path: '/dashboard',
    component: Module,
    children: [
      {
        path: '',
        name: 'BaseView',
        component: BaseView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
