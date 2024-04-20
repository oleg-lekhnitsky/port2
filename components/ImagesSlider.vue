<script setup lang="ts">
import { useElementHover, useMouse } from '@vueuse/core';


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
	if (isPrevButtonHovered.value) return 'Previous';
	if (isNextButtonHovered.value) return 'Next';
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
const generateClassName = (index: number) => {
	return {
		'images-slider__item--active': index === currentIndex.value,
		'images-slider__item--next': index === currentIndex.value + 1 || (currentIndex.value === props.images.length - 1 && index === 0),
		'images-slider__item--prev': index === currentIndex.value - 1 || (currentIndex.value === 0 && index === props.images.length - 1),
		'images-slider__item--prev-prev': index === currentIndex.value - 2 || (currentIndex.value === 0 && index === props.images.length - 2) || (currentIndex.value === 1 && index === props.images.length - 1),
	};
};

const generateItemStyle = (index: number) => {
	const item = props.images[index];
	const maxSize = 80;

	if (index !== currentIndex.value) {
		return {
			backgroundColor: item.color,
		};
	}
	if (item.aspectRatio > 1) {
		return {
			backgroundColor: item.color,
			width: `${maxSize}vw`,
			height: `calc(${maxSize}vw / ` + item.aspectRatio + ')',
		};
	} else {
		return {
			backgroundColor: item.color,
			width: `calc(${maxSize}vh * ` + item.aspectRatio + ')',
			height: `${maxSize}vh`,
		};
	}
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
				/>
			</li>
		</ul>
		<span class="images-slider__label">{{ label }}</span>
	</div>

</template>

<style scoped lang="scss">
.images-slider {
	position: relative;
	width: 100dvw;
	height: 100dvh;
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

		&--prev {
			cursor: w-resize;
		}
		&--next {
			cursor: e-resize;
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

		transition: width 0.75s ease, height 0.75s ease;
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
			width: 100dvw;
			height: 100dvh;
		}

		&--prev-prev {
			display: block;
			z-index: 1;
			width: 100dvw;
			height: 100dvh;
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
		background-color: rgba(0, 0, 0, .5);
		transform: translate(-50%, 1em);
		color: white;
		padding: .5rem;
		z-index: 10;
		pointer-events: none;
	}
}
</style>
