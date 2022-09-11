<template>
	<div :class="getTriggerClass" @click.stop="toggleCollapsed">
		<MenuUnfoldOutlined v-if="getCollapsed" />
		<MenuFoldOutlined v-else />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'HeaderTrigger',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { usePrefixCls } from '@/composables/core/useHtml'
import { useMenuConfig } from '@/configs/menu/useMenuConfig'

const { getCollapsed, toggleCollapsed } = useMenuConfig()
const { prefixCls } = usePrefixCls('layout-header-trigger')
const getTriggerClass = computed(() => {
	return [prefixCls]
})
</script>

<style scoped lang="scss">
@import '@/style/layouts/trigger/header-trigger.scss';
</style>
