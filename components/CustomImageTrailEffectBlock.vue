<template>
  <canvas class="effectCanvas" ref="canvasRef"></canvas>
</template>

<script setup lang="ts">
import {
  initTrailEffect,
  type IInitTrailEffectProps,
} from "~/utils/imageTrailEffect";

const props = defineProps({
  imageUrls: Array,
  isImagesDisappear: Boolean,
});

const canvasRef = ref<HTMLCanvasElement | null>(null);

const { handleMount, handleUnmount } = await initTrailEffect(
  canvasRef,
  props as IInitTrailEffectProps
);

onMounted(() => {
  if (canvasRef.value) {
    handleMount();
  }
});

onUnmounted(handleUnmount);
</script>

<style lang="scss">
$canvas-background: #fff;

.effectCanvas {
  width: 100%;
  height: 100%;
  background: $canvas-background;
}
</style>
