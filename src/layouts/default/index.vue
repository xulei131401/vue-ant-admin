<template>
	<ALayout :class="prefixCls">
		<LayoutHeader />
		<ALayout :class="layoutClass">
			<LayoutSider />
			<ALayout>
				<LayoutContent />
				<LayoutFooter />
			</ALayout>
		</ALayout>
	</ALayout>
</template>
<script lang="ts">
export default defineComponent({
	name: 'BasicLayout',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { LayoutHeader } from './header'
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
