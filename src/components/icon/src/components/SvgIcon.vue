<template>
	<svg :class="[prefixCls, spin && 'svg-icon-spin']" :style="getStyle" aria-hidden="true">
		<use :xlink:href="symbolId" />
	</svg>
</template>
<script lang="ts">
export default defineComponent({
	name: 'SvgIcon'
})
</script>

<script setup lang="ts">
import { type CSSProperties } from 'vue'
import { svgIconProps } from './svgIconProps'
import { usePrefixCls } from '@/composables/core/useHtml'
import { prefixClsStyle } from '@/style/module'

const { prefixCls } = usePrefixCls(prefixClsStyle.svgIcon)
const props = defineProps(svgIconProps())

const symbolId = computed(() => {
	const part = [props.prefix, props.name].filter((item) => item).join('-')
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
// TODO: 等待日后完善样式
.#{$prefix-cls-svg-icon} {
	display: inline-block;
	overflow: hidden;
	vertical-align: -0.15em;
	fill: currentColor;

	.svg-icon-spin {
		animation: loadingCircle 1s infinite linear;
	}
}
</style>
