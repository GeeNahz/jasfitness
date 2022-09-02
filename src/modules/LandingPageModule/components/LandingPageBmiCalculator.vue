<template>
  <div class="flex gap-4 w-full rounded h-max bg-white p-1">
    <table class="w-full flex-1 table-auto">
      <tbody>
        <tr class="bg-yellow-600">
          <td class="text-4xl text-white py-2 px-3 rounded-t">
            BMI Calculator
          </td>
        </tr>
        <tr class="bg-gray-200 rounded-b">
          <td v-if="displayBmiModal" class="py-5 px-3">
            <button
              @click="goBack"
              class="mb-3 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white font-semibold rounded px-3 py-1"
            >
              Go Back
            </button>
            <p class="items">Your BMI is {{ bmi }}</p>
            <p class="items">Your diagnosis says: {{ fitnessAdvice }}</p>
          </td>
          <td v-else class="py-5 px-3">
            <div class="items space-y-4">
              <div class="height-items space-x-4">
                <label
                  >Height:
                  <input
                    class="w-24 lg:w-44 px-2 py-1 rounded"
                    placeholder="Height"
                    type="number"
                    v-model="height"
                /></label>
                <select
                  class="bg-white px-2 py-1 text-sm font-semibold rounded"
                  v-model="heightUnit"
                >
                  <option value="cm">Centimeter</option>
                  <option value="in">Inches</option>
                </select>
              </div>
              <div class="weight-items space-x-4">
                <label
                  >Weight:
                  <input
                    class="w-24 lg:w-44 px-2 py-1 rounded"
                    placeholder="Weight"
                    type="number"
                    v-model="weight"
                /></label>
                <select
                  class="bg-white px-2 py-1 text-sm font-semibold rounded"
                  v-model="weightUnit"
                >
                  <option value="kg">Kilogram</option>
                  <option value="lb">Pounds</option>
                </select>
              </div>
              <div class="age-items space-x-4">
                <div v-if="isChild" class="child">
                  <label class="space-x-3"
                    >Age:
                    <label>
                      <input type="radio" value="<5" v-model="ageRange" />
                      &lt; 5
                    </label>
                    <label>
                      <input type="radio" value="5-10" v-model="ageRange" />
                      5 - 10
                    </label>
                    <label>
                      <input type="radio" value="11-19" v-model="ageRange" />
                      11 - 19
                    </label>
                  </label>
                </div>
                <div v-else class="adult">
                  <label class="space-x-3"
                    >Age:
                    <label>
                      <input type="radio" value="20-44" v-model="ageRange" />
                      20 - 44
                    </label>
                    <label>
                      <input type="radio" value="45-64" v-model="ageRange" />
                      45 - 64
                    </label>
                    <label>
                      <input type="radio" value=">64" v-model="ageRange" />
                      &gt; 64
                    </label>
                  </label>
                </div>
              </div>
              <div v-if="emptyField" class="relative">
                <AlertComponent
                  message="Fill up all fields to calculate your BMI"
                  alertType="warning"
                  class="absolute top-16"
                />
              </div>
            </div>
            <div class="buttons space-x-5 mt-4">
              <button
                @click="calculateBMI"
                class="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
              >
                Calculate
              </button>
              <button
                @click="clearValues"
                class="hover:bg-yellow-500 active:bg-yellow-700 text-yellow-600 font-semibold hover:text-white py-2 px-4 border-2 border-yellow-500 hover:border-transparent rounded"
              >
                Reset
              </button>
            </div>
            <div class="float-right space-x-3 md:space-y-3 checks">
              <div class="inline check-gender">
                <select
                  v-model="gender"
                  class="bg-white px-2 py-1 text-sm font-semibold rounded"
                >
                  <option value="m">Male</option>
                  <option value="f">Female</option>
                </select>
              </div>
              <label>
                <input type="checkbox" v-model="isChild" />
                Are you a child?
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="hidden lg:inline bmi-image">
      <img
        :src="
          isChild
            ? 'https://www.bcm.edu/bodycomplab/BMIapp/BMIexpl.png'
            : 'https://surgicaltechie.com/wp-content/uploads/2019/03/bmi-300x225.jpg'
        "
        alt="bmi image"
        class="w-full h-full"
      />
    </div>
  </div>
</template>

