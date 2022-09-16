<template>
	<!--左右布局,侧边栏-->
	<ALayoutSider :class="getClass" breakpoint="lg" :collapsed="getCollapsed" :trigger="null" collapsible :collapsedWidth="getCollapsedWidth" :width="getWidth">
		<LayoutMenu />
	</ALayoutSider>
</template>
<script lang="ts">
export default defineComponent({
	name: 'Sider',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { LayoutMenu } from '@/layouts/default/menu'
import { usePrefixCls } from '@/composables/core/useHtml'
import { useSiderConfig } from '@/composables/config/useSiderConfig'

const { prefixCls } = usePrefixCls('layout-sideBar')
const { getWidth, getCollapsedWidth, getCollapsed } = useSiderConfig()
const getClass = computed(() => {
	return [prefixCls]
})
</script>

<style scoped lang="scss">
$prefix-cls: '#{$namespace}-layout-sideBar';
.#{$prefix-cls} {
	// color: red;
}
</style>
