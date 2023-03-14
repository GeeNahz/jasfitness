<template>
  <div class="member-setup-wrapper">
    <div class="page__heading">
      <div class="page__title">
        <div class="logo">
          <img
            src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/JasFitnessCenter_CsBC8awdj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984852958"
            alt="logo"
          />
        </div>
        <div class="page__title-text">
          <p class="main-text">Membership Setup</p>
        </div>
      </div>
    </div>

    <div class="form">
      <form @submit.prevent="submitHandler">
        <div class="personal-details grid gap-20">
          <p class="section-title col-12">My Profile</p>
          <label class="col-12 grid gap-10">
            <!-- <p class="form-group-title col-12">Name*</p> -->
            <div
              class="form-group col-12 gap-20 flex flex-col sm:flex-row sm:justify-between"
            >
              <label class="grid gap-10" for="first-name">
                <p class="col-12">
                  First name<span class="required-indicator">*</span>
                </p>
                <div class="form-input col-12">
                  <div class="logo">
                    <AppIconAccount />
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    v-model="inputFields.requiredFields.firstName"
                    placeholder="John"
                    required
                  />
                </div>
                <!-- <small class="col-12">First name*</small> -->
              </label>
              <label class="grid gap-10" for="middle-name">
                <p class="col-12">Middle name</p>
                <div class="form-input col-12">
                  <div class="logo">
                    <AppIconAccount />
                  </div>
                  <input
                    type="text"
                    name="middleName"
                    id="middle-name"
                    v-model="inputFields.notRequired.middleName"
                    placeholder="Doe"
                  />
                </div>
                <!-- <small class="col-12">Middle name</small> -->
              </label>
              <label class="grid gap-10" for="last-name">
                <p class="col-12">
                  Last name<span class="required-indicator">*</span>
                </p>
                <div class="form-input col-12">
                  <div class="logo">
                    <AppIconAccount />
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    v-model="inputFields.requiredFields.lastName"
                    placeholder="Snow"
                    required
                  />
                </div>
                <!-- <small class="col-12">Last name*</small> -->
              </label>
            </div>
          </label>
          <div class="double-fields col-12 grid gap-20">
            <label class="col-6-1 grid gap-10" for="email">
              <p class="col-12">
                Email<span class="required-indicator">*</span>
              </p>
              <div class="form-input col-12">
                <div class="logo">
                  <AppIconEmail />
                </div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  v-model="inputFields.requiredFields.email"
                  placeholder="johndoe123@email.com"
                  required
                />
              </div>
            </label>
            <label class="col-6-2 grid gap-10" for="number">
              <p class="col-12">
                Phone number<span class="required-indicator">*</span>
              </p>
              <div class="form-input col-12">
                <div class="logo">
                  <AppIconPhone />
                </div>
                <input
                  type="tel"
                  name="number"
                  id="number"
                  v-model="inputFields.requiredFields.phoneNumber"
                  placeholder="+234 123 4501 234"
                  required
                />
              </div>
            </label>
          </div>
          <div class="double-fields col-12 grid gap-20">
            <label class="col-6-1 grid gap-10" for="gender">
              <p class="col-12">
                Gender<span class="required-indicator">*</span>
              </p>
              <div class="form-input col-12">
                <div class="logo">
                  <AppIconGender />
                </div>
                <select
                  name="gender"
                  id="gender"
                  v-model="inputFields.requiredFields.gender"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </label>
            <label class="col-6-2 grid gap-10" for="dob">
              <p class="col-12">
                Date of birth<span class="required-indicator">*</span>
              </p>
              <div class="form-input col-12">
                <div class="logo">
                  <AppIconPlan />
                </div>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  autocomplete="on"
                  v-model="inputFields.requiredFields.dob"
                  required
                />
              </div>
            </label>
          </div>
          <label class="col-12 grid gap-10" for="occupation">
            <p class="col-12">
              Occupation<span class="required-indicator">*</span>
            </p>
            <div class="form-input col-12">
              <div class="logo">
                <AppIconBriefcase />
              </div>
              <input
                type="text"
                name="occupation"
                id="occupation"
                v-model="inputFields.requiredFields.occupation"
                placeholder="Occupation"
              />
            </div>
          </label>
          <label class="col-12 grid gap-10" for="address">
            <p class="col-12">
              Address<span class="required-indicator">*</span>
            </p>
            <div class="form-input col-12">
              <div class="logo">
                <AppIconMapMarker />
              </div>
              <input
                type="text"
                name="address"
                id="address"
                v-model="inputFields.requiredFields.address"
                placeholder="987 inner ville estate, Abuja, Nigeria"
              />
            </div>
          </label>
        </div>
        <div class="emergency grid gap-20">
          <p class="section-title col-12">Emergency contact detail</p>
          <label class="col-12 grid gap-10" for="contact-name">
            <p class="col-12">
              Full name<span class="required-indicator">*</span>
            </p>
            <div class="form-input col-12">
              <div class="logo">
                <AppIconSettingOutline />
              </div>
              <input
                type="text"
                name="contact-name"
                id="contact-name"
                v-model="inputFields.requiredFields.emergencyName"
                placeholder="Susan Jones"
                required
              />
            </div>
          </label>
          <label class="col-12 grid gap-10" for="contact-number">
            <p class="col-12">
              Phone number<span class="required-indicator">*</span>
            </p>
            <div class="form-input col-12">
              <div class="logo">
                <AppIconPhone />
              </div>
              <input
                type="text"
                name="contact-number"
                id="contact-number"
                v-model="inputFields.requiredFields.emergencyNumber"
                placeholder="+234 432 1043 210"
                required
              />
            </div>
          </label>
        </div>
        <div class="referral grid gap-20">
          <p class="section-title col-12">Referral</p>
          <label class="col-12 grid gap-10" for="referral">
            <p class="col-12">
              Who referred you? (Leave empty if no one referred you)
            </p>
            <div class="form-input col-12">
              <div class="logo">
                <AppIconAccountMultiplePlus />
              </div>
              <input
                type="text"
                name="referral"
                id="referral"
                v-model="inputFields.notRequired.referral"
                placeholder="My Referral"
              />
            </div>
          </label>
        </div>
        <div class="signin grid gap-20">
          <p class="section-title col-12">Create sign in detail</p>
          <label class="col-12 grid gap-10" for="username">
            <p class="col-12">
              Username<span class="required-indicator">*</span>
            </p>
            <div class="form-input col-12">
              <div class="logo">
                <AppIconAt />
              </div>
              <input
                type="text"
                name="username"
                id="username"
                v-model="inputFields.requiredFields.username"
                placeholder="JohnSnow"
                required
              />
            </div>
          </label>
        </div>
        <button
          :class="{ 'disabled ': !isValidFields || status.isLoading }"
          type="submit"
        >
          {{ status.isLoading ? 'Please wait...' : 'Submit' }}
        </button>
      </form>
      <p class="sub-text">Payments made are not refundable.</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { validation } from '@/composables/validation.js'

