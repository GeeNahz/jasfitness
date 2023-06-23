<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

import type { CareerPayload } from "../types";
import Service from "@/services/GenericService/Service";

import ArrowReturn from "@/components/icons/ArrowReturn.vue";

const route = useRoute();

const defaultGender = "-- Select gender --";
const careerFormData = ref<CareerPayload>({
  name: "",
  email: "",
  phone_number: "",
  gender: defaultGender,
  address: "",
  cv_link: "",
  career: 1,
});
onMounted(() => {
  careerFormData.value.career = Number(route.params.career_id);
});

const genders = ["male", "female",];

const form = ref<HTMLFormElement>();

function checkValidFields() {
  const isValid = ref<boolean>(true);

  if (!form.value?.checkValidity() || careerFormData.value.gender === defaultGender) {
    isValid.value = false;
  }
  return isValid.value;
}

const isValidFields = ref<boolean>(false);
watch(careerFormData, () => {
  isValidFields.value = checkValidFields();
}, { deep: true, });

async function submitHandler(e: Event) {
  try {
    await Service.career_application(careerFormData.value)
  } catch (error) {
    console.log("Career Application err: ", error);
  }
  console.log("Event: ", e.target);
}
</script>

<template>
  <div class="container px-6 max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
    <div class="mb-3">
      <router-link :to="{ name: 'detail', params: { id: route.params.career_id } }" class="h-fit w-fit text-[#B48B4D] text-sm font-bold transition-colors hover:text-[#e4b164] flex gap-1 items-center">
        <ArrowReturn class="text-lg" />
        <p>Return</p>
      </router-link>
    </div>
    <div
      class="apply-wrapper border rounded-lg p-4 md:p-10 mb-24">
      <div class="form-title text-3xl font-semibold mb-3">
        <h1 class="mb-8">{{ route.params.career_title }}</h1>
      </div>
  
      <form ref="form" @submit.prevent="submitHandler" class="application-form">
        <div class="form-group mb-3">
          <label for="name">Full name <span>*</span></label>
          <input type="text" name="name" id="name" class="form-control" placeholder="Jane Smith" required
            v-model="careerFormData.name" />
        </div>
        <div class="form-group mb-3">
          <label for="email">Email address <span>*</span></label>
          <input type="email" name="email" id="email" class="form-control" placeholder="jane.smith@email.com" required
            v-model="careerFormData.email" />
        </div>
        <div class="form-group mb-3">
          <label for="phone-number">Phone number <span>*</span></label>
          <input type="text" name="phone" id="phone-number" class="form-control" placeholder="+234 567 890 1234" required
            v-model="careerFormData.phone_number" />
        </div>
        <div class="form-group mb-3">
          <label for="gender" class="mr-2">Gender <span>*</span></label>
          <select class="custom-select mr-sm-2 form-control capitalize" name="gender" id="gender"
            v-model="careerFormData.gender" required>
            <option selected>-- Select gender --</option>
            <option v-for="(gender, index) in genders" :key="index" :value="gender">{{ gender }}</option>
          </select>
        </div>
        <div class="form-group mb-3">
          <label for="address">Address <span>*</span></label>
          <input type="text" name="address" id="address" class="form-control" placeholder="Your address" required
            v-model="careerFormData.address" />
        </div>
        <div class="form-group mb-3">
          <label for="cv-link">Link to your CV <span>*</span></label>
          <input type="text" name="cv_link" id="cv-link" class="form-control" aria-describedby="cvLinkHelpBlock"
            v-model="careerFormData.cv_link" placeholder="https://www.google.com/path/to/cv" required>
          <small id="cvLinkHelpBlock" class="form-text text-muted">
            Please provide the link to your CV stored on Google drive.
          </small>
        </div>
  
        <button type="submit"
          class="py-[6px] px-3 w-[174px] transition-colors bg-amber-500 hover:bg-amber-300 focus:bg-amber-300 active:bg-amber-400 rounded text-gray-50 disabled:bg-opacity-50"
          :disabled="!isValidFields">
          Apply now
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-group {
  & input,
  & select {
    background-color: #eee;
  }
  span {
    color: red;
  }
}
</style>