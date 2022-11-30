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
      <!-- <AppCarousel class="hidden" :images="communityImages" /> -->
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheFooter from '@/components/TheFooter.vue'
// import AppCarousel from '@/components/AppCarousel.vue'

const communityImages = ref([
  {
    id: 1,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3903_2ICUBbG027.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833580505'
  },
  {
    id: 2,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3792_qiloWYibr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833579540'
  },
  {
    id: 3,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3844_PA6iZS8eA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833578466'
  },
  {
    id: 4,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3795_ALwh18GQZ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833574418'
  },
  {
    id: 5,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3860_1bxclV8lo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833572784'
  },
  {
    id: 6,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3765_A34kaEi6u.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833572526'
  },
  {
    id: 7,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3783_5ANPJiVwF.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833565786'
  },
  {
    id: 8,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3754_Bo3-383Gy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833561865'
  },
  {
    id: 9,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3647_kJf7R6QQq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833561159'
  },
  {
    id: 10,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3744_HmkvIJWk7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833548022'
  },
  {
    id: 11,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3714_0K2fgne7B.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833541831'
  },
  {
    id: 12,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3658_ntkjMiv-W.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833531966'
  },
  {
    id: 13,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3648_Ww_y8pBC8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833542238'
  },
  {
    id: 14,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3690_WpW-V1KOF.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833531021'
  },
  {
    id: 15,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3669_E2o8wl0Ig.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833524904'
  },
  {
    id: 16,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3708_A8aet1Lf6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833524221'
  },
  {
    id: 17,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3662_9cmdjpkKU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833522118'
  },
  {
    id: 18,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3688__F82GC0ah.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833517481'
  },
  {
    id: 19,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3697_HeT31w918.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833512200'
  },
  {
    id: 20,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/our_community/_MG_3711_9mek81lM4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669833533515'
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
  height: 100%;
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
