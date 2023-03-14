<template>
  <div class="member-setup-wrapper">
    <div class="form-wrapper shadow rounded-md overflow-hidden">
      <div class="page__heading">
        <img
          src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/Membership_setup_3_ZN-OlVg9j-.png?updatedAt=1678783886450"
          alt="membership setup"
          class="w-full h-full object-cover"
        />
        <!-- <div class="page__title">
          <div class="logo">
            <img
              src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/JasFitnessCenter_CsBC8awdj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984852958"
              alt="logo"
            />
          </div>
          <div class="page__title-text">
            <p class="main-text">Membership Setup</p>
          </div>
        </div> -->
      </div>

      <div class="form pb-4 px-4">
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
            <!-- email & number -->
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
            <!-- gender & date_of_birth -->
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
                    :max="`${now - 1}-12-31`"
                    autocomplete="on"
                    placeholder="mm/dd/yyyy"
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
            <!-- medical condition -->
            <div class="triple-fields col-12 grid gap-20 items-start">
              <!-- medical conditions -->
              <div class="flex col-6-1 flex-col gap-10">
                <p class="col-12 text-xs">
                  Medical Condition<span class="required-indicator">*</span>
                </p>
                <input
                  type="hidden"
                  name="medical_condition"
                  v-model="inputFields.requiredFields.medical_condition"
                  required
                />
                <AppSearchableDropdown
                  :contents="appendIndexAsId({ array: medicalConditionsList })"
                  title="Select medical condition"
                  customFieldPlaceholder="Other conditions"
                  @selectedItem="AddItem"
                />
              </div>
              <!-- consent field -->
              <div
                class="col-6-2 gap-10 flex items-center justify-center md:mt-6"
                for="consent"
              >
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  v-model="inputFields.notRequired.consent"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 max-width max-height"
                />
                <label
                  for="consent"
                  class="whitespace-wrap w-full ml-1 text-[10px] md:text-xs font-medium dark-gray dark:text-gray-300"
                >
                  I agree to allow my medical condition to be shared with an
                  instructor
                  <!-- <span class="text-red-400">*</span> -->
                </label>
              </div>
              <!-- chips -->
              <div
                v-if="chipItemsDisplay.length > 0"
                class="chips col-12 flex flex-wrap"
              >
                <AppChip
                  v-for="chip in chipItemsDisplay"
                  :key="chip.id"
                  :chipElement="chip"
                  @remove="removeChip"
                />
              </div>
            </div>
            <label class="col-12 grid gap-10" for="goal">
              <p class="col-12">
                Goal<span class="required-indicator">*</span>
              </p>
              <div class="form-input col-12">
                <div class="logo">
                  <AppIconTargetAccount />
                </div>
                <input
                  type="text"
                  name="goal"
                  id="goal"
                  v-model="inputFields.requiredFields.goal"
                  placeholder="Goals keep us motivated. What's yours"
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
          <!-- <div class="referral grid gap-20">
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
          </div> -->
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
  </div>
</template>

<script setup>
import { reactive, computed, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { validation } from '@/composables/validation.js'
import EmailService from '@/services/EmailServices/EmailService'

import AppChip from '@/components/AppChip.vue'
import AppSearchableDropdown from '@/components/AppSearchableDropdown.vue'
import AppIconAccount from '@/components/AppIconAccount.vue'
import AppIconEmail from '@/components/AppIconEmail.vue'
import AppIconPhone from '@/components/AppIconPhone.vue'
import AppIconGender from '@/components/AppIconGender.vue'
import AppIconPlan from '@/components/AppIconPlan.vue'
// import AppIconAccountMultiplePlus from '@/components/AppIconAccountMultiplePlus.vue'
import AppIconSettingOutline from '@/components/AppIconSettingOutline.vue'
import AppIconAt from '@/components/AppIconAt.vue'
import AppIconBriefcase from '@/components/AppIconBriefcase.vue'
import AppIconMapMarker from '@/components/AppIconMapMarker.vue'
import AppIconTargetAccount from '@/components/icons/AppIconTargetAccount.vue'

// import AppIconMedicationOutline from '@/components/icons/AppIconMedicationOutline.vue'
const medicalConditionsList = ref([])
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
    medical_condition: '',
    goal: ''
  },
  notRequired: { referral: '', middleName: '', consent: false }
})

function appendIndexAsId({ array = [] }) {
  const newArray = []
  if (array.length < 1) return
  for (let element in array) {
    newArray.push({ id: element, content: array[element] })
  }
  return newArray
}
function removeChip(chipId) {
  for (let index = 0; index < chipItemsDisplay.value.length; index++) {
    if (chipItemsDisplay.value[index].id === chipId) {
      chipItemsDisplay.value.splice(index, 1)
    }
  }
}
function AddItemToArray({ newItem, array = [] }) {
  for (let item of array) {
    if (item.id === newItem.id) return
  }
  array.push(newItem)
}
function AddItem(newItem) {
  AddItemToArray({
    newItem,
    array: chipItemsDisplay.value
  })
}

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

function serialisedMedicalCondition() {
  const arr = []
  for (let element of chipItemsDisplay.value) {
    arr.push(element.content)
  }
  return arr.join(';')
}

const chipItemsDisplay = ref([])
watch(
  chipItemsDisplay,
  () => {
    inputFields.requiredFields.medical_condition = serialisedMedicalCondition()
  },
  { deep: true }
)

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
    goal: inputFields.requiredFields.goal,
    medical_condition: inputFields.requiredFields.medical_condition,
    medical_consent: inputFields.notRequired.consent,
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
      for (let err in error.response.data.errors) {
        store.dispatch('landingpage/warning', {
          message: error.response.data.errors[err].detail
        })
      }
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
const now = ref()
onMounted(async () => {
  try {
    const res = await EmailService.medical_conditions_list()
    for (let condition of res.data) {
      medicalConditionsList.value.push(condition.name)
    }
  } catch (error) {
    store.dispatch('landingpage/error', {
      message: 'Something went wrong. Please refresh the page to try again.'
    })
  }

  now.value = new Date().getFullYear()
  // console.log(now.getFullYear())
})
</script>

<style scoped>
/* mobile device */
.member-setup-wrapper {
  padding: 2rem;
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
  justify-content: flex-start;
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
  height: 150px;
  text-align: start;

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
  & label {
    &.dark-gray {
      color: #888;
    }
  }
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

    &.max-width {
      width: max-content;
    }
    &.max-height {
      height: max-content;
    }
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
  margin: 0.8rem 0 3rem 0;
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
  .page__heading {
    height: 200px;
  }
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
.col-1 {
  grid-column: span 1 / span 1;
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
.col-11 {
  grid-column: span 11 / span 11;
}
.col-12 {
  grid-column: span 12 / span 12;
}
</style>
