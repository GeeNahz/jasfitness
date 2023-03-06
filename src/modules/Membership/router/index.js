import { createRouter, createWebHistory } from 'vue-router'

const Module = () =>
  import(/* webpackChunkName "MembersSetupModule" */ '../Module.vue')

const routes = [
  {
    path: '/f7a709f2-68a5-424d-839e-0a784a970279/members',
    component: Module,
    children: [
      {
        path: 'setup',
        name: '',
        component: ''
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
