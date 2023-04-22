export async function useDynamicRoute({
  routeName = '',
  query = {},
  param = {},
  router,
  openInNewTap = false
}) {
  function throwError() {
    throw new Error('Please provide a valid route name')
  }
  if (routeName !== '' && typeof routeName === 'string') {
    try {
      if (!openInNewTap) {
        router.push({ name: routeName, query, param })
      } else {
        let route = router.resolve({ name: routeName, query, param })
        window.open(route.href, '_blank')
      }
    } catch (err) {
      throwError()
    }
  } else {
    throwError()
  }
}
