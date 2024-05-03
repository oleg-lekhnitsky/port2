<template>

  <NuxtLayout>

    <!-- <NuxtLoadingIndicator /> -->
    <NuxtPage />
  </NuxtLayout>
  <!-- <ContentDoc /> -->
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { addCustomVhProperty } from "./utils/addCustomVhProperty";
import { initScreenMediaQuery } from "~/utils/screenMediaQuery";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Swiper, Lazy } from "swiper";

// Swiper.use([Lazy]);

// gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  addCustomVhProperty();
  initScreenMediaQuery();
});


</script>

<style>
html {
  --vh: 1vh;
}
</style>
