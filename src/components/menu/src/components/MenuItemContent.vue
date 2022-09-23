<template>
	<span>
		<AntIcon :name="getIcon" :size="16" />
		<span>{{ item.title }}</span>
	</span>
</template>
<script lang="ts">
export default defineComponent({
	name: 'MenuItemContent'
})
</script>

<script setup lang="ts">
import { AntIcon } from '@/components/icon'
import { basicMenuItemContentProps } from '../typing'
const props = defineProps(basicMenuItemContentProps())

const getIcon = computed(() => {
	const { item } = props
	return item.icon ?? ''
})
</script>

<style scoped lang="scss"></style>
