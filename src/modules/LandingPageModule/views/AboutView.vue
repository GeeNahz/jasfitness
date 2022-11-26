<template>
  <div class="about__container">
    <div class="header font-inter">
      <h1>About Jas Fitness</h1>
    </div>
    <div class="main">
      <div class="about__us">
        <div class="section__title">
          <div class="highlight"></div>
          <h4 class="title left font-inter">who we are</h4>
        </div>
        <div class="content">
          <div class="image">
            <img
              src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/about_us/who-we-are_1_jar6EnJJp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669410666154?tr=w-400,h-280,q-30,bl-10"
              alt="about us"
            />
          </div>
          <div class="description">
            <div class="sub__content">
              <h5 class="head">JAS FITNESS CENTER</h5>
              <p class="body">
                Jas Fitness Pent-House Center is seating on a 200sqm with indoor
                and outdoor facilities fully equipped to meet the needs of our
                growing community of over 150 members.
              </p>
            </div>
            <div class="sub__content">
              <h5 class="head">Our mission</h5>
              <p class="body">
                Our mission is to provide an affordable fitness service to
                everyone through our chains of fully equipped gym centers.
              </p>
            </div>
            <div class="sub__content">
              <h5 class="head">Our core values</h5>
              <ul class="body">
                <li>Accountable and reliable support system.</li>
                <li>We listen, we care and we are always there.</li>
                <li>
                  Own your fitness schedule: We are flexible and work with your
                  time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="contact__us">
        <div class="section__title">
          <div class="highlight"></div>
          <h4 class="title right font-inter">We'd Love to hear from you</h4>
        </div>
        <div class="content">
          <div class="card-wrapper">
            <div class="card-title">Contact Us</div>
            <div class="card-form">
              <form>
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Email Address" />
                <textarea placeholder="Tell us more..."></textarea>
                <button
                  class="btn btn-warning text-white text-xl font-semibold font-inter py-2 px-4 w-full"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div class="card-aside">
            <div class="card-aside__overlay"></div>
            <div class="card-aside__content space-y-12">
              <div class="item">
                <h3>PARTNERSHIP</h3>
                <p>
                  Jas fitness is ready to partner with you in providing a safe
                  and and hygienic place for your clients. We look forward to
                  working with you.
                </p>
              </div>
              <hr class="divider" />
              <div class="item">
                <h3>PARTNER WITH US</h3>
                <p>jasfitness.media@gmail.com</p>
                <p>07034644002</p>
              </div>
              <hr class="divider" />
              <div class="item">
                <h3>FOLLOW US</h3>
                <div class="flex gap-3">
                  <div>
                    <a
                      href="https://web.facebook.com/people/Jas-Fitness-Center/100069109021018/"
                      ><img src="@/assets/icons/facebook.svg" alt="f-social"
                    /></a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/jasfitnesscenter/"
                      ><img src="@/assets/icons/instagram.svg" alt="i-social"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="https://www.youtube.com/channel/UC8de7Jb9KDag_JYCW-fsDaA"
                      ><img src="@/assets/icons/youtube.svg" alt="f-social"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="testimonial">
        <div class="section__title">
          <div class="highlight"></div>
          <h4 class="title center font-inter">Our Customers say it best</h4>
        </div>
        <div class="content">
          <ReviewAboutPage
            v-for="(review, i) in reviews"
            :key="i"
            :review="review"
          />
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheFooter from '@/components/TheFooter.vue'
import ReviewAboutPage from '../components/ReviewAboutPage.vue'
import { useMeta } from 'vue-meta'

useMeta({
  title: 'About Us'
})

