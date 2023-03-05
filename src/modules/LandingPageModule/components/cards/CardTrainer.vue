<template>
  <div class="trainer-card grid place-content-start">
    <div class="trainer-image col-4"></div>
    <div class="card-body trainer-card-body p-2">
      <p class="card-trainer-name pb-1 medium-text-18 text-start">
        {{ trainer.name }}
      </p>
      <p class="card-trainer-details regular-text-12 text-start">
        {{
          trainer.description.length > 100
            ? trainer.description.substring(0, 100) + '...'
            : trainer.description
        }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  trainer: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.trainer-card {
  width: 350px;
  max-height: 120px;
  border: 1px solid #555555;
  border-radius: 8px;
  overflow: hidden;

  & .trainer-image {
    width: 100%;
    height: 100%;
    background: #aaa;
  }
  & .trainer-card-body {
    grid-column: 5 / span 7;

    width: 100%;
    height: 100%;
  }
}

.regular-text-12 {
  font-weight: 400;
  font-size: 12px;
}
.medium-text-18 {
  font-weight: 500;
  font-size: 18px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}
.col-4 {
  grid-column: span 4 / span 4;
}
</style>
