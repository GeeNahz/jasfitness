<template>
  <table class="shadow-lg w-72 md:w-96 h-96 rounded-lg">
    <tbody>
      <tr>
        <td class="pt-4 px-4 bg-white">
          <table class="text-start">
            <tbody>
              <tr>
                <td class="flex items-center justify-center">
                  <input
                    type="text"
                    placeholder="Height"
                    v-model="height"
                    class="mb-2 px-2 w-32 border rounded"
                  />
                </td>
                <td class="mb-5">
                  <select
                    v-model="heightUnit"
                    class="ml-5 p-1 rounded-full mb-2 bg-white border-2 border-black"
                  >
                    <option value="m" selected>Metres</option>
                    <option value="cm">Centimetres</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Weight"
                    v-model.number="weight"
                    class="px-2 w-32 border rounded"
                  />
                </td>
                <td>
                  <select
                    v-model.number="weightUnit"
                    class="ml-5 p-1 rounded-full bg-white border-2 border-black"
                  >
                    <option value="kg" selected>Kilograms</option>
                    <option value="lb">Pounds</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr class="text-start bg-white">
        <td class="space-x-3 py-3 px-4">
          <button
            @click="calculateBMI"
            class="px-4 py-2 rounded-full bg-red-400 hover:bg-[#ff8566] active:bg-[#ff7c5c] text-white"
          >
            Calculate
          </button>
          <button
            @click="clearValues"
            class="px-4 py-2 rounded-full border-2 border-red-400 hover:border-[#eb2f00] hover:text-[#eb2f00] active:text-[#c73e1c] text-red-400"
          >
            Reset
          </button>
        </td>
      </tr>
      <!-- BMI ranges -->
      <tr>
        <td class="px-4 py-3 bg-yellow-200 text-start text-sm">
          <table>
            <tbody>
              <tr class="font-semibold">
                <td>BMI weight ranges</td>
              </tr>
              <tr>
                <td>Less than 18.5 = Underweight</td>
              </tr>
              <tr>
                <td>Between 18.5 - 24.9 = Healthy Weight</td>
              </tr>
              <tr>
                <td>Between 25 - 29.9 = Overweight</td>
              </tr>
              <tr>
                <td>Over 30 = Obese</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'BmiCalculatorComponent',
  components: {},
  data() {
    return {
      height: '',
      weight: '',
      heightUnit: 'm',
      weightUnit: 'kg',
      bmi: ''
    }
  },
  methods: {
    calculateBMI() {
      let newWeight = this.weight
      let newHeight = this.height
      if (this.heightUnit === 'cm') {
        newHeight = this.height * 0.01
      }
      if (this.weightUnit === 'lb') {
        newWeight = this.weight * 0.453592
      }
      this.bmi = newWeight / (newHeight * newHeight)
      console.log(this.bmi)
    },
    clearValues() {
      this.height = ''
      this.weight = ''
    }
  }
}
</script>
