<script setup lang="ts">
const props = defineProps<{
	images: ISliderImage[];
}>();

const currentIndex = defineModel<number>({
	default: 0,
});

const generateClassName = (index: number) => {
	return {
		'images-slider__item--active': index === currentIndex.value,
		'images-slider__item--next': index === currentIndex.value + 1 || (currentIndex.value === props.images.length - 1 && index === 0),
		'images-slider__item--prev': index === currentIndex.value - 1 || (currentIndex.value === 0 && index === props.images.length - 1),
		'images-slider__item--prev-prev': index === currentIndex.value - 2 || (currentIndex.value === 0 && index === props.images.length - 2) || (currentIndex.value === 1 && index === props.images.length - 1),
	};
};
const goToNext = () => {
	currentIndex.value = currentIndex.value === props.images.length - 1 ? 0 : currentIndex.value + 1;
};
const goToPrev = () => {
	currentIndex.value = currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1;
};

</script>

<template>
	<div class="images-slider">
		<div class="images-slider__controls">
			<button class="images-slider__control" @click="goToPrev">Prev</button>
			<button class="images-slider__control" @click="goToNext">Next</button>
		</div>
		<ul class="images-slider__list">
			<li
				v-for="(image, index) in props.images"
				:key="index"
				class="images-slider__item"
				:style="{ backgroundColor: image.color }"
				:class="generateClassName(index)"
			>
				<img
					:src="image.src"
					:alt="image.alt"
					class="images-slider__image"
				/>
			</li>
		</ul>
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
		border: 1px solid red;
		font-size: 0;
		opacity: 0;
		user-select: none;
		&:hover {
			opacity: .05;
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
		--inline-size: 50dvw;
		--block-size: 50dvh;

		display: none;
		position: absolute;
		width: var(--inline-size);
		height: var(--block-size);
		object-fit: contain;

		transition: width 1s ease, height 1s ease;
		translate: -50% -50%;

		&--next {
			display: block;
			z-index: 4;
			width: calc(var(--inline-size) * 0);
			height: calc(var(--block-size) * 0);
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
}
</style>
