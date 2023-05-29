import { createRouter, createWebHistory } from 'vue-router'

const Module = () =>
  import("../Module.vue");

const DashboardHomePage = () =>
  import("../views/DashboardHomePage.vue");
const DashboardFitnessRecordPage = () =>
  import("../views/DashboardFitnessRecordPage.vue");
const DashboardSubscriptionPage = () =>
  import("../views/DashboardSubscriptionPage.vue");
const DashboardSettingsPage = () =>
  import("../views/DashboardSettingsPage.vue");

const routes = [
  {
    path: '/dashboard',
    component: Module,
    children: [
      {
        path: '',
        name: 'DashboardHome',
        component: DashboardHomePage,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'fitness-record',
        name: 'DashboardFitnessRecord',
        component: DashboardFitnessRecordPage,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'sub',
        name: 'DashboardSubscription',
        component: DashboardSubscriptionPage,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'settings',
        name: 'DashboardSettings',
        component: DashboardSettingsPage,
        meta: {
          requireAuth: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
