<script setup lang="ts">
const nuxtApp = useNuxtApp();
const isLoading = ref(true);

nuxtApp.hook("page:finish", () => {
	isLoading.value = false;
});
</script>

<template>
	<AppPreloader v-model="isLoading"/>
	<!-- <AppHeader/> -->
	<div>
		
		<NuxtPage/>
	</div>
</template>
