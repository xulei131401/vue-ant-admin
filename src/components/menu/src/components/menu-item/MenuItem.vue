<template>
	<AMenuItem :key="item.identify" v-if="!Menu.hasChildren(item)">
		<MenuItemContent v-bind="$props" />
	</AMenuItem>
</template>
<script lang="ts">
export default defineComponent({
	name: 'MenuItem',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import MenuItemContent from '../content/MenuItemContent.vue'
import { menuItemProps } from './menuItemProps'
import { Menu } from '@/models/menu/menu'
defineProps(menuItemProps())
</script>

<style scoped lang="scss"></style>
