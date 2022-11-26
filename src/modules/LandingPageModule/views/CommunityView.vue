<template>
  <div class="container">
    <div class="community__container">
      <div class="section__title">
        <div class="highlight"></div>
        <h4 class="title left font-inter">Meet Our Community</h4>
      </div>
      <div class="main">
        <div class="gallery">
          <div class="img">
            <img
              class="gallery__image"
              src="https://drive.google.com/uc?id=13XwJrpyzTDG-kzMCpshXlz6vv1EIFScB&export=download"
            />
          </div>
          <div class="img">
            <img
              class="gallery__image"
              src="https://drive.google.com/uc?id=1hPlIRL4eMIyR1oNfcuycOynxOItKBs5w&export=download"
            />
          </div>
          <div class="img">
            <img
              class="gallery__image"
              src="https://drive.google.com/uc?id=1deRnMN-686If-619yisFj1DLgx1qN3WW&export=download"
            />
          </div>
          <div class="img">
            <img
              class="gallery__image"
              src="https://drive.google.com/uc?id=1k9lCcA8DOwB3cHgofaoW4HXCfoolUKLJ&export=download"
            />
          </div>
          <div class="img">
            <img
              class="gallery__image"
              src="https://drive.google.com/uc?id=1O_pyz5VCaGUtozSaM3LTJBMVdv2dhPGC&export=download"
            />
          </div>
          <!-- <div class="img">
                  <img class="gallery__image" src="https://drive.google.com/uc?id=1BQc9sv_M_l28xMUvNabqsDaXD5KGBeWL&export=download">
              </div> -->
          <div class="img">
            <img
              class="gallery__image"
              src="https://drive.google.com/uc?id=1uIpL43dxZBOptwNt8vUxLb1-Ykq1QJAQ&export=download"
            />
          </div>
          <div class="img">
            <img
              class="gallery__image"
              src="https://drive.google.com/uc?id=1lTGIT8uEHI6jJKO628BOhUOmG5YAL4Ru&export=download"
            />
          </div>
          <div class="img">
            <img
              class="gallery__image"
              src="https://drive.google.com/uc?id=1YnlwY2jOydPn5ZO0HSfQ_nYwpFo8ccVM&export=download"
            />
          </div>
          <div class="img">
            <img
              class="gallery__image"
              src="https://drive.google.com/uc?id=1OkYc94czk4fZAYS0MDEOjf4LX_ldfaQ5&export=download"
            />
          </div>
          <div class="img">
            <img
              class="gallery__image"
              src="https://drive.google.com/uc?id=1PmVgqVH79qGy0KISuTwycMlQddu35WFW&export=download"
            />
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import TheFooter from '@/components/TheFooter.vue'
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/base';

.section__title {
  width: max-content;
  padding: 1rem 2.5rem;
  margin-top: 2rem;
  padding-left: 0;
  position: relative;

  & .title {
    font-size: font-size('xx-large');
    font-weight: font-weight('semibold');
  }

  & .highlight {
    width: 70%;
    height: 70%;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    position: absolute;
    border-radius: 0.5rem;
    background-color: #d9d9d980;
  }
}

.title {
  text-transform: capitalize;
}
.title.left {
  text-align: start;
}
.title.center {
  text-align: center;
}
.title.right {
  text-align: end;
}

/** beginning of container styles */
.community__container {
  padding: 3rem 2rem;
  padding-top: 6rem;
  height: 100%;
  width: 100%;
}
.main {
  position: relative;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
}

.main .gallery {
  position: relative;
  height: 100%;
  width: 70%;
  margin: auto;
  padding: 45px 0;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 0.2rem;
  grid-auto-flow: dense;

  @include responsive('tablet-width') {
    width: 100%;
  }
}

.main .gallery .img {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 0.2rem;
  overflow: hidden;
}

.main .gallery .img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform: scale(1.01);
  filter: brightness(0.5) grayscale(100);
  transition: 0.4s ease-in-out;
}

.main .gallery .img:hover img {
  transform: scale(1.08);
  filter: brightness(1) grayscale(0);
}

.main .gallery .img:first-child {
  grid-column-start: span 2;
  grid-row-start: span 2;
}
.main .gallery .img:nth-child(2n + 3) {
  grid-row-start: span 1;
}
.main .gallery .img:nth-child(4n + 5) {
  grid-column-start: span 2;
  grid-row-start: span 2;
}
.main .gallery .img:nth-child(6n + 7) {
  grid-row-start: span 2;
}
.main .gallery .img:nth-child(8n + 9) {
  grid-column-start: span 1;
  grid-row-start: span 1;
}
</style>
