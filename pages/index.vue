<template>
  <div>
    <h1>Hello</h1>
  </div>
  <div class="imageTrailEffectBlockContainer">
    <OriginalImageTrailEffectBlock />
  </div>
  <div class="wrapper">
    <LazyNuxtImg src="/img/1.png" format="webp" alt="Discover Nuxt 3" />
    <img src="/img/2.png" alt="Discover Nuxt 3" />
    <img src="/img/3.png" alt="Discover Nuxt 3" />
    <img src="/img/4.png" alt="Discover Nuxt 3" />
    <img src="/img/5.png" alt="Discover Nuxt 3" />
    <img src="/img/6.png" alt="Discover Nuxt 3" />
    <img src="/img/7.png" alt="Discover Nuxt 3" />
    <img src="/img/8.png" alt="Discover Nuxt 3" />
  </div>
</template>

<script setup lang="ts">
import OriginalImageTrailEffectBlock from "~/components/OriginalImageTrailEffectBlock.vue";
</script>

<style lang="scss">
.imageTrailEffectBlockContainer {
  height: calc(100 * var(--vh));
  width: 100vw;
}
</style>
