<template>
	<span :class="getClass">
		<slot></slot>
	</span>
</template>
<script lang="ts">
export default defineComponent({
	name: 'BasicTitle',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { usePrefixCls } from '@/composables/core/useHtml'
import { prefixClsStyle } from '@/style/module'

const { prefixCls } = usePrefixCls(prefixClsStyle.basicTitle)
const props = defineProps({
	span: { type: Boolean },
	normal: { type: Boolean }
})

const slots = useSlots()
const getClass = computed(() => [prefixCls, { [`${prefixCls}-show-span`]: props.span && slots.default }, { [`${prefixCls}-normal`]: props.normal }])
</script>

<style scoped lang="scss">
.#{$prefix-cls-basic-title} {
	position: relative;
	display: flex;
	padding-left: 7px;
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	color: $text-color;
	cursor: pointer;
	user-select: none;

	&-normal {
		font-size: 14px;
		font-weight: 500;
	}

	&-show-span::before {
		position: absolute;
		top: 4px;
		left: 0;
		width: 3px;
		height: 16px;
		margin-right: 4px;
		background-color: $primary-color;
		content: '';
	}

	&-help {
		margin-left: 10px;
	}
}
</style>
