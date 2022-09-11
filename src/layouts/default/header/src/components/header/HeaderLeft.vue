<template>
	<div :class="getHeaderLeftClass">
		<AppLogo />
		<LayoutTriggerSider />
		<LayoutBreadcrumb />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'XHeaderLeft',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { AppLogo } from '@/components/application'
import { LayoutTriggerSider } from '@/layouts/default/trigger'
import { LayoutBreadcrumb } from '../index'
import { usePrefixCls } from '@/composables/core/useHtml'

const { prefixCls } = usePrefixCls('layout-header-left')
const getHeaderLeftClass = computed(() => {
	return [prefixCls]
})
</script>

<style scoped lang="scss">
@import '@/style/layouts/header/header-left.scss';
</style>
