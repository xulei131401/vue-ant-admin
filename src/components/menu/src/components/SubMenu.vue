<template>
	<!--Menu.SubMenu 的子元素必须是 MenuItem 或者 SubMenu.-->
	<!--也就是MenuItemWrapper组件-->
	<ASubMenu :key="item.identify" v-if="menuHasChildren(item)">
		<template #title>
			<MenuItemContent v-bind="$props" />
		</template>

		<template v-for="(childrenItem, index) in item.children || []" :key="index">
			<MenuItemWrapper :item="childrenItem" />
		</template>
	</ASubMenu>
</template>
<script lang="ts">
export default defineComponent({
	name: 'SubMenu',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import MenuItemWrapper from './MenuItemWrapper.vue'
import MenuItemContent from './MenuItemContent.vue'
import { subMenuProps } from './subMenuProps'
import { useHtmlClass } from '@/composables/web/useHtmlClass'
import { menuHasChildren } from '../menu/menu'
const { prefixCls } = useHtmlClass('basic-sub-menu')
defineProps(subMenuProps())
</script>

<style scoped lang="scss"></style>
