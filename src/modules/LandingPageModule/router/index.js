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

const CommunityView = () =>
  import(/* webpackChunkName: "communityView" */ '../views/CommunityView.vue')

const HelpView = () =>
  import(/* webpackChunkNmae: "helpPage" */ '../views/HelpView.vue')

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
      },
      {
        path: 'community',
        name: 'CommunityPage',
        component: CommunityView
      },
      {
        path: 'help',
        name: 'HelpPage',
        component: HelpView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
