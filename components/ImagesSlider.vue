<script setup lang="ts">
import { useElementHover, useMouse, useWindowSize } from '@vueuse/core';


const props = defineProps<{
	images: ISliderImage[];
}>();
const currentIndex = defineModel<number>({
	default: 0,
});

// Label
const prevButtonElement = ref<HTMLButtonElement | null>(null);
const nextButtonElement = ref<HTMLButtonElement | null>(null);
const imagesSliderElement = ref<HTMLUListElement | null>(null);	

const isPrevButtonHovered = useElementHover(prevButtonElement);
const isNextButtonHovered = useElementHover(nextButtonElement);
const isImagesSliderHovered = useElementHover(imagesSliderElement);

const label = computed(() => {
	if (isPrevButtonHovered.value) return '←Previous';
	if (isNextButtonHovered.value) return 'Next→';
	if (isImagesSliderHovered.value) return 'Zoom';
	return '';
});
const {x: mouseX, y: mouseY} = useMouse()

const labelX = computed(() => mouseX.value + 'px');
const labelY = computed(() => mouseY.value + 'px');


// Buttons
const transitionCount = ref(0);

const goToNext = () => {
	if (transitionCount.value > 0) return;
	currentIndex.value = currentIndex.value === props.images.length - 1 ? 0 : currentIndex.value + 1;
};
const goToPrev = () => {
	if (transitionCount.value > 0) return;
	currentIndex.value = currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1;
};

// Classes
const isActive = (index: number) => index === currentIndex.value;
const isNext = (index: number) => index === currentIndex.value + 1 || (currentIndex.value === props.images.length - 1 && index === 0);
const isPrev = (index: number) => index === currentIndex.value - 1 || (currentIndex.value === 0 && index === props.images.length - 1);
const isPrevPrev = (index: number) => index === currentIndex.value - 2 || (currentIndex.value === 0 && index === props.images.length - 2) || (currentIndex.value === 1 && index === props.images.length - 1);

const generateClassName = (index: number) => {
	return {
		'images-slider__item--active': isActive(index),
		'images-slider__item--next': isNext(index),
		'images-slider__item--prev': isPrev(index),
		'images-slider__item--prev-prev': isPrevPrev(index),
	};
};

const { width: windowWidth, height: windowHeight } = useWindowSize()
const windowAspectRatio = computed(() => windowWidth.value / windowHeight.value);

const generateItemStyle = (index: number) => {
	const item = props.images[index];
	const maxActiveSize = 80;
	const minPrevSize = 100;


	if (isActive(index)) {
		if (item.aspectRatio > windowAspectRatio.value) {
			return {
				backgroundColor: item.color,
				width: `${maxActiveSize}vw`,
				height: `${maxActiveSize / item.aspectRatio}vw`,
			};
		} else {
			return {
				backgroundColor: item.color,
				width: `${maxActiveSize * item.aspectRatio}vh`,
				height: `${maxActiveSize}vh`,
			};
		}

	}
	if (isPrev(index) || isPrevPrev(index)) {
		if (item.aspectRatio > windowAspectRatio.value) {
			return {
				backgroundColor: item.color,
				width: `${minPrevSize * item.aspectRatio}vh`,
				height: `${minPrevSize}vh`,
			};
		} else {
			return {
				backgroundColor: item.color,
				width: `${minPrevSize}vw`,
				height: `${minPrevSize / item.aspectRatio}vw`,
			};
		}
	}


	return {
		backgroundColor: item.color,
	};
};

</script>

<template>
	<div class="images-slider">
		<div class="images-slider__controls">
			<button class="images-slider__control images-slider__control--prev" @click="goToPrev" ref="prevButtonElement">Previous</button>
			<button class="images-slider__control images-slider__control--next" @click="goToNext" ref="nextButtonElement">Next</button>
		</div>
		<ul class="images-slider__list" ref="imagesSliderElement">
			<li
				v-for="(image, index) in props.images"
				:key="index"
				class="images-slider__item"
				:style="generateItemStyle(index)"
				:class="generateClassName(index)"
				@transitionstart="transitionCount++"
				@transitionend="transitionCount--"
			>
				<NuxtImg
					:src="image.src"
					:alt="image.alt"
					class="images-slider__image"
					loading="lazy"
					format="webp"
					
				/>
			</li>
		</ul>
		<span class="images-slider__label">{{ label }}</span>
	</div>

</template>

<style scoped lang="scss">
.images-slider {
	position: relative;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: grid;
	place-items: center;

	&__controls {
		position: absolute;
		inset: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-content: stretch;
		justify-content: stretch;
		z-index: 5;
	}

	&__control {
		font-size: 0;
		opacity: 0;
		user-select: none;
		-webkit-tap-highlight-color: transparent;

		&--prev {
			// cursor: w-resize;
			cursor: none;
		}
		&--next {
			// cursor: e-resize;
			cursor: none;
		}
	}

	&__list {
		padding: 0;
		margin: 0;
		position: absolute;
		z-index: 2;
		list-style: none;
		display: flex;
	}

	&__item {
		display: none;
		position: absolute;

		transition: width 0.4s ease, height 0.4s ease;
		translate: -50% -50%;

		&--next {
			display: block;
			z-index: 4;
			width: 0;
			height: 0;
		}

		&--active {
			display: block;
			z-index: 3;
		}

		&--prev {
			display: block;
			z-index: 2;
		}

		&--prev-prev {
			display: block;
			z-index: 1;
		}
	}

	&__image {
		position: relative;
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	&__label {
		&:empty {
			display: none;
		}
		position: fixed;
		display: block;
		bottom: auto;
		right: auto;
		left: v-bind(labelX);
		top: v-bind(labelY);
		text-align: center;
		width: fit-content;
		background-color: #000000;
		transform: translate(-50%, 1em);
		color: white;
		padding: .35rem .25rem .05rem .25rem;
		z-index: 10;
		line-height: 87%;
		pointer-events: none;
		font-size: 1rem;
	}
}
</style>
