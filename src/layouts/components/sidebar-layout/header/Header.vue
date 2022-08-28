<template>
	<div class="x-header-wrapper">
		<a-layout-header class="layout-header" :style="layoutHeaderStyle">
			<x-fold-menu />
			<x-avatar-dropdown class="avatar-dropdown" />
		</a-layout-header>
		<div style="margin-top: 48px"></div>
		<x-tab-navigation style="width: 100%" />
	</div>
</template>

<script lang="ts">
	export default {
		name: 'XHeader'
	}
</script>

<script setup lang="ts">
	import XAvatarDropdown from '@/layouts/components/avatar/AvatarDropdown.vue'
	import XFoldMenu from '@/layouts/components/menu/FoldMenu.vue'
	import XTabNavigation from '@/layouts/components/navigation/tab/TabNavigation.vue'
	import {useMenuFold} from '@/composables/useMenuFold'
	import {LayoutSiderCollapsedWidth, LayoutSiderWidth} from '@/layouts/components/sidebar-layout/sidebar/sidebar'

	const {collapsed} = useMenuFold()

	const layoutHeaderStyle = computed(() => {
		let width = LayoutSiderWidth
		if (collapsed.value) {
			width = LayoutSiderCollapsedWidth
		}

		return {width: `calc(100% - ${width}px)`}
	})
</script>

<style scoped lang="scss">
	.x-header-wrapper {
		width: 100%;
	}

	.layout-header {
		position: fixed;
		top: 0px;
		display: flex;
		justify-content: flex-start;
		height: 48px;
		line-height: 48px;
		background: #fff;
		padding: 0;
		z-index: 9;
		transition: width 0.2s;
		box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
	}

	.avatar-dropdown {
		margin-left: auto;
	}
</style>
