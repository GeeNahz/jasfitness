<template>
  <div class="about__container">
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class=""
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          class="active"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          class=""
        ></button>
      </div>
      <div class="carousel-inner">
        <!-- <div class="carousel-item">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#777"></rect>
          </svg>

          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p>
                Some representative placeholder content for the first slide of
                the carousel.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#">Sign up today</a>
              </p>
            </div>
          </div>
        </div> -->
        <div
          v-for="data in carouselData"
          :key="data.id"
          class="carousel-item"
          :class="[data.id === 2 && 'active']"
        >
          <img
            :src="data.imageUrl"
            alt="image"
            class="bd-placeholder-img h-full w-full"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </div>
        <!-- <div class="carousel-item">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#777"></rect>
          </svg>

          <div class="container">
            <div class="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#">Browse gallery</a>
              </p>
            </div>
          </div>
        </div> -->
      </div>
      <!-- carousel captions -->
      <div class="container">
        <div class="carousel-caption font-inter capitalize">
          <h1>about jas fitness</h1>
          <p class="font-light">
            Some representative placeholder content for the carousel.
          </p>
          <!-- <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p> -->
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- <section class="about__container__heading font-inter">
      <h1>About Jas Fitness</h1>
    </section> -->
    <section class="about__container__body">
      <div class="about">
        <h3 class="font-inter">Jas Fitness</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          dolore obcaecati dolorum id ullam unde corrupti eligendi, quae sequi
          ad exercitationem officia quisquam quos fugiat repellat sint iure
          veritatis voluptas eum voluptate nisi a. Dolores eum id eius,
          voluptate atque minima et libero eligendi quam quaerat mollitia natus
          architecto unde?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          cumque cupiditate iste velit quas tempore ratione blanditiis quisquam,
          culpa debitis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          itaque sunt? Culpa adipisci voluptatibus repudiandae voluptate
          corporis quibusdam ipsa provident consectetur nulla vero iste ex
          facere reiciendis asperiores, obcaecati est fuga sapiente esse labore
          deserunt cumque natus eaque amet! Quas vel aspernatur iste vero magnam
          inventore earum repellendus velit, eos eligendi qui iusto ex unde
          deleniti! Quia dolor deleniti possimus.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          beatae fugiat magni qui nisi quidem saepe voluptatum aspernatur
          dolorem porro iusto, exercitationem illo labore. Distinctio eaque eius
          delectus ex maiores facilis id eveniet natus inventore illum cum,
          officia architecto iure! Architecto, nemo. Quaerat rem fuga,
          perferendis dolorum itaque placeat, esse accusantium laborum, libero
          pariatur laudantium nostrum ut adipisci optio aliquam velit! Fugiat
          sed non placeat accusamus voluptatum, reiciendis, cum soluta,
          asperiores tempore distinctio facilis animi eaque? Ad consequatur
          error quae similique eaque voluptatum nulla qui. Dolorem voluptas eos
          soluta debitis, praesentium dignissimos quibusdam amet, voluptate
          tempore optio saepe perferendis facilis quaerat sed. Incidunt quae,
          ipsum earum aliquid quibusdam, ad possimus ab esse repudiandae quas
          doloribus maxime aspernatur soluta aliquam ut consectetur in porro,
          quasi praesentium culpa dolores rem vero voluptates quia. Libero,
          esse. Nostrum error labore facilis itaque, eos saepe minus, obcaecati
          consequatur laborum delectus odio voluptatum accusamus officia ut
          magni inventore? Odit, cupiditate ducimus labore eligendi eum
          praesentium ab possimus, atque reiciendis accusantium maxime dolore
          quaerat aliquid consequuntur qui earum quas nostrum repudiandae magni
          dicta iusto vel molestiae voluptates? Sint, quo iure. Repellendus
          cumque numquam, illum ducimus temporibus sed. Esse, odio. Rerum
          maiores, molestiae quas est itaque temporibus quo!
        </p>
      </div>
    </section>
    <TheFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheFooter from '@/components/TheFooter.vue'
import { useMeta } from 'vue-meta'

useMeta({
  title: 'About Us'
})

const carouselData = ref([
  {
    id: 1,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/Advertisement_Pictures/About_us_image_3_jkJr_-x50?ik-sdk-version=javascript-1.4.3&updatedAt=1668851486621'
  },
  {
    id: 2,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/Advertisement_Pictures/About_us_image_1_IxX2rOG-Y?ik-sdk-version=javascript-1.4.3&updatedAt=1668851565209'
  },
  {
    id: 3,
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/Advertisement_Pictures/About_us_image_2_J9fVn9zH3?ik-sdk-version=javascript-1.4.3&updatedAt=1668851425109'
  }
])
</script>

<style lang="scss">
@import '../../../assets/styles/base';

/* bootstrap STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

/* body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
} */

/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  position: relative;
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  top: 35%;
  z-index: 10;

  & h1 {
    font-weight: font-weight(bold);
    font-size: 98px;
  }
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 50rem;
  position: relative;
  color: color(primary);
}

.carousel-item::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
}

/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}
/* rtl:end:ignore */

/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
/* rtl:begin:remove */
.featurette-heading {
  letter-spacing: -0.05rem;
}

/* rtl:end:remove */

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

/* ------- custom styles ---------*/

.about__container {
  width: 100%;
  height: 100%;
  padding-top: 6rem;

  #{&}__heading {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #909090;
    background: center/cover no-repeat
      url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80');
    color: color(primary);
    font-size: 98px;
    font-weight: font-weight(bold);
    width: 100%;
    height: 50rem;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        rgba(color(primary), 0.3),
        rgba(color(accent), 0.2)
      );
    }

    & h1 {
      z-index: 1;
    }
  }

  #{&}__body {
    & .about {
      @include container {
        text-align: justify;
        color: color(text);
        padding-bottom: 2rem;
      }
      & h3 {
        text-align: center;
        margin: 2rem 0;
        color: #1f1f1f;
        font-size: font-size(x-large);
        font-weight: font-weight(bold);
      }
    }
  }
}
</style>
