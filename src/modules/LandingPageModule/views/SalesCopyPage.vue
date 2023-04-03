<template>
  <div class="scwrapper font-inter">
    <div class="contained-width hero grid col-span-12 mb-2 md:mb-5">
      <div class="image col-span-12 md:col-span-5 lg:col-span-4">
        <img
          src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3792_qiloWYibr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833579540"
          alt="image"
        />
      </div>
      <div class="content grid col-span-12 md:col-span-7 md:col-start-6">
        <p
          class="main-title col-span-12 sm:col-span-7 md:col-span-12 row-span-1 sm:row-span-3 md:row-span-1"
        >
          hit your fitness goals in our state-of-the-art gym facility with super
          amazing coaches
        </p>
        <p class="subtitle-1 col-span-12 sm:col-span-5 md:col-span-12">
          Quickly build your chest, abs, legs, shoulder, back and entire fitness
          health like a pro with the help of our coaches
        </p>
        <button
          class="cta-btn cta-btn-primary hero-btn w-max col-span-12 sm:col-span-5 md:col-span-12"
        >
          book yourself a free call today
        </button>
        <p class="subtitle-2 col-span-12 sm:col-span-5 md:col-span-12">
          The experience is mesmerizing and if you love to be fit on purpose and
          not just pump and sweat in the gym... you'll love it at JasFitness gym
          center.
        </p>
      </div>
    </div>
    <!-- why jasfitness -->
    <section class="jasfitness mb-2 md:mb-5 py-20 md:py-28">
      <div class="contained-width grid col-span-12">
        <p class="section-title col-span-12">Why JasFitness?</p>
        <div class="cards col-span-12">
          <div v-for="item in whyJasfitness" :key="item.id" class="card">
            <div class="card-body flex flex-col items-center">
              <div class="img text-4xl justify-self-center text-amber-500">
                <VIcon :icon="item.icon" />
              </div>
              <p class="card-title">{{ item.title }}</p>
              <p class="card-text">{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- equipment -->
    <!-- <section class="equipment py-28 bg-white">
      <div class="contained-width col-12 grid">
        <div class="section-title col-12">World Class Equipment</div>
        <div class="modules col-12">
          <div class="module"></div>
          <div class="module"></div>
          <div class="module"></div>
        </div>
        <p class="regular-text-16 col-12 text-center">
          We've built the best facility with the right equipment for a variety
          of fitness needs
        </p>
        <button class="cta-btn cta-btn-primary col-12 cta-btn-equipment">
          Book Yourself a free call today
        </button>
        <div class="divider col-10-center">
          <hr class="border-gray-500" />
        </div>
        <div class="points col-10-center">
          <div class="point">
            <div class="point-image"></div>
            <p class="point-text regular-text-14">Want to keep fit?</p>
          </div>
          <div class="point">
            <div class="point-image"></div>
            <p class="point-text regular-text-14">Want to build muscle?</p>
          </div>
          <div class="point">
            <div class="point-image"></div>
            <p class="point-text regular-text-14">Want to shed fat?</p>
          </div>
          <div class="point">
            <div class="point-image"></div>
            <p class="point-text regular-text-14">
              Want to stay fit and outlive the average lifespan?
            </p>
          </div>
          <div class="point">
            <div class="point-image"></div>
            <p class="point-text regular-text-14">
              Want to keep healthy with gym classes that keep you in shape with
              a stronger body and supercharged energy?
            </p>
          </div>
        </div>
        <p class="medium-text-24 col-12 text-center">
          JasFitness is the best place to achieve all that
        </p>
        <p class="regular-text-14 col-10-center text-center">
          We don't just hit the gym and throw in the towel. We have tailored
          sessions for each individual's need that's why we have a variety of
          coaches that have a cumulative experience of fitness coaching of over
          <span class="stress text-amber-500 font-semibold">50</span> years
        </p>
      </div>
    </section> -->

    <!-- your team -->
    <section class="team py-20 md:py-28 bg-white">
      <div class="contained-width col-span-12 grid">
        <p class="section-title col-span-12">Meet The Team</p>
        <div class="col-span-12 w-full flex flex-wrap justify-center">
          <CardMember
            v-for="(staff, index) in teamInfo"
            :key="index"
            :profile="staff"
          />
        </div>
        <!-- <div class="col-10-center">
          <CarouselInstructors />
        </div> -->
      </div>
    </section>
    <!-- our community -->
    <section class="community bg-[#fff0d4] mb-2 md:mb-5 py-20 md:py-28">
      <div class="contained-width col-span-12 grid">
        <p class="section-title col-span-12">We Care About Our Community</p>
        <div class="modules col-span-12">
          <div class="module">
            <img
              src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3658_ntkjMiv-W.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833531966"
              alt="image 1"
            />
          </div>
          <div class="module">
            <img
              src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3648_Ww_y8pBC8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833542238"
              alt="image 2"
            />
          </div>
          <div class="module">
            <img
              src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3662_9cmdjpkKU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833522118"
              alt="image 3"
            />
          </div>
        </div>
        <div class="action col-span-12 flex justify-center">
          <button class="cta-btn cta-btn-secondary">View more</button>
        </div>
        <p class="regular-text-16 col-span-12 text-center">
          Everyone wants to keep fit but it gets hard to keep going alone.
        </p>
        <p class="regular-text-14 col-10-center text-center">
          At JasFitness center, you'll be in a community of folks on the same
          mission as you and you know how good that can be when you have pals
          cheering you up at all times
        </p>
        <p class="medium-text-24 col-10-center text-center">
          You'll never walk alone.
        </p>
      </div>
    </section>
    <!-- testimonial -->
    <section class="mb-2 md:mb-5 py-20 md:py-28">
      <div class="testimonial contained-width col-12 grid">
        <!-- testimonial section -->
        <p class="section-title col-12">
          Hear From Happy Members Of Our Community
        </p>
        <div class="testimonials grid col-10-center md:my-5">
          <CarouselScTestimonial />
        </div>
        <div class="divider col-10-center mb-5">
          <hr class="border-gray-500" />
        </div>
      </div>
      <!-- plans section -->
      <div class="contained-width col-12 grid">
        <div class="texts col-10-center grid">
          <p class="medium-text-20 col-12 text-center">
            Let us help you redefine your health with our various matching gym
            sessions to go with your busy schedule.
          </p>
          <p class="medium-text-20 col-12 text-center">
            No more complaining about lack of time because at JasFitness you're
            the one in charge, as our schedule was made to suit you and you
            alone.
          </p>
        </div>
        <!-- plan cards -->
        <div class="col-span-12 plans">
          <router-link
            :to="{ name: 'PlansPage' }"
            class="cta-btn cta-btn-secondary w-max mx-auto"
            target="_blank"
          >
            View our plans
          </router-link>
        </div>
        <!-- <div class="plans col-span-12 mb-5">
          <div
            v-for="(plan, index) in plans"
            :key="'plan ' + index + 1"
            class="plan max-w-sm"
            :class="[isEven(index) ? 'light' : 'dark']"
          >
            <div class="plan-title-details">
              <p class="plan-title capitalize medium-text-32">
                {{ plan.name }}
              </p>
              <p class="plan-setup-fee medium-text-14">
                membership setup fee - N{{ plan.setupFee }}
              </p>
            </div>
            <div class="divider my-7"><hr class="divider-color" /></div>
            <div class="plan-price-details">
              <p class="plan-price medium-text-32">N{{ plan.price }}</p>
              <p class="plan-price-biling regular-text-14">
                /{{ plan.billing }}
              </p>
            </div>
            <div class="plan-offer-details">
              <p class="plan-offer-title mt-4 mb-3 semibold-text-16">
                What's included
              </p>
              <ul>
                <li
                  v-for="(offer, index) in plan.offers"
                  :key="'offer ' + index + 1"
                  class="plan-offer flex gap-2 items-center regular-text-14 mb-2 last:mb-0"
                >
                  <span class="regular-text-16"><AppIconCheck /></span>
                  {{ offer }}
                </li>
              </ul>
            </div>
          </div>
        </div> -->
      </div>
    </section>
    <!-- hmo section -->
    <section class="py-20 md:py-28 bg-white">
      <div class="contained-width col-span-12 grid">
        <p class="section-title col-span-12">Our HMOs</p>
        <div class="hmo-cards col-10-center">
          <CarouselHmo />
        </div>
      </div>
    </section>
    <!-- schedules -->
    <section class="schedules bg-[#fff0d4] py-28">
      <div class="contained-width col-12 grid">
        <p class="section-title col-10-center">Our Time Schedule</p>
        <div class="schedule-list grid col-10-center">
          <table class="table-fixed col-10-center place-self-center">
            <tbody class="text-sm font-medium md:text-xl">
              <tr>
                <td>Monday - Saturday</td>
                <td>6.00am - 9.00pm</td>
              </tr>
              <tr>
                <td>Public Holiday</td>
                <td>6.00am - 8.00pm</td>
              </tr>
              <tr>
                <td>Cleaning</td>
                <td>1.00pm - 4.00pm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          class="cta-btn cta-btn-secondary col-12 justify-self-center w-fit capitalize"
        >
          Book yourself a free call today
        </button>
      </div>
    </section>
    <!-- special class -->
    <section class="classes py-28">
      <!-- special class section -->
      <div class="contained-width grid">
        <p class="section-title col-12">Our Special Classes</p>
        <p class="col-10-center medium-text-20">
          Our coaches hold special classes to those who want to quicken their
          goal achievement and desire special attendance in helping them achieve
          what they want.
        </p>
        <p class="col-10-center medium-text-20">
          Special Classes to those ready to go the extra mile in taking awesome
          care of their health and stay fit
        </p>
        <p class="col-10-center medium-text-20">
          Our Coaches got you covered on what you need. Let's make this journey
          more easy, smooth, and take you through the right activity to achieve
          that goal.
        </p>
        <!-- <p class="col-10-center light-text-12">
          [List of coaches that offer special classes and their classes (if
          possible with pictorial illustration)]
        </p> -->
        <button
          class="cta-btn cta-btn-primary col-12 place-self-center w-fit capitalize"
        >
          book yourself a free call today
        </button>
      </div>
      <!-- divider -->
      <div class="divider contained-width my-5 grid">
        <hr class="border-gray-500 col-10-center" />
      </div>
      <!-- newsletter -->
      <div class="contained-width col-12 grid">
        <p class="section-title col-10-center">
          Get Instant Updates Directly Into Your Inbox
        </p>
        <form
          @keyup.enter="submitHandler"
          class="newsletter-form col-10-center"
          ref="form"
        >
          <label for="name" class="col-12">Full Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Jon Snow Doe"
            required
            class="col-12"
          />
          <label for="phone" class="col-12">Phone Number:</label>
          <input
            type="tel"
            name="phone_number"
            id="phone"
            placeholder="080123456789"
            required
            class="col-12"
          />
          <label for="email" class="col-12">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            required
            class="col-12"
          />
          <div v-if="showErrorMessage" class="error-message mt-2">
            <p class="text-xs text-red-400">
              Every field is required to submit the form
            </p>
          </div>
        </form>
        <button
          @click="submitHandler"
          type="submit"
          class="uppercase cta-btn cta-btn-secondary col-10-center"
        >
          {{ isLoading ? 'Submitting' : 'Get Updates' }}
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

import { validation } from '@/composables/validation'

// import CarouselInstructors from '../components/carousels/CarouselInstructors.vue'
import VIcon from '@/components/VIcon.vue'
import CarouselScTestimonial from '../components/carousels/CarouselScTestimonial.vue'
import CarouselHmo from '../components/CarouselHmo.vue'
import CardMember from '../components/cards/CardMember.vue'
import AppIconAccountGroup from '@/components/icons/AppIconAccountGroup.vue'
import AppIconAccesssibilityVue from '@/components/icons/AppIconAccesssibility.vue'
import AppIconHeadLightbulb from '@/components/icons/AppIconHeadLightbulb.vue'
import AppIconFileChartCheckVue from '@/components/icons/AppIconFileChartCheck.vue'
import EmailService from '@/services/EmailServices/EmailService'

/* Used for plan card
import AppIconCheck from '@/components/AppIconCheck.vue'
const plans = [
  {
    name: 'premium',
    setupFee: '3000',
    price: '20,000',
    billing: 'monthly',
    offers: [
      'No price discount',
      'Access once daily',
      'Access to multi pitch and games',
      'Personal dashboard for tracking fitness records',
      'Fitness instructor available',
      '1 guest pass per month',
      'No subscription pause'
    ]
  },
  {
    name: 'V.I.P',
    setupFee: '3000',
    price: '40,000',
    billing: 'monthly',
    offers: [
      'No price discount',
      'All day access',
      'Access to multi pitch and games',
      'Personal dashboard for tracking fitness records',
      'Personal fitness instructor available',
      '2 guest pass per month',
      '7 days subscription pause request',
      '1 free car wash weekly (4 monthly)'
    ]
  }
]
const isEven = (value) => value % 2 === 0
*/

const whyJasfitness = [
  {
    id: 1,
    icon: AppIconAccountGroup,
    title: "Your're not Alone",
    content:
      "Consistency over motivation. You don't have to face your fitness goals alone. Let's do it TOGETHER as we've got you covered."
  },
  {
    id: 2,
    icon: AppIconHeadLightbulb,
    title: 'Get Inspired',
    content:
      'Network and grow with like minds. Meet FitFam with similar goals who are committed to a life of healthy living and more.'
  },
  {
    id: 3,
    icon: AppIconFileChartCheckVue,
    title: 'Result Oriented',
    content:
      "Regardless of your fitness level, we've got the equipment and professionals to get you the results you desire without breaking your back"
  },
  {
    id: 4,
    icon: AppIconAccesssibilityVue,
    title: 'Accessibility',
    content:
      'Easy accessibility to all kinds of vehicles to ease your movement and a wonderful parking space... Get your vehicle cleaned up while you go hit those goals of yours inside the gym'
  }
]

// const teamInfo1 = [
//   {
//     name: 'James Aondokaa Abagi.',
//     imageUrl: '',
//     title:
//       'The co-founder and co-CEO of the Jas Fitness center is James Aondokaa Abagi.',
//     description: `A dynamic managing director with over 20 years of corporate experience, proven skills in managing people at all organizational levels, expertise in creating partnerships and overseeing staff, as well as tactical plans to achieve strategic objectives. Proven leader with extensive experience in client service management, B2B, strategic creation and implementation, training, and mentoring.
//     James is the group head and CEO of Exhale Grand Resources Limited and Exhale Avenue Real Estate. He is a multi-skilled businessman with excellent relationship-building and customer-relations aptitude. James is also skilled at using independent judgment and sound decision-making to contribute to the success of the company.
//     James has held managerial positions with numerous large, rapidly growing businesses, including Modern-Shelter Systems and Services, White Avenue Group of Companies, SOW Real Estate, HAUSBA Smart Houses, VIP Tourism Limited, and Airtel Nigeria.
//     Along with other management and team leads, James oversees all aspects of the Jas Fitness Center.`
//   },
//   {
//     name: 'Lucy James Abagi (Lulu-Global)',
//     imageUrl: '',
//     title:
//       'Luluglobal is the cofounder and CO-CEO of Jas Fitness Center as well as the Director of Programs at Connected Development in Abuja, Nigeria.',
//     description: `Visionary businesswoman, social activist, development program expert, and adept fund-raiser, Lucy James Abagi (Lulu-Global). Her ability to analyze ideas and identify those that may be funded is the driving force behind Lu-Lu Global's creative, business, and entrepreneurial thinking. She frequently receives requests to serve as a board adviser for numerous organizations around the world.
//     Together with her team at Connected Development, she successfully raised $5 million for over 30 social impact programs funded by the Open Society Initiative for West Africa, the Conrad N. Hilton Foundation, the Skoll Foundation, OXFAM (VOICE) Nigeria, The John D. and Catherine T. MacArthur Foundation, OXFAM NOVIB, ActionAid Nigeria, the Heinrich Böll Foundation, UN Women, National Endowment for Democracy, the Center for International Private Enterprise, USAID-Creative Associate International Inc.,  and the UN Spotlight Initiative, which reached approximately 4,000,000 rural people in nine African nations (Liberia, Kenya, Cameroon, Zimbabwe, Malawi, The Gambia, Uganda, Cape Verde, and Nigeria).
//     Luluglobal oversees the Finance and Investment division at Jas Fitness, guaranteeing efficient operations and successful collaborations for the company.`
//   },
//   {
//     name: 'Bemshima Peter',
//     imageUrl: '',
//     title:
//       'At Jas Fitness Center, Bemshima oversees the frontend and backend technology and human resource infrastructure as the senior developer and chief operating officer.',
//     description: `An experienced software engineer who has worked with complex business logic and backend technologies for approximately 3 years.
//     Over the years, he has worked with expert teams to construct highly scalable infrastructure that automates businesses and their core principles. To build these infrastructures, we used tools and languages like Python, Golang, Dart, AWS, Linux servers, and others.
//     Among the organizations I've worked with are NotionAfrica, Jas Fitness, and Ehealth4Everyone. `
//   },
//   {
//     name: 'Jasmine Eliana James',
//     imageUrl: '',
//     title:
//       "The Jas Fitness brand's heirloom and official brand representative is Jasmine.",
//     description:
//       'We reckon that Jas Fitness is a long-term project, and the next generation is secure with Jasmine in charge of all managerial matters.'
//   },
//   {
//     name: 'Solomon John Akpan',
//     imageUrl: '',
//     title:
//       'Solomon John Akpan, a public administration graduate from the Federal University of Technology, Minna, is the administrative manager at Jas Fitness Centre.',
//     description:
//       'At Jas Fitness, Solomon is in charge of customer service and satisfaction as well as daily facility management.'
//   },
//   {
//     name: 'Zion Edet Effiong',
//     imageUrl: '',
//     title:
//       'With more than five years of experience working in the health and fitness industry, Zion Edet Effiong is the head coach at the Jas Fitness facility.',
//     description: `Full-body instruction, cardio, aerobics, tabata, abdominals, and body-building are Coach Zion's areas of expertise.
//     At the Jas Fitness facility, Coach Zion manages the daily training and exercise regimen while overseeing a group of over 10 instructors.`
//   }
// ]

const teamInfo = [
  {
    name: 'James Aondokaa Abagi.',
    imageUrl: '',
    title: 'Co-founder and Co-CEO of Jas Fitness center.',
    description: `James is a dynamic managing director with over 20 years of corporate experience, proven skills in managing people at all organizational levels, expertise in creating partnerships and overseeing staff, as well as tactical plans to achieve strategic objectives. Proven leader with extensive experience in client service management, B2B, strategic creation and implementation, training, and mentoring.
    James is the group head and CEO of Exhale Grand Resources Limited and Exhale Avenue Real Estate. He is a multi-skilled businessman with excellent relationship-building and customer-relations aptitude. He is also skilled at using independent judgment and sound decision-making to contribute to the success of the company.
    James has held managerial positions with numerous large, rapidly growing businesses, including Modern-Shelter Systems and Services, White Avenue Group of Companies, SOW Real Estate, HAUSBA Smart Houses, VIP Tourism Limited, and Airtel Nigeria.
    Along with other management and team leads, James oversees all aspects of the Jas Fitness Center.`
  },
  {
    name: 'Lucy James Abagi (Lulu-Global)',
    imageUrl: '',
    title: `Co-founder and Co-CEO of Jas Fitness Center.
      Director of Programs at Connected Development in Abuja, Nigeria.`,
    description: `Lucy James Abagi (Lulu-Global) is a visionary businesswoman, social activist, development program expert, and adept fund-raiser. Her ability to analyze ideas and identify those that may be funded is the driving force behind Lu-Lu Global's creative, business, and entrepreneurial thinking. She frequently receives requests to serve as a board adviser for numerous organizations around the world.
    Together with her team at Connected Development, she successfully raised $5 million for over 30 social impact programs funded by the Open Society Initiative for West Africa, the Conrad N. Hilton Foundation, the Skoll Foundation, OXFAM (VOICE) Nigeria, The John D. and Catherine T. MacArthur Foundation, OXFAM NOVIB, ActionAid Nigeria, the Heinrich Böll Foundation, UN Women, National Endowment for Democracy, the Center for International Private Enterprise, USAID-Creative Associate International Inc., and the UN Spotlight Initiative, which reached approximately 4,000,000 rural people in nine African nations (Liberia, Kenya, Cameroon, Zimbabwe, Malawi, The Gambia, Uganda, Cape Verde, and Nigeria).
    Luluglobal oversees the Finance and Investment division at Jas Fitness, guaranteeing efficient operations and successful collaborations for the company.`
  },
  {
    name: 'Bemshima Peter',
    imageUrl: '',
    title: 'Senior developer and chief operating officer.',
    description: `At Jas Fitness Center, Bemshima oversees the frontend and backend technology and human resource infrastructure. An experienced software engineer who has worked with complex business logic and backend technologies for approximately 3 years.
    Over the years, he has worked with expert teams to construct highly scalable infrastructure that automates businesses and their core principles. To build these infrastructures, tools and languages like Python, Golang, Dart, AWS, Linux servers, and others were used.
    Among the organizations he has worked with are NotionAfrica, Jas Fitness, and Ehealth4Everyone. `
  },
  {
    name: 'Jasmine Eliana James',
    imageUrl: '',
    title:
      "The Jas Fitness brand's heirloom and official brand representative.",
    description:
      'We reckon that Jas Fitness is a long-term project, and the next generation is secure with Jasmine in charge of all managerial matters.'
  },
  {
    name: 'Solomon John Akpan',
    imageUrl: '',
    title: 'Administrative Manager.',
    description:
      'A public administration graduate from the Federal University of Technology, Minna, Solomon is the administrative manager at Jas Fitness Centre. He is in charge of customer service and satisfaction as well as daily facility management.'
  },
  {
    name: 'Zion Edet Effiong',
    imageUrl: '',
    title: 'Head Coach.',
    description: `With more than five years of experience working in the health and fitness industry, Zion Edet Effiong is the head coach at the Jas Fitness facility. Full-body instruction, cardio, aerobics, tabata, abdominals, and body-building are Coach Zion's areas of expertise.
    At the Jas Fitness facility, Coach Zion manages the daily training and exercise regimen while overseeing a group of over 10 instructors.`
  }
]

const isLoading = ref(false)

const form = ref(null)
const showErrorMessage = ref(false)
const { useIsValidHybridInputs } = validation()
function extractFormInputValuesForValidation() {
  const values = []
  if (form.value !== null) {
    for (let element of form.value) {
      values.push(element.value)
    }
  }
  return values
}
function extractFormInputData() {
  const formData = []
  for (let element of form.value) {
    formData.push({ name: element.name, value: element.value })
  }
  return formData
}
function validateInputs() {
  const arr = extractFormInputValuesForValidation()
  if (arr.length) {
    return useIsValidHybridInputs(arr)
  }
}
// const validatedFields = computed(() => {
//   console.log('Computed: ', validateInputs())
//   return validateInputs()
// })
const store = useStore()
async function submitHandler() {
  if (validateInputs()) {
    isLoading.value = true
    const inputValues = extractFormInputData()

    try {
      let res = await EmailService.enquiry(inputValues)
      if (res.status == 200) {
        store.dispatch('landingpage/success', {
          message: 'Your details were successfully submitted.',
          timeout: 7000
        })
      }
      if (res.status === 200) {
        store.dispatch('landingpage/warning', {
          message: 'Your details have already been submitted.',
          timeout: 7000
        })
      }
    } catch (error) {
      if (error.response?.status === 400) {
        store.dispatch('landingpage/error', {
          message:
            'An error occured while trying to submit your data. Please try again.'
        })
      }
    } finally {
      isLoading.value = false
    }
  } else {
    showErrorMessage.value = true
    setTimeout(() => {
      showErrorMessage.value = false
    }, 5000)
  }
}
</script>

<style scoped>
.container {
  width: min(100% - 30px, 960px);
  margin-inline: auto;
}
.contained-width {
  width: min(100% - 30px, 960px);
  margin-inline: auto;
}
</style>

<style lang="scss" scoped>
.scwrapper {
  padding-top: 6rem;
  padding-bottom: 6rem;
  background: #f5f5f5;
  color: #303030;
  min-height: 100vh;

  @media screen and (max-width: 767px) {
    padding-top: 1rem;
  }
}
.hero {
  padding-top: 6rem;
  & .content {
    @apply text-center md:text-start;
  }
  & .hero-btn {
    @apply mx-auto md:mx-0;
  }
}
.image {
  /* grid-column: 2 / span 4; */

  height: 400px;
  /* width: 255px; */
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #aaa;

  @media screen and (max-width: 767px) {
    height: 340px;
  }
}
.image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.main-title {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 32px;
}
.subtitle-1 {
  font-weight: 500;
  font-size: 14px;
}
.subtitle-2 {
  font-weight: 500;
  font-size: 12px;
}
.cta-btn {
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  font-weight: 500;
}
.cta-btn-primary {
  background: #ffb628;
  text-transform: capitalize;
  color: #fefefe;
}
.cta-btn-secondary {
  background: #303030;
  color: #fff;
}

.section-title {
  text-align: center;
  @apply text-3xl md:text-5xl font-semibold mb-12;
}
.cards {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}
.card {
  text-align: center;
  // width: 23%;
  width: 230px;
  border: none;
}
.card-body .img {
  /* height: 24px;
  width: 24px;
  background: #aaa; */
  margin-bottom: 1rem;
}
.card-title {
  font-weight: 600;
  font-size: 14px;
}
.card-text {
  font-weight: 400;
  font-size: 12px;
  color: #555555;
}
.modules {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
.module {
  width: 260px;
  height: 180px;
  background: #aaa;
  border-radius: 8px;
  overflow: hidden;
}
.module img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.points {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}
.point {
  display: flex;
  gap: 20px;
  align-items: center;
}
.point:is(:nth-child(2), :nth-child(3)) {
  margin-left: 20px;
}
.point-image {
  height: 24px;
  width: 24px;
  border-radius: 999px;
  background: #1f1f1f;
}
.cta-btn-equipment {
  max-width: fit-content;
  justify-self: center;
}
.trainer-card {
  width: 420px;
  height: 120px;
  border: 1px solid #555555;
  border-radius: 8px;
  overflow: hidden;
}
.trainer-image {
  width: 100%;
  height: 100%;
  background: #aaa;
}
.trainer-card-body {
  grid-column: 5 / span 7;
}
.testimonial-details {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
}
.testimonial-img {
  background: #d9d9d9;
  height: 35px;
  width: 35px;
  border-radius: 50%;
}
.plans {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}
.plan {
  border-radius: 20px;
  padding: 50px 40px;
}
.plan .plan-price-details {
  display: flex;
  align-items: baseline;
}
.plan.light {
  background: #ffffff;
  border: 1px solid #303030;
}
.plan.light .plan-title,
.plan.light .plan-price {
  color: #303030;
}
.plan.light .divider-color {
  border: 1px solid #000000;
}
.plan.light .plan-setup-fee,
.plan.light .plan-price-biling {
  color: #aaaaaa;
}
.plan.light .plan-offer-title,
.plan.light .plan-offer {
  color: #303030;
}
.plan.dark {
  background: #303030;
}
.plan.dark .plan-title,
.plan.dark .plan-price {
  color: #fefefe;
}
.plan.dark .divider-color {
  border: 1px solid #aaaaaa;
}
.plan.dark .plan-setup-fee,
.plan.dark .plan-price-biling {
  color: #888888;
}
.plan.dark .plan-offer-title,
.plan.dark .plan-offer {
  color: #fefefe;
}
td {
  padding: 1rem;
}
.newsletter-form input {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 30px;
  row-gap: 10px;

  height: 40px;
  border: 1.5px solid #aaa;
  border-radius: 5px;
  padding: 0.8rem;
  background: none;
}
.newsletter-form label {
  margin-top: 1rem;
}

.light-text-12 {
  font-weight: 300;
  font-size: 12px;
}
.regular-text-12 {
  font-weight: 400;
  font-size: 12px;
}
.regular-text-14 {
  font-weight: 400;
  font-size: 14px;
}
.regular-text-16 {
  font-weight: 400;
  font-size: 16px;
}
.regular-text-20 {
  font-weight: 400;
  font-size: 20px;
}
.medium-text-14 {
  font-weight: 500;
  font-size: 14px;
}
.medium-text-16 {
  font-weight: 500;
  font-size: 16px;
}
.medium-text-18 {
  font-weight: 500;
  font-size: 18px;
}
.medium-text-20 {
  font-weight: 500;
  font-size: 20px;
}
.medium-text-24 {
  font-weight: 500;
  font-size: 24px;
}
.medium-text-32 {
  font-weight: 500;
  font-size: 32px;
}
.semibold-text-16 {
  font-weight: 600;
  font-size: 16px;
}
/* grid system */
.col-10-center {
  grid-column: 2 / span 10;
}
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}
.col-1 {
  grid-column: span 1 / span 1;
}
.col-2 {
  grid-column: span 2 / span 2;
}
.col-3 {
  grid-column: span 3 / span 3;
}
.col-4 {
  grid-column: span 4 / span 4;
}
.col-5 {
  grid-column: span 5 / span 5;
}
.col-6 {
  grid-column: span 6 / span 6;
}
.col-7 {
  grid-column: span 7 / span 7;
}
.col-8 {
  grid-column: span 8 / span 8;
}
.col-9 {
  grid-column: span 9 / span 9;
}
.col-10 {
  grid-column: span 10 / span 10;
}
.col-11 {
  grid-column: span 11 / span 11;
}
.col-12 {
  grid-column: span 12 / span 12;
}
</style>
