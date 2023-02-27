<template>
  <div class="container">
    <div class="wrapper grid font-inter">
      <div class="hero grid col-12">
        <div class="image">
          <img src="https://" alt="image" />
        </div>
        <div class="content">
          <p class="main-title">
            hit your fitness goals in our state-of-the-art gym facility with
            super amazing coaches
          </p>
          <p class="subtitle-1">
            Quickly build your chest, abs, legs, shoulder, back and entire
            fitness health like a pro with the help of our coaches
          </p>
          <button class="cta-btn">book yourself a free call today</button>
          <p class="subtitle-2">
            The experience is mesmerizing and if you love to be fit on purpose
            and not just pump and sweat in the gym... you'll love it at
            JasFitness gym center.
          </p>
        </div>
      </div>
      <!-- why jasfitness -->
      <section class="jasfitness grid col-12">
        <p class="section-title col-10-center">Why JasFitness?</p>
        <div class="cards col-10-center">
          <div class="card card-1">
            <div class="card-body">
              <div class="img"></div>
              <p class="card-title">Your're not Alone</p>
              <p class="card-text">
                Consistency over motivation. You don't have to face your fitness
                goals alone. Let's do it TOGETHER as we've got you covered.
              </p>
            </div>
          </div>
          <div class="card card-2">
            <div class="card-body">
              <div class="img"></div>
              <p class="card-title">Get Inspired</p>
              <p class="card-text">
                Network and grow with like minds. Meet FitFam with similar goals
                who are committed to a life of healthy living and more.
              </p>
            </div>
          </div>
          <div class="card card-3">
            <div class="card-body">
              <div class="img"></div>
              <p class="card-title">Result Oriented</p>
              <p class="card-text">
                Regardless of your fitness level, we’ve got the equipment and
                professionals to get you the results you desire without breaking
                your back
              </p>
            </div>
          </div>
          <div class="card card-4">
            <div class="card-body">
              <div class="img"></div>
              <p class="card-title">Accessibility</p>
              <p class="card-text">
                Easy accessibility to all kinds of vehicles to ease your
                movement and a wonderful parking space... Get your vehicle
                cleaned up while you go hit those goals of yours inside the gym
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- equipment -->
      <section class="equipment col-12 grid py-28 bg-white">
        <div class="section-title col-10-center">World Class Equipment</div>
        <div class="equipments col-10-center">
          <div class="equipment-item"></div>
          <div class="equipment-item"></div>
          <div class="equipment-item"></div>
        </div>
        <p class="regular-text-16 col-10-center text-center">
          We've built the best facility with the right equipment for a variety
          of fitness needs
        </p>
        <button class="cta-btn cta-btn-equipment">
          Book Yourself a free call today
        </button>
        <div class="divider col-10-center">
          <hr />
        </div>
        <div class="points col-10-center">
          <div class="point">
            <div class="point-image"></div>
            <p class="point-text regular-text-14">Want to keep fit?</p>
          </div>
          <div class="point">
            <div class="point-image"></div>
            <p class="point-text regular-text-14">Want to build muscle?</p>
          </div>
          <div class="point">
            <div class="point-image"></div>
            <p class="point-text regular-text-14">Want to shed fat?</p>
          </div>
          <div class="point">
            <div class="point-image"></div>
            <p class="point-text regular-text-14">
              Want to stay fit and outlive the average lifespan?
            </p>
          </div>
          <div class="point">
            <div class="point-image"></div>
            <p class="point-text regular-text-14">
              Want to keep healthy with gym classes that keep you in shape with
              a stronger body and supercharged energy?
            </p>
          </div>
        </div>
        <p class="medium-text-24 col-10-center text-center">
          JasFitness is the best place to achieve all that
        </p>
        <p class="regular-text-14 col-10-center text-center">
          We don't just hit the gym and throw in the towel. We have tailored
          sessions for each individual's need that's why we have a variety of
          coaches that have a cumulative experience of fitness coaching of about
          <span class="stress text-amber-500 font-semibold">50</span> years
        </p>
      </section>
      <!-- your trainers -->
      <section class="trainers col-12 grid py-28">
        <p class="section-title col-10-center">Meet Your Trainers</p>
        <div class="cards col-10-center">
          <div class="trainer-card grid place-content-center">
            <div class="trainer-image col-4"></div>
            <div class="card-body trainer-card-body p-2 w-full">
              <p class="card-trainer-name pb-1 medium-text-18">
                Trainer's name
              </p>
              <p class="card-trainer-details regular-text-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate dicta eos, exercitationem veniam velit excepturi?
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- our community -->
      <section class="community col-12 grid bg-[#fff0d4] py-28">
        <p class="section-title col-12">We Care About Our Community</p>
      </section>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  padding-top: 6rem;
  padding-bottom: 6rem;
  background: #f5f5f5;
  color: #303030;
  min-height: 100vh;
}
.wrapper {
  width: min(100% - 30px, 960px);
  margin-inline: auto;
}
.hero {
  padding-top: 6rem;
}
.image {
  grid-column: 2 / span 3;

  height: 340px;
  width: 255px;
  background: #aaa;
}
.image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.content {
  grid-column: 6 / span 6;
}
.main-title {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 32px;
}
.subtitle-1 {
  font-weight: 500;
  font-size: 14px;
}
.subtitle-2 {
  font-weight: 500;
  font-size: 12px;
}
.cta-btn {
  border-radius: 5px;
  background: #ffb628;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  font-weight: 500;
  text-transform: capitalize;
}

