import router from '@/router'
import type { RouteRecordRaw } from 'vue-router';

function registerModule(name: any, module: any) {
  // if (module.store) {
  //   store.registerModule(name, module.store)
  // }

  if (module.router) {
    module.router.getRoutes().forEach((route: RouteRecordRaw) => {
      router.addRoute(route)
    });
  }
}
export const registerModules = (modules: any) => {
  Object.keys(modules).forEach(moduleKey => {
    const module = modules[moduleKey]
    registerModule(moduleKey, module)
  })
}
