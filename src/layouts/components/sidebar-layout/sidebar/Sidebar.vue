<template>
	<div class="x-sidebar-wrapper">
		<a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible :collapsedWidth="LayoutSiderCollapsedWidth" :width="LayoutSiderWidth">
			<x-logo />
			<x-second-level-menu />
		</a-layout-sider>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'XSidebar'
	}
</script>
<script setup lang="ts">
	import XSecondLevelMenu from '@/layouts/components/menu/SecondLevelMenu.vue'
	import XLogo from '@/layouts/components/logo/Logo.vue'
	import {useMenuFold} from '@/composables/useMenuFold'
	import {LayoutSiderCollapsedWidth, LayoutSiderWidth} from '@/layouts/components/sidebar-layout/sidebar/sidebar'

	const {collapsed} = useMenuFold()
</script>

<style scoped>
	.x-sidebar-wrapper {
		background: #000;
		height: 100%;
	}
</style>
