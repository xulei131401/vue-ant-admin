<template>
	<!--左右布局,侧边栏-->
	<ALayoutSider v-bind="layoutSiderProps" :class="getClass">
		<LayoutMenu v-bind="layoutMenuProps" />
	</ALayoutSider>
</template>
<script lang="ts">
export default defineComponent({
	name: 'Sider'
})
</script>

<script setup lang="ts">
import { LayoutMenu } from '@/layouts/default/menu'
import { useSiderConfig } from '@/composables/config/useSiderConfig'
import { useMenuConfig } from '@/composables/config/useMenuConfig'
import { prefixClsStyle } from '@/style/module'
import { usePrefixCls } from '@/composables/core/useHtml'

const { prefixCls } = usePrefixCls(prefixClsStyle.layoutSider)
const { getWidth, getCollapsedWidth, getCollapsed, getSiderTheme } = useSiderConfig()
const { getMenuTheme, getMenuMode } = useMenuConfig()
const layoutSiderProps = computed(() => {
	return {
		breakpoint: 'lg',
		collapsible: true,
		trigger: null,
		theme: unref(getSiderTheme),
		collapsed: unref(getCollapsed),
		collapsedWidth: unref(getCollapsedWidth),
		width: unref(getWidth)
	}
})

const layoutMenuProps = computed(() => {
	return {
		theme: unref(getMenuTheme),
		mode: unref(getMenuMode)
	}
})

const getClass = computed(() => {
	return [
		prefixCls,
		{
			[`${prefixCls}--fixed`]: false
		}
	]
})
</script>

<style scoped lang="scss">
.#{$prefix-cls-layout-sider} {
	&--fixed {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
	}
}
</style>
