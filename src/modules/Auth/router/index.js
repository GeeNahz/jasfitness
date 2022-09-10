import { createRouter, createWebHistory } from 'vue-router'
const Module = () =>
  import(/* webpackChunkName: "landingpageModule" */ '../Module')
const LoginView = () =>
  import(/* webpackChunkName: "LoginView" */ '../views/LoginView.vue')
const SignupView = () =>
  import(/* webpackChunkName: "SignupView" */ '../views/SignupView.vue')
const PasswordResetEmailView = () =>
  import(
    /* webpackChunkName: "PasswordEmailView" */ '../views/PasswordReset/PasswordResetEmailView.vue'
  )
const PasswordResetPasswordView = () =>
  import(
    /* webpackChunkName: "PasswordPasswordView" */ '../views/PasswordReset/PasswordResetPasswordView.vue'
  )

const routes = [
  {
    path: '/auth',
    component: Module,
    children: [
      {
        path: 'login',
        name: 'LoginPage',
        component: LoginView
      },
      {
        path: 'signup',
        name: 'SignupPage',
        component: SignupView
      },
      {
        path: 'reset',
        children: [
          {
            path: 'email',
            name: 'PasswordResetEmailPage',
            component: PasswordResetEmailView
          },
          {
            path: 'new-password',
            name: 'PasswordResetPasswordPage',
            component: PasswordResetPasswordView
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
