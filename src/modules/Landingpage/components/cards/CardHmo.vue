<script setup lang="ts">
defineProps(['details'])

// function require0(link: string) {
//   const image = require(link)
//   return image
// }
</script>
<template>
  <div class="wrapper font-inter">
    <div class="content">
      <div class="content__image">
        <img
          :src="details.imageUrl"
          :alt="details.id"
        />
      </div>
      <div class="content__texts">
        <!-- <div class="header">{{ details.name }}</div> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../../../assets/styles/base';

.wrapper {
  width: 80%;
  height: 100%;
  display: inline-block;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  text-align: left;
  box-shadow: 0px 15px 30px -15px rgba(50, 50, 50, 0.2);

  @include responsive('md') {
    width: 95%;
  }
}

.content {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  #{&}__texts,
  #{&}__image {
    grid-column-start: 1;
    grid-row-start: 1;
  }

  #{&}__texts {
    background-color: #ffffff30;
    padding-left: 20px;
    padding-bottom: 20px;
    height: 100%;
    display: grid;
    place-content: center;

    & .header {
      display: block;
      margin-top: 24px;
      margin-bottom: 8px;
      color: #000;
      font-weight: 800;
      font-size: 32px;

      @include responsive('lg') {
        font-size: 20px;
      }
    }
  }

  #{&}__image {
    width: 100%;
    height: 100%;
    padding: 20px;
    margin-bottom: 16px;

    & img {
      // filter: blur(4px);
      width: 100%;
      aspect-ratio: 6/2;
      object-fit: contain;
      mix-blend-mode: color-burn;

      @include responsive('lg') {
        // filter: blur(2px);
        aspect-ratio: 5/3;
      }
    }
  }
}
</style>
