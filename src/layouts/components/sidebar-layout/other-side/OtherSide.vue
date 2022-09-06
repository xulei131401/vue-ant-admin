<template>
	<div class="other-side-wrapper">
		<x-header />
		<x-content />
	</div>
</template>
<script lang="ts">
export default {
	name: 'XOtherSide'
}
</script>
<script setup lang="ts">
import XHeader from '@/layouts/components/sidebar-layout/header/Header.vue'
import XContent from '@/layouts/components/content/Content.vue'
</script>

<style scoped>
.other-side-wrapper {
	width: 100%;
	height: 100%;
}
</style>
