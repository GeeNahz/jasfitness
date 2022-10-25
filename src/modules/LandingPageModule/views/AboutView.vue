<template>
  <div class="about__container">
    <section class="about__container__heading font-inter">
      <h1>About Us</h1>
    </section>
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
import TheFooter from '@/components/TheFooter.vue'
import { useMeta } from 'vue-meta'

useMeta({
  title: 'About Us'
})
</script>

<style lang="scss">
@import '../../../assets/styles/base';

.about__container {
  width: 100%;
  height: 100%;

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
