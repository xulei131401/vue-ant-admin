<template>
	<ALayout :class="prefixCls">
		<LayoutHeader />
		<ALayout :class="layoutClass">
			<LayoutSideBar />
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
import LayoutHeader from './header/index.vue'
import LayoutSideBar from './sider/index.vue'
import LayoutContent from './content/index.vue'
import LayoutFooter from './footer/index.vue'
import { useHtmlClass } from '@/composables/web/useHtmlClass'

const { prefixCls } = useHtmlClass('default-layout')
const layoutClass = computed(() => {
	let cls: string[] = ['ant-layout']
	cls.push('ant-layout-has-sider')
	return cls
})
</script>

<style scoped lang="scss">
@import '@/style/layouts/index.scss';
</style>
