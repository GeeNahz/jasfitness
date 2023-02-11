<!-- eslint-disable vue/no-unused-vars -->
<template>
  <div class="z-50">
    <VOnboardingWrapper
      ref="wrapper"
      :options="{
        scrollToStep: {
          enabled: true,
          options: {
            behavior: 'smooth',
            block: 'nearest',
            inline: 'nearest'
          }
        }
      }"
      :steps="steps"
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
import { defineComponent, ref, onMounted } from 'vue'
import { VOnboardingWrapper, useVOnboarding } from 'v-onboarding'
import 'v-onboarding/dist/style.css'
export default defineComponent({
  components: {
    VOnboardingWrapper
  },
  setup() {
    const wrapper = ref(null)
    const { start, goToStep, finish } = useVOnboarding(wrapper)
    const steps = [
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
      // {
      //   attachTo: { element: '#sidebar' },
      //   content: {
      //     title: 'Navigate through the dashbaord with ease',
      //     description:
      //       'The navigation panel is always open and with clear for quick and easy switch between sections in your dashboard.'
      //   }
      // },
      {
        attachTo: { element: '#home-summary' },
        content: {
          title: 'Your gym activities',
          description:
            'At a glance you can see what you have been up to at the gym.'
        }
      },
      {
        attachTo: { element: '#resubscription-btn' },
        content: {
          title: 'Subscption is due!',
          description:
            'Not to worry. With a click of this button you can resubscribe or even upgrade your plan.'
        }
      },
      {
        attachTo: { element: '#home-panel' },
        content: {
          title: 'Subscription status at a glance',
          description:
            'View your subscription status and plan, freeze and share your subscription all from this panel'
        }
      },
      {
        attachTo: { element: '#fitnessrecord-link' },
        content: {
          title: 'Fitness Records',
          description:
            'Click on the Fitness Record link to see what you can do there.'
        }
      },
      {
        attachTo: { element: '#goals' },
        content: {
          title: 'Goals',
          description:
            'Goals give us a sense of direction. See the goal you have set and remain motvated.'
        }
      },
      {
        attachTo: { element: '#fitnessrecord-panel' },
        content: {
          title: 'Your records',
          description:
            'We keep your records up to date. View your profile and assessment records anytime here.'
        }
      },
      {
        attachTo: { element: '#mysubscription-link' },
        content: {
          title: 'My Subscription',
          description: 'Click on the My Subscription link to see its features.'
        }
      },
      {
        attachTo: { element: '#subscription-summary' },
        content: {
          title: 'My subscription',
          description:
            'Everything you need to know about your current subscription is here'
        }
      },
      {
        attachTo: { element: '#members-features' },
        content: {
          title: "Member's features",
          description:
            'Freeze and share your subscriptions based on the subscription plan your are on.'
        }
      },
      {
        attachTo: { element: '#our-plans' },
        content: {
          title: 'Our plans',
          description:
            'Have a look at all the plans we offer without having to leave your dashboard.'
        }
      }
    ]

    onMounted(() => start())

    return {
      wrapper,
      steps,
      start,
      goToStep,
      finish
    }
  }
})
</script>
