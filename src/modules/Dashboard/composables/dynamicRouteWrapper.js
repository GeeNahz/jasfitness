export async function useDynamicRoute({
  routeName = '',
  query = {},
  param = {},
  router
}) {
  function throwError() {
    throw new Error('Please provide a valid route name')
  }
  if (routeName !== '' && typeof routeName === 'string') {
    try {
      router.push({ name: routeName, query, param })
    } catch (err) {
      throwError()
    }
  } else {
    throwError()
  }
}
