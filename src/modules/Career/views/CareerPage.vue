<script setup lang="ts">
const careerJob = {
  id: 1,
  title: "Content creator",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolor incidunt et magnam nam provident commodi vero deserunt officia cupiditate.",
  location: "Abuja, Nigeria",
  type: "Full time",
};
</script>

<template>
  <div class="career-wrapper container">
    <header class="flex justify-between items-start mb-5">
      <div class="title">
        <p class="font-bold text-4xl mb-5">{{ careerJob.title }}</p>

        <div class="info flex gap-4">
          <div class="type text-sm font-medium text-gray-400">
            <p>{{ careerJob.type }}</p>
          </div>
          <div class="location text-sm font-medium text-gray-400">
            <p>{{ careerJob.location }}</p>
          </div>
        </div>
      </div>

      <div class="link">
        <router-link :to="{ name: 'apply', params: { id: careerJob.id } }">Apply now</router-link>
      </div>
    </header>

    <div class="desc text-xs mb-10">
      <p>{{ careerJob.description }}</p>
    </div>

    <div class="you-do">
      <div class="section-title">
        <p>What you'll do:</p>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error quisquam dolores reiciendis dolorem delectus beatae veniam veritatis, ipsam odit.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, expedita.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit earum aperiam!</li>
        </ul>
      </div>
    </div>

    <div class="looking-for">
      <div class="section-title">
        <p>What we're looking for:</p>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error quisquam dolores reiciendis dolorem delectus beatae veniam veritatis, ipsam odit.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, expedita.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit earum aperiam!</li>
        </ul>
      </div>
    </div>

    <div class="haves">
      <div class="section-title">
        <p>Nice to haves:</p>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error quisquam dolores reiciendis dolorem delectus beatae veniam veritatis, ipsam odit.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, expedita.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit earum aperiam!</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-title {
  @apply mb-10;

  & p {
    @apply font-medium text-xl mb-2;
  }
  
  & ul {
    @apply ml-5;

    & li {
      @apply text-xs mb-2;
    }
  }
}
</style>