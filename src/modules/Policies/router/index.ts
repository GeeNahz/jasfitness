import { createRouter, createWebHistory } from 'vue-router'

const Module = () =>
  import("../Module.vue");

const PrivacyPolicyPage = () =>
  import("../views/PrivacyPolicyPage.vue");

const TermsOfServicePage = () => import("../views/TermsOfServicePage.vue");

const routes = [
  {
    path: '/policies',
    component: Module,
    children: [
      {
        path: 'privacy-policy',
        name: 'privacy-policy',
        component: PrivacyPolicyPage,
      },
      {
        path: 'terms-of-service',
        name: 'terms-of-service',
        component: TermsOfServicePage,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
