<template>
	<div :class="getClass">
		<div :class="getOccupyDomClass" v-if="getFixed">asd</div>
		<div :class="getHeaderWrapperClass" :style="getHeaderWrapperStyle">
			<BasicLayoutHeader />
		</div>
	</div>
</template>

<script lang="ts">
export default defineComponent({
	name: 'LayoutHeaderLeftRight'
})
</script>

<script setup lang="ts">
import { type CSSProperties } from 'vue'
import { BasicLayoutHeader } from '@/layouts/default/app'
import { useHeaderConfig } from '@/composables/config/useHeaderConfig'
import { useSiderConfig } from '@/composables/config/useSiderConfig'
import { usePrefixCls } from '@/composables/core/useHtml'
import { prefixClsStyle } from '@/style/module'

const { prefixCls } = usePrefixCls(prefixClsStyle.layoutHeaderLeftRight)
const { getFixed } = useHeaderConfig()
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
.#{$prefix-cls-layout-header-left-right} {
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
