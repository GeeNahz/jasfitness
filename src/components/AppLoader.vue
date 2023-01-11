<template>
  <div class="loader-wrapper grid place-items-center h-full ml-3">
    <svg class="w-[5vw] h-[5vw]" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" />
    </svg>
  </div>
</template>

<style scoped>
.loader-wrapper {
  position: relative;
}
.loader-wrapper::before {
  content: '';
  background-color: rgba(0, 0, 0, 0.09);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: blur(7px);
}

@keyframes spin {
  100% {
    rotate: 360deg;
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

svg {
  animation: spin 1s linear infinite;
}
circle {
  fill: none;
  stroke: #e7a833;
  stroke-width: 3px;
  stroke-linecap: round;
  animation: dash 2.5s ease-in-out infinite;
}
</style>
