<template>
  <div>
    <h1>Hello</h1>
  </div>
  <div class="imageTrailEffectBlockContainer">
    <CustomImageTrailEffectBlock
      :image-urls="imageUrls"
      :is-images-disappear="true"
    />
    <!-- <OriginalImageTrailEffectBlock /> -->
  </div>
  <div class="wrapper">
    <div class="imageWithPixelatedAppearanceContainer">
      <ImageWithPixelatedAppearance src="/img/1.png" alt="Discover Nuxt 3" />
    </div>
    <div class="imageWithPixelatedAppearanceContainer">
      <ImageWithPixelatedAppearance src="/img/2.png" alt="Discover Nuxt 3" />
    </div>
    <div class="imageWithPixelatedAppearanceContainer">
      <ImageWithPixelatedAppearance src="/img/3.png" alt="Discover Nuxt 3" />
    </div>
    <div class="imageWithPixelatedAppearanceContainer">
      <ImageWithPixelatedAppearance src="/img/4.png" alt="Discover Nuxt 3" />
    </div>
    <div class="imageWithPixelatedAppearanceContainer">
      <ImageWithPixelatedAppearance src="/img/5.png" alt="Discover Nuxt 3" />
    </div>
    <div class="imageWithPixelatedAppearanceContainer">
      <ImageWithPixelatedAppearance src="/img/6.png" alt="Discover Nuxt 3" />
    </div>
    <div class="imageWithPixelatedAppearanceContainer">
      <ImageWithPixelatedAppearance src="/img/7.png" alt="Discover Nuxt 3" />
    </div>
    <div class="imageWithPixelatedAppearanceContainer">
      <ImageWithPixelatedAppearance src="/img/8.png" alt="Discover Nuxt 3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomImageTrailEffectBlock from "~/components/CustomImageTrailEffectBlock.vue";
import ImageWithPixelatedAppearance from "~/components/ImageWithPixelatedAppearance.vue";
// import OriginalImageTrailEffectBlock from "~/components/OriginalImageTrailEffectBlock.vue";

const imageUrls = [...Array(8)].map(
  (_, index) => `/trail-effect-pictures/${index + 1}.jpg`
);
</script>

<style lang="scss">
.imageTrailEffectBlockContainer {
  height: calc(100 * var(--vh));
  width: 100vw;
}

.imageWithPixelatedAppearanceContainer {
  width: 50vw;
  height: 50vw;
}
</style>
