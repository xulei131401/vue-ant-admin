<template>
	<ALayoutHeader :class="getClass">
		<HeaderLeft :theme="getHeaderTheme" />
		<HeaderCenter :theme="getHeaderTheme" />
		<HeaderRight :theme="getHeaderTheme" />
	</ALayoutHeader>
</template>

<script lang="ts">
export default defineComponent({
	name: 'LayoutBasicHeader'
})
</script>

<script setup lang="ts">
import HeaderLeft from './HeaderLeft.vue'
import HeaderCenter from './HeaderCenter.vue'
import HeaderRight from './HeaderRight.vue'
import { useHeaderConfig } from '@/composables/config/useHeaderConfig'
import { usePrefixCls } from '@/composables/core/useHtml'
import { prefixClsStyle } from '@/style/module'

const { prefixCls } = usePrefixCls(prefixClsStyle.layoutBasicHeader)
const { getHeaderTheme } = useHeaderConfig()
const props = defineProps({
	fixed: { type: Boolean, default: false }
})

const getClass = computed(() => {
	const theme = unref(getHeaderTheme)
	return [
		prefixCls,
		[`${prefixCls}--${theme}`],
		{
			[`${prefixCls}--fixed`]: props.fixed
		}
	]
})
</script>

<style scoped lang="scss">
.#{$prefix-cls-layout-basic-header} {
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: $header-height;
	line-height: $header-height;
	@include headerBgColor();

	// fixed
	&--fixed {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 7;
		width: 100%;
	}
}
</style>
