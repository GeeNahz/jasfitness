import { ref, watch, computed } from 'vue'
import { useCookie } from 'vue-cookie-next'

const allowCookies = ref()

export default function useCookies({ gtag }) {
  const cookie = useCookie()

  if (cookie.isCookieAvailable('cookies_consent')) {
    allowCookies.value = cookie.getCookie('cookies_consent') === 'true'
    gtag.optIn()
  } else {
    allowCookies.value = undefined
  }

  Date.prototype.addMonths = function ({ months = 6 }) {
    this.setMonth(this.getMonth() + months)
    return this
  }
  watch(allowCookies, () => {
    if (allowCookies.value != undefined) {
      cookie.setCookie('cookies_consent', allowCookies.value.toString(), {
        expire: new Date().addMonths({ months: 12 })
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

/** TODO
 * get => list of medical conditions
 * staff and medical (medical field should have list of medical conditions) fields
 * design for membership setup form with the above included.
 * complete google analytics integration
 */
