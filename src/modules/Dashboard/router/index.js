import { createRouter, createWebHistory } from 'vue-router'
const Module = () =>
  import(/* webpackChunkName: "landingpageModule" */ '../Module')
const BaseView = () =>
  import(/* webpackChunkName: "BaseView" */ '../views/BaseView.vue')

const DashboardHome = () =>
  import(/* webpackChunkName: "DashboardHome" */ '../components/LayoutView.vue')
const DashboardFitnessRecord = () =>
  import(
    /* webpackChunkName: "DashboardFitnessRecord" */ '../views/DashboardFitnessRecord.vue'
  )
const DashboardSubscription = () =>
  import(
    /* webpackChunkName: "DashboardSubscription" */ '../views/DashboardSubscription.vue'
  )

const routes = [
  {
    path: '/dashboard',
    component: Module,
    children: [
      {
        path: '',
        name: 'BaseView',
        component: BaseView,
        children: [
          {
            path: '',
            name: 'DashboardHome',
            component: DashboardHome
          },
          {
            path: 'fitness-r',
            name: 'DashboardFitnessRecord',
            component: DashboardFitnessRecord
          },
          {
            path: 'sub',
            name: 'DashboardSubscription',
            component: DashboardSubscription
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
