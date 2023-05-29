import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../Module.vue'),
    children: [
      {
        path: '',
        name: 'LandingPageHome',
        component: () => import('../views/HomePage.vue')
      },
      {
        path: 'about',
        name: 'AboutPage',
        component: () => import('../views/AboutPage.vue')
      },
      {
        path: 'plans',
        name: 'PlansPage',
        component: () => import('../views/PlansPage.vue')
      },
      {
        path: 'community',
        name: 'CommunityPage',
        component: () => import('../views/CommunityPage.vue')
      },
      {
        path: 'sales-page',
        name: 'SalesCopyPage',
        component: () => import('../views/SalesPage.vue')
      },
      {
        path: 'help',
        name: 'HelpPage',
        component: () => import('../views/HelpPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
