import { useDynamicRoute } from '@/composables/dynamicRouteWrapper'

export function useResubscribe({
  router,
  name,
  userId,
  email,
  planName,
  firstName = '',
  lastName = '',
  isNewClient = false
}) {
  const queryOptions = {
    firstName,
    lastName,
    name,
    userId,
    email,
    isNewClient,
    planName
  }

  useDynamicRoute({
    routeName: 'SubscriptionPage',
    query: queryOptions,
    router: router,
    openInNewTap: true
  })
}