<script>
import AlertComponent from '@/components/AlertComponent.vue'
export default {
  name: 'BmiCalculatorComponent',
  components: { AlertComponent },
  data() {
    return {
      height: '',
      weight: '',
      heightUnit: 'cm',
      weightUnit: 'kg',
      bmi: '',
      fitnessAdvice: '',
      displayBmiModal: false,
      emptyField: false,
      ageRange: '',
      isChild: false,
      gender: 'm'
    }
  },
  methods: {
    showWarning() {
      this.emptyField = true
      setTimeout(() => {
        this.emptyField = false
      }, 3000)
    },
    calculateBMI() {
      let newWeight = this.weight
      let newHeight = this.height

      if (newWeight === '' || newHeight === '') {
        this.showWarning()
      } else {
        if (this.heightUnit === 'cm') {
          newHeight = this.height * 0.01
        }
        if (this.heightUnit === 'in') {
          newHeight = this.height * 0.0254
        }
        if (this.weightUnit === 'lb') {
          newWeight = this.weight * 0.453592
        }

        this.bmi = newWeight / (newHeight * newHeight)
        this.bmi = Math.round((this.bmi + Number.EPSILON) * 100) / 100

        // check if isChild is true
        if (this.isChild) {
          if (this.ageRange === '<5') {
            if (this.bmi > 18) {
              this.fitnessAdvice = 'You are obesed'
            } else if (this.bmi > 17) {
              this.fitnessAdvice = 'You are overweighed and risk being obesed'
            } else if (this.bmi >= 14 && this.bmi < 17) {
              this.fitnessAdvice = 'You are at a healthy range'
            } else if (this.bmi < 14) {
              this.fitnessAdvice = 'You are underweighed'
            }
          } else if (this.ageRange === '5-10') {
            if (this.bmi > 18) {
              this.fitnessAdvice = 'You are obesed'
            } else if (this.bmi > 19 && this.bmi < 22) {
              this.fitnessAdvice = 'You are overweighed'
            } else if ((this.bmi > 13 && this.bmi < 18) || this.bmi > 32) {
              this.fitnessAdvice = 'You are at a healthy range'
            } else if (this.bmi < 13) {
              this.fitnessAdvice = 'You are underweighed'
            }
          } else if (this.ageRange === '11-19') {
            if (this.bmi > 31) {
              this.fitnessAdvice = 'You are obesed'
            } else if (this.bmi >= 23 && this.bmi <= 31) {
              this.fitnessAdvice = 'You are overweighed'
            } else if (this.bmi >= 14 && this.bmi < 23) {
              this.fitnessAdvice = 'You are at a healthy range'
            } else if (this.bmi < 14) {
              this.fitnessAdvice = 'You are underweighed'
            }
          }
        } else {
          // make advice for adult
          if (this.ageRange === '20-44') {
            if (this.bmi > 17.29 && this.bmi <= 22.59) {
              this.fitnessAdvice = 'You are underweighed'
            } else if (this.bmi > 22.59 && this.bmi <= 26.19) {
              this.fitnessAdvice = 'You are at a healthy range'
            } else if (this.bmi > 26.19 && this.bmi <= 29.84) {
              this.fitnessAdvice = 'You are overweighed'
            } else if (this.bmi > 29.84) {
              this.fitnessAdvice = 'You are obesed'
            }
          } else if (this.ageRange === '45-64') {
            if (this.bmi < 18.5) {
              this.fitnessAdvice = 'You are underweighed'
            } else if (this.bmi >= 18.5 && this.bmi <= 24.9) {
              this.fitnessAdvice = 'You are at a healthy range'
            } else if (this.bmi > 24.9 && this.bmi <= 30) {
              this.fitnessAdvice = 'You are overweighed'
            } else if (this.bmi > 30) {
              this.fitnessAdvice = 'You are obesed'
            }
          } else if (this.ageRange === '>64') {
            if (this.bmi < 20) {
              this.fitnessAdvice = 'You are underweighed'
            } else if (this.bmi >= 20 && this.bmi < 25) {
              this.fitnessAdvice = 'You are at a healthy range'
            } else if (this.bmi >= 25 && this.bmi <= 30) {
              this.fitnessAdvice = 'You are overweighed'
            } else if (this.bmi > 30) {
              this.fitnessAdvice = 'You are obesed'
            }
          }
        }

        this.toggleResult()
      }
    },
    goBack() {
      this.clearValues()
      this.toggleResult()
    },
    clearValues() {
      this.height = ''
      this.weight = ''
      this.fitnessAdvice = ''
    },
    toggleResult() {
      this.displayBmiModal = !this.displayBmiModal
    }
  }
}
</script>
