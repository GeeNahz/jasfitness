import type { DynamicRoute } from "@/types"

export async function useDynamicRoute({
  routeName = '',
  query = {},
  params = {},
  router,
  openInNewTab = false
}: DynamicRoute ) {
  function throwError() {
    throw new Error('Please provide a valid route name')
  }
  if (routeName !== '' && typeof routeName === 'string') {
    try {
      if (!openInNewTab) {
        router.push({ name: routeName, query, params })
      } else {
        const route = router.resolve({ name: routeName, query, params })
        window.open(route.href, '_blank')
      }
    } catch (err) {
      throwError()
    }
  } else {
    throwError()
  }
}
