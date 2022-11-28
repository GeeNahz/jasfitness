<template>
  <div class="">
    <div class="community__container">
      <div class="section__title__container">
        <div class="section__title">
          <div class="highlight"></div>
          <h4 class="title left font-inter">Meet Our Community</h4>
        </div>
      </div>
      <div class="main">
        <div class="gallery">
          <div v-for="image in communityImages" :key="image.id" class="img">
            <img class="gallery__image" :src="image.imageUrl" />
          </div>
        </div>
      </div>
      <AppCarousel class="hidden" :images="communityImages" />
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheFooter from '@/components/TheFooter.vue'
import AppCarousel from '@/components/AppCarousel.vue'

const communityImages = ref([
  {
    id: 1,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/about_us/community-hero_1_-BpZ1f4gA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669410667351'
  },
  {
    id: 2,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/about_us/who-we-are_1_jar6EnJJp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669410666154'
  },
  {
    id: 3,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/about_us/contact-us_uZo-WP5Ac.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669410665675'
  },
  {
    id: 4,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/feellove_5EIs7sCWK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984853920'
  },
  {
    id: 5,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/about_us/community-hero_1_-BpZ1f4gA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669410667351'
  },
  {
    id: 6,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/about_us/community-hero_1_-BpZ1f4gA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669410667351'
  },
  {
    id: 7,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/about_us/who-we-are_1_jar6EnJJp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669410666154'
  },
  {
    id: 8,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/about_us/contact-us_uZo-WP5Ac.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669410665675'
  },
  {
    id: 9,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/feellove_5EIs7sCWK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984853920'
  },
  {
    id: 10,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/about_us/community-hero_1_-BpZ1f4gA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669410667351'
  },
  {
    id: 11,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/about_us/community-hero_1_-BpZ1f4gA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669410667351'
  },
  {
    id: 12,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/about_us/who-we-are_1_jar6EnJJp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669410666154'
  },
  {
    id: 13,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/about_us/contact-us_uZo-WP5Ac.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669410665675'
  },
  {
    id: 14,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/feellove_5EIs7sCWK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984853920'
  },
  {
    id: 15,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/about_us/community-hero_1_-BpZ1f4gA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669410667351'
  }
])
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/base';

.section__title__container {
  display: flex;
  justify-content: center;
}
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

  @include responsive('mobile-width') {
    padding: 0.5rem 1.25rem;
    margin-top: 0.8rem;

    & .title {
      font-size: font-size('large');
    }
  }
}

/** beginning of container styles */
.community__container {
  padding: 3rem 2rem;
  padding-top: 6rem;
  height: 100%;
  width: 100%;

  @include responsive('mobile-width') {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

.main {
  position: relative;
  height: 100vh;
  width: 100%;

  @include responsive('mobile-width') {
    height: 100%;
  }
}
.main .gallery {
  position: relative;
  height: 100%;
  width: 90%;
  margin: auto;
  padding: 45px 0;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 0.3rem;
  grid-auto-flow: dense;

  @include responsive('mobile-landscape-width') {
    grid-template-columns: repeat(3, auto);
  }
  @include responsive('mobile-width') {
    display: block;
    padding: 20px 0;
  }
}

.main .gallery .img {
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 0.2rem;

  @include responsive('mobile-width') {
    display: block;
    width: 100%;
    height: max-content;
    margin: 0.2rem 0;
  }
}

.main .gallery .img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform: scale(1.01);
  filter: brightness(0.5) grayscale(100);
  transition: 0.4s ease-in-out;

  @include responsive('mobile-width') {
    filter: brightness(1) grayscale(0);
  }
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
  grid-row-start: span 2;
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
