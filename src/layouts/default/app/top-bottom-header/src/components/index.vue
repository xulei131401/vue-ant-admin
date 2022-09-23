<template>
	<div :class="getClass">
		<div :class="getOccupyDomClass" v-if="getFixed"></div>
		<BasicLayoutHeader :fixed="getFixed" />
	</div>
</template>

<script lang="ts">
export default defineComponent({
	name: 'LayoutHeaderTopBottom'
})
</script>

<script setup lang="ts">
import { BasicLayoutHeader } from '@/layouts/default/app'
import { useHeaderConfig } from '@/composables/config/useHeaderConfig'
import { usePrefixCls } from '@/composables/core/useHtml'
import { prefixClsStyle } from '@/style/module'

const { prefixCls } = usePrefixCls(prefixClsStyle.layoutHeaderTopBottom)
const { getFixed } = useHeaderConfig()
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
.#{$prefix-cls-layout-header-top-bottom} {
	&__occupy-dom {
		height: $header-height;
		overflow: hidden;
		transition: all 0.2s ease 0s;
	}
}
</style>
