<template>
	<span :class="`${prefixCls}- flex items-center `">
		{{ item.title }}
		<!-- <Icon v-if="getIcon" :icon="getIcon" :size="18" :class="`${prefixCls}-wrapper__icon mr-2`" /> -->
		<!-- {{ getI18nName }} -->
	</span>
</template>
<script lang="ts">
export default defineComponent({
	name: 'MenuItemContent',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
// import Icon from '@/components/icon'
import { useHtmlClass } from '@/composables/web/useHtmlClass'
import { basicMenuItemContentProps } from './menuItemContentProps'
const { prefixCls } = useHtmlClass('basic-menu-item-content')
const props = defineProps(basicMenuItemContentProps())

// const getI18nName = computed(() => {
// 	return props.item?.name
// })

// const getIcon = computed(() => {
// 	return props.item?.icon
// })
</script>

<style scoped lang="scss"></style>
