<template>
  <TheNavbar />
  <header
    class="py-10 sm:py-12 sm:px-6 md:px-52 md:py-16 lg:py-20 lg:px-52 xl:py-28 bg-gray-100"
  >
    <div class="sm:text-center lg:text-left">
      <h1
        class="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight"
      >
        <span class="block xl:inline">Become your</span>
        <span class="block text-[#fe902d] xl:inline"> BEST</span>
      </h1>
      <p
        class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
      >
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <div class="sm:flex sm:justify-center lg:justify-start">
        <div class="mt-3">
          <ButtonComponent
            :onClick="getStarted"
            text="Get Started"
            textColor="text-white"
            backgroundColor="bg-[#fe902d]"
            paddingX="px-8"
            paddingY="py-3"
            :routeName="{ name: 'LandingPageHome' }"
            class="hover:text-white hover:bg-[#ffa14f] active:bg-[#e99348] w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-600md:py-4 md:text-lg md:px-10"
          />
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <a
            href="#plans"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-600 hover:text-yellow-600 bg-yellow-50 hover:bg-yellow-100 md:py-4 md:text-lg md:px-10"
          >
            View Plans
          </a>
        </div>
      </div>
    </div>
  </header>

  <div class="container">
    <!-- below the hero section -->
    <section
      class="flex flex-col md:flex-row justify-center pb-10 px-4 sm:pb-12 sm:px-6 lg:px-8"
    >
      <LandingPageBelowHeroSection
        textColor="text-white"
        backgroundColor="bg-zinc-800"
        roundedEnd="rounded-bl-xl"
      >
        <template #mainIcon
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            class="mx-auto"
          >
            <path
              fill="gray"
              d="M18 5V2h12v3Zm4.5 22.35h3v-11.5h-3Zm1.5 16.6q-3.7 0-6.975-1.425Q13.75 41.1 11.3 38.65q-2.45-2.45-3.875-5.725Q6 29.65 6 25.95q0-3.7 1.425-6.975Q8.85 15.7 11.3 13.25q2.45-2.45 5.725-3.875Q20.3 7.95 24 7.95q3.35 0 6.3 1.125 2.95 1.125 5.25 3.125l2.55-2.55 2.1 2.1-2.55 2.55q1.8 2 3.075 4.85Q42 22 42 25.95q0 3.7-1.425 6.975Q39.15 36.2 36.7 38.65q-2.45 2.45-5.725 3.875Q27.7 43.95 24 43.95Zm0-3q6.25 0 10.625-4.375T39 25.95q0-6.25-4.375-10.625T24 10.95q-6.25 0-10.625 4.375T9 25.95q0 6.25 4.375 10.625T24 40.95ZM24 26Z"
            /></svg
        ></template>
        <template #header>Progress</template>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, nam!
        <template #backgroundIcon
          ><img
            :src="require('../assets/belowHeroIcons2.svg')"
            alt=""
            class="w-44"
        /></template>
      </LandingPageBelowHeroSection>

      <LandingPageBelowHeroSection
        textColor="text-black"
        backgroundColor="bg-[#fe902d]"
        roundedEnd="rounded-br-xl"
      >
        <template #mainIcon
          ><svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            height="48"
            width="48"
            class="mx-auto"
            viewBox="0 0 481.688 481.688"
            xml="preserve"
          >
            <path
              d="M477.803,193.838l-66.081-98.23c-6.754-10.04-19.073-14.432-30.658-10.927l-22.729,6.878
	c-33.361-26.276-74.86-40.695-117.487-40.695c-42.627,0-84.128,14.42-117.49,40.697l-22.733-6.88
	C89.04,81.174,76.72,85.568,69.966,95.608l-66.083,98.23c-5.313,7.898-5.161,18.384,0.375,26.09
	c6.966,9.697,21.828,27.92,43.107,41.027c1.621,0.998,3.25,1.935,4.882,2.839c5.413,44.884,26.645,86.275,60.183,117.053
	c35.118,32.228,80.724,49.976,128.417,49.976c47.688,0,93.291-17.749,128.407-49.976c33.538-30.779,54.769-72.169,60.182-117.052
	c1.633-0.905,3.263-1.842,4.884-2.841c21.278-13.106,36.142-31.33,43.107-41.026C482.967,212.221,483.117,201.736,477.803,193.838z
	 M335.634,99.751c-1.661,1.715-2.7,4.004-2.813,6.501l-1.406,30.942c-0.191,4.208,2.274,8.084,6.166,9.694l20.394,8.438
	c3.479,1.441,7.474,0.803,10.331-1.648l16.532-14.17c5.294,9.148,7.899,20.701,10.438,31.958c0.383,1.698,0.762,3.379,1.147,5.044
	c-6.394-1.571-11.991-1.595-16.404-1.059c-8.551,1.039-16.809,4.637-23.823,10.298c-24.591-9.253-43.014-5.52-54.439-0.461
	c-6.43,2.847-11.353,6.377-14.833,9.415l-12.324-7.135c8.396-11.711,13.516-27.903,13.516-46.053
	c0-16.847-4.657-30.95-13.468-40.784c-8.42-9.398-20.424-14.573-33.803-14.573s-25.383,5.175-33.803,14.573
	c-8.811,9.834-13.468,23.938-13.468,40.784c0,18.149,5.12,34.342,13.516,46.053l-12.325,7.135c-3.48-3.038-8.403-6.568-14.833-9.415
	c-11.427-5.06-29.849-8.792-54.438,0.461c-7.016-5.662-15.273-9.259-23.823-10.298c-4.415-0.536-10.012-0.512-16.404,1.059
	c0.386-1.665,0.765-3.347,1.147-5.045c2.538-11.257,5.143-22.809,10.438-31.957l16.532,14.17c2.857,2.45,6.852,3.087,10.331,1.647
	l20.393-8.438c3.893-1.61,6.357-5.487,6.166-9.694l-1.406-30.942c-0.113-2.495-1.151-4.783-2.81-6.497
	c27.875-18.725,60.935-28.89,94.792-28.89C274.703,70.864,307.761,81.028,335.634,99.751z M213.574,141.515
	c0-22.14,10.194-35.357,27.271-35.357s27.27,13.218,27.27,35.357c0,24.502-12.488,45.203-27.27,45.203
	S213.574,166.017,213.574,141.515z M73.906,272.971c8.869,2.622,17.875,3.939,26.992,3.938c6.756,0,13.575-0.739,20.442-2.183
	c5.707,15.147,18.323,46.704,31.254,66.271c6.665,10.085,11.108,21.229,13.207,33.121c1.339,7.588,2.322,14.754,3.027,20.726
	c-15.524-7.265-29.989-16.907-42.874-28.731C98.85,341.239,80.73,308.628,73.906,272.971z M147.335,252.251l16.439,31.383
	c1.134,2.164,3.021,3.838,5.304,4.707c0.549,0.208,13.613,5.138,29.12,7.645c5.989,0.969,11.542,1.452,16.653,1.452
	c10.591,0,19.281-2.076,25.993-6.213c9.949,6.133,24.244,7.737,42.646,4.761c15.507-2.507,28.571-7.436,29.12-7.645
	c2.283-0.869,4.17-2.543,5.304-4.707l16.438-31.381c3.881,2.412,8.06,5.943,9.359,9.798c-3.654,10.026-17.665,47.283-31.303,67.918
	c-8.183,12.382-13.639,26.066-16.217,40.673c-2.354,13.334-3.655,25.247-4.304,32.365c-2.573,0.809-5.166,1.559-7.778,2.245
	l8.562-50.899c1.606-9.546-2.077-19.251-9.612-25.329l-21.525-17.359c-11.988-9.668-29.393-9.67-41.379,0l-21.526,17.359
	c-7.535,6.078-11.219,15.783-9.612,25.329l8.563,50.898c-2.612-0.686-5.205-1.436-7.778-2.245
	c-0.649-7.118-1.951-19.03-4.304-32.363c-2.576-14.605-8.033-28.289-16.217-40.673c-13.621-20.612-27.645-57.891-31.302-67.92
	C139.278,258.191,143.462,254.659,147.335,252.251z M218.55,409.356l-9.812-58.322c-0.408-2.428,0.528-4.896,2.445-6.442
	l21.526-17.359c4.712-3.801,11.553-3.802,16.269,0l21.524,17.358c1.917,1.546,2.854,4.015,2.445,6.443l-9.811,58.322
	c-7.346,0.966-14.788,1.467-22.29,1.467C233.343,410.824,225.898,410.322,218.55,409.356z M355.733,366.113
	c-12.886,11.826-27.352,21.468-42.876,28.733c0.705-5.964,1.688-13.126,3.029-20.728c2.1-11.894,6.543-23.038,13.207-33.122
	c12.931-19.567,25.547-51.124,31.255-66.271c6.867,1.444,13.684,2.183,20.442,2.183c9.116,0,18.121-1.317,26.99-3.938
	C400.956,308.627,382.836,341.239,355.733,366.113z M461.187,208.26c-13.107,18.245-48.365,58.231-98.819,46.438
	c-3.698-9.932-12.393-16.533-18.71-20.209l5.198-9.924c2.563-4.893,0.674-10.936-4.219-13.499s-10.936-0.673-13.498,4.218
	l-29.129,55.611c-14.511,4.891-40.468,10.368-51.166,2.987v-33.038c0-5.523-4.478-10-10-10s-10,4.477-10,10v33.034
	c-10.674,7.344-36.651,1.882-51.169-2.991l-29.127-55.604c-2.563-4.892-8.605-6.781-13.499-4.218
	c-4.892,2.563-6.78,8.606-4.218,13.499l5.198,9.924c-6.317,3.676-15.011,10.277-18.71,20.209
	c-50.451,11.799-85.711-28.192-98.818-46.438c-0.684-0.952-0.693-2.262-0.023-3.258l66.082-98.229
	c1.823-2.71,5.149-3.893,8.271-2.948l34.377,10.404l0.767,16.863l-8.236,3.408l-19.953-17.103
	c-4.023-3.447-10.038-3.16-13.711,0.656c-13.215,13.723-17.441,32.472-21.171,49.013c-2.09,9.266-4.063,18.018-7.292,24.476
	c-2.094,4.188-1.002,9.268,2.629,12.226c3.63,2.957,8.826,2.998,12.504,0.102c21.248-16.741,36.018-5.293,41.38,0.406
	c2.92,3.101,7.48,4.014,11.369,2.273c16.438-7.36,31.063-8.486,43.468-3.347c8.874,3.677,13.592,9.464,14.007,9.99
	c2.979,4.232,8.581,5.325,13.067,2.729l24.433-14.145c5.624,3.187,11.823,4.943,18.375,4.943s12.752-1.756,18.375-4.943
	l24.432,14.145c4.433,2.566,10.086,1.369,13.098-2.772c0.178-0.244,18.188-24.177,57.445-6.6c3.888,1.74,8.449,0.828,11.369-2.273
	c5.363-5.7,20.131-17.146,41.38-0.405c3.678,2.897,8.874,2.855,12.504-0.102c3.631-2.958,4.723-8.038,2.629-12.226
	c-3.229-6.458-5.202-15.21-7.292-24.476c-3.729-16.542-7.957-35.291-21.172-49.014c-3.676-3.816-9.688-4.105-13.711-0.656
	l-19.952,17.102l-8.237-3.408l0.767-16.863l34.378-10.404c3.125-0.944,6.449,0.239,8.271,2.948l66.081,98.23
	C461.88,205.998,461.87,207.307,461.187,208.26z"
            /></svg
        ></template>
        <template #header>Workout</template>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
        facilis magni, tenetur esse natus vitae!
        <template #backgroundIcon
          ><img :src="require('../assets/belowHeroIcons1.svg')" alt=""
        /></template>
      </LandingPageBelowHeroSection>
    </section>

    <!-- about us section -->
    <LandingPageAboutUs />

    <!-- our services section -->
    <section
      class="flex flex-col items-center text-center bg-zinc-100 py-10 px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 lg:px-8 xl:py-28"
      id="services"
    >
      <h4
        class="capitalize text-start border-b-2 border-[#fe902d] pb-2 mb-4 font-bold text-5xl mx-auto w-full"
      >
        What we offer
      </h4>
      <h4 class="text-sm text-start w-full mb-5 mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quas
        repellat eos, explicabo atque consectetur.
      </h4>
      <div
        class="flex flex-col gap-20 items-start md:px-5 md:flex-wrap md:flex-row mb-4"
      >
        <div v-for="offer in offers" :key="offer.title" class="add animations">
          <LandingPageOfferCard
            :title="offer.title"
            :body="offer.body"
            :svgIcon="offer.svgIcon"
          />
        </div>
      </div>
      <ButtonComponent
        :onClick="getStarted"
        text="Get Started"
        textColor="text-white"
        backgroundColor="bg-[#fe902d]"
        paddingX="px-8"
        paddingY="py-3"
        class="hover:text-white hover:bg-[#ffa14f] active:bg-[#e99348] my-3 md:my-5"
      />
    </section>

    <!-- BMI calculator section -->
    <section
      class="lg:flex-row justify-center items-center space-y-4 md:items-start md:text-left py-10 px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 lg:px-8 xl:py-28"
    >
      <div class="space-y-4">
        <h4 class="text-5xl font-bold border-b-2 border-[#fe902d] pb-2">
          Know Your BMI
        </h4>
        <p class="hidden md:block">
          Are you in the healthy range? Use this tool to calculate your
          <span class="font-semibold">Body Mass Index (BMI)</span> now to know
          your risk for obesity related diseases.
        </p>
      </div>
      <div class="flex justify-center items-center">
        <LandingPageBmiCalculator />
      </div>
    </section>

    <!-- Reviews section -->
    <section
      class="flex justify-around md:text-left w-full h-max py-10 px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 lg:px-8 xl:py-28 bg-zinc-100"
    >
      <div
        class="flex flex-row-reverse items-start justify-end md:text-left w-max h-max"
      >
        <div
          class="flex flex-col justify-center items-center md:items-start w-96 h-max md:ml-10"
        >
          <p class="uppercase text-gray-600 text-sm font-bold">testimonial</p>
          <p class="capitalize font-bold text-5xl">
            what our customers say about us
          </p>
          <div class="border-2 border-[#fe902d] w-32" />
          <div class="flex flex-col py-3 bg-bottom relative">
            <ReviewCardComponent :review="reviews[0]" />
          </div>
        </div>
        <div
          class="hidden w-96 h-80 md:grid grid-cols-2 grid-rows-2 items-center gap-2 grid-flow-row-dense pt-5 bg-blue-600"
        ></div>
      </div>
      <div class="hidden lg:inline scheduler h-max p-2 bg-white rounded">
        <AppTimeTable />
      </div>
    </section>

    <!-- Subscription plans section -->
    <section
      class="text-center py-10 px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 lg:px-8 xl:py-28"
      id="plans"
    >
      <div class="pb-5 text-[#2c3e50] capitalize text-start">
        <h4
          class="text-5xl font-semibold border-b-2 border-[#fe902d] pb-2 mb-2"
        >
          Choose your plan
        </h4>
        <p class="text-sm">No long term contract, cancel at any time</p>
      </div>
      <div class="flex flex-wrap gap-4 justify-center text-white items-center">
        <SubsciptionCard
          v-for="(plan, index) in plans"
          :key="plan.slug"
          :backgroundColor="
            checkOddValue(index) ? 'bg-[#FFDB58]' : 'bg-[#C0C0C0]'
          "
          class="h-[34rem] hover:z-10 hover:scale-105 transition ease-out"
        >
          <template #top>
            <p class="text-[#2c3e50] text-2xl font-semibold uppercase">
              {{ plan.slug }}
            </p>
            <p class="text-black text-xs font-light">
              Membership Setup Fee - N2,000
            </p>
          </template>
          <div class="h-[21rem]">
            <div
              class="body relative w-56 pt-1 pb-12 mt-5 bg-white rounded-2xl"
            >
              <div
                class="price absolute left-[50%] -top-8 bg-white shadow-md px-4 py-2 rounded-full translate-x-[-50%]"
              >
                <p
                  class="text-2xl font-semibold text-[#FB2525] uppercase whitespace-nowrap"
                >
                  {{ plan.price }}
                </p>
                <p
                  class="text-xs font-semibold text-[#2c3e50] uppercase whitespace-nowrap"
                >
                  {{ plan.billing }}
                </p>
              </div>
              <div class="offers bg-white w-full mt-5 text-xs">
                <div
                  v-for="(offer, i) in plan.offers"
                  :key="i"
                  :class="{
                    'bg-[#f4c777]': checkOddValue(index) && checkOddValue(i),
                    'bg-[#ececec]': checkOddValue(index) && !checkOddValue(i),
                    'bg-[#dcdcdc]': !checkOddValue(index) && checkOddValue(i),
                    'bg-[#ecf0f1]': !checkOddValue(index) && !checkOddValue(i)
                  }"
                  class="inline-flex w-full items-center space-x-3 offer text-black text-start py-2 px-4"
                >
                  <i class="fa-regular fa-circle-check"></i>
                  <span>{{ offer }}</span>
                </div>
              </div>
            </div>
          </div>
          <template #bottom>
            <ButtonComponent
              :onClick="getStarted"
              text="Get Started"
              textColor="text-white"
              backgroundColor="bg-[#FB2525]"
              paddingX="px-4"
              paddingY="py-2"
              class="rounded-full hover:text-white hover:bg-[#ff4040] active:bg-[#ff0505] my-3 md:my-5"
            />
          </template>
        </SubsciptionCard>
      </div>
    </section>

    <!-- video clip section -->
    <section
      class="flex flex-col lg:flex-row items-center justify-center pb-10 px-4 sm:pb-12 sm:px-6 md:pb-16 lg:pb-20 lg:px-8 xl:pb-28 text-[#2c3e50]"
    >
      <div class="flex flex-col lg:w-[40%] md:pr-10 space-y-3">
        <p
          class="text-4xl font-bold mb-4 sm:text-center lg:text-start capitalize"
        >
          Have a look at what goes on in
          <span class="text-[#fe902d]">jas fitness</span>
        </p>
        <p class="hidden lg:block text-sm text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          assumenda libero veritatis quia asperiores minima! <br /><br />
          Eius excepturi illo tempora accusantium hic, exercitationem fuga
          eligendi dolore dolorum non consequuntur temporibus quaerat in
          numquam, suscipit similique inventore perferendis amet magnam et
          veniam!
        </p>
      </div>
      <div class="h-full w-full bg-gray-100 md:p-10">
        <iframe
          width="1621"
          height="772"
          src="https://www.youtube.com/embed/ZFiAq6QQRqA"
          title="Light vs Heavy Weight (Science-Based)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          class="w-full h-96 lg:rounded-lg"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <!-- contact us section -->
    <section
      id="subscribe"
      class="flex flex-col justify-between items-center bg-[#2c3e50] text-white text-center gap-3 drop-shadow-2xl sm:mx-4 md:text-left md:rounded-2xl py-10 mb-10 px-12 sm:py-12 sm:mb-12 sm:px-6 md:py-16 md:mb-16 lg:py-20 lg:mb-20 lg:px-8 xl:py-28 xl:mb-28 md:mx-0"
    >
      <div class="text md:text-center mb-4">
        <p class="text-2xl md:text-5xl font-bold capitalize mb-2">
          subscribe to our newsletter
        </p>
        <p class="text-xs md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          voluptatem.
        </p>
      </div>
      <form
        class="form flex flex-col space-y-3 md:space-y-0 md:flex-row items-center space-x-3"
        @click.prevent="handleEmailSubmit"
      >
        <input
          type="text"
          placeholder="Email Address"
          class="md:w-96 px-4 py-2 rounded-md text-[#2c3e50]"
        />
        <ButtonComponent
          text="Submit"
          backgroundColor="bg-[#fe902d]"
          class="hover:text-white hover:bg-[#ffa14f] active:bg-[#e99348]"
        />
      </form>
    </section>
  </div>
  <TheFooter />
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue'
import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'
import LandingPageBelowHeroSection from '../components/LandingPageBelowHeroSection.vue'
import LandingPageOfferCard from '../components/LandingPageOfferCard.vue'
import LandingPageBmiCalculator from '../components/LandingPageBmiCalculator.vue'
import ReviewCardComponent from '../components/ReviewCardComponent.vue'
import SubsciptionCard from '../components/SubsciptionCard.vue'
import AppTimeTable from '../components/AppTimeTable.vue'
import LandingPageAboutUs from '../components/LandingPageAboutUs.vue'

