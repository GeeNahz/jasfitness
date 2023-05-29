import { useLocalStorage } from "@vueuse/core";

export function useState() {
  const User = useLocalStorage("js-user", null)
  const AuthToken = useLocalStorage("jf-usr-tkn", null)
  return { User, AuthToken }
}