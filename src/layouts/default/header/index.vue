<template>
	<ALayoutHeader :class="getHeaderClass">
		<XHeaderLeft />
		<XHeaderCenter />
		<XHeaderRight />
	</ALayoutHeader>
</template>

<script lang="ts">
	export default defineComponent({
		name: 'XLayoutHeader',
		inheritAttrs: false
	})
</script>

<script setup lang="ts">
	import {XHeaderLeft, XHeaderCenter, XHeaderRight} from './components'
	import {useHtmlClass} from '@/composables/web/useHtmlClass'
	const {prefixCls} = useHtmlClass('layout-header')
	const getHeaderClass = computed(() => {
		return [
			prefixCls,
			{
				[`${prefixCls}--fixed`]: true
			}
		]
	})
</script>

<style scoped lang="scss">
	@import '@/style/layouts/header/index.scss';
</style>
