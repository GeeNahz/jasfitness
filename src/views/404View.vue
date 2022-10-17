<template>
  <div class="not-found">
    <h1 class="not-found__title">Oops!!</h1>
    <p class="not-found__header">404 - Page can not be found.</p>
    <p class="not-found__description">
      The page you're looking for might have been removed, had its name
      changed or is temporarily unavailable
    </p>
    <router-link :to="{ name: 'LandingPageHome' }">
      go to homepage
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
$desktop-width: 1920px;
$tablet-width: 1280px;
$mobile-width: 414px;

$colors: (
  'primary': #42c12d,
  'secondary': #fcfcfc,
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

.not-found {
  @include flexCenter(column);
}
</style>
