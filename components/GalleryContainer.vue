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
      <div class="galleryContainer__pagination">
        <span
          v-for="(_, index) in normalizedChildren"
          :class="{
            galleryContainer__paginationBullet: true,
            galleryContainer__paginationBullet_active:
              index === activeItemIndexRef,
          }"
        ></span>
      </div>
    </div>
    <div v-if="screenType === 'touch'" class="parentSizeElement">
      <Swiper
        class="parentSizeElement"
        :pagination="{
          clickable: true,
          horizontalClass: 'galleryContainer__pagination',
          bulletClass: 'galleryContainer__paginationBullet',
          bulletActiveClass: 'galleryContainer__paginationBullet_active',
        }"
        :modules="[Pagination]"
      >
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
import { Pagination } from "swiper/modules";

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
  overflow: hidden;

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

.galleryContainer__pagination {
  position: absolute;
  left: 0 !important;
  top: 0 !important;
  bottom: auto !important;
  padding: 3px;
  display: flex;
  justify-content: center;
  gap: 3px;
  width: 100%;
  box-sizing: border-box;

  @media (any-hover: hover), (hover: hover) and (pointer: fine) {
    & {
      opacity: 0;
      transition: 0.1s ease;
      pointer-events: none;
    }

    .galleryContainer:hover & {
      opacity: 1;
    }
  }
}

.galleryContainer__paginationBullet {
  background: #fff;
  opacity: 0.5;
  height: 3px;
  width: 100%;
  transition: 0.1s ease;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 15px;
    transform: translateY(-50%);
  }

  &_active {
    opacity: 1;
  }
}
</style>
