<template>
	<ALayoutHeader :class="getHeaderClass">
		<HeaderLeft />
		<HeaderCenter />
		<HeaderRight />
	</ALayoutHeader>
</template>

<script lang="ts">
export default defineComponent({
	name: 'LayoutHeader',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { HeaderLeft, HeaderCenter, HeaderRight } from './components'
import { usePrefixCls } from '@/composables/core/useHtml'
const { prefixCls } = usePrefixCls('layout-header')
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
