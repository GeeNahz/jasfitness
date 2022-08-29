import store from '@/store'
import router from '@/router'

const registerModule = (name, module) => {
  if (module.store) {
    store.registerModule(name, module.store)
  }
  if (module.router) {
    module.router.getRoutes().forEach((route) => {
      router.addRoute(route)
    })
  }
}

export const registerModules = (modules) => {
  Object.keys(modules).forEach((moduleKey) => {
    const module = modules[moduleKey]
    registerModule(moduleKey, module)
  })
}
