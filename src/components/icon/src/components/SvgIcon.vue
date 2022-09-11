<template>
	<svg :class="[prefixCls, spin && 'svg-icon-spin']" :style="getStyle" aria-hidden="true">
		<use :xlink:href="symbolId" />
	</svg>
</template>
<script lang="ts">
export default defineComponent({
	name: 'SvgIcon',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { usePrefixCls } from '@/composables/core/useHtml'
import { svgIconProps } from './svgIconProps'

const { prefixCls } = usePrefixCls('svg-icon')
const props = defineProps(svgIconProps())

const symbolId = computed(() => {
	const part = [props.prefix, props.name].join('-')
	return `#${part}`
})

const getStyle = computed((): CSSProperties => {
	const { size } = props
	let _value = `${size}`
	_value = `${_value.replace('px', '')}px`
	return {
		width: _value,
		height: _value
	}
})
</script>

<style scoped lang="scss">
@import '@/style/components/icon/svg-icon.scss';
</style>
