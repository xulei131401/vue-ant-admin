<template>
	<ALayout :class="prefixCls">
		<!--上下布局，上-->
		<TopBottomLayoutHeader />
		<!--上下布局，下-->
		<ALayout :class="layoutClass">
			<!--左右布局，左-->
			<LayoutSider />
			<ALayout>
				<!--左右布局，右-->
				<LeftRightLayoutHeader />
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
import { TopBottomLayoutHeader, LeftRightLayoutHeader } from './header'
import { LayoutSider } from './sider'
import { LayoutContent } from './content'
import { LayoutFooter } from './footer'
import { usePrefixCls } from '@/composables/core/useHtml'

const { prefixCls } = usePrefixCls('default-layout')
const layoutClass = computed(() => {
	let cls: string[] = ['ant-layout']
	cls.push('ant-layout-has-sider')
	return cls
})
</script>

<style scoped lang="scss">
@import '@/style/layouts/index.scss';
</style>
