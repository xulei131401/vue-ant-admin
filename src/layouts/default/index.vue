<template>
	<ALayout :class="prefixCls">
		<!--上下布局，上-->
		<LayoutHeader :mode="LayoutMode.TOP_BOTTOM_LAYOUT" />
		<!--上下布局，下-->
		<ALayout :class="layoutClass">
			<!--左右布局，左-->
			<LayoutSider />
			<ALayout>
				<!--左右布局，右-->
				<LayoutHeader :mode="LayoutMode.LEFT_RIGHT_LAYOUT" />
				<LayoutContent />
				<LayoutFooter />
			</ALayout>
		</ALayout>
	</ALayout>
</template>
<script lang="ts">
export default defineComponent({
	name: 'BasicLayout'
})
</script>

<script setup lang="ts">
import { LayoutHeader } from '@/layouts/default/header'
import { LayoutSider } from '@/layouts/default/sider'
import { LayoutContent } from '@/layouts/default/content'
import { LayoutFooter } from '@/layouts/default/footer'
import { usePrefixCls } from '@/composables/core/useHtml'
import { prefixClsStyle } from '@/style/module'
import { LayoutMode } from '@/enums'

const { prefixCls } = usePrefixCls(prefixClsStyle.layout)
const layoutClass = computed(() => {
	let cls: string[] = ['ant-layout']
	cls.push('ant-layout-has-sider')
	return cls
})
</script>

<style scoped lang="scss">
.#{$prefix-cls-layout} {
	width: 100%;
	min-height: 100%;

	> .ant-layout {
		min-height: 100%;
	}
}
</style>