.section-title {
  text-align: center;
  font-weight: 500;
  font-size: 32px;
}
.cards {
  display: flex;
  justify-content: space-between;
}
.card {
  text-align: center;
  /* width: 171px; */
  width: 23%;
  border: none;
}
.card-body .img {
  height: 24px;
  width: 24px;
  background: #aaa;
  margin-bottom: 1rem;
}
.card-title {
  font-weight: 600;
  font-size: 14px;
}
.card-text {
  font-weight: 400;
  font-size: 12px;
  color: #555555;
}
.equipments {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
.equipment-item {
  width: 260px;
  height: 180px;
  background: #aaa;
}
.points {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}
.point {
  display: flex;
  gap: 20px;
  align-items: center;
}
.point:is(:nth-child(2), :nth-child(3)) {
  margin-left: 20px;
}
.point-image {
  height: 24px;
  width: 24px;
  border-radius: 999px;
  background: #1f1f1f;
}
.cta-btn-equipment {
  grid-column: 5 / span 4;
}
.trainer-card {
  width: 420px;
  height: 120px;
  border: 1px solid #555555;
  border-radius: 8px;
  overflow: hidden;
}
.trainer-image {
  width: 100%;
  height: 100%;
  background: #aaa;
}
.trainer-card-body {
  grid-column: 5 / span 7;
}

.regular-text-12 {
  font-weight: 400;
  font-size: 12px;
}
.regular-text-14 {
  font-weight: 400;
  font-size: 14px;
}
.regular-text-16 {
  font-weight: 400;
  font-size: 16px;
}
.medium-text-18 {
  font-weight: 500;
  font-size: 18px;
}
.medium-text-24 {
  font-weight: 500;
  font-size: 24px;
}
/* grid system */
.col-10-center {
  grid-column: 2 / span 10;
}
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}
.col-1 {
  grid-column: span 1 / span 1;
}
.col-2 {
  grid-column: span 2 / span 2;
}
.col-3 {
  grid-column: span 3 / span 3;
}
.col-4 {
  grid-column: span 4 / span 4;
}
.col-5 {
  grid-column: span 5 / span 5;
}
.col-6 {
  grid-column: span 6 / span 6;
}
.col-7 {
  grid-column: span 7 / span 7;
}
.col-8 {
  grid-column: span 8 / span 8;
}
.col-9 {
  grid-column: span 9 / span 9;
}
.col-10 {
  grid-column: span 10 / span 10;
}
.col-11 {
  grid-column: span 11 / span 11;
}
.col-12 {
  grid-column: span 12 / span 12;
}
</style>
