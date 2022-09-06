<template>
	<AMenuItem :key="item.identify" v-if="!menuHasChildren(item)">
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
import MenuItemContent from './MenuItemContent.vue'
import { menuItemProps } from './menuItemProps'
import { menuHasChildren } from '../menu/menu'
defineProps(menuItemProps())
</script>

<style scoped lang="scss"></style>
