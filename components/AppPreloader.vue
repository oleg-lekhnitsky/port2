<script setup lang="ts">

const isLoading = defineModel({
		type: Boolean,
		default: false
});

</script>

<template>
	<Transition name="fade" duration="500">
		<div class="app-loader" v-if="isLoading">
			слово какое
		</div>
	</Transition>
</template>

<style scoped lang="scss">
.app-loader {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--bg-dark);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
	color: var(--text-dark);
}
</style>
