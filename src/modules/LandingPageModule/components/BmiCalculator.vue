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
          <!-- <keep-alive>
            <component is=""></component>
          </keep-alive> -->

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
      displayBmiModal: false,
      emptyField: false,
      data: {
        height: '',
        weight: '',
        heightUnit: 'cm',
        weightUnit: 'kg',
        bmi: '',
        fitnessAdvice: '',
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
      let newWeight = this.data.weight
      let newHeight = this.data.height

      if (newWeight === '' || newHeight === '') {
        this.showWarning()
      } else {
        if (this.data.heightUnit === 'cm') {
          newHeight = this.data.height * 0.01
        }
        if (this.data.heightUnit === 'in') {
          newHeight = this.data.height * 0.0254
        }
        if (this.data.weightUnit === 'lb') {
          newWeight = this.data.weight * 0.453592
        }

        this.data.bmi = newWeight / (newHeight * newHeight)
        this.data.bmi = Math.round((this.data.bmi + Number.EPSILON) * 100) / 100

        // check if isChild is true
        if (this.data.isChild) {
          if (this.data.ageRange === '<5') {
            if (this.data.bmi > 18) {
              this.data.fitnessAdvice = 'You are obesed'
            } else if (this.data.bmi > 17) {
              this.data.fitnessAdvice =
                'You are overweighed and risk being obesed'
            } else if (this.data.bmi >= 14 && this.data.bmi < 17) {
              this.data.fitnessAdvice = 'You are at a healthy range'
            } else if (this.data.bmi < 14) {
              this.data.fitnessAdvice = 'You are underweighed'
            }
          } else if (this.data.ageRange === '5-10') {
            if (this.data.bmi > 18) {
              this.data.fitnessAdvice = 'You are obesed'
            } else if (this.data.bmi > 19 && this.data.bmi < 22) {
              this.data.fitnessAdvice = 'You are overweighed'
            } else if (
              (this.data.bmi > 13 && this.data.bmi < 18) ||
              this.data.bmi > 32
            ) {
              this.data.fitnessAdvice = 'You are at a healthy range'
            } else if (this.data.bmi < 13) {
              this.data.fitnessAdvice = 'You are underweighed'
            }
          } else if (this.data.ageRange === '11-19') {
            if (this.data.bmi > 31) {
              this.data.fitnessAdvice = 'You are obesed'
            } else if (this.data.bmi >= 23 && this.data.bmi <= 31) {
              this.data.fitnessAdvice = 'You are overweighed'
            } else if (this.data.bmi >= 14 && this.data.bmi < 23) {
              this.data.fitnessAdvice = 'You are at a healthy range'
            } else if (this.data.bmi < 14) {
              this.data.fitnessAdvice = 'You are underweighed'
            }
          }
        } else {
          // make advice for adult
          if (this.data.ageRange === '20-44') {
            if (this.data.bmi > 17.29 && this.data.bmi <= 22.59) {
              this.data.fitnessAdvice = 'You are underweighed'
            } else if (this.data.bmi > 22.59 && this.data.bmi <= 26.19) {
              this.data.fitnessAdvice = 'You are at a healthy range'
            } else if (this.data.bmi > 26.19 && this.data.bmi <= 29.84) {
              this.data.fitnessAdvice = 'You are overweighed'
            } else if (this.data.bmi > 29.84) {
              this.data.fitnessAdvice = 'You are obesed'
            }
          } else if (this.data.ageRange === '45-64') {
            if (this.data.bmi < 18.5) {
              this.data.fitnessAdvice = 'You are underweighed'
            } else if (this.data.bmi >= 18.5 && this.data.bmi <= 24.9) {
              this.data.fitnessAdvice = 'You are at a healthy range'
            } else if (this.data.bmi > 24.9 && this.data.bmi <= 30) {
              this.data.fitnessAdvice = 'You are overweighed'
            } else if (this.data.bmi > 30) {
              this.data.fitnessAdvice = 'You are obesed'
            }
          } else if (this.data.ageRange === '>64') {
            if (this.data.bmi < 20) {
              this.data.fitnessAdvice = 'You are underweighed'
            } else if (this.data.bmi >= 20 && this.data.bmi < 25) {
              this.data.fitnessAdvice = 'You are at a healthy range'
            } else if (this.data.bmi >= 25 && this.data.bmi <= 30) {
              this.data.fitnessAdvice = 'You are overweighed'
            } else if (this.data.bmi > 30) {
              this.data.fitnessAdvice = 'You are obesed'
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
      this.data.height = ''
      this.data.weight = ''
      this.data.fitnessAdvice = ''
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
