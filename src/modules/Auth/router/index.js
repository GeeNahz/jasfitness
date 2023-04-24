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

const SuccessView = () =>
  import(/* webpackChunkName: "SuccessView" */ '../views/SuccessView.vue')

const TestView = () => import('../components/AuthLayout.vue')

const routes = [
  {
    path: '/',
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
            path: 'password',
            name: 'PasswordResetPasswordPage',
            component: PasswordResetPasswordView
          }
        ]
      },
      {
        path: 'success',
        name: 'Success',
        component: SuccessView
      },
      {
        path: 'test',
        name: 'TestPage',
        component: TestView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
