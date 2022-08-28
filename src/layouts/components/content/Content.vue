<template>
	<div class="x-content-wrapper">
		<x-page-header />
		<a-layout-content class="content">
			<router-view />
		</a-layout-content>
	</div>
</template>
<script lang="ts">
	export default {
		name: 'XContent'
	}
</script>

<script setup lang="ts">
	import XPageHeader from '@/layouts/components/navigation/page-header/PageHeader.vue'
</script>

<style scoped lang="scss">
	.x-content-wrapper {
		width: 100%;
		max-height: 100%;
	}

	.content {
		margin: 8px 10px;
		padding: 12px;
		background: #fff;
	}
</style>
