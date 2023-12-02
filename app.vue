<template>
  <NuxtLayout>
    <!-- <NuxtLoadingIndicator /> -->
    <NuxtPage />
  </NuxtLayout>
  <!-- <ContentDoc /> -->
</template>

<script setup lang="ts">
import { addCustomVhProperty } from "./utils/addCustomVhProperty";

onMounted(() => {
  addCustomVhProperty();
});
</script>

<style>
html {
  --vh: 1vh;
}
</style>
