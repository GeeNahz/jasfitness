<template>
  <div class="enquiry-wrapper text-[#303030]">
    <div class="enquiry">
      <div class="hero">
        <img
          src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/enquiryform-img_Q-zSz9onFe.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678495929655"
          alt="hero-image"
        />
        <!-- <div class="hero-title">Enquiry Form</div> -->
      </div>
      <div class="enquiry-container 300 h-full">
        <form class="h-full pt-" @submit.prevent="submitHandler">
          <div class="form__input">
            <p class="form__input-label">Name</p>
            <div class="form__input-wrapper">
              <div class="form__input-icon"></div>
              <input
                type="text"
                name="name"
                id="name"
                v-model="formValues.name"
                placeholder="John Doe"
                class="form__input-field"
                required
              />
            </div>
          </div>
          <div class="form__input">
            <p class="form__input-label">Email</p>
            <div class="form__input-wrapper">
              <div class="form__input-icon"></div>
              <input
                type="email"
                name="email"
                id="email"
                v-model="formValues.email"
                placeholder="johnDoe@email.com"
                class="form__input-field"
                required
              />
            </div>
          </div>
          <div class="form__input">
            <p class="form__input-label">Phone number</p>
            <div class="form__input-wrapper">
              <div class="form__input-icon"></div>
              <input
                type="tel"
                name="phone"
                id="phone"
                v-model="formValues.phone_number1"
                placeholder="+234 705 6463 6300"
                class="form__input-field"
                required
              />
            </div>
          </div>
          <button
            :class="{ 'disabled ': !isValidInputs || status.isLoading }"
            type="submit"
          >
            {{ status.isLoading ? 'Please wait...' : 'Submit' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'

import { validation } from '@/composables/validation.js'

import EmailService from '@/services/EmailServices/EmailService.js'

const formValues = reactive({
  name: '',
  email: '',
  phone_number1: ''
})

const status = reactive({
  isLoading: false
})

const { useIsValidTextInputs, useIsValidNumericInputs } = validation()

const isValidInputs = computed(() => {
  return (
    useIsValidTextInputs([formValues.name, formValues.email]) &&
    useIsValidNumericInputs([formValues.phone_number1]) &&
    !status.isLoading
  )
})

const store = useStore()
async function submitHandler() {
  console.log('form submitted', formValues)
  try {
    let res = await EmailService.enquiry(formValues)
    console.log(res)
    if (res.status === 201) {
      store.dispatch('landingpage/success', {
        message: 'Your details were successfully created.'
      })
    }
    if (res.status === 200) {
      store.dispatch('landingpage/warning', {
        message: 'This record already exists.'
      })
    }
  } catch (error) {
    if (error.response?.status === 400) {
      store.dispatch('landingpage/error', {
        message:
          'An error occured while trying to submit your data. Please try again.'
      })
    }
    console.log(error)
  }
}
</script>

<style scoped>
.enquiry-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;

  padding: 1rem;
  width: 100%;
  min-height: 100vh;
  margin-inline: auto;
}
.enquiry {
  height: 500px;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1),
    0 0 10px 3px rgba(150, 150, 150, 0.2);
}
.enquiry-container {
  padding: 1rem;
}
@media screen and (min-width: 640px) {
  .enquiry-wrapper {
    padding: 5rem;
    width: min(100% - 30px, 960px);
    margin-inline: auto;
  }
  .enquiry {
    height: max-content;
  }
  .enquiry-container {
    padding: 4rem;
  }
}
</style>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 100px;
  background: #ececec;

  display: grid;
  grid-template-areas: 'main';

  #{&}-title {
    display: inline;
    grid-area: 'main';
    font-weight: 700;
    font-size: 1.25rem; // 20px
    line-height: 1.75rem; // 28px
  }
  & img {
    grid-area: 'main';
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.form__input {
  padding: 0.5rem 0;
  width: 100;

  #{&}-label {
    color: #555;
    font-size: 0.75rem; // 12px
    line-height: 1rem; // 16px
  }
  #{&}-wrapper {
    height: 2.25rem; // 40px
    border: 1px solid #aaa;
    border-radius: 0.5rem;
    overflow: hidden;

    & input {
      height: 100%;
      width: 100%;
      padding: 0 0.5rem;
      font-size: 0.875rem; // 14px
      line-height: 1.25rem; // 20px
      font-weight: 500;

      outline: none;
    }
  }
}

form {
  & button {
    margin-top: 2rem;
    margin-bottom: 3rem;
    width: 100%;
    border-radius: 0.5rem;
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

@media screen and (min-width: 640px) {
  .hero {
    height: 200px;

    #{&}-title {
      font-size: 1.5rem; // 24px
      line-height: 2rem; // 32px
    }
  }
  .form__input {
    #{&}-label {
      font-size: 0.875rem; // 14px
      line-height: 1.25rem; // 20px
    }
    #{&}-wrapper {
      height: 2.5rem; // 40px

      & input {
        font-size: 1rem; // 16px
        line-height: 1.5rem; // 24px
      }
    }
  }
}

.disabled {
  opacity: 50%;
  pointer-events: none;
}
</style>
