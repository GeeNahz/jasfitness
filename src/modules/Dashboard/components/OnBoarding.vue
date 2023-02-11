<!-- eslint-disable vue/no-unused-vars -->
<template>
  <div v-if="performOnboarding" class="z-50">
    <VOnboardingWrapper
      ref="wrapper"
      :options="options"
      :steps="smallScreen ? steps[1] : steps[0]"
    />
  </div>
  <!-- <VOnboardingWrapper ref="wrapper" :steps="steps">
    <template #default="{ previous, next, step, exit, isFirst, isLast, index }">
      <VOnboardingStep>
        <div class="bg-white shadow sm:rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="sm:flex sm:items-center sm:justify-between">
              <div v-if="step.content">
                <h3
                  v-if="step.content.title"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  {{ step.content.title }}
                </h3>
                <div
                  v-if="step.content.description"
                  class="mt-2 max-w-xl text-sm text-gray-500"
                >
                  <p>{{ step.content.description }}</p>
                </div>
              </div>
              <div
                class="mt-5 space-x-4 sm:mt-0 sm:ml-6 sm:flex sm:flex-shrink-0 sm:items-center relative"
              >
                <span
                  class="absolute right-0 bottom-full mb-2 mr-2 text-gray-600 font-medium text-xs"
                  >{{ `${index + 1}/${steps.length}` }}</span
                >
                <template v-if="!isFirst">
                  <button
                    @click="previous"
                    type="button"
                    class="inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-2 font-medium text-yellow-700 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:text-sm"
                  >
                    Previous
                  </button>
                </template>
                <button
                  @click="next"
                  type="button"
                  class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                >
                  {{ isLast ? 'Finish' : 'Next' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </VOnboardingStep>
    </template>
  </VOnboardingWrapper> -->
</template>

<script>
import { defineComponent, ref, onMounted, watch, inject, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { VOnboardingWrapper, useVOnboarding } from 'v-onboarding'
import 'v-onboarding/dist/style.css'
export default defineComponent({
  components: {
    VOnboardingWrapper
  },
  setup() {
    /*
    type Placement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';
    */
    const store = useStore()
    const performOnboarding = computed(() => store.state.dashboard.isOnboarding)

    const wrapper = ref(null)
    const { start, goToStep, finish } = useVOnboarding(wrapper)

    const { isReady, toggleIsReady } = inject('isComponentReady')
    const { toggleIsNavbarOpen, isNavbarOpen } = inject('navbar')
    const route = useRoute()
    watch(isReady, function () {
      if (isReady.value && performOnboarding.value) {
        if (route.path.includes('fitness-record')) {
          goToStep((currentStep) => currentStep + 1)
        }
        if (route.path.includes('sub')) {
          goToStep((currentStep) => currentStep + 1)
        }
      }
      toggleIsReady(false)
      toggleIsNavbarOpen(false)
    })

    watch(isNavbarOpen, function () {
      if (isNavbarOpen.value && performOnboarding.value) {
        goToStep((currentStep) => currentStep + 1)
      }
      toggleIsNavbarOpen(false)
    })

    const options = {
      popper: {
        placement: 'auto'
      },
      overlay: {
        enabled: true,
        padding: 15,
        borderRadius: 10
      },
      scrollToStep: {
        enabled: true,
        options: {
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest'
        }
      },
      hideButtons: {
        previous: false,
        next: false
      },
      labels: {
        previousButton: 'Previous',
        nextButton: 'Next',
        finishButton: 'Finish'
      }
    }

    const smallScreen = computed(() => window.innerWidth < 1024)
    const router = useRouter()
    const steps = [
      [
        // 0 welcome user
        {
          attachTo: { element: '#user-welcome' },
          content: {
            title: `Welcome Bemshima, we're glad you
            could join us. We'll like to show you around
            your  personal Jas Fitness dashboard. 
            This will only take a moment so sit back 
            and enjoy.`,
            description: `Click the button below to proceed.`
          }
        },
        // 1 summary home
        {
          attachTo: { element: '#home-summary' },
          content: {
            title: 'Your gym activities',
            description:
              'At a glance you can see what you have been up to at the gym.'
          }
        },
        // 2 button resubscribe
        {
          attachTo: { element: '#resubscription-btn' },
          content: {
            title: 'Subscption is due!',
            description:
              'Not to worry. With a click of this button you can resubscribe or even upgrade your plan.'
          }
        },
        // 3 panel home
        {
          attachTo: { element: '#home-panel' },
          content: {
            title: 'Subscription status at a glance',
            description:
              'View your subscription status and plan, freeze and share your subscription all from this panel'
          }
        },
        // 4 side bar
        {
          attachTo: { element: '#sidebar' },
          content: {
            title: 'Navigate through the dashbaord with ease',
            description:
              'The navigation panel is always open and with clear for quick and easy switch between sections in your dashboard.'
          },
          options: {
            popper: {
              placement: 'auto'
            }
          }
        },
        // 5 button fitness record
        {
          attachTo: { element: '#fitnessrecord-link' },
          content: {
            title: 'Fitness Records',
            description:
              'Click on the Fitness Record link to see what you can do there.'
          },
          on: {
            beforeStep: function () {},
            afterStep: function () {}
          },
          options: {
            hideButtons: {
              next: true
            }
          }
        },
        // 6 goals
        {
          attachTo: { element: '#goals' },
          content: {
            title: 'Goals',
            description:
              'Goals give us a sense of direction. See the goal you have set and remain motvated.'
          },
          options: {
            hideButtons: {
              next: false
            }
          }
        },
        // 7 panel fitness record
        {
          attachTo: { element: '#fitnessrecord-panel' },
          content: {
            title: 'Your records',
            description:
              'We keep your records up to date. View your profile and assessment records anytime here.'
          }
        },
        // 8 button my subscription
        {
          attachTo: { element: '#mysubscription-link' },
          content: {
            title: 'My Subscription',
            description:
              'Click on the My Subscription link to see its features.'
          },
          on: {
            beforeStep: function () {},
            afterStep: function () {}
          },
          options: {
            hideButtons: {
              next: true
            }
          }
        },
        // 9 summary subscription
        {
          attachTo: { element: '#subscription-summary' },
          content: {
            title: 'My subscription',
            description:
              'Everything you need to know about your current subscription is here'
          },
          options: {
            hideButtons: {
              next: false
            }
          }
        },
        // 10 members features
        {
          attachTo: { element: '#members-features' },
          content: {
            title: "Member's features",
            description:
              'Freeze and share your subscriptions based on the subscription plan your are on.'
          }
        },
        // 11 our plans
        // NOTE: for the last step, after clicking on finish, make it to route to the dashboard Home page
        {
          attachTo: { element: '#our-plans' },
          content: {
            title: 'Our plans',
            description:
              'Have a look at all the plans we offer without having to leave your dashboard.'
          },
          on: {
            afterStep: function () {
              router.push({ name: 'DashboardHome' })
              store.dispatch('dashboard/toggle_onboarding', false)
            }
          }
        }
        // TODO: Add steps for classes and settings
        // 12 classes
        // {
        //   attachTo: { element: '#classes' },
        //   content: {
        //     title: "Coming soon",
        //     description:
        //       'Classes will be coming soon.'
        //   }
        // },
        // TODO: Create a page for settings. It should contain a button that when clicked, it will take the user through the whole onboarding process again.
        // 13 settings
        // {
        //   attachTo: { element: '#settings' },
        //   content: {
        //     title: "Settings",
        //     description:
        //       'Click on the settings tab to view the available settings.'
        //   }
        // }
      ],
      [
        // 0 welcome user
        {
          attachTo: { element: '#user-welcome' },
          content: {
            title: `Welcome Bemshima, we're glad you
            could join us. We'll like to show you around
            your  personal Jas Fitness dashboard. 
            This will only take a moment so sit back 
            and enjoy.`,
            description: `Click the button below to proceed.`
          }
        },
        // 1 summary home
        {
          attachTo: { element: '#home-summary' },
          content: {
            title: 'Your gym activities',
            description:
              'At a glance you can see what you have been up to at the gym.'
          }
        },
        // 2 button resubscribe
        {
          attachTo: { element: '#resubscription-btn' },
          content: {
            title: 'Subscption is due!',
            description:
              'Not to worry. With a click of this button you can resubscribe or even upgrade your plan.'
          }
        },
        // 3 panel home
        {
          attachTo: { element: '#home-panel' },
          content: {
            title: 'Subscription status at a glance',
            description:
              'View your subscription status and plan, freeze and share your subscription all from this panel'
          }
        },
        // 4 -- navbar
        // {
        //   attachTo: { element: '#navbar' },
        //   content: {
        //     title: 'Navigation',
        //     content:
        //       'Your navigation bar is always here at the top. Use it to navigate through your dashboard'
        //   }
        // },
        // 5 navbar-toggle
        {
          attachTo: { element: '#navbar-toggle' },
          content: {
            title: 'Navigation button',
            description: 'Tap on the button to continue.'
          },
          on: {
            beforeStep: function () {},
            afterStep: function () {}
          },
          options: {
            hideButtons: {
              next: true
            }
          }
        },
        // 6 button fitness record
        {
          attachTo: { element: '#fitnessrecord-link-mobile' },
          content: {
            title: 'Fitness Records',
            description:
              'Click on the Fitness Record link to see what you can do there.'
          },
          on: {
            beforeStep: function () {},
            afterStep: function () {}
          },
          options: {
            hideButtons: {
              next: true
            }
          }
        },
        // 7 goals
        {
          attachTo: { element: '#goals' },
          content: {
            title: 'Goals',
            description:
              'Goals give us a sense of direction. See the goal you have set and remain motvated.'
          },
          options: {
            hideButtons: {
              next: false
            }
          }
        },
        // 8 panel fitness record
        {
          attachTo: { element: '#fitnessrecord-panel' },
          content: {
            title: 'Your records',
            description:
              'We keep your records up to date. View your profile and assessment records anytime here.'
          }
        },
        // 9 navbar-toggle
        {
          attachTo: { element: '#navbar-toggle' },
          content: {
            title: 'Navigation button',
            description: 'Tap on the button to continue.'
          },
          on: {
            beforeStep: function () {},
            afterStep: function () {}
          },
          options: {
            hideButtons: {
              next: true
            }
          }
        },
        // 10 button my subscription
        {
          attachTo: { element: '#mysubscription-link-mobile' },
          content: {
            title: 'My Subscription',
            description:
              'Click on the My Subscription link to see its features.'
          },
          on: {
            beforeStep: function () {},
            afterStep: function () {}
          },
          options: {
            hideButtons: {
              next: true
            }
          }
        },
        // 11 summary subscription
        {
          attachTo: { element: '#subscription-summary' },
          content: {
            title: 'My subscription',
            description:
              'Everything you need to know about your current subscription is here'
          }
        },
        // 12 members features
        {
          attachTo: { element: '#members-features' },
          content: {
            title: "Member's features",
            description:
              'Freeze and share your subscriptions based on the subscription plan your are on.'
          }
        },
        // 13 our plans
        // NOTE: for the last step, after clicking on finish, make it to route to the dashboard Home page
        {
          attachTo: { element: '#our-plans' },
          content: {
            title: 'Our plans',
            description:
              'Have a look at all the plans we offer without having to leave your dashboard.'
          },
          on: {
            afterStep: function () {
              router.push({ name: 'DashboardHome' })
              store.dispatch('dashboard/toggle_onboarding', false)
            }
          }
        }
        // TODO: Add steps for classes and settings
        // 12 classes
        // {
        //   attachTo: { element: '#classes' },
        //   content: {
        //     title: "Coming soon",
        //     description:
        //       'Classes will be coming soon.'
        //   }
        // },
        // TODO: Create a page for settings. It should contain a button that when clicked, it will take the user through the whole onboarding process again.
        // 13 settings
        // {
        //   attachTo: { element: '#settings' },
        //   content: {
        //     title: "Settings",
        //     description:
        //       'Click on the settings tab to view the available settings.'
        //   }
        // }
      ]
    ]

    onMounted(() => {
      if (performOnboarding.value) {
        start()
      }
    })

    return {
      wrapper,
      options,
      steps,
      start,
      goToStep,
      finish,
      performOnboarding,
      smallScreen
    }
  }
})
</script>

<style>
:root {
  --v-onboarding-step-arrow-background: #fba500;
}
</style>
