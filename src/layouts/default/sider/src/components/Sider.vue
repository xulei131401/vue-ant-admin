<template>
	<ALayoutSider :class="getSiderClass" breakpoint="lg" :collapsed="getCollapsed" :trigger="null" collapsible :collapsedWidth="LayoutSiderCollapsedWidth" :width="LayoutSiderWidth">
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
import { useMenuConfig } from '@/configs/menu/useMenuConfig'

const LayoutSiderCollapsedWidth = 80
const LayoutSiderWidth = 200
const { prefixCls } = usePrefixCls('layout-sideBar')
const { getCollapsed } = useMenuConfig()
const getSiderClass = computed(() => {
	return [prefixCls]
})
</script>

<style scoped lang="scss">
$prefix-cls: '#{$namespace}-layout-sideBar';
.#{$prefix-cls} {
	color: red;
}
</style>
