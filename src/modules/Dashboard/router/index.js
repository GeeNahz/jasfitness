import { createRouter, createWebHistory } from 'vue-router'

const Module = () =>
  import(/* webpackChunkName: "landingpageModule" */ '../Module')

const BaseView = () =>
  import(/* webpackChunkName: "BaseView" */ '../views/BaseView.vue')
const DashboardFitnessRecord = () =>
  import(
    /* webpackChunkName: "DashboardFitnessRecord" */ '../views/DashboardFitnessRecord.vue'
  )
const DashboardSubscription = () =>
  import(
    /* webpackChunkName: "DashboardSubscription" */ '../views/DashboardSubscription.vue'
  )
const Settings = () =>
  import(
    /* webpackChunkName: "DashboardSettings" */ '../views/SettingsPage.vue'
  )

const routes = [
  {
    path: '/dashboard',
    component: Module,
    children: [
      {
        path: '',
        name: 'DashboardHome',
        component: BaseView,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'fitness-record',
        name: 'DashboardFitnessRecord',
        component: DashboardFitnessRecord,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'sub',
        name: 'DashboardSubscription',
        component: DashboardSubscription,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'settings',
        name: 'DashboardSettings',
        component: Settings,
        meta: {
          requireAuth: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
