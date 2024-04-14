<script setup lang="ts">
const images = ref<ISliderImage[]>([
	{
		src: 'https://fastly.picsum.photos/id/930/2000/2000.jpg?hmac=-k7jOXXbCbCJXJ32YZreE7rjUwalWn-0Z6nmT3-XJVA',
		alt: 'Image 1',
		color: '#5892b5'
	},
	{
		src: 'https://fastly.picsum.photos/id/1021/2000/2000.jpg?hmac=gu387u_b7_3J-FjEFOaFkh-y7P3nZXRuJrma_vEk2oA',
		alt: 'Image 2',
		color: '#818181'
	},
	{
		src: 'https://fastly.picsum.photos/id/461/2000/2000.jpg?hmac=g9uLNVgeUS4hXzwHgPXs_5ncitj9BW0hF4OYwHB5EvQ',
		alt: 'Image 3',
		color: '#9cc2de'
	},
	{
		src: 'https://fastly.picsum.photos/id/546/2000/2000.jpg?hmac=fs9f4o7uCopC9dIOeYrAsf4c7Wswoi6XkYIP7t9zDCg',
		alt: 'Image 4',
		color: '#6a1d09'
	},
	{
		src: 'https://fastly.picsum.photos/id/335/2000/2000.jpg?hmac=uwf2bxfDHCGqqqpniYJYOd_vaj_1ylZ-63EhenviAJA',
		alt: 'Image 5',
		color: '#578059'
	}
]);

const currentIndex = ref(0);

</script>

<template>
	<ImagesSlider :images="images" v-model="currentIndex"/>
</template>

<style scoped lang="scss">

</style>
