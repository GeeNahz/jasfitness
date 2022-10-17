<template>
  <Navbar />
  <div class="not-found font-sans">
    <h1 class="not-found__title">Oops!</h1>
    <p class="not-found__header">404 - Page can not be found</p>
    <p class="not-found__description">
      The page you're looking for might have been removed, had its name changed
      or is temporarily unavailable
    </p>
    <router-link :to="{ name: 'LandingPageHome' }">
      go to homepage
    </router-link>
  </div>
</template>

<script setup>
import Navbar from '@/components/TheNavbar.vue'
</script>

<style lang="scss" scoped>
$desktop-width: 1920px;
$tablet-width: 1280px;
$mobile-width: 414px;

$colors: (
  'primary': #70ae6e,
  'secondary': #fcfcfc,
  'accent': #d4a20d,
  'text': #303030
);
$font-weights: (
  'regular': 400,
  'medium': 500,
  'semibold': 600,
  'bold': 700
);
$font-sizes: (
  'xx-small': 9px,
  'x-small': 10px,
  'small': 13px,
  'medium': 16px,
  'large': 18px,
  'x-large': 24px,
  'xx-large': 32px
);

@function color($color) {
  @return map-get($colors, $color);
}
@function font-weight($weight) {
  @return map-get($font-weights, $weight);
}
@function font-size($size) {
  @return map-get($font-sizes, $size);
}

@mixin flexCenter($direction: row) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-items: center;
}
@mixin transition-ease {
  transition: all 0.2s ease-in-out;
}
@mixin mobile-device {
  @media screen and (max-width: #{$mobile-width}) {
    @content;
  }
}
@mixin tablet-device {
  @media screen and (max-width: #{$table-width}) {
    @content;
  }
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}
.not-found {
  height: 100vh;
  width: 100%;
  line-height: 2rem;

  @include flexCenter(column);
  @include mobile-device() {
    line-height: 1.5rem;
  }

  #{&}__title {
    font-size: 200px;
    color: color(primary);
    font-weight: font-weight(bold);
    margin-bottom: 1rem;

    @include mobile-device {
      font-size: 100px;
      font-weight: font-weight(semibold);
    }
  }

  #{&}__header {
    text-transform: uppercase;
    font-size: font-size(x-large);
    font-weight: font-weight(semibold);

    @include mobile-device {
      font-size: font-size(large);
      font-weight: font-weight(medium);
    }
  }

  #{&}__description {
    line-height: 1rem;
    text-align: center;
    font-size: font-size(small);
    width: 25rem;
    margin: 1rem auto;

    @include mobile-device {
      line-height: 0.8rem;
      font-size: font-size(x-small);
      width: 15rem;
    }
  }

  & a {
    padding: 0.4rem 1rem;
    text-transform: uppercase;
    color: color(secondary);
    font-weight: font-weight(semibold);
    background-color: color(accent) / 0.9;
    border-radius: 999px;
    box-shadow: 0 0.1rem 4px rgba(color(accent), 0.5),
      0 0.3rem 10px rgba(color(accent), 0.2);

    @include transition-ease;

    &:hover {
      background-color: color(accent);
    }
  }
}
</style>