const reviews = ref([
  {
    name: 'Anna Orefi',
    reviewUrl: 'https://g.co/kgs/HGNLV5',
    imageUrl: '',
    imageAlt: 'A',
    review:
      'Once you stop by Jas Gym. You shall get hooked Excellent Customer Service.',
    stars: 5
  },
  {
    name: 'Afolalu Oluyemisi',
    reviewUrl: 'https://g.co/kgs/kFqo4m',
    imageUrl: '',
    imageAlt: 'A',
    review:
      'Friendly environment and instructors. Most importantly, I really appreciate the checking up on clients.',
    stars: 5
  },
  {
    name: 'Ijeoma Jennifer',
    reviewUrl: 'https://g.co/kgs/DK1KnL',
    imageUrl:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/IjeomaJennifer_2tYEBbcHS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984852584',
    imageAlt: 'I',
    review:
      'Spending my post partum moment @jasfitness is one of the best decision I have made in life. I love what getting 💯💯💯💯',
    stars: 5
  }
])
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/base';

.about__container {
  width: 100%;
  height: 100%;
  padding-top: 6rem;

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 480px));
    gap: 1rem;
    justify-content: center;
  }

  & .header {
    width: 100%;
    height: 40vh;
    position: relative;
    background: center / cover no-repeat #00000090
      url('https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/about_us/community-hero_1_-BpZ1f4gA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669410667351');
    background-blend-mode: overlay;

    & h1 {
      margin: auto;
      transform: translateY(110%);
      width: max-content;
      height: max-content;
      font-size: 64px;
      font-weight: font-weight('semibold');
      color: #fff;
    }
  }

  & .main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, minmax(100px, max-content));
    justify-content: center;
    max-width: 100%;
    width: 984px;
    margin: 0 auto;

    @include responsive('tablet-width') {
      padding-left: 40px;
      padding-right: 40px;
    }

    & .about__us {
      // background-color: #f9f9f9;
      padding: 60px 0;
      height: max-content;

      & .content {
        grid-template-columns: repeat(auto-fit, minmax(100px, 440px));
        & .image {
          // height: 250px;
          & img {
            height: 100%;
            width: 100%;
          }
        }

        & .description {
          width: 100%;
          & .sub__content {
            margin-bottom: 0.5rem;

            & .head {
              font-weight: font-weight('semibold');
            }
            & .body {
              font-weight: font-weight('light');
              font-size: font-size('small');
              color: color('text-secondary');
              line-height: 1.5;
            }
            & ul {
              list-style-type: disc;
              padding-left: 1rem;
            }
          }
        }
      }
    }

    & .contact__us {
      padding: 60px 0;

      & .content {
        gap: 0;
        grid-template-columns: repeat(auto-fit, minmax(100px, max-content));
        overflow: hidden;
        background-color: #fff;
        box-shadow: 0 4px 15px 4px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        padding: 0;

        @include responsive('tablet-width') {
          grid-template-columns: repeat(auto-fit, minmax(100px, 452px));
        }

        & .card-wrapper,
        & .card-aside {
          padding: 64px 65px;
        }
        & .card-wrapper {
          & .card-title {
            font-size: font-size('x-large');
            font-weight: font-weight('semibold');
            text-align: center;
            padding-bottom: 2rem;
          }
          & .card-form form {
            // background-color: #eea;
            & input,
            & textarea {
              width: 100%;
              padding: 1rem;
              margin-bottom: 1rem;
              border-radius: 10px;
              font-size: font-size('small');
              background-color: rgba(223, 222, 222, 0.3);
              color: #363636;
              &::placeholder {
                // font-size: font-size('small');
                color: #999;
              }
            }
            & textarea {
              height: 150px;
            }
          }
        }
        & .card-aside {
          position: relative;
          background: center / cover no-repeat #00000090
            url('https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/about_us/contact-us_uZo-WP5Ac.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669410665675');
          background-blend-mode: overlay;
          & .card-aside__content {
            width: 100%;
            color: #fff;
            & h3 {
              font-size: font-size('large');
              font-weight: font-weight('semibold');
              margin-bottom: 0.5rem;
            }
            & p {
              font-size: font-size('small');
            }
          }
        }
      }
    }

    & .testimonial {
      padding: 60px 0;
      height: max-content;

      & .content {
        @include responsive('tablet-width') {
          grid-template-columns: repeat(auto-fit, minmax(100px, 440px));
        }
      }
    }
  }

  .section__title {
    width: max-content;
    padding: 1rem 2.5rem;
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
}
</style>
