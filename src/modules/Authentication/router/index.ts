import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/',
    component: () => import("../Module.vue"),
    children: [
      {
        path: 'login',
        name: 'LoginPage',
        component: () => import("../views/LoginPage.vue")
      },
      {
        path: 'reset',
        children: [
          {
            path: 'email',
            name: 'PasswordResetEmailPage',
            component: () => import("../views/ResetPassword/EmailPage.vue")
          },
          {
            path: 'password',
            name: 'PasswordResetPasswordPage',
            component: () => import("../views/ResetPassword/PasswordPage.vue")
          }
        ]
      },
      {
        path: 'success',
        name: 'Success',
        component: () => import("../views/SuccessPage.vue")
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
