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
		color: '#63B2EC',
		aspectRatio: 1,
	},
]);

const currentIndex = ref(0);

</script>

<template>
	<div>
	<AppHeader></AppHeader>
	<ImagesSlider :images="images" v-model="currentIndex"/>
</div>
</template>

<style lang="scss" scoped>
  .header-wrapper{
    height: auto;
    background-color: transparent;
    color: var(--text-light);

	a, p{
      color: var(--text-light);
      // -webkit-text-stroke: 1px var(--text-dark);

    }
  }

  .header-wrapper:hover{
    background-color: var(--bg-light);


    a, p{
      color: var(--text-dark);
      // -webkit-text-stroke: 1px var(--text-dark);

    }
    a:hover{
    color: var(--accent);
    // -webkit-text-stroke: 1px var(--accent);

    /* text-decoration-line: underline; */
  }

  }

</style>