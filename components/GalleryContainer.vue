<template>
  <div class="galleryContainer parentSizeElement" ref="containerRef">
    <div v-if="screenType === 'mouse'" class="parentSizeElement">
      <div
        v-for="(element, index) in normalizedChildren"
        :key="index"
        :class="{
          parentSizeElement: true,
          galleryContainer__desktopHoverElement: true,
          galleryContainer__desktopHoverElement_active:
            index === activeItemIndexRef,
        }"
      >
        <component :is="element" class="parentSizeElement"></component>
      </div>
    </div>
    <div v-if="screenType === 'touch'" class="parentSizeElement">
      <Swiper class="parentSizeElement">
        <SwiperSlide
          v-for="(element, index) in normalizedChildren"
          :key="index"
          class="parentSizeElement"
        >
          <component :is="element" class="parentSizeElement"></component>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { initGalleryContainer } from "~/utils/galleryContainer";
import { screenType } from "~/utils/screenMediaQuery";
import { Swiper, SwiperSlide } from "swiper/vue";

const slots = useSlots();

const normalizedChildren =
  slots.default?.().filter((child) => child.type !== "text") ?? [];
const childrenCount = normalizedChildren.length;

const containerRef = ref<HTMLDivElement | null>(null);

const { handleMount, handleUnmount, activeItemIndexRef } = initGalleryContainer(
  {
    containerRef,
    childrenCount,
  }
);

onMounted(handleMount);
onUnmounted(handleUnmount);
</script>

<style lang="scss">
.galleryContainer {
  position: relative;
  user-select: none;

  img,
  video {
    object-fit: cover;
    pointer-events: none;
  }
}

.galleryContainer__desktopHoverElement {
  position: absolute;
  top: 0;
  left: 0;
  // #ElementTransition здесь можно изменить переходы слайдов 👇
  transition: 0s ease;

  &:not(&_active) {
    opacity: 0;
  }
}
</style>
