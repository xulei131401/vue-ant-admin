<template>
	<span :class="`${prefixCls}`">
		<AntIcon :name="getIcon" :size="16" />
		<span>{{ item.title }}</span>
	</span>
</template>
<script lang="ts">
export default defineComponent({
	name: 'MenuItemContent',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { AntIcon } from '@/components/icon'
import { usePrefixCls } from '@/composables/core/useHtml'
import { basicMenuItemContentProps } from './menuItemContentProps'
const { prefixCls } = usePrefixCls('basic-menu-item-content')
const props = defineProps(basicMenuItemContentProps())

const getIcon = computed(() => {
	const { item } = props
	return item.icon ?? ''
})
</script>

<style scoped lang="scss"></style>
