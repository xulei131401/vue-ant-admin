<template>
	<AMenuItem :key="item.uniqueId" v-if="!MenuStatic.hasChildren(item)" :itemData="item">
		<MenuItemContent v-bind="$props" />
	</AMenuItem>
</template>
<script lang="ts">
export default defineComponent({
	name: 'MenuItem'
})
</script>

<script setup lang="ts">
import MenuItemContent from './MenuItemContent.vue'
import { menuItemProps } from '../typing'
import { MenuStatic } from '@/typing'
defineProps(menuItemProps())
</script>

<style scoped lang="scss"></style>
