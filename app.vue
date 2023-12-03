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

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  addCustomVhProperty();
});
</script>

<style>
html {
  --vh: 1vh;
}
</style>
