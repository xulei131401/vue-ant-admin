<template>
	<ALayoutSider :class="getSiderClass" v-model:collapsed="collapsed" :trigger="null" collapsible :collapsedWidth="LayoutSiderCollapsedWidth" :width="LayoutSiderWidth"> </ALayoutSider>
</template>
<script lang="ts">
	export default defineComponent({
		name: 'XSider',
		inheritAttrs: false
	})
</script>

<script setup lang="ts">
	import {useMenuFold} from '@/composables/useMenuFold'
	import {useHtmlClass} from '@/composables/web/useHtmlClass'
	import {LayoutSiderCollapsedWidth, LayoutSiderWidth} from '@/layouts/components/sidebar-layout/sidebar/sidebar'

	const {collapsed} = useMenuFold()

	const {prefixCls} = useHtmlClass('layout-sideBar')
	const getSiderClass = computed(() => {
		return [prefixCls]
	})
</script>

<style scoped lang="scss">
	$prefix-cls: '#{$namespace}-layout-sideBar';
	.#{$prefix-cls} {
		color: red;
	}
</style>
