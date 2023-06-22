import { createRouter, createWebHistory } from 'vue-router'

const Module = () => import("../Module.vue");

const CareersPage = () => import("../views/CareersPage.vue");

const CareerPage = () => import("../views/CareerPage.vue");

const CareerApplyPage = () => import("../views/CareerApplyPage.vue");

const routes = [
  {
    path: "/career",
    component: Module,
    children: [
      {
        path: "",
        name: "Careers",
        component: CareersPage,
      },
      {
        path: ":id",
        name: "detail",
        component: CareerPage,
      },
      {
        path: "apply/:career_id/:career_title",
        name: "apply",
        component: CareerApplyPage,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;