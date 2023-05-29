import { ref, watch, computed } from 'vue'
import { useCookie } from 'vue-cookie-next'

declare global {
  interface Date {
    addMonths(months: number): Date
  }
}

const allowCookies = ref()

export default function useCookies({ gtag }: { gtag: any }) {
  const cookie = useCookie()

  if (cookie.isCookieAvailable('cookies_consent')) {
    allowCookies.value = cookie.getCookie('cookies_consent') === 'true'
    gtag.optIn()
  } else {
    allowCookies.value = undefined
  }

  Date.prototype.addMonths = function (months) : Date {
    this.setMonth(this.getMonth() + months)
    return this
  }
  watch(allowCookies, () => {
    if (allowCookies.value != undefined) {
      cookie.setCookie('cookies_consent', allowCookies.value.toString(), {
        expire: new Date().addMonths(12)
      })
      if (allowCookies.value) {
        gtag.optIn()
      } else {
        gtag.optOut()
      }
    }
  })

  const showBanner = computed(() => allowCookies.value === undefined)

  function okClicked() {
    allowCookies.value = true
  }

  return { allowCookies, showBanner, okClicked }
}