import AppIconAccount from '@/components/AppIconAccount.vue'
import AppIconEmail from '@/components/AppIconEmail.vue'
import AppIconPhone from '@/components/AppIconPhone.vue'
import AppIconGender from '@/components/AppIconGender.vue'
import AppIconPlan from '@/components/AppIconPlan.vue'
import AppIconAccountMultiplePlus from '@/components/AppIconAccountMultiplePlus.vue'
import AppIconSettingOutline from '@/components/AppIconSettingOutline.vue'
import AppIconAt from '@/components/AppIconAt.vue'
import AppIconBriefcase from '@/components/AppIconBriefcase.vue'
import AppIconMapMarker from '@/components/AppIconMapMarker.vue'

const status = reactive({ isLoading: false })
const inputFields = reactive({
  requiredFields: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    dob: '',
    emergencyName: '',
    emergencyNumber: '',
    username: '',
    medical_condition: [],
    conscent: false
  },
  notRequired: { referral: '', middleName: '' }
})
const { useIsValidTextInputs } = validation()
const isValidFields = computed(() => validateInputs() && !status.isLoading)

function validateInputs() {
  const inputsArr = []
  for (let key in inputFields.requiredFields) {
    inputsArr.push(inputFields.requiredFields[key])
  }
  return useIsValidTextInputs(inputsArr)
}

function clearInputs({ inputObject }) {
  for (let key in inputObject) {
    inputObject[key] = ''
  }
}

function getFullName({ namesArray = [] }) {
  function isString(value) {
    return typeof value === 'string'
  }
  if (namesArray.length > 1) {
    if (!namesArray.every(isString)) {
      throw new Error("Elements of 'namesArray' should all be strings")
    }
    return namesArray.join(' ')
  }
  throw new Error(
    `namesArray may not be empty or less than 1 element. Got ${namesArray} expected an array of string.`
  )
}

