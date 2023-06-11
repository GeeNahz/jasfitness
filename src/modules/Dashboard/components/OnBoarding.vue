<script lang="ts">
import { defineComponent, ref, onMounted, watch, inject, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { VOnboardingWrapper, useVOnboarding } from 'v-onboarding'
import 'v-onboarding/dist/style.css'
import { useAuthStore } from '@/modules/Authentication/stores/auth'
import { storeToRefs } from 'pinia'
import { useDashboardStore } from '../stores/dashboard'
export default defineComponent({
  components: {
    VOnboardingWrapper
  },
  setup() {
    const wrapper = ref(null)
    const { start, goToStep, finish } = useVOnboarding(wrapper)
    const authStore = useAuthStore();

    const { isOriented, username } = storeToRefs(authStore);
    
    const dashboardStore = useDashboardStore();
    const { onboardingModal } = storeToRefs(dashboardStore);
    function orientationStart() {
      if (onboardingModal.value.open){
        dashboardStore.toggleModal("onboarding");
      }
      if (!isOriented.value) {
        start()
      }
    }

    function orientationStartManually() {
      authStore.toggle_is_oriented(false);
      // store.dispatch('auth/toggle_is_oriented', false)
      setTimeout(() => orientationStart(), 2000)
    }
    async function orientationCompleted() {
      await authStore.completed_orientation()
    }

    const isComponentReady: any = inject('isComponentReady');
    const navbar: any = inject('navbar')
    const route = useRoute()
    watch(isComponentReady.isReady, function () {
      if (isComponentReady.isReady.value && !isOriented.value) {
        if (route.path.includes('fitness-record')) {
          goToStep((currentStep: number) => currentStep + 1)
        }
        if (route.path.includes('sub')) {
          goToStep((currentStep: number) => currentStep + 1)
        }
        if (route.path.includes('settings')) {
          goToStep((currentStep: number) => currentStep + 1)
        }
      }
      isComponentReady.toggleIsReady(false)
      navbar.toggleIsNavbarOpen(false)
    })
    watch(navbar.isNavbarOpen, function () {
      if (navbar.isNavbarOpen.value && !isOriented.value) {
        goToStep((currentStep: number) => currentStep + 1)
      }
      navbar.toggleIsNavbarOpen(false)
    })

    const runOrientationManually: any = inject(
      'runOrientationManually'
    )
    watch(runOrientationManually.runOnrientation, function () {
      if (runOrientationManually.runOnrientation.value) {
        orientationStartManually()
        runOrientationManually.toggleRunOrientation(false)
      }
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

    const homeWelcomeUser = {
      title: `Welcome ${username.value}.`,
      description: `We'll like to show you around your
            personal dashboard. This will only take a moment.\nClick
            the button below to proceed.`
    }
    function getCurrentDateObject() {
      return new Date()
    }
    function currentYear() {
      return getCurrentDateObject().getFullYear()
    }
    function currentMonth() {
      const months = [
        'January',
        'Feburary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      let monthNumber = getCurrentDateObject().getMonth()
      return months[monthNumber]
    }
    const homeSummary = {
      title: 'Your gym activities',
      description: `At a glance, you can see your entire fitness activities at the gym. Your total attendance this year (In ${currentYear()}), total attendance this month (In ${currentMonth()}) and the average hour for your last 5 sessions at the gym (Average time).`
    }
    const homeResubButton = {
      title: 'Subscption is due?',
      description: `Click of this button to resubscribe or change your plan.`
    }
    const homePanel = {
      title: 'Subscription status at a glance',
      description: `View, freeze and share your subscription all from this panel.`
    }
    const navigationPanel = {
      title: 'Easy Navigation',
      description: 'Easy switch between sections of the dashboard.'
    } // destop view
    const completedSectionOne = {
      title: 'Great! 🥳',
      description: `You have completed the first section. Click on the menu button to continue.`
    } // mobile view
    const sectionTwoStart = {
      title: 'Fitness Record',
      description: 'Click on "Fitness Record" to continue'
    }
    const recordGoals = {
      title: 'Goals 🎯',
      description: `Goals give us a sense of direction. To meet your fitness gaol you need to always be aware of it. So here's yours.`
    }
    const recordYourRecord = {
      title: 'Your Records',
      description: `View everything about your profile and assessments here.`
    }
    const completedSectionTwo = {
      title: 'Great! 🥳🥳',
      description: `You have completed the second section. Click on the menu button to continue.`
    } // mobile view
    const sectionThreeStart = {
      title: 'My Subscription',
      description: 'Click on "My Subscription" to continue.'
    }
    const subSummary = {
      title: 'Subscription summary',
      description: `At a glance, you can see your subscription plan (Type), when it started (Start Date), when it will end (End Date), duration (Duration), subscription freeze status (Freeze Status) and the duration for your freeze subscription (Freeze Duration).`
    }
    const subMembersFeatures = {
      title: "Member's features",
      description:
        'Freeze and share your subscriptions based on your subscription plan.'
    }
    // const subOurPlans = {
    //   title: 'Our plans',
    //   description:
    //     'Have a look at all the plans we offer without having to leave your dashboard.'
    // }
    const completedSectionThree = {
      title: 'Great! 🥳🥳🥳',
      description: `You have completed the third section. Click on the menu button to continue.`
    } // mobile view
    const classButton = {
      title: 'Coming soon',
      description: 'Classes will be coming soon.'
    }
    const sectionFourStart = {
      title: 'Settings',
      description: 'Click on "Settings" to view the available settings.'
    }
    const changePassword = {
      title: 'Change password',
      description:
        'Easily change your password to improve the security of your account.'
    }
    const settingsOrientation = {
      title: 'Orientation',
      description:
        'You can go through this orientation at anytime. Simply click on the re-orientation button to begin.'
    }

    const steps = [
      [
        // 0 welcome user
        {
          attachTo: { element: '#user-welcome' },
          content: { ...homeWelcomeUser }
        },
        // 1 summary home
        {
          attachTo: { element: '#home-summary' },
          content: { ...homeSummary }
        },
        // 2 button resubscribe
        {
          attachTo: { element: '#resubscription-btn' },
          content: { ...homeResubButton }
        },
        // 3 panel home
        {
          attachTo: { element: '#home-panel' },
          content: { ...homePanel }
        },
        // 4 side bar
        {
          attachTo: { element: '#sidebar' },
          content: { ...navigationPanel },
          options: {
            popper: {
              placement: 'auto'
            }
          }
        },
        // 5 button fitness record
        {
          attachTo: {
            element: '#fitnessrecord-link'
          },
          content: { ...sectionTwoStart },
          on: {
            beforeStep: function () {
              document
                .querySelector('#fitnessrecord-link')!
                .classList.toggle('onboarding-active')
              setTimeout(() => {
                document
                  .querySelector('#fitnessrecord-link')!
                  .classList.toggle('onboarding-active')
              }, 10000)
            },
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
          content: { ...recordGoals },
          options: {
            hideButtons: {
              next: false
            }
          }
        },
        // 7 panel fitness record
        {
          attachTo: { element: '#fitnessrecord-panel' },
          content: { ...recordYourRecord }
        },
        // 8 button my subscription
        {
          attachTo: { element: '#mysubscription-link' },
          content: { ...sectionThreeStart },
          on: {
            beforeStep: function () {
              document
                .querySelector('#mysubscription-link')!
                .classList.toggle('onboarding-active')
              setTimeout(() => {
                document
                  .querySelector('#mysubscription-link')!
                  .classList.toggle('onboarding-active')
              }, 10000)
            }
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
          content: { ...subSummary },
          options: {
            hideButtons: {
              next: false
            }
          }
        },
        // 10 members features
        {
          attachTo: { element: '#members-features' },
          content: { ...subMembersFeatures }
        },
        // 11 our plans -- NEW
        // {
        //   attachTo: { element: '#our-plans' },
        //   content: { ...subOurPlans }
        // },
        // 12 button classes
        {
          attachTo: { element: '#classes-link' },
          content: { ...classButton },
          on: {
            beforeStep: function () {}
          }
        },
        // 13 button settings
        {
          attachTo: { element: '#settings-link' },
          content: { ...sectionFourStart },
          on: {
            beforeStep: function () {
              document
                .querySelector('#settings-link')!
                .classList.toggle('onboarding-active')
              setTimeout(() => {
                document
                  .querySelector('#settings-link')!
                  .classList.toggle('onboarding-active')
              }, 10000)
            },
            afterStep: function () {}
          },
          options: {
            hideButtons: {
              next: true
            }
          }
        },
        // 14 change password
        {
          attachTo: { element: '#change-password' },
          content: changePassword,
          options: {
            hideButtons: {
              next: false
            }
          }
        },
        // 15 orientation
        {
          attachTo: { element: '#orientation-setting' },
          content: { ...settingsOrientation },
          on: {
            afterStep: function () {
              router.push({ name: 'DashboardHome' })
              orientationCompleted()
            }
          },
          options: {
            hideButtons: {
              next: false
            }
          }
        }
      ],
      [
        // 0 welcome user
        {
          attachTo: { element: '#user-welcome' },
          content: { ...homeWelcomeUser }
        },
        // 1 summary home
        {
          attachTo: { element: '#home-summary' },
          content: { ...homeSummary }
        },
        // 2 button resubscribe
        {
          attachTo: { element: '#resubscription-btn' },
          content: { ...homeResubButton }
        },
        // 3 panel home
        {
          attachTo: { element: '#home-panel' },
          content: { ...homePanel }
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
          content: { ...completedSectionOne },
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
          content: { ...sectionTwoStart },
          on: {
            beforeStep: function () {
              document
                .querySelector('#fitnessrecord-link-mobile')!
                .classList.toggle('onboarding-active')
            },
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
          content: { ...recordGoals },
          options: {
            hideButtons: {
              next: false
            }
          }
        },
        // 8 panel fitness record
        {
          attachTo: { element: '#fitnessrecord-panel' },
          content: { ...recordYourRecord }
        },
        // 9 navbar-toggle
        {
          attachTo: { element: '#navbar-toggle' },
          content: { ...completedSectionTwo },
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
          content: { ...sectionThreeStart },
          on: {
            beforeStep: function () {
              document
                .querySelector('#mysubscription-link-mobile')!
                .classList.toggle('onboarding-active')
            },
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
          content: { ...subSummary }
        },
        // 12 members features
        {
          attachTo: { element: '#members-features' },
          content: { ...subMembersFeatures }
        },
        // 13 our plans
        // {
        //   attachTo: { element: '#our-plans' },
        //   content: { ...subOurPlans }
        // },
        // 14 navbar-toggle
        {
          attachTo: { element: '#navbar-toggle' },
          content: { ...completedSectionThree },
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
        // 15 button classes
        {
          attachTo: { element: '#classes-link-mobile' },
          content: { ...classButton },
          options: {
            hideButtons: {
              next: false
            }
          }
        },
        // 16 button settings
        {
          attachTo: { element: '#settings-link-mobile' },
          content: { ...sectionFourStart },
          on: {
            beforeStep: function () {
              document
                .querySelector('#settings-link-mobile')!
                .classList.toggle('onboarding-active')
            }
          },
          options: {
            hideButtons: {
              next: true
            }
          }
        },
        // 17 change password
        {
          attachTo: { element: '#change-password' },
          content: changePassword,
          options: {
            hideButtons: {
              next: false
            }
          }
        },
        // 18 orientation
        {
          attachTo: { element: '#orientation-setting' },
          content: { ...settingsOrientation },
          on: {
            afterStep: function () {
              router.push({ name: 'DashboardHome' })
              orientationCompleted()
            }
          },
          options: {
            hideButtons: {
              next: false
            }
          }
        }
      ]
    ]

    onMounted(() => {
      orientationStart()
    })

    return {
      wrapper,
      options,
      steps,
      start,
      goToStep,
      finish,
      isOriented,
      smallScreen,
      orientationCompleted,
      orientationStartManually
    }
  }
})
</script>

<template>
  <div v-if="!isOriented" class="z-50">
    <VOnboardingWrapper
      ref="wrapper"
      :options="options"
      :steps="smallScreen ? steps[1] : steps[0]"
      @exit="orientationCompleted"
    />
  </div>
</template>

<style>
:root {
  --v-onboarding-step-arrow-background: #fba500;
  --v-onboarding-overlay-z: 30;
  --v-onboarding-step-z: 40;
}
.v-onboarding-item__actions button {
  /*size of the buttons*/
  padding: 0.25rem 0.635rem; /* 1/2 of original dimentions */
}
.v-onboarding-item__actions button.v-onboarding-btn-primary {
  /*color*/
  background-color: #c29a33;
}
.v-onboarding-item__actions button.v-onboarding-btn-primary:hover {
  background-color: #c29114;
}
/* 
.v-onboarding-item__actions button.v-onboarding-btn-secondary --> color
*/
</style>