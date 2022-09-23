<template>
	<div :class="getTriggerClass" @click.stop="onCollapsed">
		<MenuUnfoldOutlined v-if="getCollapsed" />
		<MenuFoldOutlined v-else />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'HeaderTrigger'
})
</script>

<script setup lang="ts">
import { usePrefixCls } from '@/composables/core/useHtml'
import { prefixClsStyle } from '@/style/module'
import { useSiderConfig } from '@/composables/config/useSiderConfig'

const { getCollapsed, onCollapsed } = useSiderConfig()
const { prefixCls } = usePrefixCls(prefixClsStyle.layoutHeaderTrigger)
const getTriggerClass = computed(() => {
	return [prefixCls]
})
</script>

<style scoped lang="scss">
.#{$prefix-cls-layout-header-trigger} {
	display: flex;
	height: 100%;
	padding: 1px 10px 0;
	cursor: pointer;
	align-items: center;

	.anticon {
		font-size: 16px;
	}
}
</style>
