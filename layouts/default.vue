<script setup lang="ts">
const nuxtApp = useNuxtApp();
const isLoading = ref(true);

nuxtApp.hook("page:finish", () => {
	isLoading.value = false;
});
</script>

<template>
	<!-- <AppHeader/> -->
	<div>
		<AppPreloader v-model="isLoading"/>
		
		<NuxtPage/>
	</div>
</template>
