<script setup lang="ts">
const images = ref<ISliderImage[]>([
	{
		src: '/img/20.png',
		alt: 'Image 1',
		color: '#F97600',
		aspectRatio: .8,
	},
	{
		src: '/img/12.png',
		alt: 'Image 2',
		color: '#0b161c',
		aspectRatio: .669,
	},
	{
		src: '/img/10.png',
		alt: 'Image 3',
		color: '#9cc2de',
		aspectRatio: 1,
	},
	{
		src: '/img/9.png',
		alt: 'Image 4',
		color: '#6a1d09',
		aspectRatio: 1,
	},
	{
		src: '/img/8.png',
		alt: 'Image 4',
		color: '#999999',
		aspectRatio: 1,
	},
]);

const currentIndex = ref(0);

</script>

<template>
	<ImagesSlider :images="images" v-model="currentIndex"/>
</template>
