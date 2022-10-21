import { createRouter, createWebHistory } from 'vue-router'
const Module = () =>
  import(/* webpackChunkName: "landingpageModule" */ '../Module.vue')
// const LandingPageHomeView = () =>
//   import(
//     /* webpackChunkName: "landingpageHome" */ '../views/LandingPageHomeView.vue'
//   )
const HomeView = () =>
  import(/* webpackChunkName: "Home" */ '../views/HomeView.vue')
const LandingPageAbout = () =>
  import(/* webpackChunkName: "landingpageAbout" */ '../views/AboutView.vue')

const PlansView = () =>
  import(/* webpackChunkName: "plansView" */ '../views/PlansView.vue')

const routes = [
  {
    path: '/',
    component: Module,
    children: [
      {
        path: '',
        name: 'LandingPageHome',
        component: HomeView
      },
      {
        path: 'about',
        name: 'AboutLand',
        component: LandingPageAbout
      },
      {
        path: 'plans',
        name: 'PlansPage',
        component: PlansView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
