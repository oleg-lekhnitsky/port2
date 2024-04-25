<template>

  <!-- <div>
    <h1>Hello</h1>
  </div> -->

  <div class="wrapper"
    style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; flex-direction: column; padding: 60px 12px;">

    <ImageWithPixelatedAppearance src="/img/1.png" alt="Discover Nuxt 3" />

    <ImageWithPixelatedAppearance src="/img/13.png" alt="Discover Nuxt 3" />

    <ImageWithPixelatedAppearance src="/img/3.png" alt="Discover Nuxt 3" />

    <ImageWithPixelatedAppearance src="/img/4.png" alt="Discover Nuxt 3" />

    <ImageWithPixelatedAppearance src="/img/5.png" alt="Discover Nuxt 3" />

    <ImageWithPixelatedAppearance src="/img/19.png" alt="Discover Nuxt 3" />

    <ImageWithPixelatedAppearance src="/img/22.png" alt="Discover Nuxt 3" />

    <ImageWithPixelatedAppearance src="/img/8.png" alt="Discover Nuxt 3" />

  </div>

</template>

<script setup lang="ts">
// import CustomImageTrailEffectBlock from "~/components/CustomImageTrailEffectBlock.vue";
// import ImageWithPixelatedAppearance from "~/components/ImageWithPixelatedAppearance.vue";
// import GalleryContainer from "~/components/GalleryContainer.vue";
// import OriginalImageTrailEffectBlock from "~/components/OriginalImageTrailEffectBlock.vue";

const imageUrls = [...Array(8)].map(
  (_, index) => `/trail-effect-pictures/${index + 1}.jpg`
);
</script>

<style lang="scss">




</style>
