<template>
	<div :class="getClass" v-if="showLeftRightLayoutHeader">
		<div :class="getOccupyDomClass" v-if="getFixed">asd</div>
		<div :class="getHeaderWrapperClass" :style="getHeaderWrapperStyle">
			<BasicLayoutHeader />
		</div>
	</div>
</template>

<script lang="ts">
export default defineComponent({
	name: 'LeftRightLayoutHeader'
})
</script>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { BasicLayoutHeader } from '../header'
import { usePrefixCls } from '@/composables/core/useHtml'
import { useHeaderConfig } from '@/composables/config/useHeaderConfig'
import { useSiderConfig } from '@/composables/config/useSiderConfig'

const { prefixCls } = usePrefixCls('left-right-layout-header')
const { showLeftRightLayoutHeader, getFixed } = useHeaderConfig()
const { getCalcContentWidth } = useSiderConfig()
const getClass = computed(() => {
	return [prefixCls]
})

const getOccupyDomClass = computed(() => {
	return { [`${prefixCls}__occupy-dom`]: true }
})

const getHeaderWrapperClass = computed(() => {
	return { [`${prefixCls}--fixed`]: unref(getFixed) }
})

const getHeaderWrapperStyle = computed((): CSSProperties => {
	const style: CSSProperties = {}
	if (unref(getFixed)) {
		style.width = unref(getCalcContentWidth)
	}

	return style
})
</script>

<style scoped lang="scss">
$prefix-cls: '#{$namespace}-left-right-layout-header';

.#{$prefix-cls} {
	&--fixed {
		position: fixed;
		top: 0;
		width: 100%;
	}

	&__occupy-dom {
		height: $header-height;
		overflow: hidden;
		transition: all 0.2s ease 0s;
	}
}
</style>