const store = useStore()
const router = useRouter()
async function submitHandler() {
  status.isLoading = true
  let userData = {
    username: inputFields.requiredFields.username,
    email: inputFields.requiredFields.email,
    name: getFullName({
      namesArray: [
        inputFields.requiredFields.firstName,
        inputFields.notRequired.middleName,
        inputFields.requiredFields.lastName
      ]
    }),
    date_of_birth: inputFields.requiredFields.dob,
    gender: inputFields.requiredFields.gender,
    phone_number: inputFields.requiredFields.phoneNumber,
    address: inputFields.requiredFields.address,
    emergency_person: inputFields.requiredFields.emergencyName,
    emergency_contact: inputFields.requiredFields.emergencyNumber,
    occupation: inputFields.requiredFields.occupation,
    referral: inputFields.notRequired.referral
  }
  try {
    await store.dispatch('auth/membership_setup', userData)
    store.dispatch('landingpage/success', {
      message: 'Your details have been successfully submitted.'
    })
    router.push({
      name: 'FormSuccess',
      query: { message: "Congratulations! We're glad to have you onboard!" }
    })
    // on successful submission
    clearInputs({ inputObject: inputFields.requiredFields })
    clearInputs({ inputObject: inputFields.notRequired })
  } catch (error) {
    if (error.response.status === 400) {
      store.dispatch('landingpage/warning', {
        message: 'Some provided fields already exist.'
      })
    }
    if (error.message == 'Network Error') {
      store.dispatch('landingpage/error', {
        message: 'Kindly check your network connection and try again.'
      })
    }
  } finally {
    status.isLoading = false
  }
}
</script>

<style scoped>
/* mobile device */
.member-setup-wrapper {
  padding: 3rem;
  width: 100%;
  margin-inline: auto;
}
@media screen and (min-width: 640px) {
  .member-setup-wrapper {
    padding: 5rem;
    width: min(100% - 30px, 960px);
    margin-inline: auto;
  }
}
</style>

<style lang="scss" scoped>
$sm: 640px;
$md: 768px;
$lg: 1024px;

// mobile devices
.page__title {
  display: flex;
  align-items: center;
  justify-content: start;
  & .logo {
    width: 4rem;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  #{&}-text {
    white-space: nowrap;

    & .main-text {
      font-weight: 700;
      font-size: 1.25rem; // 20px
      line-height: 1.75rem; //28px
      text-transform: capitalize;
    }
  }
}
.page__heading {
  // padding-bottom: 1.5rem;
  text-align: start;
  // border-bottom: 1px solid #aaa;

  & .divider {
    margin: 0.5rem 0;

    & hr {
      border: 0.1px solid #000;
    }
  }
}
.section-title {
  font-size: 0.875rem; // 14px
  line-height: 1.75rem; // 28px
  font-weight: 600;
  text-transform: capitalize;
  margin-top: 1.5rem;
}

form {
  & label p {
    font-size: 0.75rem; // 12px
    line-height: 1rem; // 16px
  }
  & label small {
    color: #999;
  }
  & .required-indicator {
    color: #ef4444;
  }

  & .form-input {
    overflow: hidden;
    width: 100%;
    border: 1px solid #aaa;
    border-radius: 3px;
    height: 2.5rem; // 40px

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;

    &:focus-within {
      border: none;
      outline: 2px solid gold;
    }

    & .logo {
      padding: 0 0.5rem;
      color: #aaa;
    }
  }
  & input,
  & select {
    font-size: 0.875rem; // 14px
    line-height: 1.25rem; // 20px
    font-weight: 500;
    padding-right: 0.5rem;
    height: 100%;
    width: 100%;

    outline: none;
  }

  & button {
    margin-top: 2rem;
    width: 100%;
    border-radius: 8px;
    background: gold;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-transform: uppercase;
    padding: 0.5rem 0;

    transition: background 0.5s ease;

    &:hover {
      background: #eeca00;
    }
  }
}

.sub-text {
  width: 100%;
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 1rem;
  margin: 0.25rem 0;
}

@media screen and (min-width: $sm) {
  .page__title {
    & .logo {
      width: 7rem;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    #{&}-text {
      & .main-text {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }
    }
  }
  .section-title {
    font-size: 1.5rem; // 24px
    line-height: 2rem; // 32px
    margin-top: 2rem;
  }

  form {
    & .form-input {
      border-radius: 8px;
    }

    & input,
    & select {
      font-size: 1rem; // 16px
      line-height: 1.5rem; // 24px
    }
  }
}
@media screen and (min-width: $lg) {
  form {
    & label p {
      font-size: 0.875rem; // 14px
      line-height: 1.25rem; // 20px
    }

    & button {
      margin-top: 1rem;
      border-radius: 5px;
      font-size: 1rem;
    }
  }
}

.disabled {
  opacity: 50%;
  pointer-events: none;
}
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
.gap-10 {
  gap: 10px;
}
.gap-20 {
  gap: 20px;
}
.gap-30 {
  gap: 30px;
}
.col-6 {
  grid-column: span 6 / span 6;
}
.col-6-1 {
  @media screen and (min-width: $sm) {
    grid-column: 1 / span 6;
  }
  grid-column: span 12 / span 12;
}
.col-6-2 {
  @media screen and (min-width: $sm) {
    grid-column: 7 / span 6;
  }
  grid-column: span 12 / span 12;
}
.col-8 {
  grid-column: span 8 / span 8;
}
.col-12 {
  grid-column: span 12 / span 12;
}
</style>
