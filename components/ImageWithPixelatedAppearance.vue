<template>
  <div class="container" ref="containerRef">
    <LazyNuxtImg ref="imageRef" class="imageElement" v-bind="props" />
    <canvas ref="canvasRef" class="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import {
  PIXELATED_EFFECT_IMAGE_PROPS,
  initPixelatedAppearanceEffect,
} from "~/utils/pixelatedAppearanceEffect";

const canvasRef = ref<HTMLCanvasElement | null>(null);
const containerRef = ref<HTMLDivElement | null>(null);

const props = defineProps(PIXELATED_EFFECT_IMAGE_PROPS);

const { handleMount, handleUnmount } = initPixelatedAppearanceEffect({
  canvasRef,
  containerRef,
});

onMounted(handleMount);
onUnmounted(handleUnmount);
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}

.container,
.canvas,
.imageElement {
  width: 100%;
  height: 100%;
}

.imageElement,
.canvas {
  position: absolute;
  top: 0;
  left: 0;
}

.canvas {
  pointer-events: none;
}

.imageElement {
  object-fit: cover;
}
</style>
