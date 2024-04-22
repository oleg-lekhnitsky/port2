<template>
  <!-- <AppHeader></AppHeader> -->
  <div class="display-button"></div>
  <div class="slider-wrapper">
    <div class="slider">
      <div class="slides-container">
        <div
          class="slide"
          v-for="(_, index) in totalSlides"
          :key="index"
          :class="{ 
            'active': index === currentSlide,
            'previous': index === previousSlideIndex, 
            'previous-previous': index === previousPreviousSlideIndex, 
            'next': index === nextSlideIndex,
            'next-next': index === nextNextSlideIndex // Add class for next-next slide
          }"
          :style="{ zIndex: currentSlide === index ? totalSlides + 1 : (index === nextSlideIndex ? totalSlides + 2 : (index === previousSlideIndex ? totalSlides - 2 : index === nextNextSlideIndex ? totalSlides - 3 : index === previousPreviousSlideIndex ? totalSlides - 4 : 0))  }"
        >
          <NuxtImg
            :src="`/img/${index + 1}.png`"
            :alt="`Image ${index + 1}`"
            loading="lazy"
            format="webp"
          />
        </div>
      </div>
    </div>
    
    <button @click="previousSlide" :disabled="transitioning" class="prev-slide-btn slide-btn"></button>
    <button @click="nextSlide" :disabled="transitioning" class="next-slide-btn slide-btn"></button>
    
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      currentSlide: 0,
      totalSlides: 29,
      transitioning: false,
    };
  },
  computed: {
    previousSlideIndex() {
      return (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    },
    previousPreviousSlideIndex() {
      return (this.currentSlide - 2 + this.totalSlides) % this.totalSlides;
    },
    nextSlideIndex() {
      return (this.currentSlide + 1) % this.totalSlides;
    },
    nextNextSlideIndex() {
      return (this.currentSlide + 2) % this.totalSlides;
    }
  },
  methods: {
    previousSlide() {
      if (!this.transitioning && this.currentSlide > 0) {
        this.transitioning = true; // Set transitioning to true before changing slide
        setTimeout(() => {
          this.currentSlide -= 1;
          this.transitioning = false; // Set transitioning to false after changing slide
        }, 10); // Delay for 1 millisecond (adjust the delay time as needed)
      }
      if (!this.transitioning && this.currentSlide <= 0) {
        this.transitioning = true; // Set transitioning to true before changing slide
        setTimeout(() => {
          this.currentSlide = this.totalSlides - 1
          this.transitioning = false; // Set transitioning to false after changing slide
        }, 10); // Delay for 1 millisecond (adjust the delay time as needed)
      }
    },
    nextSlide() {
      if (!this.transitioning && this.currentSlide < this.totalSlides - 1) {
        this.transitioning = true; // Set transitioning to true before changing slide
        setTimeout(() => {
          this.currentSlide += 1
          this.transitioning = false; // Set transitioning to false after changing slide
        }, 10); // Delay for 1 millisecond (adjust the delay time as needed)
      }
      if (!this.transitioning && this.currentSlide === this.totalSlides - 1) {
        setTimeout(() => {
          this.currentSlide = 0;
          this.transitioning = false; // Set transitioning to false after changing slide
        }, 10); // Delay for 1 millisecond (adjust the delay time as needed)
      }
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
.slider-wrapper {
  position: relative;
  z-index: 0;
}

.slider {
  position: relative;
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  max-height: 90vh;
}

.slide {
  position: absolute;
  flex: 0 0 auto;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition:transform 0.5s ease ;
  transform: scale(0);
}

img {
  width: 100%;
  height: auto;
}



.previous-previous {
  transform: scale(1);
}

.previous {
  transform: scale(1);
}

.active {
  opacity: 1;
  transform: scale(0.3);
}

.next {
  transform: scale(0);
}

.next-next { 
  transform: scale(0);
}

.prev-slide-btn {
  position: absolute;
  width: 50vw;
  height: 100vh;
  top: 50%;
  left: 0;
  text-align: left;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: w-resize;
  z-index: 100;
  padding: 12px;
  /* cursor: url('../img/1.png'), auto;	 */
}


.next-slide-btn {
  position: absolute;
  width: 50vw;
  height: 100vh;
  top: 50%;
  right: 0;
  text-align: right;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: e-resize;
  z-index: 100;
  padding: 12px;
}

.slides-container {
  width: 100%;
}

</style>
