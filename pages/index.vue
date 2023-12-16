<template>
  <div>
    <h1>Hello</h1>
  </div>
  <div class="imageTrailEffectBlockContainer">
    <CustomImageTrailEffectBlock :image-urls="imageUrls" />
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
  <div class="temporaryGallerySection">
    <div class="temporaryGalleryContainer">
      <GalleryContainer>
        <div style="background-color: #f0f">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          accusamus ipsam soluta modi corporis minus vero nihil enim vitae,
          reprehenderit expedita. Fugit cumque recusandae pariatur dicta.
          Mollitia ullam at quibusdam!
        </div>
        <video autoplay muted loop playsinline pip="false">
          <source
            src="https://ray024.ru/storage/WCMbAXdIJHHglQpQ8V4i9fDz6ZmnmH8J2MSBzDGF.mp4"
            type="video/mp4"
          />
        </video>
        <NuxtImg src="/img/2.png" alt="Discover Nuxt 3" />
        <NuxtImg src="/img/3.png" alt="Discover Nuxt 3" />
        <NuxtImg src="/img/4.png" alt="Discover Nuxt 3" />
      </GalleryContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomImageTrailEffectBlock from "~/components/CustomImageTrailEffectBlock.vue";
import ImageWithPixelatedAppearance from "~/components/ImageWithPixelatedAppearance.vue";
import GalleryContainer from "~/components/GalleryContainer.vue";
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

.temporaryGallerySection {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  background: #fff;
}

.temporaryGalleryContainer {
  height: 500px;
  width: 700px;

  @media screen and (max-width: 800px) {
    height: 100%;
    width: 100%;
  }
}
</style>
