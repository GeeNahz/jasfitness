import { useLocalStorage } from '@vueuse/core'

export function useState() {
  const User = useLocalStorage('jf-usr', null)
  const AuthToken = useLocalStorage('jf-usr-tkn', null)

  return { User, AuthToken }
}
