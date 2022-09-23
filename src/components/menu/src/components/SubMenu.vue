<template>
	<!--Menu.SubMenu 的子元素必须是 MenuItem 或者 SubMenu.-->
	<!--也就是MenuItemWrapper组件-->
	<ASubMenu :key="item.uniqueId" v-if="MenuStatic.hasChildren(item)">
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
	name: 'SubMenu'
})
</script>

<script setup lang="ts">
import MenuItemWrapper from './MenuItemWrapper.vue'
import MenuItemContent from './MenuItemContent.vue'
import { subMenuProps } from '../typing'
import { MenuStatic } from '@/typing'
defineProps(subMenuProps())
</script>

<style scoped lang="scss"></style>
