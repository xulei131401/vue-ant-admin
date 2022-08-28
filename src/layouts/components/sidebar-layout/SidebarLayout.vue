<template>
	<div class="x-sidebar-layout-container">
		<a-layout :class="layoutClass">
			<x-sidebar />
			<x-other-side />
			<x-setting-drawer />
		</a-layout>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'XSidebarLayout'
	}
</script>
<script setup lang="ts">
	import XSidebar from '@/layouts/components/sidebar-layout/sidebar/Sidebar.vue'
	import XOtherSide from '@/layouts/components/sidebar-layout/other-side/OtherSide.vue'
	import XSettingDrawer from '@/layouts/components/settings/SettingDrawer.vue'

	const layoutClass: Array<string> = ['layout']
</script>

<style scoped>
	.x-sidebar-layout-container {
		height: 100%;
		width: 100%;
	}

	.layout {
		height: 100%;
		width: 100%;
	}
</style>
