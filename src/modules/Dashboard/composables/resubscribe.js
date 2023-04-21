import { useDynamicRoute } from './dynamicRouteWrapper'

export function useResubscribe({
  router,
  firstName = '',
  lastName = '',
  isNewClient = false,
  email,
  planName
}) {
  const queryOptions = { firstName, lastName, email, isNewClient, planName }

  useDynamicRoute({
    routeName: 'SubscriptionPage',
    query: queryOptions,
    router: router
  })
}
