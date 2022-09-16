<template>
	<div :class="getClass" v-if="showTopBottomLayoutHeader">
		<div :class="getOccupyDomClass" v-if="getFixed"></div>
		<BasicLayoutHeader :fixed="getFixed" />
	</div>
</template>

<script lang="ts">
export default defineComponent({
	name: 'TopBottomLayoutHeader'
})
</script>

<script setup lang="ts">
import { BasicLayoutHeader } from '../header'
import { usePrefixCls } from '@/composables/core/useHtml'
import { useHeaderConfig } from '@/composables/config/useHeaderConfig'

const { prefixCls } = usePrefixCls('top-bottom-layout-header')
const { showTopBottomLayoutHeader, getFixed } = useHeaderConfig()
const getClass = computed(() => {
	return [prefixCls]
})

const getOccupyDomClass = computed(() => {
	return [
		{
			[`${prefixCls}__occupy-dom`]: true
		}
	]
})
</script>

<style scoped lang="scss">
$prefix-cls: '#{$namespace}-top-bottom-layout-header';

.#{$prefix-cls} {
	&__occupy-dom {
		height: $header-height;
		overflow: hidden;
		transition: all 0.2s ease 0s;
	}
}
</style>
