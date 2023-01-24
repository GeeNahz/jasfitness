<template>
  <div class="result-container">
    <div
      class="title-text text-3xl font-semibold font-inter mx-auto mb-16 w-max"
    >
      <p v-if="wizard.sentEmail">Result Sent!</p>
      <p v-else>Here's Your Result</p>
    </div>
    <div class="result-display text-5xl">
      <p>{{ wizard.bmi }}</p>
    </div>
    <div class="visual-display">
      <div class="color-guages">
        <div class="color-guage bg-[#f30908]"></div>
        <div class="color-guage bg-[#ff591a]"></div>
        <div class="color-guage bg-[#ff8a07]"></div>
        <div class="color-guage bg-[#ffc902]"></div>
        <div class="color-guage bg-[#88e53f]"></div>
        <div class="color-guage bg-[#06b0fe]"></div>
      </div>
      <div class="color-guage-needle">
        <div class="triangle-up" :class="weightClass"></div>
      </div>
      <div class="color-codes">
        <div class="color-code">
          <div class="color bg-[#06b0fe]"></div>
          <p class="range">&lt; 18.5</p>
          <p class="category">Underweight</p>
        </div>
        <div class="color-code">
          <div class="color bg-[#88e53f]"></div>
          <p class="range">18.5 - 24.9</p>
          <p class="category">Normal</p>
        </div>
        <div class="color-code">
          <div class="color bg-[#ffc902]"></div>
          <p class="range">25 - 29.9</p>
          <p class="category">Overweight</p>
        </div>
        <div class="color-code">
          <div class="color bg-[#ff8a07]"></div>
          <p class="range">30 - 34.9</p>
          <p class="category">Obese Type I</p>
        </div>
        <div class="color-code">
          <div class="color bg-[#ff591a]"></div>
          <p class="range">35 - 39.9</p>
          <p class="category">Obese Type II</p>
        </div>
        <div class="color-code">
          <div class="color bg-[#f30908]"></div>
          <p class="range">40 &gt;</p>
          <p class="category">Obese Type III</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref } from 'vue'

defineComponent({
  name: 'BmiCalculatorWeight'
})

const props = defineProps({
  wizard: {
    type: Object
  }
})

const weightClass = ref('')
if (props.wizard.bmi < 18.5) {
  weightClass.value = 'underweight'
} else if (props.wizard.bmi >= 18.5 && props.wizard.bmi <= 24.9) {
  weightClass.value = 'normal'
} else if (props.wizard.bmi >= 25 && props.wizard.bmi <= 29.9) {
  weightClass.value = 'overweight'
} else if (props.wizard.bmi >= 30 && props.wizard.bmi <= 34.9) {
  weightClass.value = 'obeset1'
} else if (props.wizard.bmi >= 35 && props.wizard.bmi <= 39.9) {
  weightClass.value = 'obeset2'
} else {
  weightClass.value = 'obeset3'
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/base';

.result-display {
  text-align: center;
  margin: 2rem 0;
  // font-size: font-size('xx-large');
  font-weight: font-weight('semibold');
}
.visual-display {
  display: flex;
  flex-direction: column;

  & .color-guage-needle {
    display: block;
    position: relative;
    width: 100%;
    margin-bottom: 4rem;
    & .triangle-up {
      position: absolute;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 16px solid black;
    }
  }
}
.color-guages {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  height: max-content;
  width: max-content;
  margin: 1rem auto 0 auto;

  @include responsive('mobile-width') {
    width: 280px;
    gap: 0.3rem;
  }

  & .color-guage {
    position: relative;
    height: 2.5rem;
    width: 3rem;

    @include responsive('mobile-width') {
      height: 2rem;
      width: 2.5rem;
    }

    &::before,
    &::after {
      position: absolute;
      content: '';
      background-color: inherit;
      width: 90%;
      height: 100%;
      border-radius: 50%;
    }
    &::before {
      right: 55%;
    }
    &::after {
      left: 55%;
    }
  }
}

.color-codes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 4rem;
  row-gap: 2rem;

  @include responsive('mobile-width') {
    column-gap: 1.1rem;
  }
  & .color-code {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    & .color {
      height: 0.8rem;
      width: 0.8rem;
      border-radius: 50%;
    }
    & .range,
    & .category {
      white-space: nowrap;
      font-size: font-size('small');
      font-weight: font-weight('semibold');
    }
    // & .category {}
  }
}

// animation classes
.underweight {
  animation-name: underweight;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
}
.normal {
  animation-name: normal;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
}
.overweight {
  animation-name: overweight;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
}
.obeset1 {
  animation-name: obeset1;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
}
.obeset2 {
  animation-name: obeset2;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
}
.obeset3 {
  animation-name: obeset3;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
}

@keyframes underweight {
  0% {
    left: 0;
  }
  100% {
    left: 30px;
  }
}
@keyframes normal {
  0% {
    left: 0;
  }
  100% {
    left: 85px;
  }
}
@keyframes overweight {
  0% {
    left: 0;
  }
  100% {
    left: 140px;
  }
}
@keyframes obeset1 {
  0% {
    left: 0;
  }
  100% {
    left: 193px;
  }
}
@keyframes obeset2 {
  0% {
    left: 0;
  }
  100% {
    left: 244px;
  }
}
@keyframes obeset3 {
  0% {
    left: 0;
  }
  100% {
    left: 320px;
  }
}
</style>
