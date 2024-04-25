<template>
  <div class="effectCanvasContainer"></div>
</template>

<script setup lang="ts">
onMounted(() => {
  const p5Script = document.createElement("script");
  const sketchTrailScript = document.createElement("script");
  const animatorsScript = document.createElement("script");
  const updateScript = document.createElement("script");
  const imageTrailerScript = document.createElement("script");

  p5Script.setAttribute("src", "/scripts/p5.min.js");
  sketchTrailScript.setAttribute("src", "/scripts/sketch-trail.js");
  animatorsScript.setAttribute("src", "/scripts/animators.js");
  updateScript.setAttribute("src", "/scripts/update.js");
  imageTrailerScript.setAttribute("src", "/scripts/imageTrailer.js");

  document.body.appendChild(p5Script);
  document.body.appendChild(sketchTrailScript);
  document.body.appendChild(animatorsScript);
  document.body.appendChild(updateScript);
  document.body.appendChild(imageTrailerScript);

  window.addEventListener("traileffectloaded", () => {
    const p5Canvas = document.querySelector("canvas.p5Canvas");
    const canvasContainer = document.querySelector(".effectCanvasContainer");

    if (p5Canvas && p5Canvas.parentNode && canvasContainer) {
      p5Canvas.parentNode.removeChild(p5Canvas);
      canvasContainer.appendChild(p5Canvas);
    }
  });
});
</script>

<style lang="scss">
$canvas-background: #fff;

.effectCanvasContainer {
  object-fit: fill;
  width: min-content;
  height: min-content;
  background: $canvas-background;
}
</style>
