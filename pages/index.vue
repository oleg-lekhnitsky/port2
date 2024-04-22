<script setup lang="ts">
const images = ref<ISliderImage[]>([
	{
		src: 'https://fastly.picsum.photos/id/930/2000/2000.jpg?hmac=-k7jOXXbCbCJXJ32YZreE7rjUwalWn-0Z6nmT3-XJVA',
		alt: 'Image 1',
		color: '#5892b5',
		aspectRatio: 1,
	},
	{
		src: 'https://fastly.picsum.photos/id/536/500/1000.jpg?hmac=e0uszAGKlJGU4IJ0kZGQ3ncXBQNDf4lXJLfsUIqBSnA',
		alt: 'Image 2',
		color: '#0b161c',
		aspectRatio: 0.5,
	},
	{
		src: 'https://fastly.picsum.photos/id/461/2000/2000.jpg?hmac=g9uLNVgeUS4hXzwHgPXs_5ncitj9BW0hF4OYwHB5EvQ',
		alt: 'Image 3',
		color: '#9cc2de',
		aspectRatio: 1,
	},
	{
		src: 'https://fastly.picsum.photos/id/546/2000/2000.jpg?hmac=fs9f4o7uCopC9dIOeYrAsf4c7Wswoi6XkYIP7t9zDCg',
		alt: 'Image 4',
		color: '#6a1d09',
		aspectRatio: 1,
	},
	{
		src: '/img/8.png',
		alt: 'Image 4',
		color: '#6a1d09',
		aspectRatio: 1,
	},
]);

const currentIndex = ref(0);

</script>

<template>
	<ImagesSlider :images="images" v-model="currentIndex"/>
</template>
