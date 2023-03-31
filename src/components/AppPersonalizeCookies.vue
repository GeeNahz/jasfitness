<template>
  <div class="cookies-backdrop">
    <div class="cookies-container">
      <div @click="toggleShowCookiesPreferences" class="close-btn">
        <span>x</span>
      </div>
      <div class="header mb-4">
        <p class="text-3xl font-bold text-center">Personalize cookies</p>
      </div>

      <div class="body">
        <div class="essentials mb-3">
          <div class="section-header">
            <p>Essential cookies (required)</p>
          </div>
          <div class="section-body">
            <div class="section-body-description">
              These cookies are strictly necessary to enable access and use of
              our Platform. They provide necessary functionality to ensure the
              proper performance, security and functionality of our Platform.
              These cookies cannot be disabled.
            </div>
          </div>
        </div>
        <div class="non-essentials">
          <div class="section-header">
            <p>Non-essential cookies</p>
          </div>
          <div class="section-body">
            <div class="section-body-description mb-2">
              The following cookies are NOT strictly necessary for enabling
              access and use of our Platform and can be disabled. For more
              information on how these cookies work, please review Section F of
              our [Privacy Policy](this should be a link to the privacy Policy
              page).
            </div>
            <div class="section-subbody">
              <div class="section-subheader">
                <p>Analytical cookies</p>
                <input type="checkbox" name="analytics" id="analytics" />
              </div>
              <div class="section-subheader-description">
                These cookies help us determine and understand how users
                interact with and use our Platform.
              </div>
              <div class="section-subheader">
                <p>Personalization cookies</p>
                <input
                  type="checkbox"
                  name="personalization"
                  id="personalization"
                />
              </div>
              <div class="section-subheader-description">
                We use these cookies to make advertising messages more relevant
                to you. These cookies also perform functions like preventing the
                same ad from continuously reappearing, ensuring that ads are
                properly displayed for advertisers, and in some cases selecting
                advertisements that are based on your interests.
              </div>
              <div class="section-subheader">
                <p>Marketing cookies</p>
                <input type="checkbox" name="marketing" id="marketing" />
              </div>
              <div class="section-subheader-description">
                These cookies help us to provide you with more targeted and
                relevant marketing and evaluate the effectiveness of our
                marketing communications by monitoring open rate and
                conversions.
              </div>
              <div class="section-subheader">
                <p>Social networking cookies</p>
                <input type="checkbox" name="social" id="social" />
              </div>
              <div class="section-subheader-description">
                We use these cookies to enable you to share pages and content
                that you find interesting on our Platform through third-party
                social networks and other websites.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="action">
        <button @click="saveSettings">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// TODO 1: find out how to setup collect data using cookies
// TODO 2: apply the necessary cookie preferences when the save btn is clicked
// TODO 3: make the checkboxes into toggles

import { inject } from 'vue'

import useCookies from '@/composables/cookies.js'

const { toggleShowCookiesPreferences } = inject('cookiesPreferences')
const gtag = inject('gtag')

const { okClicked } = useCookies({ gtag: gtag })

function saveSettings() {
  // perform submission here

  okClicked()
  toggleShowCookiesPreferences()
}
</script>

<style scoped lang="scss">
.cookies-backdrop {
  @apply fixed top-0 left-0 right-0 bottom-0 z-40 bg-zinc-900 bg-opacity-80 flex justify-center items-center;
}
.cookies-container {
  @apply w-full md:w-[500px] lg:w-[650px] h-max bg-slate-50 rounded-md p-4;

  & .close-btn {
    @apply text-end;
    & span {
      @apply font-bold text-red-400 hover:text-red-500 transition text-lg hover:cursor-pointer p-2 rounded-full;
    }
  }
}

.section-header {
  & p {
    @apply text-2xl font-bold text-start mb-2;
  }
}

.section-body {
  & .section-body-description {
    @apply text-slate-500 text-sm text-start;
  }
}

.non-essentials {
  & .section-body {
    & .section-subbody {
      & .section-subheader {
        @apply font-bold text-xl flex justify-between items-center;
      }
      & .section-subheader-description {
        @apply text-slate-500 text-sm text-start;
      }
    }
  }
}

.action {
  @apply my-5 text-center;
  & button {
    @apply py-2 px-20 bg-amber-400 rounded-3xl font-semibold uppercase text-slate-50 transition hover:bg-amber-500;
  }
}
</style>
