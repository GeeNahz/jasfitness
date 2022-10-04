<template>
  <div class="flex md:w-96 h-96 rounded bg-white p-1">
    <!-- calc -->
    <div class="w-full h-full">
      <div class="bg-[#fe902d] h-[15%] text-center w-full">
        <p class="text-4xl text-white py-2 px-3 rounded-t">BMI Calculator</p>
      </div>
      <div class="rounded-b h-[85%]">
        <div
          class="main-contents h-[75%] mb-1 flex justify-center items-center"
        >
          <BmiCalculatorHeight
            v-if="currentComponent === 0"
            @update="setBmiData"
            :wizard="data"
          />
          <BmiCalculatorWeight
            v-if="currentComponent === 1"
            @update="setBmiData"
            :wizard="data"
          />
          <BmiCalculatorAge
            v-if="currentComponent === 2"
            @update="setBmiData"
            :wizard="data"
          />
        </div>
        <div class="nav-btns">
          <button v-if="!firstForm" @click="back" class="btns float-left">
            Back
          </button>
          <button
            v-if="lastForm"
            @click="calculateBMI"
            class="btns float-right"
          >
            Calculate
          </button>
          <button v-else @click="next" class="btns float-right">Next</button>
        </div>
        <pre>{{ data }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import BmiCalculatorHeight from '../components/BmiCalculatorHeight.vue'
import BmiCalculatorWeight from '../components/BmiCalculatorWeight.vue'
import BmiCalculatorAge from '../components/BmiCalculatorAge.vue'
export default {
  name: 'BmiCalculatorComponent',
  components: {
    BmiCalculatorHeight,
    BmiCalculatorWeight,
    BmiCalculatorAge
  },
  data() {
    return {
      forms: ['BmiCalculatorHeight', 'BmiCalculatorWeight', 'BmiCalculatorAge'],
      currentComponent: 0,
      data: {
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
    }
  },
  methods: {
    back() {
      this.currentComponent -= 1
    },
    next() {
      this.currentComponent += 1
    },
    setBmiData(bmiData) {
      if (bmiData.isValid) {
        Object.assign(this.data, bmiData.data)
      }
    },
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
  },
  computed: {
    firstForm() {
      return this.currentComponent === 0
    },
    lastForm() {
      return this.currentComponent === this.forms.length - 1
    }
  }
}
</script>

<style scoped>
.nav-btns {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
.btns {
  background-color: #fe902d;
  color: #fff;
  border-radius: 0.6rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
}
</style>