export default {
  components: {
    AppTimeTable,
    ButtonComponent,
    TheNavbar,
    TheFooter,
    LandingPageBelowHeroSection,
    LandingPageOfferCard,
    LandingPageBmiCalculator,
    ReviewCardComponent,
    SubsciptionCard,
    LandingPageAboutUs
  },
  data() {
    return {
      offers: [
        {
          title: 'aerobics / dancerise',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate',
          svgIcon: 'aerobics.svg'
        },
        {
          title: 'body building',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate',
          svgIcon: 'bodyBuilding.svg'
        },
        {
          title: 'weight loss',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate',
          svgIcon: 'weightLoss.svg'
        },
        {
          title: 'spinnig',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
          svgIcon: 'spinnig.svg'
        }
      ],
      reviews: [
        {
          name: 'Mary King',
          title: 'nutritionist',
          review:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit?',
          stars: 4
        },
        {
          name: 'Sarah Sam',
          title: 'Programmer',
          review:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit?',
          stars: 5
        },
        {
          name: 'Bill Dane',
          title: 'Archaeologist',
          review:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus',
          stars: 3
        },
        {
          name: 'Francisca George',
          title: 'Business woman',
          review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          stars: 4
        },
        {
          name: 'chikaima obidiugwu',
          title: 'nutritionist',
          review:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod iste nesciunt',
          stars: 5
        }
      ],
      plans: [
        {
          slug: 'BUSY-BEE',
          price: 'N15,000',
          billing: 'BILLED QUARTERLY',
          offers: [
            '15% Price Discount',
            'ALL Day Access',
            'FREE Group Classes',
            '1 Guest Pass Per Month'
          ]
        },
        {
          slug: 'PASSER-BY',
          price: 'N20,000',
          billing: 'BILLED MONTHLY',
          offers: [
            'NO Price Discount',
            'ACCESS Once Daily',
            'PERSONAL Dashboard For Tracking Fitness Records',
            'FREE Group Classes',
            'NO Guest Passes',
            'NO Freeze Subscription Request'
          ]
        },
        {
          slug: 'TOO-SURE',
          price: 'N51,000',
          billing: 'BILLED QUARTERLY',
          offers: [
            '15% Price Discount',
            'ALL Day Access',
            'PERSONAL Dashboard For Tracking Fitness Records',
            'FREE Group Classes',
            '1 Guest Pass per Month',
            '4 Days per Subscription Freeze Request'
          ]
        },
        {
          slug: 'REAL-DEAL',
          price: 'N96,000',
          billing: 'BILLED BI-YEARLY',
          offers: [
            '20% Price Discount',
            'ALL Day Access',
            'PERSONAL Dashboard For Tracking Fitness Records',
            'FREE Group Classes',
            '2 Guest Pass per Month',
            '8 Days per Subscription Freeze Request'
          ]
        },
        {
          slug: 'ODOGWU',
          price: 'N168,000',
          billing: 'BILLED YEARLY',
          offers: [
            '30% Price Discount',
            'ALL Day Access',
            'PERSONAL Dashboard For Tracking Fitness Records',
            'FREE Group Classes',
            '3 Guest Pass per Month',
            '14 Days per Subscription Freeze Request'
          ]
        }
      ]
    }
  },
  methods: {
    getStarted() {
      this.$router.push({ name: 'LandingPageHome' })
    },
    handleEmailSubmit() {
      console.log('Submitted Email')
    },
    checkOddValue(value) {
      return value % 2 === 0
    }
  }
}
</script>

<style scoped></style>
