import { createRouter, createWebHistory } from 'vue-router'

const Module = () =>
  import('../Module.vue')

const MemberSetup = () =>
  import('../views/MemberSetup.vue')

const EnquiriesPage = () =>
  import('../views/EnquiriesPage.vue')

const SuccessPage = () =>
  import("../views/SuccessPage.vue")

const routes = [
  {
    path: '/form',
    component: Module,
    children: [
      {
        path: 'f7a709f2-68a5-424d-839e-0a784a970279/members/setup',
        name: 'MemberSetup',
        component: MemberSetup
      },
      {
        path: 'enquiry',
        name: 'EnquiryPage',
        component: EnquiriesPage
      },
      {
        path: 'success',
        name: 'FormSuccess',
        component: SuccessPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
