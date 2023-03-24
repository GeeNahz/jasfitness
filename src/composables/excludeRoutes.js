import { ref } from 'vue'

export function useExcludeRoutes({ modules = {} }) {
  const pageTrackerExcludedRoutes = ref([])
  function excludeRoute(module) {
    if (module.router) {
      module.router.getRoutes().forEach((route) => {
        if (
          !(route.path.includes('dashboard') || route.path.includes('auth'))
        ) {
          if (route.name) {
            pageTrackerExcludedRoutes.value.push(route.name)
          }
        }
      })
    }
  }

  function excludeRoutes(modules) {
    Object.keys(modules).forEach((moduleKey) => {
      const module = modules[moduleKey]
      excludeRoute(module)
    })
  }

  excludeRoutes(modules)

  return { pageTrackerExcludedRoutes }
}
